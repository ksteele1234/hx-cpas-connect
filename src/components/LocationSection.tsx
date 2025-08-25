import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Visit Our Irvine Office</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            Conveniently located in the heart of Irvine's business district, 
            we're here to serve Orange County businesses and families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-elegant p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        6 Venture #250<br />
                        Irvine, CA 92618
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a 
                        href="tel:(949) 431-0469" 
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        (949) 431-0469
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a 
                        href="mailto:hiren.parmar@hrxcpas.com" 
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        hiren.parmar@hrxcpas.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Office Hours</h4>
                      <div className="text-muted-foreground">
                        <p>Monday–Thursday: 10:00 AM–4:00 PM</p>
                        <p>Friday–Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <a 
                    href="https://maps.google.com/?q=6+Venture+250+Irvine+CA+92618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Embedded Map */}
          <div className="animate-fade-in">
            <Card className="card-elegant overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5998567890!2d-117.77842!3d33.68906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde2b826dddbb%3A0x2e456b4a0a8b4c4d!2s6%20Venture%20%23250%2C%20Irvine%2C%20CA%2092618!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HRX CPAs Location - 6 Venture #250, Irvine, CA 92618"
                  className="rounded-lg"
                ></iframe>
                
                {/* Overlay for accessibility */}
                <div className="absolute inset-0 pointer-events-none bg-black/5 rounded-lg"></div>
              </div>
              
              <div className="p-4 bg-surface">
                <p className="text-sm text-muted-foreground text-center">
                  Located in the prestigious Spectrum Business Center
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;