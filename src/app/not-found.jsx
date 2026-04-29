"use client";

import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
            <div className="text-center max-w-md">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-5 bg-black text-white rounded-full shadow-lg">
                        <BiErrorCircle size={40} />
                    </div>
                </div>

                {/* 404 Text */}
                <h1 className="text-7xl font-extrabold text-gray-900 tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-2 text-gray-600">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-900 active:scale-95"
                    >
                        Go Home
                    </Link>
                </div>

                {/* Subtle Footer Text */}
                <p className="mt-6 text-xs text-gray-400">
                    Lost? Let’s get you back on track.
                </p>
            </div>
        </div>
    );
}