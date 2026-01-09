import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const whatsappNumber = "919625665226";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    concern: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "919625665226";
    const message = encodeURIComponent(
      `Hello,

I would like to book an appointment at Dr. Sandeep Dental Hub .

Name: ${formData.name}

Phone: ${formData.phone}

Preferred Date: ${formData.date}

Concern: ${formData.concern || "Not specified"}`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    toast.success("Opening WhatsApp to send your appointment request!");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      concern: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  // Get tomorrow's date as minimum selectable date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Get in Touch</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
                Let's Start Your Smile Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to experience exceptional dental care? Contact us today to schedule your appointment or ask any
                questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Phone</div>
                  <a href="tel:+919625665226" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 96256 65226
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Email</div>
                  <a
                    href="mailto:drsandeepdentalhub@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    drsandeepdentalhub@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Location</div>
                  <a
                    href="https://maps.google.com/?q=H-16,+Ground+Floor,+173,+Ratiya+Marg,+Hera+Public+School,+Near+Jain+Mandir,+Sangam+Vihar,+New+Delhi,+Delhi+110080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    H-16, Ground Floor, 173, Ratiya Marg,
                    <br />
                    Hera Public School, Near Jain Mandir,
                    <br />
                    Sangam Vihar, New Delhi, Delhi 110080
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Office Hours</div>
                  <p className="text-muted-foreground">
                    Mon – Sat: 9:00 AM – 5:00 PM & 6:00 PM – 9:00 PM
                    <br />
                    Sunday: 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-card animate-fade-up animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-semibold text-foreground">Request an Appointment</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date <span className="text-destructive">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTomorrowDate()}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="concern" className="block text-sm font-medium text-foreground mb-2">
                  Concern / Message
                </label>
                <textarea
                  id="concern"
                  name="concern"
                  rows={3}
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your health concern..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your appointment details will be sent via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
