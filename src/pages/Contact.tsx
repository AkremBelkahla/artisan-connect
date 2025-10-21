import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
import { useState } from "react";
import headerContact from "@/assets/header-contact.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerContact} 
            alt="Contactez-nous" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground">
              Notre équipe est là pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Adresse</h3>
              <p className="text-muted-foreground">
                123 Avenue des Champs-Élysées<br />
                75008 Paris, France
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
              <p className="text-muted-foreground">
                +33 1 23 45 67 89<br />
                Lun - Ven : 9h - 18h
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">
                contact@artisanconnect.fr<br />
                support@artisanconnect.fr
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nom complet</label>
                  <Input
                    required
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="votre.email@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Téléphone</label>
                  <Input
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet</label>
                  <Input
                    required
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    required
                    placeholder="Votre message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle>Notre localisation</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 px-6 pb-6 pt-0">
              <div className="h-full w-full">
                <Map />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Contact;
