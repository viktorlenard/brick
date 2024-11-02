import { Login } from "./Login";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  
  const params = await searchParams;
  const isMagicLink = params.magicLink === 'yes'
  
  return (
    <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
      <Login isPasswordLogin={!isMagicLink}/>
    </div>
  )
}
