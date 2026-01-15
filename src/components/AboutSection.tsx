import { CheckCircle2 } from "lucide-react";
import teamSilhouette from "@/assets/team-silhouette.png";

const values = [
  "Precision Engineering",
  "Agile Development",
  "Client-Centric Approach",
  "Continuous Innovation",
  "Transparent Communication",
  "Quality Assurance",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Engineered for{" "}
              <span className="text-gradient">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Like our namesake, the red ant, we believe in the power of collaboration, 
              precision, and relentless determination. RedAnt Technologies brings together 
              a colony of expert engineers, designers, and strategists united by a single 
              mission: to build technology that matters.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Since our founding, we've helped businesses of all sizes transform their 
              digital presence and streamline their operations through innovative 
              technology solutions.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-card border border-border overflow-hidden relative">
              {/* Team Silhouette Image */}
              <img 
                src={teamSilhouette} 
                alt="RedAnt team collaboration" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center animate-float backdrop-blur-sm">
                  <span className="font-display text-5xl font-bold text-primary-foreground">R</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-6 py-4 shadow-card">
              <div className="font-display text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
