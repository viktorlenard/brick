import { Login } from "./Login";
import { SearchParams } from "next/dist/server/request/search-params";
import { Button } from "./components/Button";

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  
  const params = await searchParams;
  const isMagicLink = params.magicLink === 'yes'
  
  return (
    <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
      {/* <Login isPasswordLogin={!isMagicLink}/> */}
      <h1>This should be the landing page.</h1>
      <Button dark={true} href={'/login'}>Login Page</Button>
    </div>
  )
}
