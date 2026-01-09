import { Sparkles, Shield, Smile, Zap, Heart, Clock } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments that brighten your smile by several shades in just one visit.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive exams, cleanings, and personalized prevention plans to maintain optimal oral health.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers designed to enhance your natural beauty.",
  },
  {
    icon: Zap,
    title: "Invisalign®",
    description: "Clear aligner therapy for straighter teeth without the look of traditional braces.",
  },
  {
    icon: Heart,
    title: "Restorative Care",
    description: "Crowns, bridges, and implants that restore function and aesthetics seamlessly.",
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "Same-day appointments available for dental emergencies when you need us most.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine cleanings to complete smile transformations, we offer 
            a full range of services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card p-8 rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
