import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Palette, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Code2,
    number: "01",
    title: "Website & App Development",
    subtitle: "Enterprise-grade platforms engineered for scale and reliability.",
    description: "We architect and build web and mobile applications designed to handle millions of transactions while maintaining exceptional performance. From cloud infrastructure planning to deployment, we engineer systems that scale predictably, maintain security across growth phases, and deliver seamless experiences across all devices. Every line of code is optimized for performance, reliability, and maintainability.",
    features: ["Full-Stack Custom Development", "Cloud-Native Architecture (Kubernetes, AWS, GCP, Azure)", "RESTful & GraphQL API Design", "Progressive Web Applications", "Mobile-First Responsive Design", "Zero-Downtime Deployments"]
  },
  {
    icon: Brain,
    number: "02",
    title: "AI & Machine Learning Solutions",
    subtitle: "Intelligent systems that learn, adapt, and drive measurable outcomes.",
    description: "We design and deploy machine learning systems that solve real business problems—from predictive analytics and real-time anomaly detection to natural language processing and computer vision. Each model is built with production-grade monitoring, explainability, and continuous retraining pipelines to ensure long-term accuracy, transparency, and measurable business impact.",
    features: ["Predictive Analytics & Forecasting", "Large Language Models & LLM Integrations", "Intelligent Workflow Automation", "Real-Time Anomaly Detection", "Computer Vision Systems", "Natural Language Processing & Chatbots"]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Custom Platform Architecture",
    subtitle: "Bespoke solutions engineered from first principles for your unique needs.",
    description: "Off-the-shelf solutions rarely provide competitive advantage. We design and build custom platforms tailored to your specific workflows, operational requirements, and growth trajectory. Whether you need a proprietary SaaS application, an internal operational hub, or a next-generation digital marketplace, we architect solutions that compound value over time.",
    features: ["Custom Platform Design & Architecture", "Multi-Tenant System Implementation", "Enterprise Integration & API Layer", "White-Label & Modular Solutions", "Microservices & Scalable Backend", "Advanced Data Pipeline & Analytics"]
  },
  {
    icon: Palette,
    number: "04",
    title: "Strategic Design & User Experience",
    subtitle: "Interfaces and experiences that delight users and drive adoption.",
    description: "Product excellence requires design excellence. We conduct deep user research, develop data-informed design strategies, and craft intuitive interfaces that serve complex business requirements beautifully. Our design systems ensure consistency across platforms while reducing maintenance overhead and accelerating time-to-market.",
    features: ["User Research & Discovery Workshops", "Wireframing, Prototyping & User Testing", "Design System & Component Libraries", "Accessibility & Compliance (WCAG 2.1, GDPR)", "Conversion Rate & Performance Optimization", "Brand Strategy & Visual Identity"]
  },
];

const ServicesDetailed = () => {
  return (
    <section className="px-6 lg:px-10 pt-20 pb-32 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mb-24 mt-10 md:mt-16 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/10 bg-primary/5 mb-6">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <span className="font-mono-tech text-primary text-xs font-semibold tracking-widest">WHAT WE DELIVER</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-foreground">
          Four integrated pillars of excellence
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We combine technical depth, strategic thinking, and operational discipline to deliver transformative digital solutions. Every service is designed to work seamlessly with the others, ensuring cohesive, scalable outcomes.
        </p>
      </motion.div>

      {/* 2. Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="glass-panel glass-panel-hover rounded-[2.5rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-border/30 hover:border-primary/30"
          >
            {/* Background Glow - Enhanced */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/15 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-primary/3 rounded-full blur-[80px] group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-700 pointer-events-none opacity-50" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground group-hover:scale-110 shadow-sm transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="font-mono-tech text-primary/30 text-4xl font-light group-hover:text-primary/50 transition-colors duration-500">{service.number}</span>
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-mono-tech text-primary/70 text-xs tracking-wider mb-6 font-medium">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 flex-1">
                {service.description}
              </p>

              <div>
                <p className="font-mono-tech text-muted-foreground text-xs mb-4 font-semibold tracking-wider">KEY FEATURES</p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-border/10 group-hover:border-border/30 transition-colors">
                <Link to="/contact" className="inline-flex items-center gap-2 font-mono-tech text-sm text-primary hover:text-primary/70 transition-colors group/link w-max font-medium">
                  Discuss this service <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailed;
