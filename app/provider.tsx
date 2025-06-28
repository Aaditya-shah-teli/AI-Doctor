"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useClerk } from '@clerk/nextjs';
import { UserDeatailContext } from '@/context/UserDetailContext';

export type UserDetail = {
    name: string,
    email: string,
    cradits: number
}
const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {


    const { user } = useClerk();
    const [userDetail, setUserDetail] = useState<UserDetail | undefined>()
    useEffect(() => {
        user && CreateNewUser();
    }, [user])


    const CreateNewUser = async () => {
        const ruselt = await axios.post("/api/users");
        setUserDetail(ruselt.data);
        console.log(ruselt)
    }
    return (
        <div>
            <UserDeatailContext.Provider value={{userDetail, setUserDetail}}>
                {children}
            </UserDeatailContext.Provider>
            </div>
    )
}

export default Provider