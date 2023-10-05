import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials11 from "@/components/Testimonials11";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesListicle />
        <Pricing />
        <Testimonials11 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
