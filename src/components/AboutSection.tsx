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
    tag: "About THITEX",
    heading: "\"A growth partner for organizations that demand precision, reliability, and speed.\"",
    indicator: "Built for modern enterprises"
  },
  {
    tag: "Our Mission",
    heading: "\"To deliver secure and scalable software systems that power measurable business outcomes.\"",
    indicator: "Business-impact engineering"
  },
  {
    tag: "Our Promise",
    heading: "\"Every project is treated as a strategic initiative with a relentless focus on quality.\"",
    indicator: "Trusted technical leadership"
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
    <section id="about" className="px-6 lg:px-10 py-24 max-w-4xl mx-auto">
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">About THITEX</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">Building resilient software for ambitious organizations</h2>
      </div>

      <div className="mt-16 space-y-5 text-muted-foreground text-lg leading-relaxed">
        <p>
          THITEX is a technology-first design and engineering studio partnering with enterprise and mid-market organizations to build platforms that define markets. We specialize in comprehensive digital solutions: from <span className="text-foreground font-semibold">custom website and application development</span>, to <span className="text-foreground font-semibold">AI and machine learning integration</span>, <span className="text-foreground font-semibold">personalized platform architecture</span>, and <span className="text-foreground font-semibold">strategic visual design</span>.
        </p>
        <p>
          Every engagement starts with deep technical and business discovery. We architect cloud-native systems, implement intelligent automation, and craft interfaces that feel natural while serving complex workflows. Our teams combine backend resilience with predictive intelligence and design excellence—delivering products that work harder, scale further, and delight users.
        </p>
        <p>
          We move with discipline and speed. Rather than inflating timelines or introducing unnecessary complexity, we define success metrics upfront, deliver in measurable increments, and maintain rigorous quality gates throughout the entire lifecycle. The result is software that reduces operational friction, minimizes risk, and compounds competitive advantage.
        </p>
      </div>

      {/* Animated Company Statements Carousel */}
      <div className="mt-16 min-h-[160px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease }}
            className="w-full p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{companyStatements[currentIndex].tag}</p>
            <p className="text-2xl md:text-3xl font-bold text-foreground italic mb-4">{companyStatements[currentIndex].heading}</p>
            <p className="text-sm text-muted-foreground font-medium">{companyStatements[currentIndex].indicator}</p>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Core Principles Grid */}
      <div className="mt-16">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">Our Core Principles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group p-6 rounded-xl border border-border/20 bg-white/30 dark:bg-black/10 hover:border-primary/40 hover:bg-white/50 dark:hover:bg-black/20 transition-all duration-300 backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <Icon className="w-6 h-6 text-foreground dark:text-white stroke-[1.5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-base mb-2">{principle.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      

      
    </section>
  );
};

export default AboutSection;
