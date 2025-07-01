import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
    {
        id: 1,
        name: "Home",
        path:'/'
    },
    {
        id: 2,
        name: "History",
        path:'/history'
    },
    {
        id: 3,
        name: "Pricing",
        path:'/pricing'
    },
    {
        id: 4,
        name: "Profile",
        path:'/profile'
    }
]
const AppHeader = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm p-10 md:px-20 lg:px-40 xl:px-40'>
        <Image src={"/me.jpeg"} alt="Profile Picture" width={50} height={50} className='rounded-full' />
        <div className=' hidden md:flex flex gap-12 items-center'>
            {
                menuOptions.map((option, index) => (
                    <Link href={option.path} key={index}>
                        <div key={index} className='hover:bg-purple-600 h-9 w-16 flex justify-center items-center rounded-lg transition-all duration-300 hover:text-white hover:text-10 cursor-pointer'>
                        <h2>{option.name}</h2>
                    </div>
                    </Link>
                ))
            }
        </div>
        <UserButton/>
    </div>
  )
}

export default AppHeader