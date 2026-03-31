import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 lg:px-10 pb-16 pt-32 max-w-7xl mx-auto overflow-hidden">
      <ParticleBackground />

      {/* Top-right status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease }}
        className="absolute top-28 right-6 lg:right-10 text-right hidden md:block z-10"
      >
        <p className="font-mono-tech text-muted-foreground">Based in</p>
        <p className="font-mono-tech text-foreground/60 mt-1">Global · Remote</p>
      </motion.div>

      {/* Grid line decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground/[0.04]" />
      </div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-mono-tech text-primary mb-8"
        >
          Software · AI/ML · Design · Marketing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display font-bold text-gradient max-w-4xl"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}
        >
          We architect
          <br />
          digital excellence
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="text-muted-foreground max-w-md leading-relaxed">
            High-performance engineering and AI integration for enterprises ready to lead the next technological shift.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 md:mt-0 lg:ml-8">
            <Link
              to="/services"
              className="group flex items-center gap-3 font-mono-tech text-foreground hover:text-primary transition-colors duration-300"
            >
              Explore
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full font-mono-tech bg-primary text-primary-foreground hover:shadow-[0_4px_20px_hsla(0,0%,0%,0.15)] active:scale-[0.97] transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="divider mt-16" />
    </section>
  );
};

export default HeroSection;
