import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="rounded-3xl bg-gradient-card border border-border p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Let's discuss how RedAnt Technologies can help you achieve your digital goals.
                Get in touch for a free consultation.
              </p>

              <Button variant="hero" size="xl" className="mb-12">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-border">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">techredant@gmail.com</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">+254 795 018 451</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
