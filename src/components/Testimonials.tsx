import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const testimonials = [
  {
    quote: "THITEX didn't just write code; they architected a scalable platform that handles 10x our previous volume without breaking a sweat.",
    author: "Elena Rodriguez",
    role: "CTO, FinTech Scale-up"
  },
  {
    quote: "Their engineering standards are unmatched. The delivery was precise, transparent, and entirely transformed our technical capabilities.",
    author: "Marcus Chen",
    role: "VP of Product, Healthcare Tech"
  },
  {
    quote: "Working with them feels like having an elite internal engineering team. They aligned perfectly with our business objectives from day one.",
    author: "Sarah Jenkins",
    role: "Founder, Enterprise SaaS"
  }
];

const Testimonials = () => {
  return (
    <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="font-mono-tech text-primary mb-4"
        >
          Client Reviews
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display font-semibold text-foreground text-3xl md:text-5xl"
        >
          Trusted by industry leaders
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease }}
            className="glass-panel p-10 rounded-[2rem] relative group border border-border/5 hover:border-primary/20 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 shadow-sm"
          >
            <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary transition-colors duration-500" />
            <p className="text-foreground text-lg leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="border-t border-border/10 pt-6">
              <p className="font-display font-bold text-foreground">{t.author}</p>
              <p className="font-mono-tech text-xs text-muted-foreground mt-1 tracking-wide">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
