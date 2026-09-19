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
      title: "Grow your business",
      description: "Reach thousands of potential customers in your area"
    },
    {
      icon: Users,
      title: "Manage your schedule",
      description: "An online calendar to easily organize your jobs"
    },
    {
      icon: Shield,
      title: "Secure payments",
      description: "Receive your payments quickly and securely"
    },
    {
      icon: Zap,
      title: "Greater visibility",
      description: "Enjoy a professional profile optimized for search"
    }
  ];

  const features = [
    "Customizable artisan profile",
    "Built-in messaging system",
    "Customer review management",
    "Booking dashboard",
    "Portfolio of your work",
    "Performance statistics"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application sent!",
      description: "We will get back to you within 48 hours.",
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
      <section className="relative h-[36vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerBecomeArtisan} 
            alt="Become an artisan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join our community</h1>
            <p className="text-xl text-muted-foreground">
              Grow your business with ArtisOn
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The ArtisOn benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your business and find new customers with ease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              Included features
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
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3">
                    Apply now
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will get back to you shortly
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
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
                    <Label htmlFor="phone">Phone *</Label>
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
                    <Label htmlFor="specialty">Trade *</Label>
                    <Select 
                      value={formData.specialty}
                      onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumber">Plumber</SelectItem>
                        <SelectItem value="electrician">Electrician</SelectItem>
                        <SelectItem value="joiner">Joiner</SelectItem>
                        <SelectItem value="painter">Painter</SelectItem>
                        <SelectItem value="mason">Mason</SelectItem>
                        <SelectItem value="roofer">Roofer</SelectItem>
                        <SelectItem value="heating">Heating Engineer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of experience *</Label>
                    <Select 
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">Less than 2 years</SelectItem>
                        <SelectItem value="2-5">2 to 5 years</SelectItem>
                        <SelectItem value="5-10">5 to 10 years</SelectItem>
                        <SelectItem value="10+">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-cta hover:bg-cta-dark text-cta-foreground transition-colors text-lg py-6 h-auto"
                  >
                    Submit my application
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
