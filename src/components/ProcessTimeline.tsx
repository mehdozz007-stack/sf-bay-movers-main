import { Phone, Calendar, Package, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Request Quote",
    description: "Contact us for a free, no-obligation quote",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Choose your preferred moving date and time",
  },
  {
    icon: Package,
    title: "Pack",
    description: "We help pack or you can do it yourself",
  },
  {
    icon: Truck,
    title: "Move",
    description: "Our team safely transports your belongings",
  },
  {
    icon: CheckCircle,
    title: "Done",
    description: "Unpack and enjoy your new space",
  },
];

export const ProcessTimeline = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our simple, stress-free moving process ensures a smooth transition from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-gold-lg relative z-10">
                    <step.icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gold animate-pulse opacity-20"></div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
