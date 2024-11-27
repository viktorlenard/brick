alter type "public"."parking_type" rename to "parking_type__old_version_to_be_dropped";

create type "public"."parking_type" as enum ('street', 'driveway', 'garage', 'none');

alter table "public"."listings" alter column parking_type type "public"."parking_type" using parking_type::text::"public"."parking_type";

drop type "public"."parking_type__old_version_to_be_dropped";

alter table "public"."listings" add column "author_name" text not null;

alter table "public"."listings" alter column "postcode" set data type text using "postcode"::text;

alter table "public"."service_users" add column "job_title" text;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_tenant_userlist(tenant_id text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$DECLARE
has_access bool;

BEGIN
  has_access = (EXISTS (SELECT FROM service_users s, tenant_permissions p WHERE s.supabase_user = auth.uid()
      AND s.id = p.service_user
      AND p.tenant = tenant_id));

  IF (has_access != true) THEN
    RAISE EXCEPTION 'no access to the data';
  END IF;

  RETURN (
    SELECT jsonb_agg(sub) FROM (
    SELECT s.id, s.full_name, s.job_title
    FROM service_users s, tenant_permissions p
    WHERE s.id = p.service_user AND p.tenant = tenant_id) sub
  );
END;$function$
;

CREATE OR REPLACE FUNCTION public.set_listing_author_name()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
  NEW.author_name = (SELECT full_name FROM service_users WHERE 
    supabase_user = auth.uid());
  RETURN NEW;
END;$function$
;

create policy "allow deletion of own listings"
on "public"."listings"
as permissive
for delete
to authenticated
using ((EXISTS ( SELECT
   FROM service_users
  WHERE ((service_users.id = listings.created_by) AND (service_users.supabase_user = auth.uid())))));


CREATE TRIGGER tr_listings_autoset_author_name BEFORE INSERT ON public.listings FOR EACH ROW EXECUTE FUNCTION set_listing_author_name();


