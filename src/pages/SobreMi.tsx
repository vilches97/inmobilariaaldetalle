import mariaNayas from "@/assets/maria-navas.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const SobreMi = () => (
  <main className="pt-20">
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <img src={mariaNayas} alt="María Navas Romero" className="w-full h-full object-cover" loading="lazy" width={600} height={800} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">Sobre mí</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">María Navas Romero</h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>Soy María Navas Romero, fundadora de Inmobiliaria Al Detalle.</p>
                <p>Tras años trabajando cara al público decidí crear una inmobiliaria diferente: cercana, transparente y enfocada en ayudar realmente a las personas.</p>
                <p>Mi objetivo es ayudarte a vender tu vivienda al mejor precio o encontrar el hogar que estás buscando, acompañándote en cada paso del proceso.</p>
                <p>Creo en el trato humano, la honestidad y el compromiso con cada uno de mis clientes. Cada vivienda tiene una historia, y quiero ser parte de la tuya.</p>
              </div>
              <Link to="/contacto" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors">
                Contacta conmigo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default SobreMi;
