import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export const SpecialOffer = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 relative z-10 flex-wrap sm:flex-nowrap">
        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 animate-pulse hidden sm:block" />
        <p className="text-xs sm:text-sm md:text-base font-heading font-bold text-center">
          LIMITED TIME: 15% OFF your first move! <span className="hidden sm:inline">Call +1 (510) 703-7904</span><span className="sm:hidden">Call now!</span>
        </p>
        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 animate-pulse hidden sm:block" />
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto sm:ml-auto hover:bg-black/10 rounded-full p-1 transition-colors flex-shrink-0"
          aria-label="Close offer banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
