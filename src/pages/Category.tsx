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
    plumbing: {
      title: "Plumbing",
      icon: Wrench,
      image: categoryPlumbing,
      specialty: "Plumber",
    },
    electricity: {
      title: "Electricity",
      icon: Zap,
      image: categoryElectricity,
      specialty: "Electrician",
    },
    carpentry: {
      title: "Carpentry",
      icon: Hammer,
      image: categoryCarpentry,
      specialty: "Joiner",
    },
    painting: {
      title: "Painting",
      icon: Paintbrush,
      image: categoryPainting,
      specialty: "Painter",
    },
  };

  const config = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.plumbing;
  const Icon = config.icon;

  const filteredArtisans = artisans.filter(
    (artisan) => artisan.specialty.toLowerCase().includes(config.specialty.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[36vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={config.image}
            alt={config.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{config.title}</h1>
            <p className="text-xl text-muted-foreground">
              {filteredArtisans.length} artisans available
            </p>
          </div>
        </div>
      </section>

      {/* Artisans List */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>

        {filteredArtisans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No artisans found in this category
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
