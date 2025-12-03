import { Shield, CheckCircle, Award, Lock, Clock, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: Shield,
    title: "Fully Licensed",
    description: "CA License #3705653",
  },
  {
    icon: Lock,
    title: "Fully Insured",
    description: "Up to $1M Coverage",
  },
  {
    icon: Award,
    title: "BBB Accredited",
    description: "A+ Rating",
  },
  {
    icon: CheckCircle,
    title: "Background Checked",
    description: "All Team Members",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We Arrive When Promised",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "100% Money Back",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">
            Why Choose S&F Moving
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest quality moving services with complete transparency and professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all hover:shadow-gold animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
