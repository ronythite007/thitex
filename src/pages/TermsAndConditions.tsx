import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 font-mono-tech text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
        <p className="font-mono-tech text-muted-foreground mb-16">Last updated: March 20, 2026</p>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the THITEX website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Services</h2>
            <p>THITEX provides software engineering, AI/ML integration, digital marketing, and UI/UX design services. The scope, deliverables, and timelines for each project are defined in individual service agreements between THITEX and the client.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
            <p>All content, designs, code, and materials created by THITEX remain the intellectual property of THITEX until full payment is received and ownership is explicitly transferred as outlined in the project agreement. The THITEX name, logo, and branding are registered trademarks.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Payment Terms</h2>
            <p>Payment terms are specified in individual project proposals. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may incur additional fees as outlined in your service agreement.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of a project. This obligation survives the termination of any agreement between the parties.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>THITEX shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Termination</h2>
            <p>Either party may terminate a service agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through arbitration before pursuing litigation.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Changes to Terms</h2>
            <p>THITEX reserves the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Contact</h2>
            <p>For questions regarding these terms, contact us at <a href="mailto:legal@thitex.com" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">legal@thitex.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
