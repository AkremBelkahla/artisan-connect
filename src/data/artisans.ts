import { Artisan } from "@/components/ArtisanCard";
import artisan1 from "@/assets/artisan-1.jpg";
import artisan2 from "@/assets/artisan-2.jpg";
import artisan3 from "@/assets/artisan-3.jpg";
import artisan4 from "@/assets/artisan-4.jpg";
import artisan5 from "@/assets/artisan-5.jpg";
import artisan6 from "@/assets/artisan-6.jpg";
import artisan7 from "@/assets/artisan-7.jpg";
import artisan8 from "@/assets/artisan-8.jpg";
import artisan9 from "@/assets/artisan-9.jpg";
import artisan10 from "@/assets/artisan-10.jpg";

const artisanImages = [artisan1, artisan2, artisan3, artisan4, artisan5, artisan6, artisan7, artisan8, artisan9, artisan10];

const firstNames = [
  "Jean", "Marie", "Pierre", "Sophie", "Thomas", "Isabelle", "Lucas", "Emma", "Nicolas", "Camille",
  "Antoine", "Julie", "Alexandre", "Claire", "François", "Léa", "Philippe", "Charlotte", "Olivier", "Manon",
  "Vincent", "Chloé", "Guillaume", "Laura", "Julien", "Sarah", "Sébastien", "Pauline", "Mathieu", "Lucie",
  "David", "Marion", "Marc", "Élodie", "Christophe", "Alice", "Patrick", "Caroline", "Stéphane", "Céline",
  "Laurent", "Anaïs", "Maxime", "Mélanie", "Romain", "Aurélie", "Benjamin", "Émilie", "Jérôme", "Margaux"
];

const lastNames = [
  "Dupont", "Martin", "Bernard", "Lefebvre", "Dubois", "Petit", "Moreau", "Rousseau", "Laurent", "Leroy",
  "Simon", "Michel", "Blanc", "Garcia", "David", "Bertrand", "Roux", "Fournier", "Girard", "Bonnet",
  "Durand", "Lambert", "Fontaine", "Roussel", "Vincent", "Muller", "Denis", "Gauthier", "Perrin", "Morel",
  "Dufour", "André", "Mercier", "Blanchard", "Henry", "Rivière", "Leclerc", "Renard", "Clement", "Arnaud",
  "Fabre", "Nicolas", "Guerin", "Boyer", "Lemoine", "Renaud", "Masson", "Barbier", "Noel", "Robin"
];

const specialties = [
  "Plombier", "Électricien", "Menuisier", "Peintre", "Maçon", "Carreleur", "Couvreur", "Serrurier",
  "Chauffagiste", "Paysagiste", "Charpentier", "Vitrier", "Parqueteur", "Plâtrier", "Tapissier"
];

const cities = [
  "Paris 15ème", "Paris 16ème", "Boulogne-Billancourt", "Issy-les-Moulineaux", "Vanves", "Malakoff",
  "Montrouge", "Clamart", "Sèvres", "Meudon", "Neuilly-sur-Seine", "Levallois-Perret", "Courbevoie",
  "Puteaux", "Colombes", "Asnières-sur-Seine", "Clichy", "Saint-Ouen", "Montreuil", "Vincennes"
];

const availabilities = [
  "Disponible aujourd'hui",
  "Disponible demain",
  "Disponible cette semaine",
  "Disponible dans 2 jours",
  "Disponible dans 3 jours",
  "Disponible la semaine prochaine"
];

const generateArtisan = (index: number): Artisan => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[Math.floor(index / firstNames.length) % lastNames.length];
  const name = `${firstName} ${lastName}`;
  const specialty = specialties[index % specialties.length];
  const city = cities[index % cities.length];
  const baseRate = 35 + (index % 30);
  const rating = 4.5 + (Math.random() * 0.5);
  const reviewCount = 20 + Math.floor(Math.random() * 200);
  const distance = (1 + (index % 15)).toFixed(1);
  const verified = index % 5 !== 0;
  
  return {
    id: (index + 1).toString(),
    name,
    specialty,
    location: city,
    distance: `${distance} km`,
    rating: Math.round(rating * 10) / 10,
    reviewCount,
    verified,
    avatar: artisanImages[index % artisanImages.length],
    hourlyRate: `${baseRate}€/h`,
    availability: availabilities[index % availabilities.length]
  };
};

export const artisans: Artisan[] = Array.from({ length: 100 }, (_, i) => generateArtisan(i));
