import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, CheckCircle, Search, Shield, Clock, Award, Users, ThumbsUp, Zap, Wrench, Hammer, Paintbrush, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import categoryPlumbing from "@/assets/category-plumbing.jpg";
import categoryElectricity from "@/assets/category-electricity.jpg";
import categoryCarpentry from "@/assets/category-carpentry.jpg";
import categoryPainting from "@/assets/category-painting.jpg";
import artisanCtaBg from "@/assets/artisan-cta-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Artisans vérifiés",
      description: "Tous nos artisans sont vérifiés et certifiés pour votre sécurité"
    },
    {
      icon: Star,
      title: "Avis clients",
      description: "Consultez les avis authentiques de milliers de clients satisfaits"
    },
    {
      icon: Clock,
      title: "Réservation rapide",
      description: "Trouvez et réservez un artisan en quelques clics seulement"
    },
    {
      icon: CheckCircle,
      title: "Paiement sécurisé",
      description: "Payez en ligne en toute sécurité avec nos solutions de paiement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir ArtisanConnect ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La plateforme de confiance pour tous vos projets d'artisanat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos catégories d'artisans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés dans tous les domaines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Wrench, name: "Plomberie", count: "2,345", image: categoryPlumbing, slug: "plomberie" },
              { icon: Zap, name: "Électricité", count: "1,876", image: categoryElectricity, slug: "electricite" },
              { icon: Hammer, name: "Menuiserie", count: "1,523", image: categoryCarpentry, slug: "menuiserie" },
              { icon: Paintbrush, name: "Peinture", count: "1,892", image: categoryPainting, slug: "peinture" },
            ].map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden bg-gradient-card border border-border/50 rounded-xl hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                </div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {category.count} artisans
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des milliers de clients satisfaits nous font confiance
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    name: "Marie L.",
                    location: "Paris",
                    rating: 5,
                    text: "Service impeccable ! J'ai trouvé un excellent plombier en quelques minutes. Rapide, efficace et professionnel.",
                    avatar: client1
                  },
                  {
                    name: "Thomas D.",
                    location: "Lyon",
                    rating: 5,
                    text: "La plateforme est très intuitive. J'ai pu comparer plusieurs artisans et choisir celui qui correspondait le mieux à mes besoins.",
                    avatar: client2
                  },
                  {
                    name: "Sophie M.",
                    location: "Marseille",
                    rating: 5,
                    text: "Excellent suivi et artisans de qualité. Je recommande vivement ArtisanConnect pour tous vos travaux !",
                    avatar: client3
                  },
                  {
                    name: "Julie B.",
                    location: "Bordeaux",
                    rating: 5,
                    text: "Artisan très compétent trouvé grâce à la plateforme. Le travail a été réalisé dans les délais et avec soin.",
                    avatar: client1
                  },
                  {
                    name: "Pierre M.",
                    location: "Toulouse",
                    rating: 4,
                    text: "Bonne expérience globale. Le système de notation m'a aidé à faire le bon choix.",
                    avatar: client2
                  },
                  {
                    name: "Camille R.",
                    location: "Nantes",
                    rating: 5,
                    text: "Interface simple et artisans de confiance. J'ai trouvé rapidement ce que je cherchais.",
                    avatar: client3
                  },
                  {
                    name: "Alexandre P.",
                    location: "Lille",
                    rating: 5,
                    text: "Super plateforme ! Les avis clients sont vraiment utiles pour faire son choix.",
                    avatar: client1
                  },
                  {
                    name: "Emma D.",
                    location: "Strasbourg",
                    rating: 4,
                    text: "Bon service, délais respectés et artisan professionnel. Je recommande.",
                    avatar: client2
                  },
                  {
                    name: "Lucas V.",
                    location: "Nice",
                    rating: 5,
                    text: "Excellente expérience du début à la fin. L'artisan était ponctuel et le travail impeccable.",
                    avatar: client3
                  },
                  {
                    name: "Sarah K.",
                    location: "Rennes",
                    rating: 5,
                    text: "Très satisfaite ! La recherche est rapide et les profils artisans complets. Parfait !",
                    avatar: client1
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow h-full">
                        <CardContent className="pt-6">
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground mb-4 italic min-h-[80px]">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <div className="flex items-center gap-3 mt-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 hidden md:flex" />
              <CarouselNext className="-right-12 hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${artisanCtaBg})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous êtes artisan ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'artisans qualifiés et développez votre activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/become-artisan">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                Devenir artisan partenaire
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Index;
