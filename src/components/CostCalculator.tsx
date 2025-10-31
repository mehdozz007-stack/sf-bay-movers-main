import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign } from "lucide-react";

export const CostCalculator = () => {
  const [moveSize, setMoveSize] = useState("");
  const [distance, setDistance] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base price by move size
    switch (moveSize) {
      case "studio":
        basePrice = 300;
        break;
      case "1-bed":
        basePrice = 450;
        break;
      case "2-bed":
        basePrice = 650;
        break;
      case "3-bed":
        basePrice = 850;
        break;
      case "4-bed":
        basePrice = 1100;
        break;
      default:
        basePrice = 0;
    }

    // Distance multiplier
    const distanceNum = parseInt(distance) || 0;
    const distanceFee = distanceNum > 20 ? (distanceNum - 20) * 2 : 0;

    // Additional services
    const serviceFees = services.length * 100;

    const total = basePrice + distanceFee + serviceFees;
    setEstimate(total);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">
            Moving Cost Calculator
          </h2>
          <p className="text-muted-foreground">
            Get an instant estimate for your move. For an accurate quote, contact us directly.
          </p>
        </div>

        <Card className="p-8 border-gold/20 shadow-gold">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <Label htmlFor="move-size" className="text-base mb-2">Move Size</Label>
              <Select value={moveSize} onValueChange={setMoveSize}>
                <SelectTrigger id="move-size" className="border-gold/20">
                  <SelectValue placeholder="Select move size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio/1 Room</SelectItem>
                  <SelectItem value="1-bed">1 Bedroom</SelectItem>
                  <SelectItem value="2-bed">2 Bedroom</SelectItem>
                  <SelectItem value="3-bed">3 Bedroom</SelectItem>
                  <SelectItem value="4-bed">4+ Bedroom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="distance" className="text-base mb-2">Distance (miles)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="e.g., 15"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="border-gold/20"
              />
            </div>
          </div>

          <div className="mb-8">
            <Label className="text-base mb-3 block">Additional Services (optional)</Label>
            <div className="grid grid-cols-2 gap-3">
              {["Packing", "Heavy Lifting", "Furniture Assembly", "Cleaning"].map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 p-3 border border-gold/20 rounded-lg cursor-pointer hover:border-gold/40 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={services.includes(service)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setServices([...services, service]);
                      } else {
                        setServices(services.filter((s) => s !== service));
                      }
                    }}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <Button
            onClick={calculateEstimate}
            variant="gold"
            className="w-full mb-6"
            disabled={!moveSize || !distance}
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Estimate
          </Button>

          {estimate !== null && (
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 text-center animate-fade-in">
              <DollarSign className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Estimated Cost</div>
              <div className="text-4xl font-heading font-bold text-gold mb-2">
                ${estimate.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                This is a rough estimate. Contact us for an accurate quote based on your specific needs.
              </p>
            </div>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Prices are estimates only and may vary based on specific requirements, timing, and other factors.
        </p>
      </div>
    </section>
  );
};
