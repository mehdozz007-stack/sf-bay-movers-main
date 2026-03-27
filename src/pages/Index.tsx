import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SpecialOffer } from "@/components/SpecialOffer";
import { Stats } from "@/components/Stats";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SpecialOffer />
      <Header />
      <Hero />
      <Stats />
      <TrustBadges />
      <Testimonials />
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
          }
        })}
      </script>
    </div>
  );
};

export default Index;

