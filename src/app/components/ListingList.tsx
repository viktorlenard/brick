import { getUtilClient } from "../utils/supabase/cookiesUtilClient";
import { getReadableStatus } from "../types/listings";
import Link from "next/link";
import { SearchParams } from "next/dist/server/request/search-params";

/**
 * Extracts and validates the page number from the search parameters.
 * 
 * @param {SearchParams} searchParams - The search parameters object containing the page number.
 * @returns {number} - The validated page number. Defaults to 1 if the page number is not a valid positive integer.
 */
const paginate = (searchParams : SearchParams) : number => {
  const page = Number(searchParams.page)
  return Number.isInteger(page) && page > 0 ? page : 1
}

export const ListingList = async ({tenant, params}: { tenant: string | undefined, params: SearchParams }) => {
  
  const searchParams = await params
  const page = paginate(searchParams)
  const searchValue = Array.isArray(searchParams.search) ? searchParams.search[0]?.trim() : searchParams.search?.trim();
  const startingPoint = (page - 1) * 6;

  console.log(searchValue)
  
  const supabase = await getUtilClient();

  let countStatement = supabase
    .from('listings')
    .select('*', {count: 'exact', head: true})
    .eq('tenant', tenant)

  let listingsStatement = supabase
    .from('listings')
    .select()
    .eq('tenant', tenant)
  
  if(searchValue) {
    // Filter for Search value too
    // https://github.com/supabase/postgrest-js/issues/289#issuecomment-1469967210
    const cleanSearchString = searchValue
      .replaceAll('"', "")
      .replaceAll("\\", "")
      .replaceAll("%", "");
    const postgrestSearchValue = '"%' + cleanSearchString + '%"';
    const postgrestFilterString =
      `postcode.ilike.${postgrestSearchValue}` +
      `, description.ilike.${postgrestSearchValue}`;
    countStatement = countStatement.or(postgrestFilterString);
    listingsStatement = listingsStatement.or(postgrestFilterString);
  }
  listingsStatement = listingsStatement
    .order("status", { ascending: true })
    // .order("created_at", { ascending: false })
    .range(startingPoint, startingPoint + 5);
  
  const { count } = await countStatement;
  const { data: listings, error } = await listingsStatement;
  

  if (error && !listings) {
    console.log(error)
    throw new Error("Failed to fetch listings");
  }

  const moreRows = (count ? count : 0) - page * 6 > 0;

  return (
      <div className='flex justify-center'>
        <div>
          <table className='flex flex-col min-h-[300px] justify-start'>
            <thead>
              <tr>
                <th className="px-4 py-1 min-w-40">ID</th>
                <th className="px-4 py-1">Postcode</th>
                <th className="px-4 py-1">Status</th>
                <th className="px-4 py-1">Created by</th>
              </tr>
            </thead>
            <tbody>
              {(listings || []).map((listing) => (
                <tr key={listing.id}>
                  <td className="px-4 py-1 mt-2 bg-dark text-light font-mono text-bold rounded-sm">
                    <Link href={{pathname: `/${tenant}/listings/details/${listing.id}`, query: { page }}}>
                      {'Listing id:' + listing.id}
                    </Link>
                  </td>
                  <td className="px-4 py-1 mt-2">{listing.postcode}</td>
                  <td className="px-4 py-1 mt-2">{getReadableStatus(listing.status)}</td>
                  <td className="px-4 py-1 mt-2">{listing.author_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex min-w-full justify-center mt-8'>
              <div className="grid grid-cols-2 mr-2">
                <div className="w-36 flex justify-center cursor:pointer hover:underline">
                  {page > 1 && (
                    <Link role="button" href={{ query: {page: page - 1, r: Math.random()}, search: searchValue }}>Previous Page</Link>
                  )}
                </div>
                <div className="w-36 ml-2 flex justify-center cursor:pointer hover:underline">  
                  {moreRows && (
                    <Link role="button" href={{ query: {page: page + 1, r: Math.random()}, search: searchValue }}>Next Page</Link>
                  )}
                </div>
              </div>
          </div>
          <div className='flex justify-center mt-4 font-mono font-bold text-sm'>
            <p>{"Total results: " + count}</p>
          </div>
        </div>
    </div>
  );
};
