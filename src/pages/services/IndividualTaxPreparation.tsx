import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
                    <a href="/book-consultation">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Tax Consultation
                    </a>
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
                    <a href="/book-consultation">
                      {index === 1 ? 'Get Started' : 'Learn More'}
                    </a>
                  </Button>
                </Card>
              ))}
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
                  <a href="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
                  <a href="tel:+1-949-455-4842">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 455-4842
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndividualTaxPreparation;