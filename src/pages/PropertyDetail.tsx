import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { MapPin, BedDouble, Bath, Maximize, Car, Waves, Home, ArrowLeft, MessageCircle } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Propiedad no encontrada</h1>
          <Link to="/propiedades" className="text-secondary hover:underline">Volver a propiedades</Link>
        </div>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/34660822496?text=${encodeURIComponent(`Hola, me interesa la propiedad: ${property.title} (${property.price.toLocaleString("es-ES")} €)`)}`;

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/propiedades" className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver a propiedades
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" width={800} height={600} />
          </div>

          <div>
            <p className="text-3xl font-heading font-bold text-secondary mb-2">
              {property.price.toLocaleString("es-ES")} €
            </p>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">{property.title}</h1>
            <div className="flex items-center gap-1 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" /> {property.location}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><Maximize className="w-4 h-4 text-secondary" />{property.area} m²</div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><BedDouble className="w-4 h-4 text-secondary" />{property.bedrooms} dormitorios</div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><Bath className="w-4 h-4 text-secondary" />{property.bathrooms} baños</div>
              {property.garage && <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><Car className="w-4 h-4 text-secondary" />Garaje</div>}
              {property.pool && <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><Waves className="w-4 h-4 text-secondary" />Piscina</div>}
              {property.terrace && <div className="flex items-center gap-2 text-sm text-foreground bg-background p-3 rounded-lg"><Home className="w-4 h-4 text-secondary" />Terraza</div>}
            </div>

            {property.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {property.features.map((f) => (
                  <span key={f} className="px-3 py-1 bg-gold-light text-secondary text-sm rounded-full font-medium">{f}</span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-gold-hover transition-colors">
                Contactar para visita
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetail;
