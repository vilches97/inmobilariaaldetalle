import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ScrollReveal>
              <div>
                <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">Contacto</p>
                <h1 className="font-heading text-4xl font-bold text-foreground mb-8">¿Hablamos?</h1>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">Cam. Ayozos 39, 23600 Martos, Jaén</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Teléfono</p>
                      <a href="tel:+34660822496" className="text-muted-foreground hover:text-secondary transition-colors">660 82 24 96</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@inmobiliariaaldetalle.es</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5!2d-3.97!3d37.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQzJzEyLjAiTiAzwrA1OCcxMi4wIlc!5e0!3m2!1ses!2ses!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Inmobiliaria Al Detalle"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
                {sent ? (
                  <div className="text-center py-12">
                    <p className="text-secondary font-heading text-xl font-semibold mb-2">¡Mensaje enviado!</p>
                    <p className="text-muted-foreground">Nos pondremos en contacto contigo lo antes posible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Nombre" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputClass} />
                    <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    <input type="tel" placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className={inputClass} />
                    <textarea placeholder="Mensaje" required rows={5} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={inputClass + " resize-none"} />
                    <button type="submit" className="w-full px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors">
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
