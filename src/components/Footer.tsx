import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Company & Contact */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">HRX CPAs</h3>
                <p className="text-primary-foreground/80 text-base leading-relaxed">
                  Family-focused CPA firm serving multi-generational families and growing businesses in Orange County.
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                  <div className="text-primary-foreground/90">
                    <p className="font-medium">6 Venture #250</p>
                    <p>Irvine, CA 92618</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a 
                    href="tel:(949) 431-0469" 
                    className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
                  >
                    (949) 431-0469
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-secondary" />
                  <div className="text-primary-foreground/90">
                    <p className="font-medium">Monday–Thursday</p>
                    <p>10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/hiren-parmar-cpa-cva-cepa-b5567367/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-white" />
                </a>
                <a
                  href="https://facebook.com/hrxcpas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-white" />
                </a>
              </div>
            </div>
            
            {/* Middle Column - Services & Resources */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">Services</h4>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li>
                    <Link to="/business-services" className="hover:text-secondary transition-colors">
                      Business Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-services" className="hover:text-secondary transition-colors">
                      Personal & Family Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:text-secondary transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-secondary transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">Resources</h4>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li>
                    <Link to="/blog" className="hover:text-secondary transition-colors">
                      Tax & Business Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="hover:text-secondary transition-colors">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="hover:text-secondary transition-colors">
                      Client Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - CTA & Legal */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">Get Started</h4>
                <div className="space-y-3">
                  <Button 
                    asChild
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Link to="/book-consultation">Book a Consultation</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-primary-foreground/30 text-primary hover:bg-primary-foreground hover:text-primary bg-primary-foreground"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">Legal & Compliance</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/70">
                  <li>
                    <Link to="/privacy-policy" className="hover:text-secondary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="hover:text-secondary transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/client-engagement-agreement" className="hover:text-secondary transition-colors">
                      Client Engagement Agreement
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="hover:text-secondary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/professional-disclosures" className="hover:text-secondary transition-colors">
                      Professional Disclosures
                    </Link>
                  </li>
                  <li>
                    <Link to="/ada-compliance" className="hover:text-secondary transition-colors">
                      ADA Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2025 HRX CPAs. All rights reserved. Licensed CPA in California.
            </div>
            <div className="flex items-center gap-4">
              <Link to="/sitemap" className="hover:text-secondary transition-colors">
                Sitemap
              </Link>
              <span>•</span>
              <span>Irvine, Orange County</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;