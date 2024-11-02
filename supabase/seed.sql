SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '12c044a6-1f44-4551-91ee-20b75c5dd48b', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"1@2.com","user_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","user_phone":""}}', '2024-10-27 16:05:18.973898+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a7e418a-ea17-407a-9519-2522df47c20b', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"2@2.com","user_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","user_phone":""}}', '2024-10-27 16:05:36.63002+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd416d43a-0694-4e58-a519-e746949125ab', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 16:26:06.671357+00', ''),
	('00000000-0000-0000-0000-000000000000', '829d5c42-17f3-46bd-9311-96291a86fb1e', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 16:33:27.229873+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aaa4b800-6dd2-463b-a668-db48bc24813c', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 16:39:28.001956+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de50293b-f170-489c-96ed-4daa784dfc21', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 17:01:41.839407+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5b70948-bd64-4bc8-8c4b-eb62455104de', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 17:08:07.918418+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ded0d439-4e34-4c12-86ec-b77bc48019e8', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 17:10:18.239139+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd669edca-f5f2-46b9-8c77-a08706652da4', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 17:10:20.332108+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee3e8730-0553-44e3-b4e0-721d4886a853', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 17:17:15.666535+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fa5026cf-d803-45c3-a550-20534e84572c', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 17:17:17.578968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de1c008d-eaee-41b2-82d5-b2e466b60555', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 17:31:47.417541+00', ''),
	('00000000-0000-0000-0000-000000000000', '4488ba07-1b99-4dff-8b18-09c0caee6efb', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 17:32:09.226363+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b6dc4b0-f19d-4613-b917-9d41272b0e7c', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 17:33:47.685975+00', ''),
	('00000000-0000-0000-0000-000000000000', '5dfa7896-a95f-40f4-9702-a8b9e5219986', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 17:33:54.855858+00', ''),
	('00000000-0000-0000-0000-000000000000', '6411d236-8a58-47b4-818b-11dd6d30b0b7', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 18:40:34.179387+00', ''),
	('00000000-0000-0000-0000-000000000000', '4a2feafd-8e29-45fd-8b32-7b09dd9f74fd', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 18:40:39.554958+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de0ee00b-a4cf-4764-9b81-38fb1176331e', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:00:18.422274+00', ''),
	('00000000-0000-0000-0000-000000000000', '182d9ac5-f2cf-467d-9efa-433d3907f390', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:00:38.002312+00', ''),
	('00000000-0000-0000-0000-000000000000', '37489192-47b8-4d0e-96f7-7358ba77e250', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:03:31.102521+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f119ad5c-dc00-4b58-9bb6-26b8c1bcbdeb', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:04:42.447828+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c786e2a5-3013-4a81-8fc8-a4c12647c93a', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:05:19.647491+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c16f8115-c65a-4a84-979e-703939d02a95', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:05:44.244239+00', ''),
	('00000000-0000-0000-0000-000000000000', '3d09ec9d-8357-4f80-a3b7-9ef67301e8fb', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:05:46.932547+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd41f17a-fb5d-49be-8d42-20fad039cb40', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:08:27.71483+00', ''),
	('00000000-0000-0000-0000-000000000000', '568b26a2-3d36-4554-abd2-818386c4759e', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:12:04.520894+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e9c03d7-859f-4f78-9811-c6561f06c122', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:12:32.460713+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb201bca-6d77-4a5b-a00c-2559b9f45024', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:12:41.901343+00', ''),
	('00000000-0000-0000-0000-000000000000', '4a8497d0-2e7a-49e6-8aa7-d24426fd3c3a', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:14:14.880227+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e20b341-b718-421d-961f-c67f2f686528', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:18:07.45237+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb40cd9b-675c-45d8-96dd-1021f8f6c152', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:21:34.050559+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2bfec50-521a-4490-b4bf-dcc3fd6cced8', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:24:05.141844+00', ''),
	('00000000-0000-0000-0000-000000000000', '196e978c-5687-4705-81a9-cd05bf522a6e', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:27:59.426796+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b75ed920-038a-4445-b0f1-d489aa873bc0', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:28:41.425662+00', ''),
	('00000000-0000-0000-0000-000000000000', '056d7a5f-c99c-4ff9-97b3-00847cccb1af', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:40:27.396293+00', ''),
	('00000000-0000-0000-0000-000000000000', '9f9f0170-7144-4179-b0e7-41dc029650f3', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:43:41.138165+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d4f682b-1655-42fe-b6f8-14f3a1fd567b', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:43:51.149824+00', ''),
	('00000000-0000-0000-0000-000000000000', '1768dccc-f988-4344-95f6-d3701214d2df', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:44:10.857708+00', ''),
	('00000000-0000-0000-0000-000000000000', '082485fd-a0b2-4d6a-9708-6485b53df17c', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:44:23.991251+00', ''),
	('00000000-0000-0000-0000-000000000000', '773e880f-8748-461c-97d7-ca77a723eed1', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:47:59.480297+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d980087-9e0c-44cd-8ec6-8e34a617cbae', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 19:57:09.90711+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2932263-550a-4b21-8efc-227fb907ff93', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 19:57:57.219106+00', ''),
	('00000000-0000-0000-0000-000000000000', '189a7f9a-1aa4-4925-819b-4ffcc8c0010e', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 20:09:19.509211+00', ''),
	('00000000-0000-0000-0000-000000000000', '500259bb-2a23-4fb4-addf-df258c8b1510', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 20:17:36.950475+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba239694-8413-4730-9224-0ebf021b6064', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 20:18:29.768935+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa9d1298-2844-4d8e-b27b-f00ea1f88cd3', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 20:23:59.385058+00', ''),
	('00000000-0000-0000-0000-000000000000', '8970dec3-4531-4717-af9a-453d8572f306', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 20:24:07.313039+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0e83249-886c-45b1-8dd8-55c06c375f01', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-27 20:32:00.824634+00', ''),
	('00000000-0000-0000-0000-000000000000', '53e9142b-103b-417b-9437-65f7f4e1b8f1', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-27 20:32:44.647784+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac66235b-12aa-4f51-88ad-0089b4bdd207', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 20:11:58.525034+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cb7260c-d0a2-4481-8a81-af42ac9a338e', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 20:12:10.012804+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd0aab6e-c60b-4b08-9900-c829bcdd7b6e', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 21:57:32.191811+00', ''),
	('00000000-0000-0000-0000-000000000000', '886c1dbb-2794-411a-8aff-c1deed3e127a', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 21:59:17.966269+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f29b34f7-f436-4041-bf66-86cf5a5c1460', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 21:59:26.97729+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e5ed6cb-69b5-485b-ad1f-56c114bbdf7f', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 21:59:43.499193+00', ''),
	('00000000-0000-0000-0000-000000000000', '06b6bbd2-d2c9-478d-b037-0e466b153aef', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 21:59:49.204824+00', ''),
	('00000000-0000-0000-0000-000000000000', '72ebf5eb-9f7c-4662-89ce-554a96cd8cea', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 21:59:51.644409+00', ''),
	('00000000-0000-0000-0000-000000000000', '25a390d9-dacc-43b4-b12a-6102552419ed', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 22:20:24.905287+00', ''),
	('00000000-0000-0000-0000-000000000000', '05301e53-2f11-47d5-8de1-93aeff1847e0', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 22:20:34.63681+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ed77d54-3d43-49a1-869f-be4cd12b12b4', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 22:40:58.363792+00', ''),
	('00000000-0000-0000-0000-000000000000', '7539eb24-9992-44e2-a156-603c62e65379', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 22:41:03.343191+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8bb7383-23ca-4c42-982c-5461d6c7c0fd', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 23:44:28.214838+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab758a03-89b8-4895-9494-ecea3da38f38', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 23:44:30.298338+00', ''),
	('00000000-0000-0000-0000-000000000000', '023eec5c-a1cf-4745-9783-732b33a8c4c7', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-28 23:45:14.532901+00', ''),
	('00000000-0000-0000-0000-000000000000', '58676230-2182-4c07-90fd-1e81341062c8', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-28 23:45:20.113005+00', ''),
	('00000000-0000-0000-0000-000000000000', '14bc26f9-d2cf-4b3e-be64-473b24f99f1f', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-29 20:05:06.669607+00', ''),
	('00000000-0000-0000-0000-000000000000', '4dcc1870-2300-4956-901f-248d6e35b631', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 20:05:08.794021+00', ''),
	('00000000-0000-0000-0000-000000000000', '0acd5036-cc75-407a-8d69-3a36c2ae81bd', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-29 21:44:17.030378+00', ''),
	('00000000-0000-0000-0000-000000000000', '667202ad-9ee7-473b-a6a1-c499997b1235', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 21:44:19.140875+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f4a6977-2bb9-43dd-a5ac-5628d89dda8c', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:02:39.997466+00', ''),
	('00000000-0000-0000-0000-000000000000', '71ebb17f-110c-401a-bd3b-d7e4aaa2a2dc', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:03:19.65408+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f37a82b2-3a5a-4ab9-8924-74374b73da82', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:04:35.587147+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf746511-8930-42ab-a23b-4ade8c0a3b1c', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:08:03.755887+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fdd1221a-02da-49fa-85c1-b80237e4d917', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:08:11.659202+00', ''),
	('00000000-0000-0000-0000-000000000000', '5cdaf8a7-ea02-4b58-a9b0-b603c921602b', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:09:45.868476+00', ''),
	('00000000-0000-0000-0000-000000000000', 'adee7cd1-83a6-4a38-802b-66f47eef3980', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 22:10:19.742952+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb62c302-32bf-444b-a148-a51c8b58a32d', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:11:44.369643+00', ''),
	('00000000-0000-0000-0000-000000000000', '94408763-4c0e-4f87-b750-74affa6c3058', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 22:11:53.973793+00', ''),
	('00000000-0000-0000-0000-000000000000', '98096cd0-0047-4f9a-a7fd-620ae48f4271', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2024-10-29 22:11:54.20263+00', ''),
	('00000000-0000-0000-0000-000000000000', '4d138937-b300-49ae-8136-d548f12ef662', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 22:13:47.041417+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e7bc040e-4116-4612-8617-96659b481f6a', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 22:13:58.283722+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f00158a1-3235-478d-b643-4a4454170446', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 22:14:09.738572+00', ''),
	('00000000-0000-0000-0000-000000000000', '79f7ea86-0ddd-4065-ba7f-e98fcdc09fef', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2024-10-29 22:14:09.987821+00', ''),
	('00000000-0000-0000-0000-000000000000', '30d4b132-44e2-474a-b8cb-3e9d5d07c7e6', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 22:17:47.38922+00', ''),
	('00000000-0000-0000-0000-000000000000', '08b0c761-948c-4d24-8d3a-6a73da935ebf', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:14:10.580062+00', ''),
	('00000000-0000-0000-0000-000000000000', '7434d513-9e6f-44b8-9f26-f0d4038e621a', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:14:17.65758+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a139890-1247-4f0f-9066-3fa4cc7a20af', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:16:30.768694+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ab68009-264c-4256-a2dd-fd7b34a471ae', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:16:34.655218+00', ''),
	('00000000-0000-0000-0000-000000000000', '00231c51-599d-46e5-b496-38c2e52a7f85', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:21:20.0421+00', ''),
	('00000000-0000-0000-0000-000000000000', '03f70d6f-0aa2-45f5-818b-38470ab87a6d', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:21:29.411002+00', ''),
	('00000000-0000-0000-0000-000000000000', 'adff3b8b-b69a-4be9-8d71-eb2b5a21c49c', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:28:17.469206+00', ''),
	('00000000-0000-0000-0000-000000000000', '15aaa705-66e7-46a6-9c81-03babcfcdceb', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:28:57.670249+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c6673c14-8776-4499-93f9-4d75f71f89dc', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-29 23:30:00.888848+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e73faf9-5117-4e10-922d-048ee8d6ab88', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 23:34:17.886776+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b02ade28-6e6c-4949-9401-cfee3120700e', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-29 23:34:21.111793+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad808cd5-e6c2-4a15-9c55-0852b32789d8', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 21:31:43.737696+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd1472642-9e9d-414d-8534-18c8144e150c', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 21:31:51.300525+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ad8daaf-2090-4c01-8414-52204628b215', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 21:31:58.523445+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab7ee077-8285-4be3-93bc-12950b900580', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 21:32:25.310199+00', ''),
	('00000000-0000-0000-0000-000000000000', '78fd6d63-36f3-4e46-b148-b9cd8dd0ca23', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 21:32:27.758522+00', ''),
	('00000000-0000-0000-0000-000000000000', '29af9d43-f0fa-4726-a577-93ee85b5cbec', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 21:33:00.351168+00', ''),
	('00000000-0000-0000-0000-000000000000', '614e4c87-1bb7-444a-8711-98c7685492c3', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 21:33:22.213349+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aca34883-e3c7-4b69-a15a-653299c1cc8f', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 21:33:27.248602+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8c7ebb4-d9e3-4aea-bad1-05375140d610', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 21:33:32.535878+00', ''),
	('00000000-0000-0000-0000-000000000000', '841e5492-173f-4f89-a63c-89771f1c18ea', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:22:23.92915+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ecfb60ee-3f27-4eb1-bd3f-b39c139b4402', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:22:59.211626+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af79d91c-0758-4bc1-9a72-054de4dc7ef2', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:23:30.115883+00', ''),
	('00000000-0000-0000-0000-000000000000', '0eb755fe-6d4d-4e48-9f78-8e72e0eafcf9', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:26:35.156442+00', ''),
	('00000000-0000-0000-0000-000000000000', '77269895-20a8-43f3-b31f-589ee6eef365', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:27:49.127172+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1ec73ed-a45c-4c77-a4a1-ac1562026ff4', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:29:21.040291+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c4c14567-9c6b-446c-8ec3-5345f8c84fe1', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:34:05.990191+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1890848-b000-447b-a85c-28c55ff64951', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:46:49.248906+00', ''),
	('00000000-0000-0000-0000-000000000000', '422cf0ea-e41d-4da3-9ee4-fdcbdd84001b', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 22:47:07.624859+00', ''),
	('00000000-0000-0000-0000-000000000000', '91a79cf7-0152-421e-b913-652152085741', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 22:47:13.328423+00', ''),
	('00000000-0000-0000-0000-000000000000', '786e1876-e107-4112-ab89-badac45d589f', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:47:28.564051+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c73d1a2e-3825-45c0-8632-ffbe7bca7d26', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 22:47:46.676405+00', ''),
	('00000000-0000-0000-0000-000000000000', '479ef440-55a5-40c6-87bf-a49becaf5fe2', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 22:51:58.131204+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a51a6505-8780-43aa-8dd3-5f9995b226dc', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:52:08.315991+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a06d23a-6d74-4890-9c59-ddefc51f05da', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:57:31.956087+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fea5496-acf9-4bb5-a03e-fc55e331d65f', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 22:58:13.819744+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b66afc5b-5b72-44e7-978b-d56af470de85', '{"action":"user_recovery_requested","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:14:38.580925+00', ''),
	('00000000-0000-0000-0000-000000000000', '64773db5-48b9-47e7-873a-f3658e336c33', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:14:50.535012+00', ''),
	('00000000-0000-0000-0000-000000000000', '77eacdff-c22e-430e-b13f-19672afa5fac', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:16:29.074516+00', ''),
	('00000000-0000-0000-0000-000000000000', 'afc71242-b430-4d70-a811-4173a244b66d', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:17:00.255623+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd658d27e-ec3d-45c2-8075-a2a49ab9f021', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:17:11.039192+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f68ed749-4b21-4585-b920-05e1777b07b7', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:39:08.479772+00', ''),
	('00000000-0000-0000-0000-000000000000', '611cfac8-968e-4c38-a4e8-471267e764ad', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:39:20.505884+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c67dc3ab-af3e-422a-89ee-da962efb0d57', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:39:33.087239+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e21ebca-6d89-4e73-9c68-3f1f73c7934a', '{"action":"user_updated_password","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:40:00.873928+00', ''),
	('00000000-0000-0000-0000-000000000000', '70331c3e-3e90-465c-a48e-a7761089f002', '{"action":"user_modified","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:40:00.874269+00', ''),
	('00000000-0000-0000-0000-000000000000', '460d4505-9252-4de0-a549-7a12e2f9864a', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:40:08.297076+00', ''),
	('00000000-0000-0000-0000-000000000000', '6b9248f8-c0e3-4b52-9d5c-8c20badc7c81', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:40:17.18385+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e897373-002d-4a5b-840c-333c5e5cbe6d', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:40:24.34846+00', ''),
	('00000000-0000-0000-0000-000000000000', '967d01b1-d00b-42b2-ba73-71d0c4229e8b', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:47:24.591887+00', ''),
	('00000000-0000-0000-0000-000000000000', '75c40084-0758-4c29-a1aa-aa7a0984489c', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:47:34.621867+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e314986b-add4-4219-b837-d29fbc200950', '{"action":"user_updated_password","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:47:44.541636+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4ef7ce0-3712-47ae-8e71-0daa9b7d8c09', '{"action":"user_modified","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:47:44.542012+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b03e4353-cf6a-45eb-9f19-a7ff63f7d15b', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:48:26.523232+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a1751df-7e7f-4f8e-a01c-feee72b09f0f', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:48:33.393674+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b97d09d-d1fc-49f4-b470-b173c2564771', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:50:48.660489+00', ''),
	('00000000-0000-0000-0000-000000000000', '87e5274f-9edd-43ed-8d1b-85edc31733da', '{"action":"user_recovery_requested","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:50:58.777195+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b539353-37d6-454b-a656-5f5b23dac528', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:51:11.74237+00', ''),
	('00000000-0000-0000-0000-000000000000', '535fe96d-023c-4287-b7be-53b3320e677d', '{"action":"user_updated_password","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:51:23.264181+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eab24ef4-f124-45fd-b428-5e826d822074', '{"action":"user_modified","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:51:23.264542+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aeabaf8d-fb4c-4765-87b2-bfee78eb684c', '{"action":"user_updated_password","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:52:01.48371+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e967a0ae-9fb7-4635-a55e-1e452b50b001', '{"action":"user_modified","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:52:01.484084+00', ''),
	('00000000-0000-0000-0000-000000000000', '81483dce-3d0f-476f-96d8-2a87aee43a22', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:52:08.168545+00', ''),
	('00000000-0000-0000-0000-000000000000', '70cd7e00-3b43-4d71-93c0-a897cb282073', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:52:14.943412+00', ''),
	('00000000-0000-0000-0000-000000000000', '6945242d-0285-4905-a64a-3b2d51ef90de', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:53:45.031259+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b248477-9703-4053-8475-f022fbc03083', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:54:10.551584+00', ''),
	('00000000-0000-0000-0000-000000000000', '308df7b9-68ed-4137-8a71-f4ee9ea71666', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:55:10.009453+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a35b34b-b74e-45c1-9620-3da683ead7f9', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:55:41.706425+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2d3f643-3549-4132-957e-99f2d4bf434b', '{"action":"user_updated_password","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:56:16.611588+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cd41089-28a8-4110-8fc2-3e822fb94f31', '{"action":"user_modified","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"user"}', '2024-10-30 23:56:16.612068+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bfe4f960-f69c-46a4-8ef9-4aa682305bcb', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:56:21.355581+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e89897d-9c7d-42f9-93b0-d7a231cf2e4e', '{"action":"login","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-30 23:56:27.369388+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4ac9030-7368-410e-bc09-18fe51de6292', '{"action":"logout","actor_id":"8d44df12-5ae2-4cfb-8110-5f2a076a049c","actor_username":"2@2.com","actor_via_sso":false,"log_type":"account"}', '2024-10-30 23:56:33.761495+00', ''),
	('00000000-0000-0000-0000-000000000000', '4a781203-0ed8-4adb-bb1c-8642de6d9172', '{"action":"login","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-11-02 10:41:47.592642+00', ''),
	('00000000-0000-0000-0000-000000000000', '3097ecc9-0525-4acb-b393-9a2aab5eb62a', '{"action":"logout","actor_id":"66f240f9-30d1-49ca-bc6c-a2e6872a531a","actor_username":"1@2.com","actor_via_sso":false,"log_type":"account"}', '2024-11-02 10:41:50.342186+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('66d7c57f-9898-459c-8e2f-d1605831d4fa', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'c13f9b61-8958-4875-adba-f45e76837a2f', 's256', 'xTVL_HtdJiGvBFDM9j31lagFPwd8iMm0vLXrL3E8Z6U', 'magiclink', '', '', '2024-10-29 22:02:39.99339+00', '2024-10-29 22:02:39.99339+00', 'magiclink', NULL),
	('9ad5e13a-cefd-4393-b6b6-5be50e846452', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'd91effd9-3fd7-44c1-816a-5549332832bc', 's256', 'TSM6DnvtnnsjNgmpsmhERXkEa3Lwb7gTqyxZ8iPovj4', 'magiclink', '', '', '2024-10-29 22:03:19.652405+00', '2024-10-29 22:03:19.652405+00', 'magiclink', NULL),
	('d755aca1-ef22-4c24-b1e7-31e898cd135f', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', '13623ce3-f672-4cd2-bcdb-ad14cfd7ea9c', 's256', 'EIxI15DaiAINOhwiswPHFbC23uWeoxxkGvEMSH7za74', 'magiclink', '', '', '2024-10-29 22:04:35.585816+00', '2024-10-29 22:04:35.585816+00', 'magiclink', NULL),
	('0ab36292-b2ca-480c-b19e-297c78e50266', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'ddd4a612-9b7b-43f6-90df-c7415cdb34c0', 's256', 'Pal10Kk4y3Kcvmo88u5gWHZ2968K4RxtJZXnlGUXIxk', 'magiclink', '', '', '2024-10-29 22:08:03.752656+00', '2024-10-29 22:08:03.752656+00', 'magiclink', NULL),
	('51af5507-1cfb-40f2-88f1-811a300e215e', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', '762edf07-f9f3-4486-8edb-c556ef355e41', 's256', '7u8zem6MokdFCa5D_4D2uqkNdrAC6_w33bu4IqFbSts', 'magiclink', '', '', '2024-10-29 22:08:11.658322+00', '2024-10-29 22:08:11.658322+00', 'magiclink', NULL),
	('1f369dfc-a681-4474-ae18-aac2c3dc665c', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'f6bdc91d-92a8-44ff-aba7-0ca4d44110fb', 's256', 'Kno8E1Pc_uhk6saPqAxnpHc-Gql16zLGmitU7RWrUsI', 'magiclink', '', '', '2024-10-29 22:09:45.867334+00', '2024-10-29 22:10:19.744653+00', 'magiclink', '2024-10-29 22:10:19.744638+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '8d44df12-5ae2-4cfb-8110-5f2a076a049c', 'authenticated', 'authenticated', '2@2.com', '$2a$10$JQb4M.MswDxmxzSgHHVkpuPZLb2OFSkcKImJTWOje7Kc975ZkoLya', '2024-10-27 16:05:36.630596+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-10-30 23:56:27.369881+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-10-27 16:05:36.628695+00', '2024-10-30 23:56:27.370878+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'authenticated', 'authenticated', '1@2.com', '$2a$10$o0ROqp5z5qyZCD0RwBuVFeXnrSUfxMqzBnSoyRr/GaCgqI914g/ge', '2024-10-27 16:05:18.974805+00', NULL, '', NULL, '', '2024-10-30 23:14:38.580781+00', '', '', NULL, '2024-11-02 10:41:47.593337+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-10-27 16:05:18.970117+00', '2024-11-02 10:41:47.594884+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1', 'authenticated', 'authenticated', '3@2.com', '$2a$10$8WXqimw.evZa5QRQf.NDLevyLqczr6uyI6ZlZB3f/kT6V/rD0uBC2', NULL, NULL, '50da9d184c72d61333c9636fd0eb5ebe016bed18a2ca4ca10e7e8808', '2024-10-29 23:12:24.844968+00', '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-10-29 23:12:24.920322+00', '2024-10-29 23:12:24.924201+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('66f240f9-30d1-49ca-bc6c-a2e6872a531a', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', '{"sub": "66f240f9-30d1-49ca-bc6c-a2e6872a531a", "email": "1@2.com", "email_verified": false, "phone_verified": false}', 'email', '2024-10-27 16:05:18.973221+00', '2024-10-27 16:05:18.973246+00', '2024-10-27 16:05:18.973246+00', '7289b72d-fdc4-44c5-9f09-a15e63b7d071'),
	('8d44df12-5ae2-4cfb-8110-5f2a076a049c', '8d44df12-5ae2-4cfb-8110-5f2a076a049c', '{"sub": "8d44df12-5ae2-4cfb-8110-5f2a076a049c", "email": "2@2.com", "email_verified": false, "phone_verified": false}', 'email', '2024-10-27 16:05:36.629479+00', '2024-10-27 16:05:36.629498+00', '2024-10-27 16:05:36.629498+00', 'dcc0cceb-6732-44f1-96f4-3c7e72d4e475'),
	('7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1', '7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1', '{"sub": "7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1", "email": "3@2.com", "email_verified": false, "phone_verified": false}', 'email', '2024-10-29 23:12:24.923114+00', '2024-10-29 23:12:24.923138+00', '2024-10-29 23:12:24.923138+00', '52880753-97ab-413f-8ed1-7b5c02dfdc55');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") VALUES
	('cc0dda2e-e1e7-4197-a7ab-08333ea31067', '7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1', 'confirmation_token', '50da9d184c72d61333c9636fd0eb5ebe016bed18a2ca4ca10e7e8808', '3@2.com', '2024-10-29 23:12:24.925151', '2024-10-29 23:12:24.925151');


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: service_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."service_users" ("id", "created_at", "full_name", "supabase_user", "user_type") VALUES
	(3, '2024-11-02 13:45:31.66277+00', 'Automatic User', '7f58d9c6-d990-4e7f-94eb-bb04f4ce41d1', 'business'),
	(2, '2024-11-02 13:45:15.589257+00', 'Test User 2', '8d44df12-5ae2-4cfb-8110-5f2a076a049c', 'business'),
	(1, '2024-11-02 13:44:55.632099+00', 'Viktor Lenard', '66f240f9-30d1-49ca-bc6c-a2e6872a531a', 'business');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('smiths', '2024-11-02 12:02:55.266013+00', 'Smith''s Lettings', 'smiths.com'),
	('foxtons', '2024-11-02 12:03:52.244334+00', 'Foxtons', 'foxtons.com'),
	('merton', '2024-11-02 12:04:49.389343+00', 'Merton Housing', 'merton.com'),
	('packt', '2024-11-02 12:05:38.106908+00', 'Packt Housing', 'packt.com');


--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "service_user", "tenant") VALUES
	(1, '2024-11-02 13:54:05.630589+00', 1, 'packt'),
	(2, '2024-11-02 13:54:17.264915+00', 1, 'merton');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 59, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: service_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."service_users_id_seq"', 3, true);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
