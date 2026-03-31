import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 font-mono-tech text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Disclaimer</h1>
        <p className="font-mono-tech text-muted-foreground mb-16">Last updated: March 20, 2026</p>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">General Information</h2>
            <p>The information provided on the THITEX website is for general informational purposes only. While we strive to keep the content accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Professional Advice</h2>
            <p>The content on this website does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. For specific advice related to your business needs, please consult with a qualified professional or contact our team directly.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">External Links</h2>
            <p>Our website may contain links to external sites. THITEX has no control over the content and nature of these sites and is not responsible for their content or privacy practices.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Results & Testimonials</h2>
            <p>Case studies, metrics, and testimonials displayed on this website represent specific client outcomes. Individual results may vary based on numerous factors including industry, market conditions, and project scope.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Availability</h2>
            <p>THITEX makes no guarantee that the website will be available at all times. We may experience hardware, software, or other issues that result in interruptions, delays, or errors.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
