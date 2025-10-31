import { Download, FileText, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: CheckSquare,
    title: "Moving Checklist",
    description: "Complete timeline and tasks for a stress-free move",
    type: "PDF Guide",
  },
  {
    icon: FileText,
    title: "Packing Tips",
    description: "Expert advice on packing fragile items and valuables",
    type: "PDF Guide",
  },
  {
    icon: FileText,
    title: "First Day Essentials",
    description: "What to pack for your first day in your new home",
    type: "PDF Guide",
  },
];

export const Resources = () => {
  const handleDownload = (resourceTitle: string) => {
    // Create a simple checklist content
    const content = `
S&F MOVING - ${resourceTitle.toUpperCase()}

Thank you for choosing S&F Moving!

This is a placeholder for the ${resourceTitle}. 
Contact us for detailed guides and personalized moving assistance.

S&F Moving
366 Euclid Ave, Oakland, CA 94610
Phone: +1 (510) 703-7904
Email: f.zitouni@sf-moving.com

Visit our website for more information.
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SF-Moving-${resourceTitle.replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">
            Free Moving Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download our expert guides to help you prepare for a smooth, stress-free move.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all hover:shadow-gold animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <resource.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {resource.description}
                </p>
                <div className="text-xs text-gold mb-4">{resource.type}</div>
                <Button
                  variant="goldOutline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleDownload(resource.title)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Need personalized moving advice?{" "}
            <a href="#contact" className="text-gold hover:underline">
              Contact our experts
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
