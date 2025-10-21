import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Star, MapPin, CheckCircle, MessageSquare, Phone, Mail, Award, Clock, Users } from "lucide-react";
import { artisans } from "@/data/artisans";
import { useState } from "react";
import { fr } from "date-fns/locale";

const ArtisanProfile = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date>();

  const artisan = artisans.find((a) => a.id === id) || artisans[0];

  // Simulate unavailable dates (artisan is busy)
  const unavailableDates = [
    new Date(2025, 9, 20),
    new Date(2025, 9, 21),
    new Date(2025, 9, 27),
    new Date(2025, 9, 28),
  ];

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(
      (unavailableDate) =>
        date.getDate() === unavailableDate.getDate() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getFullYear() === unavailableDate.getFullYear()
    );
  };

  const realisations = [
    { id: 1, title: "Rénovation salle de bain", description: "Rénovation complète avec douche italienne et carrelage moderne", image: artisan.avatar },
    { id: 2, title: "Installation chaudière", description: "Installation d'une chaudière à condensation avec thermostat connecté", image: artisan.avatar },
    { id: 3, title: "Dépannage urgence", description: "Réparation d'une fuite majeure en moins de 2h", image: artisan.avatar },
  ];

  const reviews = [
    {
      id: 1,
      author: "Marie L.",
      rating: 5,
      date: "Il y a 2 jours",
      comment: "Excellent travail ! " + artisan.name.split(' ')[0] + " est très professionnel et ponctuel. A résolu mon problème rapidement.",
    },
    {
      id: 2,
      author: "Thomas B.",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Je recommande vivement. Travail impeccable. Très bon rapport qualité/prix.",
    },
    {
      id: 3,
      author: "Sophie M.",
      rating: 4,
      date: "Il y a 2 semaines",
      comment: "Bon travail dans l'ensemble. Quelques petits détails à peaufiner mais globalement satisfait.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={artisan.avatar} alt={artisan.name} />
                      <AvatarFallback className="text-3xl bg-gradient-primary text-primary-foreground">
                        {artisan.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {artisan.verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-card">
                        <CheckCircle className="w-5 h-5 text-accent-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold mb-1">{artisan.name}</h1>
                        <p className="text-lg text-muted-foreground">{artisan.specialty}</p>
                      </div>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {artisan.hourlyRate}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-secondary text-secondary" />
                          <span className="font-semibold text-lg">{artisan.rating}</span>
                        </div>
                        <span className="text-muted-foreground">({artisan.reviewCount} avis)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{artisan.location}</span>
                      </div>
                      {artisan.verified && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Vérifié
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{artisan.distance}</span>
                      <span>•</span>
                      <span>{artisan.availability}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="about">À propos</TabsTrigger>
                <TabsTrigger value="reviews">Avis ({artisan.reviewCount})</TabsTrigger>
                <TabsTrigger value="portfolio">Réalisations</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {artisan.specialty} professionnel avec une grande expérience. Passionné par mon métier, je m'engage à fournir des services de haute qualité à tous mes clients. Mon approche allie expertise technique et écoute client pour garantir votre satisfaction totale. Interventions rapides, travail soigné et respect des délais garantis.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Note</p>
                          <p className="text-xs text-muted-foreground">{artisan.rating}/5</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Disponibilité</p>
                          <p className="text-xs text-muted-foreground">{artisan.availability}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Users className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Avis clients</p>
                          <p className="text-xs text-muted-foreground">{artisan.reviewCount} avis</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-6 h-6 fill-secondary text-secondary" />
                      <span className="text-2xl font-bold">{artisan.rating}</span>
                      <span className="text-muted-foreground">sur 5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Basé sur {artisan.reviewCount} avis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">{review.author}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {realisations.map((realisation) => (
                    <Card key={realisation.id} className="overflow-hidden group">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={realisation.image} 
                          alt={realisation.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{realisation.title}</h3>
                        <p className="text-sm text-muted-foreground">{realisation.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            <Card className="sticky top-24 shadow-card">
              <CardHeader>
                <CardTitle>Réserver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sélectionnez une date disponible</label>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() || isDateUnavailable(date)
                      }
                      className="pointer-events-auto rounded-md border"
                      locale={fr}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground p-2">
                    <p>Les dates grisées sont indisponibles</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" size="lg">
                  Demander un devis
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <p className="text-sm font-medium">Ou contactez directement</p>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Envoyer un message
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer un email
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Réponse sous 24h en moyenne</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default ArtisanProfile;
