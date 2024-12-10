"use client"
import { getClient } from "../utils/supabase/browserClient"
import { useEffect, useState } from "react"

interface User {
    id: string;
    full_name: string;
}

interface AssigneeSelectProps {
    tenant: string;
    onValueChanged: (value: number | null) => void;
}

export const AssigneeSelect = ({ tenant, onValueChanged }: AssigneeSelectProps) => {
    const [users, setUsers] = useState<User[]>([])
    const supabase = getClient()

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.rpc('get_tenant_userlist', {
                tenant_id: tenant
            });
            if (error) {
                console.error(error);
            } else {
                setUsers(data ?? []);
            }
        };
        fetchUsers();
    }, [tenant, supabase]);

    return(
        <select
            name='assignee'
            disabled={users.length === 0}
            onChange={(event) => {
                const value = event.target.value
                onValueChanged(value === '' ? null : Number(value))
            }}
        >
            <option value="">
                {users.length === 0 ? "Loading..." : "No assignee"}
            </option>
            {users && users.map((user) => {
                return (
                    <option key={user.id} value={user.id}>
                        {user.full_name}
                    </option>
                );
                })}
        </select>
    )
}