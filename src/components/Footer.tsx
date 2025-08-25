import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">HRX CPAs</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A family-focused CPA firm in Irvine, California, serving multi-generational families, 
                entrepreneurial business owners, and high-net-worth individuals.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">HRX CPAs</p>
                    <p className="text-primary-foreground/80">6 Venture #250</p>
                    <p className="text-primary-foreground/80">Irvine, CA 92618</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:(949) 431-0469" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    (949) 431-0469
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1" />
                  <div className="text-primary-foreground/80">
                    <p>Monday–Thursday: 10 AM–4 PM</p>
                    <p>Friday–Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/testimonials" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/professional-disclosures" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Professional Disclosures
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookie-policy" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ada-compliance" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    ADA Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Get Started</h3>
              <div className="space-y-3">
                <Button 
                  asChild
                  variant="secondary" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-primary-foreground text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  <Link to="/book-consultation">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-primary-foreground/80">
              <p>&copy; 2025 HRX CPAs. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/ada-compliance" 
                  className="hover:text-secondary transition-colors"
                >
                  ADA Compliance
                </Link>
                <span>|</span>
                <Link 
                  to="/sitemap" 
                  className="hover:text-secondary transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;