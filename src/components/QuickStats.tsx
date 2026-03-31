import { motion } from "framer-motion";
import FloatingElement from "./FloatingElement";

const stats = [
  { value: "40+", label: "Enterprise Clients" },
  { value: "2M+", label: "Active Users" },
  { value: "99.99%", label: "System Uptime" }
];

const QuickStats = () => {
  return (
    <div className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center text-center w-full"
          >
            <FloatingElement delay={i * 0.5}>
              <h4 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-2 tracking-tight">
                {stat.value}
              </h4>
            </FloatingElement>
            <p className="font-mono-tech text-xs tracking-[0.2em] text-primary uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
