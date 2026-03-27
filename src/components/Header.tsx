import { useState, useEffect } from "react";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const handleQuoteClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      window.location.href = "/#contact";
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg border-t-2 border-primary" : "bg-background/95 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            aria-label="S&F Moving home"
          >
            <div className="relative">
              <HomeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm sm:text-lg md:text-xl font-bold text-foreground leading-none">
                S&F Moving
              </span>
              <span className="text-xs text-primary font-medium">Best in the Bay Area</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-1.5 text-xs font-medium rounded transition-all ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={handleQuoteClick}
              className="ml-3 text-xs"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 -mr-2 active:bg-primary/10 rounded transition-colors"
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
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="gold"
                size="lg"
                className="w-full mt-2"
                onClick={handleQuoteClick}
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
