import { LoginPage } from "@/app/pages/LoginPage";
import { PageParams } from "@/app/types/pages";

export default async function Login({ searchParams, params }: PageParams) {
    const search = await searchParams;
    
    return (
        <LoginPage searchParams={search} params={params}/>
  )
}
