import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

const AboutPreview = () => {
  return (
    <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease }}
        >
          <p className="font-mono-tech text-primary mb-4">About Thitex</p>
          <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl mb-8 leading-tight">
            Engineering the <br />future, today.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="flex flex-col justify-center"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            We are an elite collective of software engineers, AI researchers, and UI/UX strategists who believe technology should be an absolute accelerant for ambitious businesses — never an obstacle.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            No bloated timelines, no unnecessary complexity. Just precise, brutally effective work that permanently elevates your operational ceiling.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-mono-tech text-primary hover:text-foreground transition-colors group w-max"
          >
            Learn more about us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
