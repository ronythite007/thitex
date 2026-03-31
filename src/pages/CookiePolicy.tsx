import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 font-mono-tech text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Cookie Policy</h1>
        <p className="font-mono-tech text-muted-foreground mb-16">Last updated: March 20, 2026</p>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
            <div className="space-y-4">
              <div className="glass-panel rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">Essential Cookies</h3>
                <p className="text-sm">Required for core website functionality such as navigation and security. These cannot be disabled.</p>
              </div>
              <div className="glass-panel rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">Analytics Cookies</h3>
                <p className="text-sm">Help us understand how visitors interact with our website by collecting anonymous usage data.</p>
              </div>
              <div className="glass-panel rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">Preference Cookies</h3>
                <p className="text-sm">Remember your settings and preferences to provide a personalized experience on return visits.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>If you have questions about our cookie practices, contact us at <a href="mailto:privacy@thitex.com" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">privacy@thitex.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
