import { Star, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Reviews = () => {
  const rating = 4.9;
  const reviewCount = 127;

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 bg-card border-gold/20 shadow-gold text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(rating)
                      ? "text-gold fill-gold"
                      : "text-gold/30"
                  }`}
                />
              ))}
            </div>
            <div className="text-4xl font-heading font-bold text-gold mb-2">
              {rating} out of 5
            </div>
            <p className="text-muted-foreground">
              Based on {reviewCount}+ verified customer reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="text-2xl font-heading font-bold text-gold mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="text-2xl font-heading font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Successful Moves</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="goldOutline" asChild>
              <a
                href="https://www.google.com/search?q=S%26F+Moving+Oakland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Read Google Reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="goldOutline" asChild>
              <a
                href="https://www.yelp.com/search?find_desc=S%26F+Moving&find_loc=Oakland%2C+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Read Yelp Reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
