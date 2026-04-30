import Banner from "@/components/homepage/Banner/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles/FeaturedTiles";
import NewArrivalsMarquee from "@/components/homepage/Marquee/NewArrivalsMarquee";
import Image from "next/image";
import { Suspense } from "react";

const SectionLoader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-black rounded-full"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivalsMarquee />
      <Suspense fallback={<SectionLoader />}>
        <FeaturedTiles />
      </Suspense>
    </div>
  );
}