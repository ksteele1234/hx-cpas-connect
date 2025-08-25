import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">HRX CPAs</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A family-focused CPA firm in Irvine, California, serving multi-generational families, 
                entrepreneurial business owners, and high-net-worth individuals.
              </p>
              
              {/* Contact Info - Horizontal Layout */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">HRX CPAs</p>
                    <p className="text-primary-foreground/80">6 Venture #250</p>
                    <p className="text-primary-foreground/80">Irvine, CA 92618</p>
                  </div>
                </div>
                
                {/* Phone and Hours in same row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      <p>Mon–Thu: 10 AM–4 PM</p>
                      <p className="text-xs">Fri–Sun: Closed</p>
                    </div>
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
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/book-consultation">Book a Consultation</Link>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-primary-foreground mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/hrx-cpas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/hrxcpas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-primary-foreground/60">
              © 2025 HRX CPAs. All rights reserved. | Licensed CPA in California
            </div>
            <div className="flex flex-wrap gap-4 text-primary-foreground/60">
              <Link to="/sitemap" className="hover:text-secondary transition-colors">Sitemap</Link>
              <Link to="/client-engagement-agreement" className="hover:text-secondary transition-colors">Engagement Terms</Link>
              <span>•</span>
              <span>Irvine, CA | Orange County</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;