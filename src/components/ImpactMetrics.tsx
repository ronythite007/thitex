import { motion } from "framer-motion";

const metrics = [
  { value: "50+", label: "Enterprise Projects" },
  { value: "99.9%", label: "Systems Uptime" },
  { value: "0", label: "Security Breaches" },
  { value: "$2B+", label: "Volume Managed" }
];

const ImpactMetrics = () => {
  return (
    <div className="w-full mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center text-center relative ${
              i % 2 !== 0 ? "border-l border-border/10" : "lg:border-l lg:border-border/10"
            } ${i === 0 ? "lg:border-none" : ""}`}
          >
            <h4 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3 tracking-tight">
              {metric.value}
            </h4>
            <p className="font-mono-tech text-xs md:text-sm text-primary uppercase tracking-widest">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;
