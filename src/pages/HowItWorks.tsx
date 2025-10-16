import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, Calendar, CheckCircle, ArrowRight, Clock, Shield, CreditCard, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import headerHowItWorks from "@/assets/header-how-it-works.jpg";
import ctaHowItWorks from "@/assets/cta-how-it-works.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Recherchez un artisan",
      description: "Utilisez notre barre de recherche pour trouver l'artisan qu'il vous faut près de chez vous. Filtrez par métier, distance et disponibilité."
    },
    {
      icon: MessageSquare,
      title: "2. Consultez les profils",
      description: "Découvrez les portfolios, lisez les avis clients et comparez les tarifs pour faire le meilleur choix."
    },
    {
      icon: Calendar,
      title: "3. Réservez en ligne",
      description: "Sélectionnez un créneau disponible dans le calendrier de l'artisan et confirmez votre réservation instantanément."
    },
    {
      icon: CheckCircle,
      title: "4. Travaux réalisés",
      description: "L'artisan réalise vos travaux. Payez en ligne de manière sécurisée et laissez votre avis après la prestation."
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Plus besoin de multiplier les appels. Trouvez et réservez en quelques clics."
    },
    {
      icon: Shield,
      title: "Transparence totale",
      description: "Tarifs affichés, avis vérifiés, disponibilités en temps réel."
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Votre paiement est protégé jusqu'à la fin des travaux."
    },
    {
      icon: Award,
      title: "Artisans qualifiés",
      description: "Tous nos artisans sont vérifiés et certifiés."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerHowItWorks} 
            alt="Comment ça marche" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comment ça marche ?</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre processus simple et efficace
            </p>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trouvez et réservez un artisan en 4 étapes simples
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground/30 mt-4" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi utiliser ArtisanConnect ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme pensée pour simplifier vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src={ctaHowItWorks} 
          alt="Commencer" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trouvez l'artisan idéal pour votre projet dès maintenant
          </p>
          <Link to="/search">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto">
              Rechercher un artisan
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default HowItWorks;
