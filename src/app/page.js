import Banner from "@/components/homepage/Banner/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles/FeaturedTiles";
import NewArrivalsMarquee from "@/components/homepage/Marquee/NewArrivalsMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivalsMarquee />
      <FeaturedTiles />
    </div>
  );
}