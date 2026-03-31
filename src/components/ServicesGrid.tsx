import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Palette, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code2,
    number: "01",
    title: "Software Engineering",
    description: "Scalable architectures, cloud-native systems, and full-stack applications built for performance and longevity.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI & Machine Learning",
    description: "Custom ML pipelines, intelligent automation, and predictive systems that turn complexity into competitive advantage.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Growth & Marketing",
    description: "Data-driven strategies, performance analytics, and conversion optimization that deliver measurable outcomes.",
  },
  {
    icon: Palette,
    number: "04",
    title: "Product Design",
    description: "Research-informed interfaces that reduce friction, elevate experience, and align every interaction with intent.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <p className="font-mono-tech text-primary mb-4">What We Do</p>
          <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl">
            Core capabilities
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          Four pillars of expertise, each refined through years of solving complex problems for ambitious teams.
        </p>
      </div>

      <div className="space-y-px">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
          >
            <div className="divider" />
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 cursor-default hover:bg-primary/[0.02] rounded-lg px-4 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.02] to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="md:col-span-1 flex items-start relative z-10">
                <span className="font-mono-tech text-muted-foreground group-hover:text-primary transition-colors duration-500">{service.number}</span>
              </div>
              <div className="md:col-span-3 flex items-start gap-3 relative z-10">
                <service.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-foreground text-xl group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-6 md:col-start-6 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="divider" />
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-tech text-sm border border-border/10 bg-white/50 dark:bg-black/5 hover:bg-white dark:hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all duration-300 group"
        >
          Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default ServicesGrid;
