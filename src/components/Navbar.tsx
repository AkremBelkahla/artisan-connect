import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, User, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="ArtisOn" className="w-10 h-10 transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
            ArtisOn
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/search" className="text-foreground/80 hover:text-orange-500 transition-colors">
            Trouver un artisan
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-orange-500 transition-colors">
            Comment ça marche
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-orange-500 transition-colors">
            Contact
          </Link>
          <Link to="/become-artisan" className="text-foreground/80 hover:text-orange-500 transition-colors">
            Devenir artisan
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Bouton Menu Mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-foreground/80 hover:text-orange-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Link to="/auth">
            <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:opacity-90 transition-opacity text-white">
              <User className="w-4 h-4" />
              Mon compte
            </Button>
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/search" 
              className="py-2 px-4 text-foreground/80 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trouver un artisan
            </Link>
            <Link 
              to="/how-it-works" 
              className="py-2 px-4 text-foreground/80 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/contact" 
              className="py-2 px-4 text-foreground/80 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/become-artisan" 
              className="py-2 px-4 text-foreground/80 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir artisan
            </Link>
            <div className="pt-2 mt-2 border-t border-border">
              <Link to="/auth">
                <Button 
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:opacity-90 transition-opacity text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Mon compte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
