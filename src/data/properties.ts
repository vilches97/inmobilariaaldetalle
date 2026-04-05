import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  image: string;
  images: string[];
  description: string;
  floor?: string;
  elevator?: boolean;
  garage?: boolean;
  pool?: boolean;
  terrace?: boolean;
}

export const properties: Property[] = [
  {
    id: "piso-padre-alejandro",
    title: "Piso en Calle Padre Alejandro Recio",
    type: "Piso",
    price: 175000,
    location: "Martos, Jaén",
    area: 100,
    bedrooms: 3,
    bathrooms: 2,
    features: ["Garaje incluido"],
    image: property1,
    images: [property1],
    description: "Amplio piso de 100 m² con 3 dormitorios, 2 baños y garaje incluido en una de las mejores zonas de Martos.",
    garage: true,
  },
  {
    id: "piso-el-moris",
    title: "Piso en Zona El Morís",
    type: "Piso",
    price: 165000,
    location: "Martos, Jaén",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    features: ["Vistas a la Virgen de la Villa"],
    image: property2,
    images: [property2],
    description: "Espectacular piso de 120 m² con vistas privilegiadas a la Virgen de la Villa. 3 dormitorios y 2 baños.",
  },
  {
    id: "apartamento-fuengirola",
    title: "Apartamento en Torreblanca del Sol",
    type: "Apartamento",
    price: 310000,
    location: "Fuengirola, Málaga",
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    features: ["Terraza", "Piscina", "Garaje", "Vistas al mar"],
    image: property3,
    images: [property3],
    description: "Apartamento con vistas al mar en Torreblanca del Sol. Terraza, piscina comunitaria y garaje.",
    garage: true,
    pool: true,
    terrace: true,
  },
];
