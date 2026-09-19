import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, BadgeCheck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-artisans.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}&loc=${location}`);
  };

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Subtle warm backdrop */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-6 shadow-sm">
              <BadgeCheck className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-foreground/80">
                Over 12,000 verified artisans in France
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Find the <span className="text-primary">perfect</span> artisan near you
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Connect with qualified, verified artisans. Book online and pay securely.
            </p>

            {/* Search Bar */}
            <div className="bg-card rounded-2xl border border-border shadow-lg p-2 flex flex-col md:flex-row md:items-center gap-2 mb-8">
              <div className="flex-1 flex items-center gap-2 px-4 h-14">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="What kind of artisan are you looking for?"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-full px-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="md:hidden h-px bg-border mx-4" />

              <div className="flex-1 flex items-center gap-2 px-4 h-14">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Your city or postal code"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-full px-0"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <Button
                size="lg"
                className="bg-cta hover:bg-cta-dark text-cta-foreground transition-colors text-base font-semibold px-8 h-12 md:h-14 rounded-xl"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center divide-x divide-border">
              <div className="pr-8">
                <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">12K+</div>
                <div className="text-sm text-muted-foreground">Verified artisans</div>
              </div>
              <div className="px-8">
                <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Projects completed</div>
              </div>
              <div className="pl-8">
                <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">4.8/5</div>
                <div className="text-sm text-muted-foreground">Average rating</div>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
              <img
                src={heroImage}
                alt="Professional artisan at work"
                className="w-full h-[560px] object-cover"
              />
            </div>

            {/* Floating review card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-sm">4.8/5 average</p>
                <p className="text-xs text-muted-foreground">Across 50,000+ completed projects</p>
              </div>
            </div>

            {/* Floating verified chip */}
            <div className="absolute top-6 -right-3 bg-card border border-border rounded-full shadow-md px-4 py-2 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Certified artisans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
