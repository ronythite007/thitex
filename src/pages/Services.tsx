import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesDetailed from "@/components/ServicesDetailed";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10 flex flex-col pt-10">
      <Navbar />
      <main className="flex-1 w-full bg-background relative z-10">
        <ServicesDetailed />
      </main>
      <div className="w-full bg-[#F8F9FA] dark:bg-primary/[0.02] border-t border-border/10">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
