import { Card } from "@/components/ui/card";
import brandedTruck1 from "@/assets/truck-engine.jpg";
import brandedTruck2 from "@/assets/living-room.jpg";
import brandedTruck3 from "@/assets/gallery-truck-branded-2.jpg";
import professionalTeam from "@/assets/pro-team.jpg";
import professionalEquipment from "@/assets/storage.jpg";
import loadedTruck from "@/assets/gallery-loaded-professional.jpg";

const galleryImages = [
  {
    src: brandedTruck1,
    alt: "S&F Moving branded box truck - 800-Mile Service from Oakland, CA",
    title: "Our Branded Fleet",
  },
  {
    src: brandedTruck2,
    alt: "S&F Moving professional movers truck serving West Coast",
    title: "Professional Service",
  },
  {
    src: brandedTruck3,
    alt: "S&F Moving residential & commercial moving truck",
    title: "Residential & Commercial",
  },
  {
    src: professionalTeam,
    alt: "S&F Moving professional team in branded uniforms",
    title: "Expert Moving Team",
  },
  {
    src: professionalEquipment,
    alt: "Professional moving equipment - dollies and moving blankets",
    title: "Top-Grade Equipment",
  },
  {
    src: loadedTruck,
    alt: "Carefully loaded and protected furniture with S&F Moving branded blankets",
    title: "Secure Loading",
  },
];

export const Gallery = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold mb-3 sm:mb-4">
            See Us In Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our professional team, modern equipment, and dedication to excellence in every move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-gold/20 hover:border-gold/40 transition-all hover:shadow-gold-lg animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-heading font-bold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
