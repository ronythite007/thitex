import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <p className="font-mono-tech text-primary mb-4">Get in Touch</p>
          <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl mb-8">
            Let's build
            <br />something great
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you have a clear vision or a rough idea, we'd love to hear about it. Every great product starts with a conversation.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
              <div>
                <p className="font-mono-tech text-muted-foreground mb-1">Email</p>
                <a href="mailto:hello@thitex.com" className="text-foreground hover:text-primary transition-colors duration-300">hello@thitex.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
              <div>
                <p className="font-mono-tech text-muted-foreground mb-1">Phone</p>
                <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors duration-300">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
              <div>
                <p className="font-mono-tech text-muted-foreground mb-1">Address</p>
                <p className="text-foreground">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Github className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[2.5rem] p-8 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle inside glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          
          <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display font-semibold text-2xl mb-8">Send a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Name" className="glass-input w-full bg-white/50 dark:bg-black/5" />
              <input type="email" placeholder="Email" className="glass-input w-full bg-white/50 dark:bg-black/5" />
            </div>
            <input type="text" placeholder="Company" className="glass-input w-full bg-white/50 dark:bg-black/5" />
            <textarea placeholder="Tell us about your project..." rows={5} className="glass-input w-full resize-none bg-white/50 dark:bg-black/5" />
            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-xl font-mono-tech bg-primary text-primary-foreground tracking-wider hover:shadow-[0_8px_30px_hsla(0,0%,0%,0.2)] hover:-translate-y-1 hover:bg-foreground active:scale-[0.98] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
