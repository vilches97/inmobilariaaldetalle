import { useState } from "react";
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
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === item.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+34660822496"
              className="flex items-center gap-2 text-base font-medium text-secondary py-2"
            >
              <Phone className="w-4 h-4" />
              660 82 24 96
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
