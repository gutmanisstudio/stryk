import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Athletes from "@/components/Athletes";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Athletes />
      <FAQ />
      <Marquee text="FUEL THE FIGHT WITHIN" />
      <Footer />
    </>
  );
}
