import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import OurServicesOverview from "@/components/OurServicesOverview";
import TeamGrid from "@/components/TeamGrid";
import ContactCTA from "@/components/ContactCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10 flex flex-col pt-10 relative">
      <Navbar />
      
      <main className="flex-1 w-full relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="w-full relative bg-background">
          <AboutHero />
        </div>

        {/* About Details Section */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-black/20">
          <AboutSection />
        </div>

        {/* Services Overview Section */}
        <div className="w-full relative bg-background">
          <OurServicesOverview />
        </div>

        {/* Contact CTA Section */}
        <div className="w-full relative bg-background">
          <ContactCTA />
        </div>
      </main>

      <div className="w-full bg-[#F8F9FA] dark:bg-black/20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
