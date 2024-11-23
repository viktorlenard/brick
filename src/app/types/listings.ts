import { type Database } from "../../../database.types";

const Listing_Status = {
    active: "Active",
    inactive: "Inactive",
    suspended: "Suspended",
    taken: "Taken"
} as const

type ListingStatusKey = keyof typeof Listing_Status;

export function getReadableStatus(key: ListingStatusKey): string {
    return Listing_Status[key];
}

export function getReadableFurnished(is_furnished : boolean | undefined): string | undefined {
    if(is_furnished === false){
        return 'No'
    } else if (is_furnished === true) {
        return 'Yes'
    } else {
        return undefined
    }
}

export type ListingType = Database["public"]["Tables"]["listings"]["Row"]["listing_type"];