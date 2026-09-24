import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Facilities from "@/components/Facilities";
import HowToJoin from "@/components/HowToJoin";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Facilities />
        <HowToJoin />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
