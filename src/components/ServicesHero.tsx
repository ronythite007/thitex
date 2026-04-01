import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ServicesHero = () => {
  return (
    <section className="relative w-full py-32 md:py-48 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-primary/[0.03] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-tech text-primary text-xs font-bold tracking-[0.2em] uppercase">Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[1.1] tracking-tight"
        >
          Services built for <span className="text-primary italic font-light">growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
        >
          We offer comprehensive end-to-end solutions designed to transform your vision into scalable, high-impact digital products. From strategy to deployment, we're here to deliver excellence.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;
