import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import ArtisanCard from "@/components/ArtisanCard";
import { artisans } from "@/data/artisans";
import { Wrench, Zap, Hammer, Paintbrush } from "lucide-react";
import categoryPlumbing from "@/assets/category-plumbing.jpg";
import categoryElectricity from "@/assets/category-electricity.jpg";
import categoryCarpentry from "@/assets/category-carpentry.jpg";
import categoryPainting from "@/assets/category-painting.jpg";

const Category = () => {
  const { category } = useParams();

  const categoryConfig = {
    plomberie: {
      title: "Plomberie",
      icon: Wrench,
      image: categoryPlumbing,
      specialty: "Plombier",
    },
    electricite: {
      title: "Électricité",
      icon: Zap,
      image: categoryElectricity,
      specialty: "Électricien",
    },
    menuiserie: {
      title: "Menuiserie",
      icon: Hammer,
      image: categoryCarpentry,
      specialty: "Menuisier",
    },
    peinture: {
      title: "Peinture",
      icon: Paintbrush,
      image: categoryPainting,
      specialty: "Peintre",
    },
  };

  const config = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.plomberie;
  const Icon = config.icon;

  const filteredArtisans = artisans.filter(
    (artisan) => artisan.specialty.toLowerCase().includes(config.specialty.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={config.image}
            alt={config.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{config.title}</h1>
            <p className="text-xl text-muted-foreground">
              {filteredArtisans.length} artisans disponibles
            </p>
          </div>
        </div>
      </section>

      {/* Artisans List */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>

        {filteredArtisans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Aucun artisan trouvé dans cette catégorie
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Category;
