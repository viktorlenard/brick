import Link from "next/link"

export type Listing = {
    id: number,
    title: string,
    status: string,
    contact: string
}

type ListingListProps = {
    listings: Listing[]
}

export const ListingsList = ({ listings }: ListingListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {listings.map((listing: Listing) => (
                    <tr key={listing.id}>
                        <td>{listing.id}</td>
                        <td><Link href={`/listings/details/${listing.id}`}>{listing.title}</Link></td>
                        <td>{listing.status}</td>
                        <td>{listing.contact}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}