'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {}

const NavBar = () => {

    const pathname = usePathname()

    return (
        <header className='w-full pt-[70px]'>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='text-5xl font-black'>
                    <Link href={"/"}>MA</Link>
                </div>
                <div>
                    <Link className={pathname === "/about" ? 'font-bold' : 'font-medium'} href={"/about"}>about</Link>
                    <Link className={pathname === "/project" ? 'font-bold' : 'font-medium'} href={"/project"}>project</Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar