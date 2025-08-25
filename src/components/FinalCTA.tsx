import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Join hundreds of Orange County businesses and families who trust HRX CPAs 
                for strategic financial guidance. Let's discuss how we can help you achieve 
                your goals and build lasting wealth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group px-8 py-4 text-lg font-semibold"
              >
                <Link to="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-primary-foreground/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-primary-foreground/80 text-sm">Years of Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">$100M+</div>
                  <div className="text-primary-foreground/80 text-sm">Assets Under Advisement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;