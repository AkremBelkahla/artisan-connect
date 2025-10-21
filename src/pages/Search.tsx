import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtisanCard from "@/components/ArtisanCard";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search as SearchIcon, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { artisans } from "@/data/artisans";
import headerSearch from "@/assets/header-search.jpg";

const ITEMS_PER_PAGE = 12;

const Search = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialLocation = searchParams.get("loc") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const [maxDistance, setMaxDistance] = useState([10]);
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter artisans based on search criteria
  const filteredArtisans = artisans.filter((artisan) => {
    const matchesQuery = !searchQuery || 
      artisan.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !location || 
      artisan.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesQuery && matchesLocation;
  });

  // Sort artisans
  const sortedArtisans = [...filteredArtisans].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'price-low':
        return parseFloat(a.hourlyRate) - parseFloat(b.hourlyRate);
      case 'price-high':
        return parseFloat(b.hourlyRate) - parseFloat(a.hourlyRate);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedArtisans.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArtisans = sortedArtisans.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={headerSearch} 
            alt="Trouver un artisan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trouvez votre artisan</h1>
            <p className="text-xl text-muted-foreground">
              Recherchez parmi nos artisans qualifiés
            </p>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-12">
        {/* Search Header */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 flex gap-2">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Métier (plombier, électricien...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Ville ou code postal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button size="lg" className="bg-gradient-primary">
                <SearchIcon className="w-5 h-5" />
              </Button>
            </div>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:w-auto"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filtres
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-card border border-border rounded-xl p-6 mb-6 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Trier par</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Mieux notés</SelectItem>
                      <SelectItem value="distance">Plus proches</SelectItem>
                      <SelectItem value="price-low">Prix croissant</SelectItem>
                      <SelectItem value="price-high">Prix décroissant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Distance maximale: {maxDistance[0]} km
                  </label>
                  <Slider
                    value={maxDistance}
                    onValueChange={setMaxDistance}
                    max={50}
                    min={1}
                    step={1}
                    className="mt-4"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Disponibilité</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="today">Aujourd'hui</SelectItem>
                      <SelectItem value="week">Cette semaine</SelectItem>
                      <SelectItem value="month">Ce mois-ci</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">{sortedArtisans.length} artisans</span> trouvés
            {location && ` près de ${location}`}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "bg-gradient-primary" : ""}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Search;
