import { Login } from "./Login";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  
  const params = await searchParams;
  const isMagicLink = params.magicLink === 'yes'
  console.log(isMagicLink)
  
  return (
    <Login isPasswordLogin={!isMagicLink}/>
  )
}
