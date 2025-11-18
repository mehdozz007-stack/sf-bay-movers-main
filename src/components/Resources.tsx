import { Download, FileText, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import { 
  movingChecklistContent, 
  packingTipsContent, 
  firstDayEssentialsContent 
} from "@/lib/pdfContent";

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
  const generatePDF = (content: any, filename: string) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    // Helper function to check if we need a new page
    const checkNewPage = (heightNeeded: number) => {
      if (yPosition + heightNeeded > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
        return true;
      }
      return false;
    };

    // Helper function to add wrapped text
    const addText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, maxWidth);
      
      lines.forEach((line: string) => {
        checkNewPage(fontSize / 2);
        doc.text(line, margin, yPosition);
        yPosition += fontSize / 2;
      });
    };

    // Title
    doc.setFillColor(184, 134, 11); // Gold color
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(content.title, maxWidth);
    let titleY = 15;
    titleLines.forEach((line: string) => {
      doc.text(line, pageWidth / 2, titleY, { align: "center" });
      titleY += 8;
    });

    if (content.subtitle) {
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(content.subtitle, pageWidth / 2, titleY + 5, { align: "center" });
    }

    yPosition = 50;

    // Intro text if available
    if (content.intro) {
      doc.setTextColor(0, 0, 0);
      addText(content.intro, 10, false);
      yPosition += 5;
    }

    // Sections
    content.sections.forEach((section: any) => {
      checkNewPage(20);
      
      // Section header with icon
      const headerText = section.icon ? `${section.icon} ${section.timeline || section.category}` : (section.timeline || section.category);
      doc.setFillColor(240, 240, 240);
      doc.rect(margin - 5, yPosition - 5, maxWidth + 10, 12, 'F');
      doc.setTextColor(184, 134, 11); // Gold
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(headerText, margin, yPosition + 3);
      yPosition += 15;

      // Tasks or tips or items
      const items = section.tasks || section.tips || section.items || [];
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);

      items.forEach((item: string) => {
        const lines = doc.splitTextToSize(item, maxWidth - 10);
        checkNewPage(lines.length * 5 + 2);
        
        // Bullet point
        doc.circle(margin + 2, yPosition - 1, 0.8, 'F');
        
        lines.forEach((line: string, index: number) => {
          doc.text(line, margin + 6, yPosition);
          yPosition += 4;
        });
        yPosition += 1;
      });

      yPosition += 5;
    });

    // Footer
    checkNewPage(40);
    yPosition += 10;
    doc.setFillColor(50, 50, 50);
    doc.rect(0, yPosition - 5, pageWidth, 50, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(content.footer.company, pageWidth / 2, yPosition + 5, { align: "center" });
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(content.footer.address, pageWidth / 2, yPosition + 12, { align: "center" });
    doc.text(`Phone: ${content.footer.phone}  |  Email: ${content.footer.email}`, pageWidth / 2, yPosition + 17, { align: "center" });
    
    if (content.footer.tagline) {
      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.text(content.footer.tagline, pageWidth / 2, yPosition + 23, { align: "center" });
    }
    
    if (content.footer.note) {
      doc.setFontSize(8);
      doc.text(content.footer.note, pageWidth / 2, yPosition + 28, { align: "center" });
    }

    // Save the PDF
    doc.save(filename);
  };

  const handleDownload = (resourceTitle: string) => {
    let content;
    let filename;

    switch (resourceTitle) {
      case "Moving Checklist":
        content = movingChecklistContent;
        filename = "SF-Moving-Complete-Moving-Checklist.pdf";
        break;
      case "Packing Tips":
        content = packingTipsContent;
        filename = "SF-Moving-Expert-Packing-Tips.pdf";
        break;
      case "First Day Essentials":
        content = firstDayEssentialsContent;
        filename = "SF-Moving-First-Day-Essentials.pdf";
        break;
      default:
        return;
    }

    generatePDF(content, filename);
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
