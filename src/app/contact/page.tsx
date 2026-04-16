import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — STRYK Nutrition",
  description: "Get in touch with STRYK Nutrition.",
};

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="pt-28 sm:pt-32">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
