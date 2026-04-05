import { Link } from "react-router-dom";
import { ClipboardCheck, Camera, Globe, FileSignature } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: ClipboardCheck, title: "Valoración gratuita", text: "Estudiamos tu vivienda y el mercado para darte el mejor precio." },
  { icon: Camera, title: "Reportaje profesional", text: "Fotografías y vídeos profesionales para destacar tu propiedad." },
  { icon: Globe, title: "Publicación en portales", text: "Tu vivienda en los principales portales inmobiliarios y redes sociales." },
  { icon: FileSignature, title: "Venta y firma en notaría", text: "Te acompañamos hasta la firma, con total tranquilidad." },
];

const Vender = () => (
  <main className="pt-20">
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <ScrollReveal>
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">Servicio de venta</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Vender mi casa</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Te ofrecemos un servicio integral para vender tu vivienda al mejor precio, con acompañamiento profesional en cada paso.
          </p>
        </ScrollReveal>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 150}>
              <div className="flex gap-6 p-8 bg-card rounded-xl border border-border hover-lift">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-light shrink-0">
                  <step.icon className="w-6 h-6 text-secondary" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Link to="/contacto" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors text-lg">
              Solicitar valoración gratuita
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Vender;
