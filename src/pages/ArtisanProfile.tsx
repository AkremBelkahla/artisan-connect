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
import { useMemo, useState } from "react";
import { enGB } from "date-fns/locale";

const ArtisanProfile = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date>();

  const artisan = artisans.find((a) => a.id === id) || artisans[0];

  const {
    availableDates,
    busyDates,
    bookingWindowStart,
    bookingWindowEnd,
  } = useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const totalDays = 30;
    const upcomingDates = Array.from({ length: totalDays }, (_, index) => {
      const futureDate = new Date(start);
      futureDate.setDate(start.getDate() + index);
      return futureDate;
    });

    const busy = upcomingDates.filter((_, index) => {
      const isWeekend = upcomingDates[index].getDay() === 0 || upcomingDates[index].getDay() === 6;
      const patternedBusy = (index + 3) % 5 === 0;
      return isWeekend || patternedBusy;
    });

    const busyKey = new Set(busy.map((day) => day.getTime()));
    const available = upcomingDates.filter((day) => !busyKey.has(day.getTime()));

    return {
      availableDates: available,
      busyDates: busy,
      bookingWindowStart: start,
      bookingWindowEnd: upcomingDates[upcomingDates.length - 1],
    };
  }, []);

  const isSameDay = (first: Date, second: Date) =>
    first.getDate() === second.getDate() &&
    first.getMonth() === second.getMonth() &&
    first.getFullYear() === second.getFullYear();

  const isDateBusy = (value: Date) => busyDates.some((busyDate) => isSameDay(busyDate, value));

  const isOutsideBookingWindow = (value: Date) =>
    value < bookingWindowStart || value > bookingWindowEnd;

  const handleDateSelect = (selectedDate?: Date) => {
    if (!selectedDate) return;
    if (isDateBusy(selectedDate) || isOutsideBookingWindow(selectedDate)) {
      return;
    }
    setDate(selectedDate);
  };

  const realisations = [
    { id: 1, title: "Bathroom renovation", description: "Full renovation with walk-in shower and modern tiling", image: artisan.avatar },
    { id: 2, title: "Boiler installation", description: "Condensing boiler installation with smart thermostat", image: artisan.avatar },
    { id: 3, title: "Emergency repair", description: "Major leak repaired in under 2 hours", image: artisan.avatar },
  ];

  const reviews = [
    {
      id: 1,
      author: "Marie L.",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent work! " + artisan.name.split(' ')[0] + " is very professional and punctual. Solved my problem quickly.",
    },
    {
      id: 2,
      author: "Thomas B.",
      rating: 5,
      date: "1 week ago",
      comment: "Highly recommend. Impeccable work. Great value for money.",
    },
    {
      id: 3,
      author: "Sophie M.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good work overall. A few small details to polish but generally satisfied.",
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
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={artisan.avatar} alt={artisan.name} />
                      <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                        {artisan.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {artisan.verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-2 border-card">
                        <CheckCircle className="w-5 h-5 text-success-foreground" />
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
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-lg">{artisan.rating}</span>
                        </div>
                        <span className="text-muted-foreground">({artisan.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{artisan.location}</span>
                      </div>
                      {artisan.verified && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
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
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({artisan.reviewCount})</TabsTrigger>
                <TabsTrigger value="portfolio">Projects</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Professional {artisan.specialty} with extensive experience. Passionate about my trade, I am committed to providing high-quality services to all my clients. My approach combines technical expertise and attentive listening to guarantee your complete satisfaction. Fast call-outs, careful workmanship and deadlines always met.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Rating</p>
                          <p className="text-xs text-muted-foreground">{artisan.rating}/5</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Availability</p>
                          <p className="text-xs text-muted-foreground">{artisan.availability}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Users className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Customer reviews</p>
                          <p className="text-xs text-muted-foreground">{artisan.reviewCount} reviews</p>
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
                      <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                      <span className="text-2xl font-bold">{artisan.rating}</span>
                      <span className="text-muted-foreground">out of 5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on {artisan.reviewCount} reviews</p>
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
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
                <CardTitle>Book now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select an available date</label>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      disabled={(value) => isOutsideBookingWindow(value)}
                      modifiers={{
                        available: availableDates,
                        busy: busyDates,
                      }}
                      modifiersClassNames={{
                        available: "text-success font-semibold",
                        busy: "text-destructive font-semibold opacity-70 pointer-events-none",
                        today: "text-white font-semibold"
                      }}
                      className="pointer-events-auto rounded-md border [&_button.rdp-day_today:not(.rdp-day_selected)]:bg-transparent"
                      locale={enGB}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground p-2 space-y-1">
                    <p>The next 30 days are shown below:</p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-3 w-3 rounded-full bg-success" />
                        Available
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-3 w-3 rounded-full bg-destructive" />
                        Unavailable
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-cta hover:bg-cta-dark text-cta-foreground transition-colors" size="lg">
                  Request a quote
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <p className="text-sm font-medium">Or contact directly</p>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send a message
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Send an email
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Average response within 24h</span>
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
