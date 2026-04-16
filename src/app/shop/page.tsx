import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import ShopHero from "./ShopHero";

export const metadata: Metadata = {
  title: "Shop — STRYK Nutrition",
  description: "Browse STRYK Nutrition products — launching soon.",
};

export default function ShopPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <ShopHero />
      <ProductGrid />
      <Footer />
    </>
  );
}
