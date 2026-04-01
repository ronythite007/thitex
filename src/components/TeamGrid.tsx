import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const team = [
  {
    name: "Alex Sterling",
    role: "Founder & Chief Architect",
    bio: "Former Principal Engineer at Fortune 50. Leading technical vision and systems architecture at THITEX.",
  },
  {
    name: "Elena Rostova",
    role: "Head of AI & Data",
    bio: "PhD in Computational Mathematics. Pioneering our predictive analytics and reinforcement learning models.",
  },
  {
    name: "Marcus Chen",
    role: "VP of Engineering",
    bio: "Scaling distributed systems for over 12 years. Ensures uncompromising code quality across all projects.",
  },
  {
    name: "Sarah Jenkins",
    role: "Design Director",
    bio: "Award-winning UX strategist. Translating complex technical requirements into frictionless human interfaces.",
  }
];

const TeamGrid = () => {
  return (
    <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-border/10 pb-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease }}
        >
          <p className="font-mono-tech text-primary mb-4">About</p>
          <h2 className="font-display font-semibold text-foreground text-4xl md:text-5xl">
            Our team & expertise
          </h2>
        </motion.div>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.1, ease }}
           className="text-muted-foreground text-lg max-w-md"
        >
          We are a collective of experienced technologists delivering reliable, scalable solutions to help your business thrive.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className="group relative"
          >
            {/* Minimal Avatar Placeholder */}
            <div className="w-full aspect-[4/5] bg-[#F8F9FA] dark:bg-black/20 border border-border/10 rounded-[2.5rem] mb-6 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              <div className="w-full h-full bg-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 font-display text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 uppercase tracking-tighter">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Social Links on Hover */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"><Github className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="font-mono-tech text-xs tracking-widest uppercase text-primary/80 mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
