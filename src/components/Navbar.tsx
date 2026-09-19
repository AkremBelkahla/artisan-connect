import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, User, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/search", label: "Find an artisan" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/contact", label: "Contact" },
  { to: "/become-artisan", label: "Become an artisan" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] bg-background/80 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="ArtisOn" className="w-9 h-9 transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold font-display text-primary">
            ArtisOn
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.to
                  ? "text-primary bg-accent"
                  : "text-foreground/70 hover:text-primary hover:bg-accent/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Bouton Menu Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground/80 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
            <Button className="hidden md:flex items-center gap-2 bg-cta hover:bg-cta-dark text-cta-foreground transition-colors">
              <User className="w-4 h-4" />
              My account
            </Button>
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "py-2.5 px-4 rounded-lg transition-colors",
                  location.pathname === link.to
                    ? "text-primary bg-accent font-medium"
                    : "text-foreground/80 hover:text-primary hover:bg-accent/60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-border space-y-2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-foreground/80 hover:text-primary"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMenuOpen(false);
                }}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    Light mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    Dark mode
                  </>
                )}
              </Button>
              <Link to="/auth">
                <Button className="w-full flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-cta-foreground transition-colors">
                  <User className="w-4 h-4" />
                  My account
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
