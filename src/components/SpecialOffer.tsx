import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export const SpecialOffer = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="container mx-auto flex items-center justify-center gap-3 relative z-10">
        <Sparkles className="w-5 h-5 animate-pulse" />
        <p className="text-sm md:text-base font-heading font-bold text-center">
          LIMITED TIME: Get 15% OFF your first move! Call now: +1 (510) 703-7904
        </p>
        <Sparkles className="w-5 h-5 animate-pulse" />
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto hover:bg-black/10 rounded-full p-1 transition-colors"
          aria-label="Close offer banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
