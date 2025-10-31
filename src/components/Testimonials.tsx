import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "S&F Moving made our office relocation seamless. Professional, efficient, and careful with all our equipment.",
    author: "Sarah Chen",
    location: "San Francisco, CA",
  },
  {
    quote: "Best moving experience ever! The team was punctual, friendly, and took great care of our furniture.",
    author: "Michael Rodriguez",
    location: "Oakland, CA",
  },
  {
    quote: "Highly recommend for heavy lifting. They moved our piano safely without a scratch. True professionals.",
    author: "Jennifer Williams",
    location: "Berkeley, CA",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied customers across the Bay Area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-primary/20 bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
