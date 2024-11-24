create type "public"."council_tax_band" as enum ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

create type "public"."epc_rating" as enum ('a', 'b', 'c', 'd', 'e', 'f', 'g');

create type "public"."heating_type" as enum ('gas_boiler', 'electric_space', 'electric_boiler', 'electric_floor', 'heat_pump', 'hvac');

create type "public"."listing_status" as enum ('active', 'inactive', 'suspended', 'taken');

create type "public"."listing_type" as enum ('rental', 'freehold', 'leasehold');

create type "public"."parking_type" as enum ('street', 'driveway', 'garage');

drop trigger if exists "update_supabase_user" on "public"."tenant_permissions";

drop function if exists "public"."update_service_user_to_business"();

create table "public"."listings" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by" bigint,
    "tenant" text not null,
    "reference_nr" integer generated by default as identity not null,
    "status" listing_status not null default 'inactive'::listing_status,
    "listing_type" listing_type not null,
    "price_pcm" numeric,
    "deposit" numeric,
    "bedrooms" smallint,
    "bathrooms" smallint,
    "size_sqm" numeric,
    "is_furnished" boolean,
    "min_tenancy_months" smallint,
    "available_from" date,
    "council_tax_band" council_tax_band,
    "heating_type" heating_type,
    "has_garden" boolean,
    "parking_type" parking_type,
    "allows_pets" boolean,
    "epc_rating" epc_rating,
    "description" text,
    "postcode" character varying not null,
    "building_name" character varying,
    "building_number" character varying,
    "street_line1" character varying,
    "street_line2" character varying,
    "locality" character varying,
    "town_city" character varying,
    "country" character varying,
    "council" character varying,
    "last_edit" timestamp with time zone not null default now()
);


alter table "public"."listings" enable row level security;

CREATE UNIQUE INDEX listings_pkey ON public.listings USING btree (id);

CREATE UNIQUE INDEX listings_reference_nr_key ON public.listings USING btree (reference_nr);

alter table "public"."listings" add constraint "listings_pkey" PRIMARY KEY using index "listings_pkey";

alter table "public"."listings" add constraint "listings_created_by_fkey" FOREIGN KEY (created_by) REFERENCES service_users(id) ON DELETE SET NULL not valid;

alter table "public"."listings" validate constraint "listings_created_by_fkey";

alter table "public"."listings" add constraint "listings_reference_nr_key" UNIQUE using index "listings_reference_nr_key";

alter table "public"."listings" add constraint "listings_tenant_fkey" FOREIGN KEY (tenant) REFERENCES tenants(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."listings" validate constraint "listings_tenant_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.set_created_by_value()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
  NEW.created_by = (SELECT id FROM service_users WHERE supabase_user = auth.uid());
  RETURN NEW;
END;$function$
;

grant delete on table "public"."listings" to "anon";

grant insert on table "public"."listings" to "anon";

grant references on table "public"."listings" to "anon";

grant select on table "public"."listings" to "anon";

grant trigger on table "public"."listings" to "anon";

grant truncate on table "public"."listings" to "anon";

grant update on table "public"."listings" to "anon";

grant delete on table "public"."listings" to "authenticated";

grant insert on table "public"."listings" to "authenticated";

grant references on table "public"."listings" to "authenticated";

grant select on table "public"."listings" to "authenticated";

grant trigger on table "public"."listings" to "authenticated";

grant truncate on table "public"."listings" to "authenticated";

grant update on table "public"."listings" to "authenticated";

grant delete on table "public"."listings" to "service_role";

grant insert on table "public"."listings" to "service_role";

grant references on table "public"."listings" to "service_role";

grant select on table "public"."listings" to "service_role";

grant trigger on table "public"."listings" to "service_role";

grant truncate on table "public"."listings" to "service_role";

grant update on table "public"."listings" to "service_role";

create policy "allow inserting a listing to allowed tenants"
on "public"."listings"
as permissive
for insert
to authenticated
with check (COALESCE((((auth.jwt() -> 'app_metadata'::text) -> 'tenants'::text) ? tenant), false));


create policy "allow reading listings of allowed tenant"
on "public"."listings"
as permissive
for select
to authenticated
using (COALESCE((((auth.jwt() -> 'app_metadata'::text) -> 'tenants'::text) ? tenant), false));


CREATE TRIGGER tr_listings_autoset_created_by BEFORE INSERT ON public.listings FOR EACH ROW EXECUTE FUNCTION set_created_by_value();

