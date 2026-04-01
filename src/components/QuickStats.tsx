import { motion } from "framer-motion";
import FloatingElement from "./FloatingElement";

const stats = [
  { value: "40+", label: "Enterprise Clients" },
  { value: "2M+", label: "Active Users" },
  { value: "99.99%", label: "System Uptime" }
];

const QuickStats = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-8 px-6 rounded-xl bg-white dark:bg-black/10 border border-border/5"
            >
              <FloatingElement delay={i * 0.5}>
                <h4 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 tracking-tight">
                  {stat.value}
                </h4>
              </FloatingElement>
              <p className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
