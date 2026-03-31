import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as [number, number, number, number];

const ContactCTA = () => {
  return (
    <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="glass-panel w-full max-w-4xl rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10">
          <p className="font-mono-tech text-primary mb-4">Get Started</p>
          <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl mb-6">
            Ready to build something great?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Whether you have a clear vision or a rough idea, we'd love to hear about it. Every great product starts with a conversation.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-mono-tech text-sm bg-primary text-primary-foreground hover:shadow-[0_4px_20px_hsla(0,0%,0%,0.2)] hover:-translate-y-1 active:scale-[0.97] transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
