import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import Reveal from "@/components/Reveal";
import ArtisanCard from "@/components/ArtisanCard";
import { artisans } from "@/data/artisans";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, MapPin, CheckCircle, Search, Shield, Clock, Award, Users, ThumbsUp, Zap, Wrench, Hammer, Paintbrush, Quote, ChevronLeft, ChevronRight, CalendarCheck, ArrowRight } from "lucide-react";
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
      title: "Verified artisans",
      description: "All our artisans are verified and certified for your safety"
    },
    {
      icon: Star,
      title: "Customer reviews",
      description: "Read authentic reviews from thousands of satisfied customers"
    },
    {
      icon: Clock,
      title: "Fast booking",
      description: "Find and book an artisan in just a few clicks"
    },
    {
      icon: CheckCircle,
      title: "Secure payment",
      description: "Pay online securely with our payment solutions"
    }
  ];

  const steps = [
    {
      icon: Search,
      title: "Describe your project",
      description: "Tell us what you need and where you are. It takes less than a minute."
    },
    {
      icon: Users,
      title: "Compare artisans",
      description: "Browse verified profiles, read real reviews and compare quotes side by side."
    },
    {
      icon: CalendarCheck,
      title: "Book with confidence",
      description: "Pick a time slot, pay securely online and track your project to completion."
    }
  ];

  const faqs = [
    {
      question: "How are artisans verified?",
      answer: "Every artisan goes through an identity check, insurance verification and qualification review before joining ArtisOn. Profiles showing the Verified badge have completed this process."
    },
    {
      question: "Is it free to request a quote?",
      answer: "Yes. Browsing profiles and requesting quotes is completely free for customers. You only pay the artisan once you accept a quote and book a job."
    },
    {
      question: "How does payment work?",
      answer: "Payments are made securely through the platform. Your money is held safely and only released to the artisan once the job is marked as complete."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Contact our support team within 48 hours of job completion. We'll mediate with the artisan and help you find a resolution, including a rework or partial refund when applicable."
    },
    {
      question: "Which areas do you cover?",
      answer: "ArtisOn currently operates across Paris and the surrounding region, with new cities being added regularly. Enter your postal code in the search bar to see available artisans near you."
    }
  ];

  const featuredArtisans = artisans.filter((a) => a.verified).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Why ArtisOn
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              The trusted platform for all your projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Verified artisans, authentic reviews and booking in just a few clicks
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Reveal key={index} delay={index * 80}>
                <Card className="text-center h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border rounded-2xl">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Your project done in 3 simple steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From request to completion, everything happens on one platform
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-border" aria-hidden="true" />
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 120} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
                      <step.icon className="w-9 h-9 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cta text-cta-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Learn more about the process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Categories
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Our artisan categories
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Qualified professionals in every trade
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Wrench, name: "Plumbing", count: "2,345", image: categoryPlumbing, slug: "plumbing" },
              { icon: Zap, name: "Electricity", count: "1,876", image: categoryElectricity, slug: "electricity" },
              { icon: Hammer, name: "Carpentry", count: "1,523", image: categoryCarpentry, slug: "carpentry" },
              { icon: Paintbrush, name: "Painting", count: "1,892", image: categoryPainting, slug: "painting" },
            ].map((category, index) => (
              <Reveal key={index} delay={index * 80}>
                <Link
                  to={`/category/${category.slug}`}
                  className="group relative block h-full overflow-hidden bg-card border border-border rounded-2xl hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/30" />
                  </div>
                  <div className="relative p-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-center mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {category.count} artisans
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Featured artisans
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Meet our top-rated pros
              </h2>
            </div>
            <Link to="/search">
              <Button variant="outline" className="gap-2">
                View all artisans
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan, index) => (
              <Reveal key={artisan.id} delay={index * 80}>
                <ArtisanCard artisan={artisan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What our customers say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thousands of satisfied customers trust us
            </p>
          </Reveal>

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
                    text: "Impeccable service! I found an excellent plumber in minutes. Fast, efficient and professional.",
                    avatar: client1
                  },
                  {
                    name: "Thomas D.",
                    location: "Lyon",
                    rating: 5,
                    text: "The platform is very intuitive. I was able to compare several artisans and choose the one that best fit my needs.",
                    avatar: client2
                  },
                  {
                    name: "Sophie M.",
                    location: "Marseille",
                    rating: 5,
                    text: "Excellent follow-up and quality artisans. I highly recommend ArtisOn for all your projects!",
                    avatar: client3
                  },
                  {
                    name: "Julie B.",
                    location: "Bordeaux",
                    rating: 5,
                    text: "Found a very skilled artisan through the platform. The work was done on time and with care.",
                    avatar: client1
                  },
                  {
                    name: "Pierre M.",
                    location: "Toulouse",
                    rating: 4,
                    text: "Great overall experience. The rating system helped me make the right choice.",
                    avatar: client2
                  },
                  {
                    name: "Camille R.",
                    location: "Nantes",
                    rating: 5,
                    text: "Simple interface and trustworthy artisans. I quickly found what I was looking for.",
                    avatar: client3
                  },
                  {
                    name: "Alexandre P.",
                    location: "Lille",
                    rating: 5,
                    text: "Great platform! Customer reviews are really helpful for choosing.",
                    avatar: client1
                  },
                  {
                    name: "Emma D.",
                    location: "Strasbourg",
                    rating: 4,
                    text: "Good service, deadlines met and a professional artisan. I recommend it.",
                    avatar: client2
                  },
                  {
                    name: "Lucas V.",
                    location: "Nice",
                    rating: 5,
                    text: "Excellent experience from start to finish. The artisan was punctual and the work impeccable.",
                    avatar: client3
                  },
                  {
                    name: "Sarah K.",
                    location: "Rennes",
                    rating: 5,
                    text: "Very satisfied! The search is fast and artisan profiles are complete. Perfect!",
                    avatar: client1
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-card border-border hover:shadow-card transition-shadow h-full rounded-2xl">
                        <CardContent className="pt-6">
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground mb-4 italic min-h-[80px]">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
              <CarouselPrevious className="left-2 md:-left-12" />
              <CarouselNext className="right-2 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know before booking an artisan
              </p>
            </Reveal>

            <Reveal>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            <Reveal className="text-center mt-10">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Link to="/contact">
                <Button variant="outline">Contact us</Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-8 py-16 md:py-20 text-center">
              <img
                src={artisanCtaBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-stone-900/40" />
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-3">
                  For artisans
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
                  Are you an artisan? Grow your business
                </h2>
                <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                  Join our community of qualified artisans and receive job requests from customers near you
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/become-artisan">
                    <Button size="lg" className="bg-cta hover:bg-cta-dark text-cta-foreground transition-colors text-lg px-8">
                      Become a partner artisan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Index;
