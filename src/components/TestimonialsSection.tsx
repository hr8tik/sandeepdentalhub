import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "Patient since 2019",
    content: "Dr. Mitchell transformed my smile with veneers and I couldn't be happier. Her attention to detail and gentle approach made the entire process comfortable and stress-free.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Patient since 2020",
    content: "As someone with dental anxiety, I was amazed at how relaxed I felt during my visits. The whole team goes above and beyond to make you feel comfortable.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Patient since 2018",
    content: "The best dental experience I've ever had. Professional, modern office with state-of-the-art technology. Dr. Mitchell really takes the time to explain everything.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from some of our wonderful patients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-card p-8 rounded-2xl border border-border/50 shadow-soft animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
