import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hammer, Menu, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <Hammer className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ArtisanConnect
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/search" className="text-foreground/80 hover:text-foreground transition-colors">
            Trouver un artisan
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            Comment ça marche
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/become-artisan" className="text-foreground/80 hover:text-foreground transition-colors">
            Devenir artisan
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
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
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <User className="w-4 h-4" />
              Connexion
            </Button>
          </Link>
          <Link to="/auth">
            <Button className="hidden md:flex bg-gradient-primary hover:opacity-90 transition-opacity">
              Inscription
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
