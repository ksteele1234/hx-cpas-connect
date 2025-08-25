import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowLeft, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Contact Confirmation | HRX CPAs Irvine</title>
        <meta name="description" content="Thank you for contacting HRX CPAs. We'll respond within 4 business hours to discuss your tax planning, CFO services, or accounting needs." />
        <link rel="canonical" href="https://hrxcpas.com/thank-you" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-emerald-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We've received your message and appreciate you reaching out to HRX CPAs. 
              Our team will review your inquiry and get back to you shortly.
            </p>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                  <p className="text-muted-foreground">
                    We'll review your inquiry and respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Email Confirmation</h3>
                  <p className="text-muted-foreground">
                    You'll receive an email confirmation with next steps and relevant information.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personal Contact</h3>
                  <p className="text-muted-foreground">
                    For consultations, we'll schedule a call to discuss your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent matters, call us directly
                  </p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    (123) 456-7890
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us an email for detailed inquiries
                  </p>
                  <a 
                    href="mailto:hiren.parmar@hrxcpas.com" 
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    hiren.parmar@hrxcpas.com
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default ThankYou;