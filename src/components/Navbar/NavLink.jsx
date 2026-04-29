'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all
            ${isActive 
                ? "text-white bg-[#244D3F] shadow-md" 
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
        >
            {children}

            {/* subtle active indicator line */}
            {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white/70 rounded-full" />
            )}
        </Link>
    );
};

export default NavLink;