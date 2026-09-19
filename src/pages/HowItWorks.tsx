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
      title: "1. Find an artisan",
      description: "Use our search bar to find the artisan you need near you. Filter by trade, distance and availability."
    },
    {
      icon: MessageSquare,
      title: "2. Browse profiles",
      description: "Browse portfolios, read customer reviews and compare rates to make the best choice."
    },
    {
      icon: Calendar,
      title: "3. Book online",
      description: "Pick an available slot in the artisan's calendar and confirm your booking instantly."
    },
    {
      icon: CheckCircle,
      title: "4. Job done",
      description: "The artisan completes your project. Pay online securely and leave a review after the job."
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Save time",
      description: "No more endless phone calls. Find and book in just a few clicks."
    },
    {
      icon: Shield,
      title: "Full transparency",
      description: "Displayed rates, verified reviews, real-time availability."
    },
    {
      icon: CreditCard,
      title: "Secure payment",
      description: "Your payment is protected until the job is complete."
    },
    {
      icon: Award,
      title: "Qualified artisans",
      description: "All our artisans are verified and certified."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[36vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerHowItWorks} 
            alt="How it works" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How does it work?</h1>
            <p className="text-xl text-muted-foreground">
              Discover our simple and efficient process
            </p>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and book an artisan in 4 simple steps
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
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
              Why use ArtisOn?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A platform designed to simplify your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
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
          alt="Get started" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the ideal artisan for your project right now
          </p>
          <Link to="/search">
            <Button size="lg" className="bg-cta hover:bg-cta-dark text-cta-foreground transition-colors text-lg px-8 py-6 h-auto">
              Find an artisan
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
