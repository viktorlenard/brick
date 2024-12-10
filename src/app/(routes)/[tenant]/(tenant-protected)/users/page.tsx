import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { Button } from "@/app/components/Button";

interface User {
    id: number;
    full_name: string;
    job_title: string;
}

const UserList = async ( { params } : { params: {tenant : string} } ) => {
    const { tenant } = await params
    const supabase = await getUtilClient()
    const { data: users, error } = await supabase.rpc('get_tenant_userlist', {
        tenant_id: tenant
    })
    if (error && !users) {
        throw new Error('Failed to fetch userlist')
    }
    console.log(users)
    const sortedUsers = users.sort((a: User, b: User) => a.id - b.id);
    
    return(
        <div>
            <div className='flex mb-4'>
                <Button href={`/${tenant}/dashboard`} dark={true}>Dashboard</Button>
            </div>
            <table className='min-w-[400px] font-mono'>
                <thead>
                    <tr>
                        <th className='min-w-[25px] text-left underline'>ID</th>
                        <th className='min-w-[100px] text-left underline'>Name</th>
                        <th className='min-w-[100px] text-left underline'>Job title</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user : User) => (
                        <tr key={user.id}>
                            <td className='min-w-[25px] text-left font-bold text-accent'>{user.id}</td>
                            <td className='min-w-[100px] text-left font-bold'>{user.full_name}</td>
                            <td className='min-w-[100px] font-bold text-green-600'>{user.job_title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList