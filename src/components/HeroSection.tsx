import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [bgApi, setBgApi] = useState<CarouselApi>();
  const [textApi, setTextApi] = useState<CarouselApi>();

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}&loc=${location}`);
  };

  // Sync carousels
  useEffect(() => {
    if (!bgApi || !textApi) return;

    bgApi.on("select", () => {
      textApi.scrollTo(bgApi.selectedScrollSnap());
    });

    textApi.on("select", () => {
      bgApi.scrollTo(textApi.selectedScrollSnap());
    });
  }, [bgApi, textApi]);

  // Auto-play effect
  useEffect(() => {
    if (!bgApi || !textApi) return;

    const interval = setInterval(() => {
      bgApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [bgApi, textApi]);

  const slides = [
    {
      image: heroSlide1,
      title: "Trouvez l'artisan",
      titleHighlight: "parfait",
      subtitle: "près de chez vous",
      description: "Connectez-vous avec des artisans qualifiés et vérifiés. Réservez en ligne, payez en toute sécurité."
    },
    {
      image: heroSlide2,
      title: "Des professionnels",
      titleHighlight: "certifiés",
      subtitle: "à votre service",
      description: "Tous nos artisans sont vérifiés et assurés. Bénéficiez d'un service de qualité pour tous vos projets."
    },
    {
      image: heroSlide3,
      title: "Réservez facilement",
      titleHighlight: "en ligne",
      subtitle: "en quelques clics",
      description: "Comparez les devis, consultez les avis et réservez directement l'artisan qui correspond à vos besoins."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Carousel Background */}
      <Carousel
        setApi={setBgApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="absolute inset-0 z-0"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          {/* Carousel Text Content */}
          <Carousel
            setApi={setTextApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="mb-8"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {" "}{slide.titleHighlight}{" "}
                      </span>
                      {slide.subtitle}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Search Bar - Fixed */}
          <div className="bg-card rounded-2xl shadow-xl p-2 flex flex-col md:flex-row gap-2 mb-8">
            <div className="flex-1 flex items-center gap-2 px-4 bg-muted rounded-xl h-14">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Input
                type="text"
                placeholder="Quel type d'artisan recherchez-vous ?"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            
            <div className="flex-1 flex items-center gap-2 px-4 bg-muted rounded-xl h-14">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Input
                type="text"
                placeholder="Votre ville ou code postal"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 h-14"
              onClick={handleSearch}
            >
              Rechercher
            </Button>
          </div>

          {/* Stats - Fixed */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">12K+</div>
              <div className="text-sm text-muted-foreground">Artisans vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.8/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
