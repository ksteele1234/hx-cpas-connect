import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Calculator, 
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Shield,
  Target,
  Users,
  Heart,
  Star,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IndividualTaxPreparation = () => {
  const packages = [
    {
      name: "Core Tax Care",
      price: "$119",
      period: "/month",
      description: "For W-2 earners in California",
      features: [
        "1040 + CA tax preparation",
        "Up to 2 W-2s included",
        "Transcript monitoring",
        "Annual withholding review",
        "30-minute annual check-in"
      ],
      ideal: "Perfect for salaried professionals with straightforward tax situations",
      badge: "Most Popular"
    },
    {
      name: "Professional Plus",
      price: "$249",
      period: "/month",
      description: "For high-income professionals",
      features: [
        "Everything in Core Tax Care",
        "Schedule A itemization",
        "RSU and stock option planning",
        "Quarterly tax vouchers",
        "1 K-1 and 1 rental included",
        "Midyear tax review"
      ],
      ideal: "Ideal for executives, doctors, lawyers, and tech professionals",
      badge: "Professional"
    },
    {
      name: "Private Wealth",
      price: "$495",
      period: "/month",
      description: "For executives and investors",
      features: [
        "Everything in Professional Plus",
        "Multi-state tax returns (up to 3)",
        "AMT planning and review",
        "Up to 4 K-1s and 3 rentals",
        "Charitable giving strategies",
        "Quarterly planning calls",
        "Audit notice response"
      ],
      ideal: "For high-net-worth individuals with complex financial situations",
      badge: "Executive"
    }
  ];

  const clientTypes = [
    {
      title: "High-Income Professionals",
      description: "Doctors, lawyers, executives, tech professionals",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Multi-State Residents",
      description: "Complex residency and income situations",
      icon: <CheckCircle className="w-5 h-5 text-primary" />
    },
    {
      title: "Business Owners",
      description: "Personal returns coordinated with business taxes",
      icon: <CheckCircle className="w-5 h-5 text-primary" />
    },
    {
      title: "Retirees & Estate Beneficiaries",
      description: "Complex retirement and inheritance situations",
      icon: <CheckCircle className="w-5 h-5 text-primary" />
    }
  ];

  const taxServices = [
    "Federal and state tax preparation",
    "Multi-state income allocation",
    "Alternative Minimum Tax (AMT) planning",
    "Quarterly estimated tax payments",
    "Tax withholding optimization",
    "IRS notice response and representation"
  ];

  const keyBenefits = [
    { text: "Maximize deductions and credits", icon: <DollarSign className="w-4 h-4 text-primary" /> },
    { text: "Audit protection and support", icon: <Shield className="w-4 h-4 text-primary" /> },
    { text: "Proactive tax planning strategies", icon: <Target className="w-4 h-4 text-primary" /> },
    { text: "Year-round tax guidance", icon: <Calendar className="w-4 h-4 text-primary" /> },
    { text: "Family-focused approach", icon: <Users className="w-4 h-4 text-primary" /> },
    { text: "Peace of mind and confidence", icon: <Heart className="w-4 h-4 text-primary" /> }
  ];

  const timeline = [
    { month: "January", task: "Document collection" },
    { month: "February", task: "Tax preparation begins" },
    { month: "March", task: "Review and filing" },
    { month: "April", task: "Final submissions" },
    { month: "Year-round", task: "Planning support" }
  ];

  return (
    <>
      <Helmet>
        <title>Individual Tax Preparation | Personal Tax Services | HRX CPAs Irvine</title>
        <meta name="description" content="Comprehensive individual tax preparation for high-income professionals: monthly packages from $119, RSU planning, multi-state returns, audit support in Orange County." />
        <link rel="canonical" href="https://hrxcpas.com/services/individual-tax-preparation" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Individual Tax Preparation | Personal Tax Services | HRX CPAs" />
        <meta property="og:description" content="Comprehensive individual tax preparation for high-income professionals: monthly packages from $119, RSU planning, multi-state returns, audit support in Orange County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/services/individual-tax-preparation" />
        <meta property="og:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Individual Tax Preparation | Personal Tax Services | HRX CPAs" />
        <meta name="twitter:description" content="Comprehensive individual tax preparation for high-income professionals: monthly packages from $119, RSU planning, multi-state returns, audit support." />
        <meta name="twitter:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta name="twitter:image:alt" content="HRX CPAs Individual Tax Preparation Services" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="HRX CPAs" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                  Personal Tax Services
                </Badge>
                <h1 className="text-hero mb-6">
                  Individual Tax Preparation
                </h1>
                <p className="text-subtitle mb-8">
                  Comprehensive tax services designed for high-income professionals, executives, 
                  and families with complex financial situations. Maximize deductions while 
                  minimizing tax liability through strategic planning.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary" asChild>
                    <Link to="/book-consultation">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Tax Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline" asChild>
                    <a href="#packages">
                      View Service Packages
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="card-elegant p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Expert Tax Planning</h3>
                      <p className="text-muted-foreground text-sm">Year-round strategic support</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">$25K+</div>
                      <div className="text-muted-foreground">Average Annual Savings</div>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Comprehensive Tax Services</h2>
              <p className="text-subtitle">
                Expert preparation and strategic planning for complex financial situations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="card-elegant p-6 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Perfect for These Individuals:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {clientTypes.map((type, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {type.icon}
                        <div>
                          <h4 className="font-semibold">{type.title}</h4>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Tax Services Include:</h3>
                    <ul className="space-y-2 text-sm">
                      {taxServices.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits:</h3>
                    <ul className="space-y-2 text-sm">
                      {keyBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {benefit.icon}
                          {benefit.text}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Tax Season Timeline</h3>
                  <div className="space-y-3 text-sm">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><strong>{item.month}:</strong> {item.task}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section id="packages" className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Choose Your Service Level</h2>
              <p className="text-subtitle">
                Three comprehensive packages designed for different levels of complexity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={pkg.name}
                  className={`card-elegant p-6 relative ${index === 1 ? 'border-2 border-primary shadow-xl' : ''}`}
                >
                  {pkg.badge && (
                    <Badge 
                      variant={index === 1 ? "default" : "secondary"} 
                      className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                        index === 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {pkg.badge}
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground italic">{pkg.ideal}</p>
                    
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${index === 1 ? 'btn-primary' : 'btn-outline'}`}
                    asChild
                  >
                    <Link to="/book-consultation">
                      {index === 1 ? 'Get Started' : 'Learn More'}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Frequently Asked Questions</h2>
              <p className="text-subtitle">Common questions about our individual tax services</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What's included in the monthly service fee?</AccordionTrigger>
                  <AccordionContent>
                    Your monthly fee covers complete tax preparation, filing, ongoing planning support, IRS transcript monitoring, withholding optimization, and year-round access to our team for tax questions. There are no surprise fees during tax season - everything is included in your monthly subscription.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does this compare to traditional tax preparation services?</AccordionTrigger>
                  <AccordionContent>
                    Traditional services charge $400-2,000+ annually for preparation only. Our monthly model provides year-round support, proactive planning, and comprehensive service starting at just $119/month. You get ongoing relationship, not just transactional preparation, plus significant savings for most clients.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can you handle multi-state tax situations?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we specialize in multi-state taxation. Our Professional Plus and Private Wealth packages include multi-state returns. We handle residency issues, income allocation, state-specific deductions, and ensure compliance across all states where you have tax obligations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if I get audited?</AccordionTrigger>
                  <AccordionContent>
                    All our clients receive audit support and representation. We'll handle all IRS communications, prepare documentation, and represent you throughout the process. Our Private Wealth package includes comprehensive audit response as a standard feature.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do you handle RSU and stock option taxation?</AccordionTrigger>
                  <AccordionContent>
                    We specialize in equity compensation planning. This includes RSU timing strategies, stock option exercise planning, ESPP optimization, and coordinating with your company's equity plans. We help minimize the tax impact of equity compensation while maximizing your financial benefit.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>When do I need to upgrade to a higher service level?</AccordionTrigger>
                  <AccordionContent>
                    Upgrade to Professional Plus if you have RSUs, rental property, significant itemized deductions, or income over $200K. Consider Private Wealth if you have multiple states, substantial investments, complex K-1s, or need quarterly planning calls. We'll recommend the right level based on your situation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <Card className="card-elegant p-8 text-center bg-gradient-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Optimize Your Tax Strategy?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a consultation to discuss your tax situation and discover how we can 
                help you minimize your tax liability while maximizing your financial potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="tel:+1-949-431-0469">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 431-0469
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default IndividualTaxPreparation;