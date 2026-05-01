'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import navbarImage from "@/assets/logo.png"
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { toast } from "react-toastify";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;

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
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/70 backdrop-blur-xl border-b border-base-200 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="navbar md:w-11/12 lg:w-10/12 mx-auto px-2">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content mt-3 w-56 p-3 shadow-xl bg-base-100 rounded-2xl border border-base-200"
                        >
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/all-tiles">All Tiles</NavLink>
                            <NavLink href="/profile">Profile</NavLink>
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={navbarImage}
                            alt="tiles logo"
                            width={50}
                            height={50}
                            className="rounded-xl"
                        />
                        <span className="hidden sm:block font-semibold text-lg tracking-tight">
                            Tilix
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/all-tiles">All Tiles</NavLink>
                        <NavLink href="/profile">Profile</NavLink>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-3">

                    {isPending ?
                        <span className="loading loading-spinner loading-xl"></span>
                        :
                        user ? (
                            <div className="flex items-center gap-3">

                                <Avatar className="ring-2 ring-primary/20">
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>
                                        {user?.name?.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>

                                <button
                                    onClick={handleSignOut}
                                    className="btn btn-sm rounded-xl bg-base-100 hover:bg-base-200 border border-base-300 normal-case font-medium"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2">

                                <Link
                                    href="/signin"
                                    className="btn btn-sm rounded-xl bg-gradient-to-r from-primary to-secondary text-white border-none shadow-md hover:shadow-lg normal-case font-semibold"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;