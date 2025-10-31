import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SpecialOffer } from "@/components/SpecialOffer";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TrustBadges } from "@/components/TrustBadges";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Testimonials } from "@/components/Testimonials";
import { Guarantees } from "@/components/Guarantees";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CostCalculator } from "@/components/CostCalculator";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { FAQ } from "@/components/FAQ";
import { Resources } from "@/components/Resources";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SpecialOffer />
      <Header />
      <Hero />
      <Stats />
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <ProcessTimeline />
      </section>
      <TrustBadges />
      <section id="gallery">
        <Gallery />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <Testimonials />
      <Guarantees />
      <ComparisonTable />
      <section id="calculator">
        <CostCalculator />
      </section>
      <section id="service-area">
        <ServiceAreaMap />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      
      {/* JSON-LD Schema for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "S&F Moving",
          "image": window.location.origin + "/assets/hero-moving.jpg",
          "description": "S&F Moving offers reliable residential and commercial moving, heavy lifting, furniture assembly, trash furniture removal, and professional cleaning across the Bay Area.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "366 Euclid Ave",
            "addressLocality": "Oakland",
            "addressRegion": "CA",
            "postalCode": "94610",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.829581,
            "longitude": -122.258712
          },
          "telephone": ["+1-510-703-7904", "+1-510-421-5953"],
          "email": "f.zitouni@sf-moving.com",
          "url": window.location.href,
          "priceRange": "$$",
          "openingHours": "Mo-Su 07:00-20:00",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 37.829581,
              "longitude": -122.258712
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Moving Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "All Service Moving",
                  "description": "Full-service residential and commercial moves with professional packing and secure transport."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heavy Lifting Loading",
                  "description": "Safe, insured heavy-lift specialists for pianos, safes, appliances and machinery."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Furniture Assembly",
                  "description": "Expert assembly and reassembly for beds, wardrobes, shelving and office furniture."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trash Furniture Removal",
                  "description": "Responsible removal and disposal of unwanted furniture and bulky waste."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cleaning",
                  "description": "Post-move cleaning services so your old or new space is ready."
                }
              }
            ]
          }
        })}
      </script>
    </div>
  );
};

export default Index;
