import Marquee from "react-fast-marquee";

const NewArrivalsMarquee = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    const tilesData = data.slice(0, 8);

    return (
        <div className='w-10/12 mx-auto flex gap-3 bg-[#F3F3F3] px-4 py-2 my-6'>
            <button className="bg-[#D72050] px-5 py-2 text-white font-semibold tracking-wide border border-[#D72050] shadow-[4px_4px_0px_#000] hover:bg-white hover:text-[#D72050]">
                Latest
            </button>

            <Marquee pauseOnHover={true} speed={50}>
                {tilesData.map((tile) => (
                    <span key={tile.id} className='mr-10 font-medium'>
                        New Arrivals: {tile.title}
                    </span>
                ))}
                <span className="mr-10">|</span>

                <span className='mr-10 font-medium'>
                    Weekly Feature: Modern Geometric Patterns
                </span>
                <span className="mr-10">|</span>

                <span className='mr-10 font-medium'>
                    Join the Community
                </span>
            </Marquee>
        </div>
    );
};

export default NewArrivalsMarquee;