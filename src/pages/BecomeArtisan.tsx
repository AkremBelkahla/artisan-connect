import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Shield, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import headerBecomeArtisan from "@/assets/header-become-artisan.jpg";

const BecomeArtisan = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    experience: "",
    message: ""
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Développez votre activité",
      description: "Accédez à des milliers de clients potentiels dans votre région"
    },
    {
      icon: Users,
      title: "Gérez vos rendez-vous",
      description: "Un calendrier en ligne pour organiser facilement vos interventions"
    },
    {
      icon: Shield,
      title: "Paiements sécurisés",
      description: "Recevez vos paiements rapidement et en toute sécurité"
    },
    {
      icon: Zap,
      title: "Visibilité accrue",
      description: "Profitez d'un profil professionnel optimisé pour le référencement"
    }
  ];

  const features = [
    "Profil artisan personnalisable",
    "Système de messagerie intégré",
    "Gestion des avis clients",
    "Tableau de bord des réservations",
    "Portfolio de vos réalisations",
    "Statistiques de performance"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous reviendrons vers vous dans les 48h.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialty: "",
      experience: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerBecomeArtisan} 
            alt="Devenir artisan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rejoignez notre communauté</h1>
            <p className="text-xl text-muted-foreground">
              Développez votre activité avec ArtisanConnect
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les avantages d'ArtisanConnect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Développez votre activité et trouvez de nouveaux clients en toute simplicité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fonctionnalités incluses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-sm transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3">
                    Postulez maintenant
                  </h2>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">Spécialité *</Label>
                    <Select 
                      value={formData.specialty}
                      onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre métier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plombier">Plombier</SelectItem>
                        <SelectItem value="electricien">Électricien</SelectItem>
                        <SelectItem value="menuisier">Menuisier</SelectItem>
                        <SelectItem value="peintre">Peintre</SelectItem>
                        <SelectItem value="macon">Maçon</SelectItem>
                        <SelectItem value="couvreur">Couvreur</SelectItem>
                        <SelectItem value="chauffagiste">Chauffagiste</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Années d'expérience *</Label>
                    <Select 
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">Moins de 2 ans</SelectItem>
                        <SelectItem value="2-5">2 à 5 ans</SelectItem>
                        <SelectItem value="5-10">5 à 10 ans</SelectItem>
                        <SelectItem value="10+">Plus de 10 ans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Parlez-nous de votre activité..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6 h-auto"
                  >
                    Envoyer ma candidature
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default BecomeArtisan;
