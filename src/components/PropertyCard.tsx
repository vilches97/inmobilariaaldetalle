import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react";
import { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => (
  <Link
    to={`/propiedades/${property.id}`}
    className="group block bg-card rounded-lg overflow-hidden hover-lift hover-zoom border border-border"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-full object-cover"
        loading="lazy"
        width={800}
        height={600}
      />
    </div>
    <div className="p-6">
      <p className="text-2xl font-heading font-bold text-secondary mb-1">
        {property.price.toLocaleString("es-ES")} €
      </p>
      <h3 className="font-heading text-lg font-semibold text-foreground mb-3 line-clamp-1">
        {property.title}
      </h3>
      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
        <MapPin className="w-4 h-4" />
        {property.location}
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
        <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{property.area} m²</span>
        <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" />{property.bedrooms}</span>
        <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{property.bathrooms}</span>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
