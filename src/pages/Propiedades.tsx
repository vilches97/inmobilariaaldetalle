import { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import ScrollReveal from "@/components/ScrollReveal";

const Propiedades = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const filtered = properties.filter((p) => {
    if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (type && p.type !== type) return false;
    if (maxPrice && p.price > Number(maxPrice)) return false;
    if (bedrooms && p.bedrooms < Number(bedrooms)) return false;
    return true;
  });

  const selectClass = "px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <main className="pt-20">
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Propiedades</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              <option value="">Todas las ubicaciones</option>
              <option value="Martos">Martos</option>
              <option value="Fuengirola">Fuengirola</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              <option value="">Todos los tipos</option>
              <option value="Piso">Piso</option>
              <option value="Apartamento">Apartamento</option>
            </select>
            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={selectClass}>
              <option value="">Cualquier precio</option>
              <option value="200000">Hasta 200.000 €</option>
              <option value="300000">Hasta 300.000 €</option>
              <option value="500000">Hasta 500.000 €</option>
            </select>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={selectClass}>
              <option value="">Dormitorios</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg py-16">No se han encontrado propiedades con estos filtros.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property, i) => (
                <ScrollReveal key={property.id} delay={i * 100}>
                  <PropertyCard property={property} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Propiedades;
