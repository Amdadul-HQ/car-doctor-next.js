"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    const session = useSession()
    console.log(session);
    const links = [
        {
            title:"Home",
            path:'/'
        },
        {
            title:"About",
            path:'/about'
        },
        {
            title:"Service",
            path:"/service"
        },
        {
            title:"My Booking",
            path:"/mybooking"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        {
            title:"Contact",
            path:"/contact"
        }
    ]
    return (
        <nav className='container mx-auto flex justify-between items-center'>
            <div>
                <Image src='/assets/logo.svg' width={100} height={100} alt='Logo' />
            </div>
            <ul className='space-x-12 font-semibold'>
                {
                    links.map(link=><Link className='' href={link.path} key={link.path}>{link.title}</Link>)
                }
            </ul>
            <div className='flex items-center gap-x-2'>
                <FiShoppingBag className='text-2xl'/>
                <IoIosSearch className='text-2xl' />
                <button className='btn btn-primary btn-outline'>Appointment</button>
                {!session.data ? <Link href={'/login'}><button className='btn btn-primary'>Login</button></Link> : <button onClick={()=> signOut()} className='btn btn-primary'>Logout</button>}
            </div>
        </nav>
    );
};

export default Navbar;