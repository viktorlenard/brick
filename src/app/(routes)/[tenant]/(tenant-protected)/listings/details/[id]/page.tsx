import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient";
import { SearchParams } from "next/dist/server/request/search-params";
import { getReadableStatus, getReadableFurnished } from "@/app/types/listings";
import { redirect } from "next/navigation";
import { Button } from "@/app/components/Button";
import { ListingDetailsButtons } from "@/app/components/ListingDetailsButtons";

const ListingsDetailsPage = async ({ params, searchParams} : { params: { tenant: string, id: number }, searchParams: SearchParams }) => {
  const { tenant, id } = await params;
  const { page } = await searchParams
  

  const supabase = await getUtilClient();
  const { data: listing, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    redirect("/error?type=listing-not-found");
  }

  const supabase_user_id = (await supabase.auth.getUser()).data.user?.id
  const { data: serviceUser } = await supabase
    .from("service_users")
    .select("id")
    .eq("supabase_user", supabase_user_id)
    .single()
    
  const isAuthor = serviceUser!.id === listing.created_by
  console.log(isAuthor)

  const strongStyle = "font-mono font-bold text-reg md:text-lg";
  const dataStyle = "font-mono text-reg md:text-lg";

  const placeholder = "missing";
  const dateString = new Date(listing.created_at).toLocaleDateString("en-UK");
  const readableStatus = getReadableStatus(listing.status);
  const readableFurnished = getReadableFurnished(listing.is_furnished);

  return (
    <>
      <ListingDetailsButtons isAuthor={isAuthor} id={id} tenant={tenant} page={page}/>
      <div className="grid grid-cols-2 gap-1 flex-col max-w-[700px]">
        <h1 className={strongStyle}>ID:</h1>
        <p className={dataStyle}>{listing.id || placeholder}</p>

        <h1 className={strongStyle}>Created At:</h1>
        <p className={dataStyle}>{dateString || placeholder}</p>

        <h1 className={strongStyle}>Created By:</h1>
        <p className={dataStyle}>{listing.author_name || placeholder}</p>

        <h1 className={strongStyle}>Tenant:</h1>
        <p className={dataStyle}>{listing.tenant || placeholder}</p>

        <h1 className={strongStyle}>Reference Number:</h1>
        <p className={dataStyle}>{listing.reference_nr || placeholder}</p>

        <h1 className={strongStyle}>Status:</h1>
        <p className={dataStyle}>{readableStatus || placeholder}</p>

        <h1 className={strongStyle}>Listing Type:</h1>
        <p className={dataStyle}>{listing.listing_type || placeholder}</p>

        <h1 className={strongStyle}>Price PCM:</h1>
        <p className={dataStyle}>{"£" + listing.price_pcm || placeholder}</p>

        <h1 className={strongStyle}>Deposit:</h1>
        <p className={dataStyle}>{"£" + listing.deposit || placeholder}</p>

        <h1 className={strongStyle}>Bedrooms:</h1>
        <p className={dataStyle}>{listing.bedrooms || placeholder}</p>

        <h1 className={strongStyle}>Bathrooms:</h1>
        <p className={dataStyle}>{listing.bathrooms || placeholder}</p>

        <h1 className={strongStyle}>Size (sqm):</h1>
        <p className={dataStyle}>{listing.size_sqm || placeholder}</p>

        <h1 className={strongStyle}>Furnished:</h1>
        <p className={dataStyle}>{readableFurnished}</p>

        <h1 className={strongStyle}>Min Tenancy Months:</h1>
        <p className={dataStyle}>{listing.min_tenancy_months || placeholder}</p>

        <h1 className={strongStyle}>Available From:</h1>
        <p className={dataStyle}>{listing.available_from || placeholder}</p>

        <h1 className={strongStyle}>Council Tax Band:</h1>
        <p className={dataStyle}>{listing.council_tax_band || placeholder}</p>

        <h1 className={strongStyle}>Heating Type:</h1>
        <p className={dataStyle}>{listing.heating_type || placeholder}</p>

        <h1 className={strongStyle}>Has Garden:</h1>
        <p className={dataStyle}>{listing.has_garden || placeholder}</p>

        <h1 className={strongStyle}>Parking Type:</h1>
        <p className={dataStyle}>{listing.parking_type || placeholder}</p>

        <h1 className={strongStyle}>Allows Pets:</h1>
        <p className={dataStyle}>{listing.allows_pets || placeholder}</p>

        <h1 className={strongStyle}>EPC Rating:</h1>
        <p className={dataStyle}>{listing.epc_rating || placeholder}</p>

        <h1 className={strongStyle}>Description:</h1>
        <p className={dataStyle}>{listing.description || placeholder}</p>

        <h1 className={strongStyle}>Postcode:</h1>
        <p className={dataStyle}>{listing.postcode || placeholder}</p>

        <h1 className={strongStyle}>Building Name:</h1>
        <p className={dataStyle}>{listing.building_name || placeholder}</p>

        <h1 className={strongStyle}>Building Number:</h1>
        <p className={dataStyle}>{listing.building_number || placeholder}</p>

        <h1 className={strongStyle}>Street Line 1:</h1>
        <p className={dataStyle}>{listing.street_line1 || placeholder}</p>

        <h1 className={strongStyle}>Street Line 2:</h1>
        <p className={dataStyle}>{listing.street_line2 || placeholder}</p>

        <h1 className={strongStyle}>Locality:</h1>
        <p className={dataStyle}>{listing.locality || placeholder}</p>

        <h1 className={strongStyle}>Town/City:</h1>
        <p className={dataStyle}>{listing.town_city || placeholder}</p>

        <h1 className={strongStyle}>Country:</h1>
        <p className={dataStyle}>{listing.country || placeholder}</p>

        <h1 className={strongStyle}>Council:</h1>
        <p className={dataStyle}>{listing.council || placeholder}</p>

        <h1 className={strongStyle}>Last Edit:</h1>
        <p className={dataStyle}>{listing.last_edit || placeholder}</p>
      </div>
    </>
  );
};

export default ListingsDetailsPage;
