import { Home as HomeIcon, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <HomeIcon className="w-8 h-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-foreground leading-none">
                  S&F Moving
                </span>
                <span className="text-xs text-primary font-medium">Best in the Bay Area</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for all moving and logistics needs in the Bay Area.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+15107037904" className="hover:text-primary transition-colors block">
                    +1 (510) 703-7904
                  </a>
                  <a href="tel:+15104215953" className="hover:text-primary transition-colors block">
                    +1 (510) 421-5953
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:f.zitouni@sf-moving.com" className="hover:text-primary transition-colors">
                  f.zitouni@sf-moving.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>366 Euclid Ave, Oakland, CA 94610</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} S&F Moving. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};
