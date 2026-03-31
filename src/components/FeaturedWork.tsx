import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const projects = [
  {
    title: "Global FinTech Architecture",
    description: "Military-grade secure transaction engine handling massive daily volume with ultra-low latency.",
    tag: "Finance"
  },
  {
    title: "Healthcare Data Lake",
    description: "HIPAA-compliant predictive analytics dashboard integrating dozens of disparate hospital systems.",
    tag: "Healthcare"
  },
  {
    title: "Logistics Routing AI",
    description: "Reinforcement learning model optimizing fleet routing for thousands of vehicles across North America.",
    tag: "AI & ML"
  },
  {
    title: "Distributed Commerce System",
    description: "High-availability microservices network built to seamlessly absorb massive retail traffic spikes.",
    tag: "Infrastructure"
  }
];

const FeaturedWork = () => {
  return (
    <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease }}
        >
          <p className="font-mono-tech text-primary mb-4">Featured Work</p>
          <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl">
            Selected projects
          </h2>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-mono-tech text-sm text-foreground hover:text-primary transition-colors group"
          >
            Explore portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Minimal Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden flex flex-col h-full border border-border/10"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />

            <div className="mb-6 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono-tech text-xs tracking-wider">
                {project.tag}
              </span>
            </div>
            
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg flex-1 relative z-10">
              {project.description}
            </p>

            <div className="mt-12 flex items-center justify-between border-t border-border/10 pt-6 relative z-10">
              <Link to="/products" className="font-mono-tech text-sm text-foreground/60 hover:text-primary transition-colors duration-300 inset-0 absolute" aria-label="View case study" />
              <span className="font-mono-tech text-sm text-foreground/40 group-hover:text-foreground transition-colors duration-300">0{i + 1}</span>
              <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative pointer-events-none">
                <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
