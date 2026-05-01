import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1f3b4d] py-24">

            {/* soft glow background shapes */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative w-11/12 sm:w-10/12 mx-auto text-center">

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                    Discover Your <span className="text-emerald-300">Perfect</span> Aesthetic
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Explore a beautifully organized tile-based experience where design, structure, and simplicity come together in one place.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <Link
                        href="/all-tiles"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-500 active:scale-95 animate__animated animate__pulse animate__infinite"
                    >
                        Browse Now
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Banner;