import { motion } from "framer-motion";

const clients = [
  "Vertex Analytics",
  "Aura Health",
  "Nexus Financial",
  "Lumina Tech",
  "Quantum Data",
  "Elevate Logistics",
  "Nova Systems",
  "Apex Retail",
  "Horizon Media",
  "Pinnacle Group"
];

const ClientMarquee = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden py-10 relative bg-background">
      <p className="font-mono-tech text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
        Trusted by innovative teams worldwide
      </p>
      
      {/* Left/Right Gradient Fades for Smooth Scroll Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-full">
        <motion.div 
          className="flex space-x-12 md:space-x-20 items-center flex-nowrap shrink-0 pr-12 md:pr-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* Multiply array for seamless infinite loop */}
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-20 shrink-0">
              <span className="font-display font-bold text-2xl md:text-3xl text-foreground/30 dark:text-foreground/40 hover:text-foreground/80 dark:hover:text-foreground/80 cursor-default transition-colors duration-300">
                {client}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientMarquee;
