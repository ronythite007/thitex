import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import TeamGrid from "@/components/TeamGrid";
import ContactCTA from "@/components/ContactCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10 flex flex-col pt-10 relative">
      <Navbar />
      
      <main className="flex-1 w-full relative z-10 flex flex-col">
        {/* 1. Massive About Hero */}
        <div className="w-full relative bg-background border-b border-border/5">
          <AboutHero />
        </div>

        {/* 2. Intro and Methodology Grid */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-primary/[0.01]">
          <AboutSection />
        </div>

        {/* 3. Leadership Team Grid */}
        <div className="w-full relative bg-background border-y border-border/5">
          <TeamGrid />
        </div>

        {/* 4. Contact CTA */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-primary/[0.02]">
          <ContactCTA />
        </div>
      </main>

      <div className="w-full bg-background border-t border-border/10 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
