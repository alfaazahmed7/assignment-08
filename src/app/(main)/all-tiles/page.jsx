import TileCard from '@/components/homepage/FeaturedTiles/TileCard';
import React from 'react';

const allTiles = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const allTiles = await res.json();

    return (
        <div className='w-10/12 mx-auto my-14'>

            <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-center my-5'>Find <span className='text-[#000000c4] font-bold text-4xl  sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>your</span> tile</h2>

            <div className='flex justify-center md:justify-end gap-2 mb-5'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <button className="px-4 border border-black text-sm font-medium shadow-[3px_3px_0px_#000] hover:bg-black hover:text-white">
                    Search
                </button>
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                    allTiles.map((tile) =>
                        <TileCard
                            key={tile.id}
                            tile={tile}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default allTiles;