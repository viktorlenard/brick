"use client";

import { useEffect } from "react";
import { getClient } from "./utils/supabase/browserClient";

import { Login } from "./components/Login";

export default function Home() {
  
  // Testing Supabase connection
  useEffect(() => {
    const supabase = getClient();
    supabase.storage
      .listBuckets()
      .then((result) => console.log("Bucket List", result));
  }, []);

  return (
    <Login />
  )
}
