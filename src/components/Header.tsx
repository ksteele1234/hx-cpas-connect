import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import hrxLogo from "@/assets/hrx-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Business Services", href: "/business-services" },
    { name: "Personal & Family Services", href: "/personal-services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Utility Mini-Bar (Desktop Only) */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-width flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a 
              href="tel:(949) 431-0469" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (949) 431-0469
            </a>
            <span className="text-primary-foreground/70">|</span>
            <span>Mon-Thu: 10 AM–4 PM</span>
          </div>
          <Button 
            size="sm" 
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Book a Consultation
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src={hrxLogo} 
                  alt="HRX CPAs Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Client Portal Button (Desktop) */}
            <div className="hidden lg:block">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Client Portal
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Client Portal
                </Button>
                <Button 
                  variant="secondary"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Book a Consultation
                </Button>
                <div className="pt-2">
                  <a 
                    href="tel:(949) 431-0469" 
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    (949) 431-0469
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;