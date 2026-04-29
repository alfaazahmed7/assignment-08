import Image from 'next/image';
import React from 'react';

const TileCard = ({ tile }) => {
    return (
        <div className="group bg-white border border-[#E5E5E5] shadow-[6px_6px_0px_#111] overflow-hidden">

            <div className="relative w-full h-56 bg-[#F3F3F3] overflow-hidden group">
                <Image
                    src={tile?.image}
                    alt={tile.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 bg-black text-white text-[11px] px-3 py-[2px] uppercase tracking-widest z-10">
                    {tile.category}
                </span>

                {!tile.inStock && (
                    <span className="absolute top-3 right-3 bg-[#D72050] text-white text-[11px] px-3 py-[2px] z-10">
                        Out of Stock
                    </span>
                )}
            </div>


            <div className="p-5 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-[#111] leading-snug">
                    {tile.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {tile.description}
                </p>
                <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                    <span>{tile.material}</span>
                    <span className="text-gray-300">•</span>
                    <span>{tile.dimensions}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold text-[#111]">
                        <span className="text-[#D72050]">$</span>{tile.price}
                    </p>
                    <button className="px-4 py-1 border border-black text-sm font-medium shadow-[3px_3px_0px_#000] hover:bg-black hover:text-white">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TileCard;