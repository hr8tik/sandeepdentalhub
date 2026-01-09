import dentistImage from "@/assets/dr-sandeep-mallik.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="pt-0 pb-12 md:pb-16 px-4 md:px-8 bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up mt-8 md:mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={dentistImage}
                alt="Dr. Sandeep Mallik, Dental Surgeon"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Dr. Sandeep Mallik</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Dedicated to Your Dental Health & Comfort
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise in general and cosmetic dentistry, I'm committed to providing personalized care that puts
              your comfort first. My approach combines the latest technology with a gentle touch to ensure every visit
              is a positive experience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe that a beautiful smile can transform lives, which is why I take the time to understand your
              unique needs and create customized treatment plans that achieve lasting results.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="font-display font-semibold text-foreground">Education</div>
                <ul className="text-muted-foreground space-y-1">
                  <li>• BDS(Bachelor of Dental Surgery)</li>
                  <li>• Nutrient and Dietary Detox Consultant </li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-display font-semibold text-foreground">Memberships</div>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Indian Dental Association</li>
                  <li>• Colgate Registered Dentist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
