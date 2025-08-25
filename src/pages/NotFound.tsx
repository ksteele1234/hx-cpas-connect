import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              The page may have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What would you like to do?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Go Home</h3>
                <p className="text-muted-foreground mb-4">
                  Return to our homepage to explore our services
                </p>
                <Button asChild size="lg">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Find Services</h3>
                <p className="text-muted-foreground mb-4">
                  Browse our business and personal services
                </p>
                <div className="space-y-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/business-services">Business Services</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/personal-services">Personal Services</Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground mb-4">
                  Get in touch with our team directly
                </p>
                <div className="space-y-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contact">Contact Form</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="tel:+19494310469">(949) 431-0469</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/about">
                  <span className="font-semibold">About Us</span>
                  <span className="text-xs text-muted-foreground">Learn about HRX CPAs</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/pricing">
                  <span className="font-semibold">Pricing</span>
                  <span className="text-xs text-muted-foreground">View our packages</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/testimonials">
                  <span className="font-semibold">Testimonials</span>
                  <span className="text-xs text-muted-foreground">Client success stories</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/book-consultation">
                  <span className="font-semibold">Book Meeting</span>
                  <span className="text-xs text-muted-foreground">Schedule consultation</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Still Need Help?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our team during business hours
                </p>
                <a 
                  href="tel:+19494310469" 
                  className="text-primary hover:text-primary/80 font-semibold text-lg"
                >
                  (949) 431-0469
                </a>
              </Card>
              
              <Card className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us a message and we'll respond quickly
                </p>
                <a 
                  href="mailto:info@hrxcpas.com" 
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  info@hrxcpas.com
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
