import { motion } from "framer-motion";
import { Target, Shield, Handshake } from "lucide-react";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

const OurServicesOverview = () => {
  const benefits = [
    {
      icon: Target,
      title: "Unified execution, no silos",
      description: "Engineers, product strategists, and designers operate as one cohesive unit. This alignment eliminates waste and ensures every decision serves your business goal."
    },
    {
      icon: Shield,
      title: "Risk-managed delivery",
      description: "Feature flags, comprehensive testing, and controlled rollouts mean production changes are validated before they impact users. Reliability is built in, not added afterward."
    },
    {
      icon: Handshake,
      title: "Long-term partnership mentality",
      description: "We invest in your success beyond launch. Continuous optimization, proactive scaling, and strategic iteration are part of our commitment to your growth."
    }
  ];

  return (
    <section className="px-6 lg:px-10 py-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="bg-white/50 dark:bg-black/5 rounded-3xl p-10 md:p-12 border border-border/20 backdrop-blur-sm"
      >
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">Why Organizations Choose THITEX</h3>
        
        <div className="space-y-3 sm:space-y-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-black/10 border border-border/30 hover:border-primary/40 hover:bg-white/80 dark:hover:bg-black/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors text-foreground">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground dark:text-white stroke-[1.5]" />
                </div>
                <div className="flex-1 py-1">
                  <p className="font-semibold text-foreground text-base sm:text-lg group-hover:text-foreground transition-colors mb-1 sm:mb-2">{benefit.title}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServicesOverview;
