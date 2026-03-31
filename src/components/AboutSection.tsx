import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Target, ShieldCheck } from "lucide-react";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

const principles = [
  {
    icon: Zap,
    title: "Engineering Excellence",
    description: "We don't just write code; we architect systems. Every solution is built for supreme performance, scalability, and maintainability."
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    description: "Technology is only useful if it solves real problems. We align our technical execution strictly with your core business objectives."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "From rigorous automated testing to pixel-perfect design implementation, we hold ourselves to the absolute highest industry standards."
  },
  {
    icon: CheckCircle2,
    title: "Transparent Execution",
    description: "No black boxes. We maintain clear communication, agile feedback loops, and pure transparency throughout the development lifecycle."
  }
];

const companyStatements = [
  {
    tag: "Our Philosophy",
    heading: "\"We don't just write code. We build unfair advantages.\"",
    indicator: "Digital Excellence"
  },
  {
    tag: "Our Mission",
    heading: "\"To transform complex problems into elegant, scalable architecture.\"",
    indicator: "Global Impact"
  },
  {
    tag: "Our Standard",
    heading: "\"Zero technical debt. Uncompromising quality in every commit.\"",
    indicator: "Engineering Elite"
  }
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companyStatements.length);
    }, 4500); // Change statement every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="px-6 lg:px-10 py-24 max-w-5xl mx-auto flex flex-col items-center">
      
      {/* 1. Full-Width Dynamic Header (No Rectangles, No Cutting) */}
      <div className="w-full text-center flex flex-col items-center justify-center min-h-[220px] md:min-h-[200px] mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease }}
            className="w-full max-w-4xl"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary/80 font-semibold">
                {companyStatements[currentIndex].tag}
              </span>
            </div>
            
            <h2 className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.2] tracking-tight">
              {companyStatements[currentIndex].heading.split('. ').map((part, i, arr) => (
                <span key={i} className={i === 1 ? "text-primary italic font-medium ml-2" : ""}>
                  {part}{i !== arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Simple, Direct Company Context */}
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="w-full text-center space-y-6 max-w-3xl border-t border-border/5 pt-12"
      >
        <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
          THITEX is a premium software development agency specializing in scalable web applications, high-performance backend systems, and intuitive user experiences. We focus on delivering <span className="text-foreground font-medium">clean code and robust architecture</span> that truly scales.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
          Whether you need to modernize an existing platform or build complex enterprise infrastructure from scratch, our team of dedicated engineers operates efficiently to deliver secure, reliable, and intelligent solutions perfectly tailored to your business goals.
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto divider my-24 opacity-50" />

      {/* 3. Core Principles Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 items-center text-center">
          <p className="font-mono-tech text-primary mb-4 uppercase tracking-widest text-sm">Our Methodology</p>
          <h3 className="font-display font-semibold text-foreground text-3xl md:text-5xl">The Core Principles</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="flex flex-col p-8 md:p-10 rounded-[2rem] border border-border/5 bg-white/50 dark:bg-black/5 hover:bg-white dark:hover:bg-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                <principle.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h4 className="font-display font-semibold text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors duration-300">{principle.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
