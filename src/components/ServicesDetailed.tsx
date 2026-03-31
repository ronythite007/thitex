import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Palette, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Code2,
    number: "01",
    title: "Software Engineering",
    subtitle: "Enterprise-grade web and mobile applications.",
    description: "We architect scalable, high-performance web platforms and mobile applications. Our engineering team focuses on writing clean, maintainable code using modern frameworks to ensure your product can handle millions of users seamlessly.",
    features: ["Custom Software Development", "Cloud-Native Architecture", "API Integration & Dev", "Legacy System Modernization"]
  },
  {
    icon: Brain,
    number: "02",
    title: "AI & Machine Learning",
    subtitle: "Turn your data into a competitive advantage.",
    description: "Integrate cutting-edge artificial intelligence into your business operations. We build custom machine learning models, natural language processors, and predictive algorithms that automate workflows and generate unique insights.",
    features: ["Predictive Analytics", "Large Language Models (LLMs)", "Workflow Automation", "Computer Vision Systems"]
  },
  {
    icon: Palette,
    number: "03",
    title: "Product Design (UI/UX)",
    subtitle: "Beautiful interfaces that drive conversions.",
    description: "Great software requires great design. We conduct extensive user research to create intuitive, frictionless digital experiences. Our pixel-perfect interfaces are designed to delight users and maximize key business metrics.",
    features: ["User Research & Strategy", "Wireframing & Prototyping", "Design System Creation", "Conversion Rate Optimization"]
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Growth & Marketing",
    subtitle: "Scale your user base aggressively.",
    description: "Building the product is only half the battle. We deploy data-driven digital marketing strategies, advanced technical SEO, and targeted ad campaigns to ensure your product reaches its exact target audience.",
    features: ["Technical SEO", "Performance Marketing", "Data Analytics Setup", "Growth Hacking"]
  },
];

const ServicesDetailed = () => {
  return (
    <section className="px-6 lg:px-10 pt-20 pb-32 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mb-24 mt-10 md:mt-16 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/10 bg-primary/5 mb-6">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <span className="font-mono-tech text-primary text-xs font-semibold tracking-widest">OUR EXPERTISE</span>
        </div>
        <h1 className="font-display font-bold text-gradient text-4xl md:text-6xl mb-6 leading-tight">
          Comprehensive digital solutions
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          From concept to deployment, we provide the full spectrum of technical services required to launch and scale industry-leading products.
        </p>
      </motion.div>

      {/* 2. Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="glass-panel glass-panel-hover rounded-[2.5rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/20 border border-border/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="font-mono-tech text-primary/20 text-4xl font-light">{service.number}</span>
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="font-display font-bold text-foreground text-3xl mb-2 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-mono-tech text-primary text-xs tracking-wider mb-6">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 flex-1">
                {service.description}
              </p>

              <div>
                <p className="font-mono-tech text-muted-foreground text-xs mb-4">KEY FEATURES</p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-border/5">
                <Link to="/contact" className="inline-flex items-center gap-2 font-mono-tech text-sm text-primary hover:text-primary/70 transition-colors group/link w-max">
                  Discuss this service <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailed;
