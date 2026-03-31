import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="THITEX" className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 duration-300" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {["Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-mono-tech text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/products"
              className="font-mono-tech text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Products
            </Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 font-mono-tech text-primary hover:text-foreground transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
            Available for Projects
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground -mr-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-panel px-6 py-8 mx-4 rounded-2xl">
          {["Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-mono-tech text-muted-foreground hover:text-foreground py-3 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
