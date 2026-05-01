import SearchTiles from "@/components/homepage/FeaturedTiles/SearchTiles";
import TileCard from "@/components/homepage/FeaturedTiles/TileCard";

const AllTiles = async ({ searchParams }) => {
    const sp = await searchParams;
    const search = sp?.search?.toLowerCase() || "";
    const res = await fetch("https://tilix-eight.vercel.app/data.json");
    const allTiles = await res.json();
    const filteredTiles = allTiles.filter(tile =>
        tile.title.toLowerCase().includes(search)
    );
    const tilesToShow = search ? filteredTiles : allTiles.slice(0, 30);

    return (
        <div className='w-10/12 mx-auto my-14'>
            <h2 className='text-4xl font-semibold text-center my-5'>
                Find <span className='font-bold'>your</span> tile
            </h2>

            <SearchTiles />

            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                    tilesToShow.map((tile) => (
                        <TileCard key={tile.id} tile={tile} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllTiles;