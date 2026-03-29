import { Header } from "@/components/Header";
import { SpecialOffer } from "@/components/SpecialOffer";
import { FAQ } from "@/components/FAQ";
import { Resources } from "@/components/Resources";
import { Contact } from "@/components/Contact";
import { CostCalculator } from "@/components/CostCalculator";
import { Footer } from "@/components/Footer";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SpecialOffer />
      <Header />
      
      <div className="pt-20">
        <CostCalculator />
        <FAQ />
        <Resources />
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
