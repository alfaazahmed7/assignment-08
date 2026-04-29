import Banner from "@/components/Banner/Banner";
import NewArrivalsMarquee from "@/components/Marquee/NewArrivalsMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivalsMarquee />
    </div>
  );
}