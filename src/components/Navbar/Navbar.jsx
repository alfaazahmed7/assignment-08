'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import navbarImage from "@/assets/logo.png"
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { toast } from "react-toastify";

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

    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user, "user");

    const handleSignOut = async () => {
        const toastId = toast.loading("Signing you out...");
        await authClient.signOut();

        toast.update(toastId, {
            render: "You've been signed out.",
            type: "success",
            isLoading: false,
            autoClose: 1500,
        });

        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };

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
                <div className="flex gap-2 navbar-end">
                    {
                        user ?
                            <div className="flex items-center gap-2">
                                <div>
                                    <Avatar>
                                        <Avatar.Image
                                            alt="John Doe"
                                            src={user?.image}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <button
                                        onClick={handleSignOut}
                                        className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                            :
                            <div className="flex gap-2">
                                <Link
                                    href="/signin"
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/signup"
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-900"
                                >
                                    Sign Up
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;