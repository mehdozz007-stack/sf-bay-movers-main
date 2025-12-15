import { Truck, PackageOpen, Wrench, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "All Service Moving",
    description: "Full-service residential and commercial moves with professional packing and secure transport.",
  },
  {
    icon: PackageOpen,
    title: "Heavy Lifting Loading",
    description: "Safe, insured heavy-lift specialists for pianos, safes, appliances and machinery.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Expert assembly and reassembly for beds, wardrobes, shelving and office furniture.",
  },
  {
    icon: Trash2,
    title: "Trash Furniture Removal",
    description: "Responsible removal and disposal of unwanted furniture and bulky waste.",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Post-move cleaning services so your old or new space is ready.",
  },
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving and support services for the Bay Area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-2 border-primary/20 bg-card hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-gold group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="goldOutline"
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Book this Service
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
