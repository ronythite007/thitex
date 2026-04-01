import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import AboutPreview from "@/components/AboutPreview";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10">
      <Navbar />
      
      <main className="flex flex-col w-full">
        {/* Hero Area */}
        <div className="relative w-full bg-background z-10">
          <HeroSection />
        </div>

        {/* Quick Stats Area */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-black/20 z-20">
          <QuickStats />
        </div>

        {/* About Preview Area */}
        <div className="w-full relative bg-background z-10">
          <AboutPreview />
        </div>

        {/* Services Preview Area */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-black/20 z-10">
          <ServicesGrid />
        </div>

        {/* Featured Work */}
        <div className="w-full relative bg-background z-10">
          <div className="absolute top-0 right-0 w-[80vw] h-[40vw] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
          <FeaturedWork />
        </div>

        {/* Testimonials */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-black/20 z-10">
          <Testimonials />
        </div>

        {/* Contact CTA Area */}
        <div className="w-full relative bg-background z-10">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -left-[10%] -bottom-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/[0.02] blur-[120px]" />
          </div>
          <ContactCTA />
        </div>
      </main>

      {/* Footer Area */}
      <div className="w-full bg-[#F8F9FA] dark:bg-black/20">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
