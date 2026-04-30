'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchTiles = () => {
    const [searchInput, setSearchInput] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);

        if (searchInput) {
            params.set("search", searchInput);
        }
        else {
            params.delete("search");
        }
        router.push(`${pathName}?${params.toString()}`);
    }

    return (
        <div className='flex justify-center md:justify-end gap-2 mb-5'>
            <label className="input shadow-none focus-within:border-none focus-within:shadow-none">
                <svg className="h-[1em] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2.5"></circle>
                    <path d="m21 21-4.3-4.3" strokeWidth="2.5"></path>
                </svg>

                <input
                    type="search"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    placeholder="Search"
                    className="focus:outline-none bg-transparent"
                />
            </label>
            <button
                onClick={handleSearch}
                className="px-4 border border-black text-sm font-medium shadow-[3px_3px_0px_#000] hover:bg-black hover:text-white cursor-pointer">
                Search
            </button>
        </div>
    );
};

export default SearchTiles;