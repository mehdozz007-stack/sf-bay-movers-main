import { Shield, Clock, DollarSign, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: Shield,
    title: "Damage Protection Guarantee",
    description: "All your belongings are fully insured up to $1M. If anything is damaged during the move, we'll make it right immediately with our comprehensive coverage.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We arrive when we say we will. If we're late to your scheduled move time, we'll discount your service. Your time is valuable, and we respect that.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees Guarantee",
    description: "The quote you receive is the price you pay. No surprise charges, no hidden fees, no last-minute add-ons. Transparent, flat-rate pricing every time.",
  },
  {
    icon: Heart,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied with our service, we'll make it right or refund your money. We stand behind our work with a full satisfaction guarantee.",
  },
];

export const Guarantees = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold mb-3 sm:mb-4">
            Our Guarantees To You
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We back our services with industry-leading guarantees because your peace of mind matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="p-4 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-all hover:shadow-gold-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-gold">
                    <guarantee.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-2 sm:mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">
            Ready to experience stress-free moving?
          </p>
          <a href="/resources#resources">
            <Button variant="gold" size="lg">
              Our stress-free moving services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
