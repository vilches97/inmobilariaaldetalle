import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Propiedades", path: "/propiedades" },
  { label: "Vender mi casa", path: "/vender" },
  { label: "Sobre mí", path: "/sobre-mi" },
  { label: "Opiniones", path: "/opiniones" },
  { label: "Contacto", path: "/contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
            A<span className="text-secondary">❤</span>D
          </span>
          <span className="hidden sm:block font-heading text-sm tracking-widest uppercase text-muted-foreground">
            Inmobiliaria Al Detalle
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === item.path ? "text-secondary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+34660822496"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            660 82 24 96
          </a>
        </div>

        <button
          onClick={handleMenuToggle}
          className="lg:hidden text-foreground p-2 rounded-md hover:bg-accent/20 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-card border-t border-border transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`text-base font-medium py-3 px-2 rounded-md transition-colors duration-200 ${
                location.pathname === item.path 
                  ? "text-secondary bg-secondary/10" 
                  : "text-foreground hover:bg-accent/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+34660822496"
            className="flex items-center gap-2 text-base font-medium text-secondary py-3 px-2 rounded-md hover:bg-secondary/10 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            660 82 24 96
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
