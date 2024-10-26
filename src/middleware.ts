import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    
    const { supabase, response } = getReqResClient({request})
    
    return response.value
}