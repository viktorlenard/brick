import { Register } from "@/app/pages/RegisterPage";
import { PageParams } from "@/app/types/pages";

const TenantRegisterPage = async ({ searchParams, params }: PageParams) => {
    const search = await searchParams;
    return(
        <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
            <Register searchParams={search} params={params}/>
        </div>
    )
}

export default TenantRegisterPage