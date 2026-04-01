import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/10 flex flex-col pt-10 relative">
      <Navbar />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -right-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>
      <main className="flex-1 w-full relative z-10">
        <ContactSection />
      </main>
      <div className="w-full bg-[#F8F9FA] dark:bg-black/20 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
