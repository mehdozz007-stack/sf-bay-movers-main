import { Header } from "@/components/Header";
import { SpecialOffer } from "@/components/SpecialOffer";
import { About } from "@/components/About";
import { Guarantees } from "@/components/Guarantees";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SpecialOffer />
      <Header />
      
      <div className="pt-20">
        <About />
        <Guarantees />
        {/* <Reviews /> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
