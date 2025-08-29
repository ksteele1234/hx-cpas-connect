import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-hero">
                Strategic Tax & Accounting 
                <span className="block text-primary">for Irvine Businesses</span>
              </h1>
              <p className="text-subtitle">
                Expert tax strategy, accounting, and CFO advisory services for businesses 
                with $1M–$10M in revenue and high-net-worth individuals in Orange County.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="btn-primary animate-scale-in"
              >
                <Link to="/book-consultation">Book a Consultation</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-2 border-primary bg-white animate-scale-in"
                style={{ 
                  animationDelay: "0.2s",
                  color: '#1e40af !important',
                  backgroundColor: 'white !important'
                }}
              >
                <Link to="/business-services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Families Served</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-primary">$100M+</div>
                <div className="text-sm text-muted-foreground">Assets Influenced</div>
              </div>
            </div>
          </div>

          {/* Right Side - Family Office Experience Card */}
          <div className="animate-slide-up">
            <Card className="card-elegant p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Family Office Experience</h2>
                  <p className="text-primary-foreground/90">
                    Comprehensive wealth management for your growing business and family
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Strategic Tax Planning</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Proactive strategies to minimize tax burden and maximize wealth retention
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Business Growth Advisory</h3>
                      <p className="text-sm text-primary-foreground/80">
                        CFO-level insights to scale your business efficiently and profitably
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Exit Planning</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Maximize business value and plan successful transitions or sales
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary-foreground/20">
                  <Button 
                    asChild
                    variant="secondary" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Link to="/about">Learn About Our Approach</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;