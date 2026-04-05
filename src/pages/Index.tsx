import { Link } from "react-router-dom";
import { Key, Handshake, BarChart3, Star, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mariaNayas from "@/assets/maria-navas.jpg";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  { name: "Ana Belén R.", text: "Gran profesional y mejor persona aún. Paciente y educada. La recomiendo 100%." },
  { name: "Vanesa Cueva", text: "Una atención excelente. María tuvo mucha paciencia con nosotros." },
  { name: "Patricia Martos De La Torre", text: "Te ayuda y asesora en todo momento. La recomiendo totalmente." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Vivienda elegante" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Inmobiliaria en Martos donde cada detalle cuenta
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Te ayudamos a vender tu vivienda y encontrar el hogar perfecto con confianza, cercanía y asesoramiento profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link to="/propiedades" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors duration-300">
              Ver viviendas
            </Link>
            <Link to="/vender" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300">
              Quiero vender mi casa
            </Link>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
              ¿Por qué <span className="text-secondary">elegirnos</span>?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Key, title: "Confianza total", text: "Más de 50 clientes satisfechos nos recomiendan." },
              { icon: Handshake, title: "Trato cercano", text: "Acompañamiento personal durante todo el proceso." },
              { icon: BarChart3, title: "Profesionalidad", text: "Estudio de mercado y estrategia de venta efectiva." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="text-center p-8 rounded-xl hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-light mb-6">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades destacadas */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Propiedades <span className="text-secondary">destacadas</span>
              </h2>
              <Link to="/propiedades" className="hidden sm:flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all">
                Ver todas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <ScrollReveal key={property.id} delay={i * 150}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link to="/propiedades" className="inline-flex items-center gap-2 text-secondary font-medium">
              Ver todas las propiedades <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre la agente */}
      <section className="py-24 bg-card">
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">María Navas Romero</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Soy María Navas Romero, fundadora de Inmobiliaria Al Detalle.</p>
                  <p>Tras años trabajando cara al público decidí crear una inmobiliaria diferente: cercana, transparente y enfocada en ayudar realmente a las personas.</p>
                  <p>Mi objetivo es ayudarte a vender tu vivienda al mejor precio o encontrar el hogar que estás buscando, acompañándote en cada paso del proceso.</p>
                </div>
                <Link to="/sobre-mi" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors duration-300">
                  Conóceme mejor
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lo que dicen nuestros <span className="text-secondary">clientes</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground">4.9 / 5 — Más de 50 reseñas verificadas</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 150}>
                <div className="bg-card p-8 rounded-xl border border-border hover-lift">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
                  <p className="font-semibold text-sm text-muted-foreground">– {review.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vender mi casa CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Quieres vender tu casa?</h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Te ofrecemos una valoración gratuita y un plan de venta personalizado para conseguir el mejor precio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
              {["Valoración gratuita", "Reportaje profesional", "Publicación en portales", "Venta y firma en notaría"].map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-secondary text-secondary font-heading font-bold text-lg mb-3">
                    {i + 1}
                  </span>
                  <p className="text-sm text-primary-foreground/80">{step}</p>
                </div>
              ))}
            </div>
            <Link to="/vender" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors duration-300 text-lg">
              Solicitar valoración gratuita
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
