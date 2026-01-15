import { Code2, Cloud, Shield, Smartphone, Database, Cpu, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored solutions built from the ground up to match your unique business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern enterprises.",
  },
  {
    icon: Globe,
    title: "GIS & Remote Sensing",
    description:
      "Remote sensing and GIS applications that serve complementary roles in geospatial data collection, analysis, and visualization.",
  },

  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent automation and machine learning solutions to optimize your operations.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end technology solutions that drive growth and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
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
