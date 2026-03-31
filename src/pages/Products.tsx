import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import imgAether from "@/assets/product-aether.png";
import imgVaultline from "@/assets/product-vaultline.png";
import imgCortex from "@/assets/product-cortex.png";
import imgMeridian from "@/assets/product-meridian.png";
import imgPrism from "@/assets/product-prism.png";
import imgNomnom from "@/assets/product-nomnom.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const products = [
  {
    name: "Data & Analytics Platforms",
    tag: "AI · Data Platform",
    description:
      "Enterprise-grade analytics platforms featuring real-time dashboards, anomaly detection, and predictive forecasting tailored for your business needs.",
    image: imgAether,
    stack: ["React", "Python", "TensorFlow", "AWS"],
  },
  {
    name: "FinTech & Banking Solutions",
    tag: "FinTech · Mobile Banking",
    description:
      "Secure, encrypted banking applications with multi-party authorization, instant transfers, and compliance automation across regulatory frameworks.",
    image: imgVaultline,
    stack: ["React Native", "Go", "PostgreSQL", "GCP"],
  },
  {
    name: "Healthcare Management Systems",
    tag: "Healthcare · Patient App",
    description:
      "Comprehensive patient management systems featuring appointment scheduling, health metrics tracking, and HIPAA-compliant clinician communication.",
    image: imgCortex,
    stack: ["Flutter", "Python", "PyTorch", "Azure"],
  },
  {
    name: "E-Commerce & Retail",
    tag: "E-Commerce · Shopping",
    description:
      "Scalable headless commerce platforms featuring AI-powered personalization, dynamic pricing, and multi-channel orchestration.",
    image: imgMeridian,
    stack: ["Next.js", "Node.js", "Redis", "Stripe"],
  },
  {
    name: "Collaboration & Productivity Tools",
    tag: "Design · Collaboration",
    description:
      "Advanced management tools for distributed teams, including version control, real-time collaboration, and streamlined workflows.",
    image: imgPrism,
    stack: ["React", "Rust", "WebAssembly", "Cloud Infrastructure"],
  },
  {
    name: "On-Demand Services",
    tag: "Logistics · Delivery",
    description:
      "High-performance on-demand delivery applications with real-time order tracking, smart routing, and seamless customer experiences.",
    image: imgNomnom,
    stack: ["React Native", "Node.js", "MongoDB", "Mapbox"],
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 lg:px-10 pt-32 pb-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono-tech text-muted-foreground hover:text-foreground transition-colors duration-300 mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <p className="font-mono-tech text-primary mb-4">Our Products</p>
          <h1
            className="font-display font-bold text-gradient max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Digital Solutions
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
            From concept to deployment — explore the diverse range of robust platforms, enterprise systems, and custom software we engineer.
          </p>
        </motion.div>

        <div className="divider mt-12" />
      </section>

      {/* Product Showcase */}
      <section className="px-6 lg:px-10 pb-32 max-w-7xl mx-auto">
        <div className="space-y-16">
          {paginatedProducts.map((product, index) => {
            const globalIndex = (currentPage - 1) * itemsPerPage + index;
            const isEven = globalIndex % 2 === 0;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="glass-panel glass-panel-hover rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative overflow-hidden group/card"
              >
                {/* Background glow effect on the card */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl group-hover/card:bg-primary/10 transition-colors duration-700 pointer-events-none" />

                {/* Info Container */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center relative z-10 ${isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-mono-tech text-xs font-bold">
                      0{globalIndex + 1}
                    </span>
                    <span className="font-mono-tech text-primary tracking-wider font-semibold">{product.tag}</span>
                  </div>
                  
                  <h2 className="font-display font-bold text-foreground text-3xl md:text-5xl mt-2 mb-6 tracking-tight leading-tight group-hover/card:text-primary transition-colors duration-500">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-lg mb-10">
                    {product.description}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl font-mono-tech text-xs bg-black/5 text-foreground/80 hover:bg-black/10 transition-colors duration-300 border border-black/5 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Phone mockup */}
                <div className={`w-full md:w-1/2 flex justify-center relative z-10 ${isEven ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                  <div className="relative group">
                    <div
                      className="absolute inset-0 rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: "radial-gradient(circle, hsla(0,0%,0%,0.08) 0%, transparent 60%)",
                        transform: "scale(1.3)",
                      }}
                    />
                    <img
                      src={product.image}
                      alt={`${product.name} platform preview`}
                      className="w-64 md:w-72 lg:w-80 object-contain drop-shadow-2xl group-hover:translate-y-[-10px] scale-95 group-hover:scale-100 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-20">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/50 dark:bg-black/5 border border-border/10 shadow-sm backdrop-blur-md">
              <button
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="p-3 rounded-xl font-mono-tech text-xs flex items-center gap-2 text-foreground hover:bg-white dark:hover:bg-black/20 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              
              <div className="flex gap-1.5 px-4 border-x border-border/10">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-xl font-mono-tech text-sm flex items-center justify-center transition-all ${
                      currentPage === i + 1
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "text-muted-foreground hover:bg-white dark:hover:bg-black/20 hover:text-foreground"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl font-mono-tech text-xs flex items-center gap-2 text-foreground hover:bg-white dark:hover:bg-black/20 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Products;
