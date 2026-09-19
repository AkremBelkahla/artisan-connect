import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="ArtisOn" className="w-10 h-10" />
              <span className="text-xl font-bold font-display text-white">
                ArtisOn
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              The trusted platform connecting homeowners with qualified artisans across France.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-display">Quick links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/search" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  Find an artisan
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/become-artisan" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  Become an artisan
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-display">Categories</h3>
            <ul className="space-y-2.5">
              <li><Link to="/category/plumbing" className="text-stone-400 hover:text-primary-light transition-colors text-sm">Plumbing</Link></li>
              <li><Link to="/category/electricity" className="text-stone-400 hover:text-primary-light transition-colors text-sm">Electricity</Link></li>
              <li><Link to="/category/carpentry" className="text-stone-400 hover:text-primary-light transition-colors text-sm">Carpentry</Link></li>
              <li><Link to="/category/painting" className="text-stone-400 hover:text-primary-light transition-colors text-sm">Painting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-display">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@artison.fr" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  contact@artison.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  75 Avenue des Champs-Élysées<br />75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} ArtisOn. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
              <a href="https://infinityweb.tn" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                InfinityWeb.tn
              </a>
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                Legal notice
              </Link>
              <Link to="/politique-confidentialite" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                Privacy policy
              </Link>
              <Link to="/cgu" className="text-stone-400 hover:text-primary-light transition-colors text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
