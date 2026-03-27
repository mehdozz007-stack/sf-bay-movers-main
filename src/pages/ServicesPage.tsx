import { Header } from "@/components/Header";
import { SpecialOffer } from "@/components/SpecialOffer";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Gallery } from "@/components/Gallery";
import { CostCalculator } from "@/components/CostCalculator";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SpecialOffer />
      <Header />
      
      <div className="pt-20">
        <Services />
        <ProcessTimeline />
        <Gallery />
        <CostCalculator />
        <ComparisonTable />
        <ServiceAreaMap />
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
