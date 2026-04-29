import Marquee from "react-fast-marquee";

const NewArrivalsMarquee = async () => {
    const res = await fetch("https://tilix-pink.vercel.app/data.json");
    const data = await res.json();
    const tilesData = data.slice(0, 8);

    return (
        <div className='w-10/12 mx-auto flex gap-2 bg-[#F3F3F3] px-4 py-2 my-6'>
            <button className="bg-[#D72050] px-5 py-2 text-white font-semibold tracking-wide border border-[#D72050] shadow-[4px_4px_0px_#000] hover:bg-white hover:text-[#D72050]">
                Latest
            </button>
            <Marquee pauseOnHover={true}>
                {tilesData.map((tile) => (
                    <p key={tile._id} className='mr-10 font-medium'>
                        New Arrivals: {tile.title}
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default NewArrivalsMarquee;