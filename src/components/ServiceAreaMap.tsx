import { useState } from "react";
import { MapPin, Truck, Home, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const serviceAreas = [
  // Bay Area
  "Oakland", "San Francisco", "Berkeley", "San Jose", "Palo Alto",
  "Mountain View", "Fremont", "Hayward", "Alameda", "Richmond",
  "Walnut Creek", "Concord", "Daly City", "San Mateo", "Redwood City",
  // Northern California
  "Sacramento", "Stockton", "Modesto", "Santa Rosa", "Napa",
  // Central California
  "Fresno", "Bakersfield", "Salinas", "Monterey", "San Luis Obispo",
  // Southern California
  "Los Angeles", "San Diego", "Anaheim", "Santa Barbara", "Riverside",
  "Long Beach", "Irvine", "Pasadena", "Orange County",
  // Nevada
  "Las Vegas", "Reno", "Carson City",
  // Oregon
  "Medford", "Eugene", "Bend",
  // Arizona
  "Phoenix", "Tucson", "Flagstaff"
];

export const ServiceAreaMap = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">
            Service Area
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve an 800-mile radius from Oakland, covering California, Nevada, Oregon, and Arizona. From San Diego to Sacramento, Los Angeles to Las Vegas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Interactive SVG Map */}
          <Card className="overflow-hidden border-gold/20 p-6">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg p-4 h-[600px]">
              <svg viewBox="0 0 500 600" className="w-full h-full">
                {/* Gradients */}
                <defs>
                  <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#0c2461" />
                  </linearGradient>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3d4a3e" />
                    <stop offset="100%" stopColor="#2a342b" />
                  </linearGradient>
                  <radialGradient id="serviceRadius">
                    <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#C79A00" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#C79A00" stopOpacity="0" />
                  </radialGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                  </filter>
                </defs>

                {/* Pacific Ocean */}
                <rect x="0" y="0" width="120" height="600" fill="url(#waterGradient)"/>

                {/* West Coast States - Simplified shapes */}
                
                {/* California */}
                <path
                  d="M120,150 L180,140 L200,180 L220,250 L240,320 L250,400 L240,480 L200,540 L150,550 L130,500 L120,420 L110,350 L120,280 L115,220 Z"
                  fill="url(#landGradient)"
                  stroke="#6b7f6d"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                
                {/* Nevada */}
                <path
                  d="M250,180 L320,170 L340,220 L350,280 L340,340 L320,380 L280,360 L260,320 L250,280 L240,230 Z"
                  fill="url(#landGradient)"
                  stroke="#6b7f6d"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                
                {/* Oregon */}
                <path
                  d="M120,80 L200,70 L250,90 L280,120 L270,160 L240,180 L200,170 L160,150 L130,120 Z"
                  fill="url(#landGradient)"
                  stroke="#6b7f6d"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                
                {/* Arizona */}
                <path
                  d="M320,280 L400,270 L420,320 L430,380 L420,440 L400,480 L360,470 L340,420 L330,370 L325,320 Z"
                  fill="url(#landGradient)"
                  stroke="#6b7f6d"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/* 800-mile service radius circle centered on Oakland */}
                <circle
                  cx="165"
                  cy="235"
                  r="280"
                  fill="url(#serviceRadius)"
                  className="animate-pulse"
                  style={{ animationDuration: "4s" }}
                />
                <circle
                  cx="165"
                  cy="235"
                  r="280"
                  fill="none"
                  stroke="#FCD34D"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  opacity="0.6"
                />

                {/* Animated truck route */}
                <g>
                  <circle cx="165" cy="235" r="200" fill="none" stroke="#FCD34D" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 165 235"
                      to="360 165 235"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 165 235"
                      to="360 165 235"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                    <rect x="360" y="230" width="18" height="12" fill="#FCD34D" rx="2" filter="url(#shadow)"/>
                    <rect x="369" y="224" width="9" height="6" fill="#fff" rx="1"/>
                    <circle cx="364" cy="243" r="2.5" fill="#1F2937"/>
                    <circle cx="374" cy="243" r="2.5" fill="#1F2937"/>
                  </g>
                </g>

                {/* City markers - organized by region */}
                
                {/* OAKLAND HQ - Central point */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Oakland")}>
                  <circle cx="165" cy="235" r="14" fill="#C79A00" className="animate-pulse" filter="url(#shadow)"/>
                  <circle cx="165" cy="235" r="10" fill="#FCD34D"/>
                  <text x="165" y="265" textAnchor="middle" fontSize="13" fill="#FCD34D" className="font-bold">Oakland HQ</text>
                </g>

                {/* Bay Area Cities */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("San Francisco")}>
                  <circle cx="145" cy="240" r="7" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "2s" }} filter="url(#shadow)"/>
                  <text x="145" y="258" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">SF</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Berkeley")}>
                  <circle cx="160" cy="225" r="5" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="160" y="220" textAnchor="middle" fontSize="8" fill="#FCD34D">BRK</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("San Jose")}>
                  <circle cx="185" cy="280" r="7" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="185" y="298" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">San Jose</text>
                </g>

                {/* Northern California */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Sacramento")}>
                  <circle cx="185" cy="180" r="7" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "2.3s" }} filter="url(#shadow)"/>
                  <text x="185" y="172" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">Sacramento</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Santa Rosa")}>
                  <circle cx="140" cy="200" r="5" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="140" y="193" textAnchor="middle" fontSize="8" fill="#FCD34D">Santa Rosa</text>
                </g>

                {/* Central California */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Fresno")}>
                  <circle cx="205" cy="320" r="6" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="205" y="335" textAnchor="middle" fontSize="8" fill="#FCD34D">Fresno</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Monterey")}>
                  <circle cx="155" cy="300" r="5" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="155" y="315" textAnchor="middle" fontSize="8" fill="#FCD34D">Monterey</text>
                </g>

                {/* Southern California */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Los Angeles")}>
                  <circle cx="180" cy="420" r="8" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "2.5s" }} filter="url(#shadow)"/>
                  <text x="180" y="438" textAnchor="middle" fontSize="10" fill="#FCD34D" className="font-semibold">Los Angeles</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("San Diego")}>
                  <circle cx="185" cy="510" r="7" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "2.7s" }} filter="url(#shadow)"/>
                  <text x="185" y="528" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">San Diego</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Santa Barbara")}>
                  <circle cx="165" cy="385" r="5" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="165" y="378" textAnchor="middle" fontSize="8" fill="#FCD34D">Santa Barbara</text>
                </g>

                {/* Nevada */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Las Vegas")}>
                  <circle cx="320" cy="370" r="7" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "2.8s" }} filter="url(#shadow)"/>
                  <text x="320" y="388" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">Las Vegas</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Reno")}>
                  <circle cx="270" cy="200" r="6" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="270" y="215" textAnchor="middle" fontSize="8" fill="#FCD34D">Reno</text>
                </g>

                {/* Oregon */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Eugene")}>
                  <circle cx="160" cy="110" r="6" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="160" y="103" textAnchor="middle" fontSize="8" fill="#FCD34D">Eugene</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Medford")}>
                  <circle cx="175" cy="140" r="5" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="175" y="133" textAnchor="middle" fontSize="8" fill="#FCD34D">Medford</text>
                </g>

                {/* Arizona */}
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Phoenix")}>
                  <circle cx="370" cy="410" r="7" fill="#FCD34D" className="animate-pulse" style={{ animationDuration: "3s" }} filter="url(#shadow)"/>
                  <text x="370" y="428" textAnchor="middle" fontSize="9" fill="#FCD34D" className="font-semibold">Phoenix</text>
                </g>
                
                <g className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedCity("Tucson")}>
                  <circle cx="385" cy="460" r="6" fill="#FCD34D" filter="url(#shadow)"/>
                  <text x="385" y="475" textAnchor="middle" fontSize="8" fill="#FCD34D">Tucson</text>
                </g>

                {/* Region Labels */}
                <text x="165" y="50" textAnchor="middle" fontSize="16" fill="#FCD34D" className="font-bold">WEST COAST COVERAGE</text>
                <text x="165" y="70" textAnchor="middle" fontSize="12" fill="#C79A00">800-Mile Radius</text>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-2 left-2 bg-slate-900/95 backdrop-blur-sm rounded-lg p-3 border border-gold/40 text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gold animate-pulse"></div>
                  <span className="text-gold font-semibold">Oakland HQ</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-3 h-3 text-gold" />
                  <span className="text-gold">Active Routes</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <span className="text-gold">Major Cities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 border-t-2 border-dashed border-gold"></div>
                  <span className="text-gold">800-Mile Range</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Service Areas List */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Major Cities We Serve</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[600px] overflow-y-auto pr-2">
              {serviceAreas.map((city, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                  className={`flex items-center gap-2 p-3 bg-card rounded-lg border transition-all animate-fade-up ${
                    selectedCity === city 
                      ? "border-gold bg-gold/10 scale-105" 
                      : "border-gold/20 hover:border-gold/40"
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <MapPin className={`w-4 h-4 flex-shrink-0 ${selectedCity === city ? "text-gold" : "text-gold/70"}`} />
                  <span className="text-sm font-medium">{city}</span>
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Don't see your city? We serve many more locations across the West Coast! 
              <a href="#contact" className="text-gold hover:underline ml-1">
                Contact us
              </a>{" "}
              to confirm we serve your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
