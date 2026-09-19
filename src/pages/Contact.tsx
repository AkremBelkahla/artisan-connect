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
      title: "Message sent!",
      description: "We will get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[36vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerContact} 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
            <p className="text-xl text-muted-foreground">
              Our team is here to help you
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="bg-card border-border hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-muted-foreground">
                123 Avenue des Champs-Élysées<br />
                75008 Paris, France
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground">
                +33 1 23 45 67 89<br />
                Mon - Fri: 9am - 6pm
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-card transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
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
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full name</label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    required
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    required
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-cta hover:bg-cta-dark text-cta-foreground transition-colors">
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle>Our location</CardTitle>
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
