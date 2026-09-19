import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  location: string;
  distance: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  avatar: string;
  hourlyRate: string;
  availability: string;
}

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard = ({ artisan }: ArtisanCardProps) => {
  return (
    <Link to={`/artisan/${artisan.id}`}>
      <Card className="group overflow-hidden rounded-2xl border-border bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Photo header */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={artisan.avatar}
            alt={artisan.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {artisan.verified && (
            <Badge className="absolute top-3 left-3 bg-success text-success-foreground border-0 gap-1 px-2.5 py-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified
            </Badge>
          )}

          <Badge className="absolute bottom-3 right-3 bg-card/95 text-card-foreground border-0 font-semibold px-2.5 py-1 backdrop-blur-sm">
            {artisan.hourlyRate}
          </Badge>
        </div>

        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-lg font-display group-hover:text-primary transition-colors truncate">
              {artisan.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-sm">{artisan.rating}</span>
              <span className="text-xs text-muted-foreground">({artisan.reviewCount})</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{artisan.specialty}</p>

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground min-w-0">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">{artisan.location} • {artisan.distance}</span>
            </div>
            <Badge variant="secondary" className="text-xs font-medium shrink-0">
              {artisan.availability}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtisanCard;
