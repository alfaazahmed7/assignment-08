'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import navbarImage from "@/assets/logo.png"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-10 transition-all duration-300 ${scrolled
            ? "bg-gray-200/70 backdrop-blur-sm shadow-md"
            : "bg-[#F3F3F3]"
            }`}>
            <div className="navbar md:w-11/12 lg:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink href={"/"}>
                                Home
                            </NavLink>
                            <NavLink href={"/all-tiles"}>
                                All Tiles
                            </NavLink>
                            <NavLink href={"/Profile"}>
                                Profile
                            </NavLink>
                        </ul>
                    </div>
                    <Link href={"/"}>
                        <Image
                            src={navbarImage}
                            alt="tiles logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-3">
                        <NavLink href={"/"}>
                            Home
                        </NavLink>
                        <NavLink href={"/all-tiles"}>
                            All Tiles
                        </NavLink>
                        <NavLink href={"/Profile"}>
                            Profile
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        href="/signin"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-900 active:scale-95"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;