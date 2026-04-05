import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  { name: "Ana Belén R.", text: "Gran profesional y mejor persona aún. Paciente y educada. La recomiendo 100%." },
  { name: "Vanesa Cueva", text: "Una atención excelente. María tuvo mucha paciencia con nosotros." },
  { name: "Patricia Martos De La Torre", text: "Te ayuda y asesora en todo momento. La recomiendo totalmente." },
  { name: "José Manuel G.", text: "Nos vendió el piso en tiempo récord. Muy profesional y atenta." },
  { name: "Laura Sánchez", text: "Encontramos nuestro hogar gracias a María. Siempre pendiente de todo." },
  { name: "Carlos Ruiz", text: "Transparencia total en todo el proceso. Muy recomendable." },
];

const Opiniones = () => (
  <main className="pt-20">
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
            ))}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Opiniones de clientes</h1>
          <p className="text-muted-foreground text-lg">4.9 / 5 — Más de 50 reseñas verificadas</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <div className="bg-card p-8 rounded-xl border border-border hover-lift h-full">
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
  </main>
);

export default Opiniones;
