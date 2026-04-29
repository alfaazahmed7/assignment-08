import React from 'react';
import FeaturedTileCard from './FeaturedTileCard';

const FeaturedTiles = async () => {
    const res = await fetch("https://tilix-pink.vercel.app/data.json");
    const data = await res.json();
    console.log(data, "data");
    const featuredTiles = data.filter(tile => tile.featured).slice(0, 4);
    console.log(featuredTiles, "featuredTiles");

    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='text-center max-w-[700px] mx-auto mb-5'>
                <h2 className='text-5xl font-bold mb-2'>Best of Our Tiles</h2>
                <p className='text-[#979dac]'>Discover our handpicked selection of premium tiles chosen for their design, quality, and popularity. These top picks represent the best styles from our latest collection.</p>
            </div>

            <div className='grid md:grid-cols-2 2xl:grid-cols-4 gap-10'>
                {
                    featuredTiles.map((tile) => (
                        <FeaturedTileCard
                            key={tile.id}
                            tile={tile}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;