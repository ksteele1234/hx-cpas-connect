import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Shield,
  HelpCircle,
  Navigation,
  CheckCircle
 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: "",
    consent: false,
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to thank you page
      window.location.href = "/thank-you";
    }, 2000);
  };

  const serviceOptions = [
    "Business Accounting & Bookkeeping",
    "Tax Planning & Preparation",
    "CFO Consulting & Advisory",
    "Business Valuation & Exit Planning",
    "Individual Tax Services",
    "RSU & Equity Planning", 
    "Estate Planning Coordination",
    "Other / Not Sure"
  ];

  return (
    <>
      <Helmet>
        <title>Contact HRX CPAs | Schedule Consultation | Irvine CPA Firm | (949) 431-0469</title>
        <meta name="description" content="Contact HRX CPAs in Irvine for business tax planning, CFO services & personal tax preparation. Call (949) 431-0469 or schedule online consultation today." />
        <meta name="keywords" content="contact HRX CPAs, Irvine CPA consultation, schedule CPA appointment, tax planning consultation Irvine, CFO services contact" />
        <link rel="canonical" href="https://hrxcpas.com/contact" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact HRX CPAs | Schedule CPA Consultation in Irvine" />
        <meta property="og:description" content="Contact HRX CPAs in Irvine for business tax planning, CFO services & personal tax preparation. Call (949) 431-0469 or schedule online consultation today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/contact" />
        <meta property="og:image" content="https://hrxcpas.com/assets/office-building.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact HRX CPAs | Schedule CPA Consultation in Irvine" />
        <meta name="twitter:description" content="Contact HRX CPAs in Irvine for business tax planning, CFO services & personal tax preparation. Call (949) 431-0469 or schedule consultation." />
        <meta name="twitter:image" content="https://hrxcpas.com/assets/office-building.png" />
        <meta name="twitter:image:alt" content="HRX CPAs Office Building in Irvine, California" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="HRX CPAs" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Go High Level Form Script */}
        <script 
          src="https://link.msgsndr.com/js/form_embed.js"
          onLoad={() => console.log('GHL script loaded successfully')}
          onError={() => console.error('Failed to load GHL script')}
        ></script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                Get In Touch
              </Badge>
              <h1 className="text-hero mb-6">
                Ready to Transform Your
                <span className="block text-primary">Financial Future?</span>
              </h1>
              <p className="text-subtitle mb-8">
                Connect with our team of experienced CPAs and financial advisors. 
                We typically respond to all inquiries within 4 business hours during office hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
                  <a href="tel:(949) 431-0469">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 431-0469
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side - Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 4 business hours. 
                    For urgent matters, please call our office directly.
                  </p>
                </div>

                <Card className="card-elegant overflow-hidden">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/OpZp15XvfGle32NwbQFt"
                    style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
                    id="inline-OpZp15XvfGle32NwbQFt" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Contact Form"
                    data-height="866"
                    data-layout-iframe-id="inline-OpZp15XvfGle32NwbQFt"
                    data-form-id="OpZp15XvfGle32NwbQFt"
                    title="Website Contact Form"
                  ></iframe>
                </Card>
              </div>

              {/* Right Side - Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    We're here to help with all your accounting, tax, and financial advisory needs.
                  </p>
                </div>

                {/* Office Details */}
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Office Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          6 Venture #250<br />
                          Irvine, CA 92618
                        </p>
                        <a 
                          href="https://maps.google.com/?q=6+Venture+250+Irvine+CA+92618"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm mt-2"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a 
                          href="tel:(949) 431-0469" 
                          className="text-primary hover:text-secondary transition-colors font-medium"
                        >
                          (949) 431-0469
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          Available during office hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a 
                          href="mailto:info@hrxcpas.com" 
                          className="text-primary hover:text-secondary transition-colors font-medium"
                        >
                          info@hrxcpas.com
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          We respond within 4 business hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                        <div className="text-muted-foreground">
                          <p>Monday–Thursday: 10:00 AM–4:00 PM</p>
                          <p>Friday–Sunday: Closed</p>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">
                          Pacific Standard Time
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Need Help Right Away?</h3>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full btn-primary group"
                      asChild
                    >
                      <Link to="/book-consultation">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book a Consultation
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full btn-outline group"
                      asChild
                    >
                      <Link to="/faq">
                        <HelpCircle className="w-5 h-5 mr-2" />
                        Browse FAQs
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full btn-outline"
                      asChild
                    >
                      <a href="tel:(949) 431-0469">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Map Embed */}
                <Card className="card-elegant overflow-hidden">
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5998567890!2d-117.77842!3d33.68906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde2b826dddbb%3A0x2e456b4a0a8b4c4d!2s6%20Venture%20%23250%2C%20Irvine%2C%20CA%2092618!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                      width="100%"
                      height="300"
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
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Visit Our Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Located in the prestigious Spectrum Business Center with convenient parking and accessibility.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">What to Expect</h2>
              <p className="text-subtitle">
                Our streamlined process ensures you get the attention and expertise you deserve
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Initial Response</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We'll respond to your inquiry within 4 business hours to schedule your consultation.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Guaranteed response time</span>
                </div>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Discovery Call</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  30-minute consultation to understand your needs and discuss how we can help.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>No obligation consultation</span>
                </div>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Custom Proposal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Detailed service proposal tailored to your specific situation and goals.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transparent pricing</span>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default ContactUs;