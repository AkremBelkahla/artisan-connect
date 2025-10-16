import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle } from "lucide-react";
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
      <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden bg-gradient-card border-border/50">
        <CardContent className="p-6">
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground overflow-hidden">
                {artisan.avatar ? (
                  <img src={artisan.avatar} alt={artisan.name} className="w-full h-full object-cover" />
                ) : (
                  artisan.name.charAt(0)
                )}
              </div>
              {artisan.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-card">
                  <CheckCircle className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors truncate">
                    {artisan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{artisan.specialty}</p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {artisan.hourlyRate}
                </Badge>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold">{artisan.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({artisan.reviewCount} avis)
                </span>
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{artisan.location} • {artisan.distance}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {artisan.availability}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtisanCard;
