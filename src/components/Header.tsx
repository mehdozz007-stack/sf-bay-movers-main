import { useState, useEffect } from "react";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Service Area", id: "service-area" },
    { label: "About", id: "about" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "Calculator", id: "calculator" },
    { label: "FAQ", id: "faq" },
    { label: "Resources", id: "resources" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg border-t-2 border-primary" : "bg-background/95 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
            aria-label="S&F Moving home"
          >
            <div className="relative">
              <HomeIcon className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-foreground leading-none">
                S&F Moving
              </span>
              <span className="text-xs text-primary font-medium">Best in the Bay Area</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-2.5 py-1.5 text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded transition-all"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="ml-3 text-xs"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-2 px-3 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="lg"
                className="w-full mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
