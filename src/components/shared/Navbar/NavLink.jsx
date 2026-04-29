'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    console.log(pathname, "pathname");

    return (
        <Link href={href}
            className={`flex items-center gap-1 ${pathname === href ? "bg-[#e5e5e5] px-3 py-2 text-black rounded-full" : ""} font-semibold text-base px-3 py-2`}
        >
            {children}
        </Link>
    );
};

export default NavLink;