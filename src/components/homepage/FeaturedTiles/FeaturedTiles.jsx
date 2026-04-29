import React from 'react';
import TileCard from './TileCard';

const FeaturedTiles = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    const featuredTiles = data.filter(tile => tile.featured).slice(0, 4);

    return (
        <div className='w-10/12 mx-auto my-14'>
            <div className='text-center max-w-[700px] mx-auto mb-5'>
                <h2 className='text-5xl font-bold mb-2'>Best of Our Tiles</h2>
                <p className='text-[#979dac]'>Discover our handpicked selection of premium tiles chosen for their design, quality, and popularity. These top picks represent the best styles from our latest collection.</p>
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                    featuredTiles.map((tile) => (
                        <TileCard
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