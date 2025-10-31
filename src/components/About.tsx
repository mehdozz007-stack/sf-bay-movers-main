import { Shield, Users, Award, DollarSign } from "lucide-react";
import managerPhoto from "@/assets/manager-photo-new.jpg";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Users,
    title: "Local Bay Area Crew",
    description: "Experienced professionals who know the area",
  },
  {
    icon: DollarSign,
    title: "Competitive Flat Rates",
    description: "Transparent pricing with no hidden fees",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Years of expertise in all types of moves",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              About S&F Moving
            </h2>
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                S&F Moving is your trusted partner for all moving and logistics needs in the Bay Area. 
                We pride ourselves on delivering exceptional service, from residential relocations to 
                commercial moves and specialized services.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team handles every aspect of your move with care and professionalism. 
                Whether you need heavy lifting, furniture assembly, or post-move cleaning, we're here 
                to make your transition smooth and stress-free.
              </p>
              
              <div className="mt-8 p-6 bg-background border-l-4 border-primary rounded-r-lg">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Fadhel Zitouni — Manager
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📍 366 Euclid Ave, Oakland, CA 94610</p>
                  <p>📞 +1 (510) 703-7904</p>
                  <p>📞 +1 (510) 421-5953</p>
                  <p>✉️ f.zitouni@sf-moving.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
              <img
                src={managerPhoto}
                alt="Fadhel Zitouni, Manager of S&F Moving, standing in front of moving trucks"
                className="relative rounded-2xl border-4 border-primary shadow-gold-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
