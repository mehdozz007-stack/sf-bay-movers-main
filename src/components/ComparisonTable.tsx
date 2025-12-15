import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    feature: "Licensed & Insured",
    sfMoving: true,
    competitors: "Sometimes",
  },
  {
    feature: "Transparent Flat-Rate Pricing",
    sfMoving: true,
    competitors: false,
  },
  {
    feature: "Background-Checked Team",
    sfMoving: true,
    competitors: "Rarely",
  },
  {
    feature: "On-Time Guarantee",
    sfMoving: true,
    competitors: false,
  },
  {
    feature: "Damage Protection ($1M)",
    sfMoving: true,
    competitors: "Limited",
  },
  {
    feature: "Heavy Lifting Specialists",
    sfMoving: true,
    competitors: false,
  },
  {
    feature: "Professional Equipment",
    sfMoving: true,
    competitors: "Sometimes",
  },
  {
    feature: "100% Satisfaction Guarantee",
    sfMoving: true,
    competitors: false,
  },
  {
    feature: "Same-Day Service Available",
    sfMoving: true,
    competitors: false,
  },
  {
    feature: "Free Quotes",
    sfMoving: true,
    competitors: true,
  },
];

export const ComparisonTable = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold mb-3 sm:mb-4">
            Why Choose S&F Moving?
          </h2>
          <p className="text-muted-foreground">
            See how we compare to other moving companies in the Bay Area.
          </p>
        </div>

        <Card className="overflow-hidden border-gold/20 shadow-gold">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gold/10 border-b border-gold/20">
                  <th className="text-left p-4 font-heading font-bold">Feature</th>
                  <th className="text-center p-4 font-heading font-bold text-gold">
                    S&F Moving
                  </th>
                  <th className="text-center p-4 font-heading font-bold text-muted-foreground">
                    Other Companies
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-muted/20 transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      {item.sfMoving === true ? (
                        <Check className="w-6 h-6 text-gold mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.sfMoving}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.competitors === true ? (
                        <Check className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : item.competitors === false ? (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.competitors}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Join hundreds of satisfied customers who chose quality and reliability.
          </p>
          <a href="#contact">
            <Button variant="gold" size="lg">
              Get Your Free Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
