import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesDetailed from "@/components/ServicesDetailed";
import OurServicesOverview from "@/components/OurServicesOverview";
import ContactCTA from "@/components/ContactCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10 flex flex-col pt-10">
      <Navbar />
      <main className="flex-1 w-full bg-background relative z-10">
        {/* Hero Section */}
        <div className="w-full relative bg-background">
          <ServicesHero />
        </div>

        {/* Services Grid */}
        <div className="w-full relative bg-background">
          <ServicesDetailed />
        </div>

        {/* Why Choose THITEX Section */}
        <div className="w-full relative bg-[#F8F9FA] dark:bg-black/20">
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

export default Services;
