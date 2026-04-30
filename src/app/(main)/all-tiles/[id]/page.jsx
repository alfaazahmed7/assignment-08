import Image from "next/image";

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("http://localhost:3000/data.json");
    const allTiles = await res.json();
    const expectedTile = allTiles.find(tile => tile.id == id);

    return (
        <div className="w-11/12 max-w-6xl mx-auto py-10">
            <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Image Section */}
                <div className="relative w-full h-[350px] md:min-h-[50vh] bg-gray-100">
                    <Image
                        src={expectedTile?.image}
                        alt={expectedTile.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">
                            {expectedTile.title}
                        </h1>

                        <p className="text-gray-600 mb-5 leading-relaxed">
                            {expectedTile.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                            <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-semibold capitalize">{expectedTile.category}</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Material</p>
                                <p className="font-semibold">{expectedTile.material}</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Dimensions</p>
                                <p className="font-semibold">{expectedTile.dimensions}</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Availability</p>
                                <p className={`font-semibold ${expectedTile.inStock ? "text-green-600" : "text-red-500"}`}>
                                    {expectedTile.inStock ? "In Stock" : "Out of Stock"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-4">
                        <h2 className="text-2xl font-bold text-indigo-600">
                            {expectedTile.currency} {expectedTile.price}
                        </h2>

                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TileDetailsPage;