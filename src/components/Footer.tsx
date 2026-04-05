import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            A<span className="text-secondary">❤</span>D
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Inmobiliaria Al Detalle. Tu inmobiliaria de confianza en Martos, Jaén.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Enlaces</h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Inicio", path: "/" },
              { label: "Propiedades", path: "/propiedades" },
              { label: "Vender mi casa", path: "/vender" },
              { label: "Opiniones", path: "/opiniones" },
              { label: "Contacto", path: "/contacto" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Cam. Ayozos 39, 23600 Martos, Jaén</span>
            </div>
            <a href="tel:+34660822496" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 shrink-0" />
              660 82 24 96
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Inmobiliaria Al Detalle. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link to="/aviso-legal" className="hover:text-secondary transition-colors">Aviso legal</Link>
          <Link to="/privacidad" className="hover:text-secondary transition-colors">Política de privacidad</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
