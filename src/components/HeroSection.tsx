import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.png";
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary/15 overflow-hidden">
      {/* Content */}
      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Now Accepting New Patients</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-foreground">
              Your Smile, <span className="text-primary">Our Responsibility</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience exceptional dental care in a warm, welcoming environment. Dr. Sandeep Dental Hub combines
              artistry with advanced technology to create beautiful, healthy smiles.
            </p>

            <div className="pt-4">
              <a href="#contact">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" />
                  Schedule Your Visit
                </Button>
              </a>
            </div>
          </div>

          {/* Clinic Image */}
          <div className="hidden lg:block">
            <img 
              src={clinicInterior} 
              alt="Dr. Sandeep Dental Hub clinic interior with modern dental equipment" 
              className="rounded-2xl w-full h-auto object-cover shadow-[0_10px_40px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};
export default HeroSection;
