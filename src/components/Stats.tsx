import { Users, Truck, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: "300+",
    label: "Successful Moves",
  },
  {
    icon: Users,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Star,
    value: "100%",
    label: "Satisfaction Rate",
  },
  {
    icon: Award,
    value: "Licensed",
    label: "& Insured",
  },
];

export const Stats = () => {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gold/10 mb-3 sm:mb-4">
                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-gold" />
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-gold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
