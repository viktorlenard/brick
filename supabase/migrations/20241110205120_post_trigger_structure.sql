set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_service_user_to_business()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
    UPDATE service_users
    SET supabase_user = 'business'
    WHERE id = NEW.service_user;
    RETURN NEW;
END;$function$
;

create policy "access own user data"
on "public"."service_users"
as permissive
for select
to authenticated
using ((supabase_user = auth.uid()));


create policy "allow reading own permissions"
on "public"."tenant_permissions"
as permissive
for select
to authenticated
using ((EXISTS ( SELECT
   FROM service_users su
  WHERE ((su.id = tenant_permissions.service_user) AND (su.supabase_user = auth.uid()) AND (su.user_type = 'business'::user_type)))));


create policy "can read tenant if has permission"
on "public"."tenants"
as permissive
for select
to authenticated
using (COALESCE((((auth.jwt() -> 'app_metadata'::text) -> 'tenants'::text) ? id), false));


CREATE TRIGGER update_supabase_user AFTER INSERT OR UPDATE ON public.tenant_permissions FOR EACH STATEMENT EXECUTE FUNCTION update_service_user_to_business();


