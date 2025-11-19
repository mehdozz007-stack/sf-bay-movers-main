import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pro-team.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional S&F Moving team handling boxes and furniture with care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary uppercase tracking-tight mb-6 animate-fade-up">
            BEST IN THE BAY AREA
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-body animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Reliable residential and commercial moving, heavy lifting, furniture assembly, trash removal and cleaning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              variant="gold"
              size="xl"
              onClick={scrollToContact}
              className="shadow-gold-lg"
            >
              Request a Quote
            </Button>
            <Button
              variant="goldOutline"
              size="xl"
              asChild
            >
              <a href="tel:+15107037904" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 (510) 703-7904
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Local Bay Area Crew</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Competitive Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Experienced Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
