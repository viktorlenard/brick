import Link from "next/link";

import { Listing, ListingsList } from "./ListingsList";

const dummyListings : Listing[] = [
    {
      id: 1,
      title: "Flat1",
      status: "Available",
      contact: "David",
    },
    {
      id: 2,
      title: "Big House",
      status: "Under offer",
      contact: "David",
    },
    {
      id: 3,
      title: "Small house",
      status: "Available",
      contact: "David",
    },
];

export const ListingsPage = () => {

    const id = 1

    return(
        <div>
            Listings will go here.
            <ListingsList listings={dummyListings} />
        </div>
    )
}

export default ListingsPage