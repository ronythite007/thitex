import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 font-mono-tech text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="font-mono-tech text-muted-foreground mb-16">Last updated: March 20, 2026</p>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, company name, and project details when you fill out our contact form or engage our services. We also collect usage data through cookies and analytics tools.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your information is used to provide and improve our services, communicate with you about projects, send relevant updates, and analyze website usage to enhance user experience. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Data Storage & Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest. Data is stored on secure servers and access is limited to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
            <p>Our website uses essential cookies for functionality and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <p>We may use third-party services such as analytics providers, hosting services, and payment processors. These services have their own privacy policies and we encourage you to review them.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You may also request data portability or object to processing. To exercise these rights, contact us at <a href="mailto:privacy@thitex.com" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">privacy@thitex.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
            <p>We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
            <p>Our services are not directed at individuals under 16. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Updates to This Policy</h2>
            <p>We may update this privacy policy periodically. We will notify you of significant changes by posting the updated policy on our website with a revised effective date.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
