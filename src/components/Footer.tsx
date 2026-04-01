import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02),transparent_50%)] pointer-events-none" />

      <div className="relative px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="divider opacity-30" />

        {/* Newsletter Section */}
        <div className="pt-16 pb-12">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-border/30 bg-background/70 backdrop-blur-sm p-6 md:p-10 shadow-sm">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono-tech mb-6">
                  <Mail className="w-4 h-4" />
                  Stay Updated
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  Get the latest insights
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                  Join our newsletter for exclusive insights on technology, AI innovation, and digital transformation strategies.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/60"
                />
              </div>
              <button
                type="submit"
                className="group px-6 py-4 bg-primary text-primary-foreground rounded-xl font-mono-tech hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

        <div className="divider opacity-30" />

        {/* Footer Links */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="/logo.png"
                alt="THITEX"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Architecting digital excellence through innovative software engineering, AI/ML integration, and strategic growth solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Services</a>
              <a href="/#work" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Portfolio</a>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Products</Link>
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">About</a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Contact</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="divider opacity-30" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} THITEX. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Crafted with precision and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
