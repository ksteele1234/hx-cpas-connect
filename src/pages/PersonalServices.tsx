import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Building,
  BarChart,
  Heart,
  Star,
  DollarSign,
  Target,
  Home
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PersonalServices = () => {
  const services = [
    {
      id: "individual-tax",
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Individual Tax Preparation",
      subtitle: "Comprehensive tax services for professionals and executives"
    },
    {
      id: "rsu-equity",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "RSU and Equity Planning",
      subtitle: "Strategic planning for stock compensation"
    },
    {
      id: "rental-k1",
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Rental and K-1 Support",
      subtitle: "Real estate and partnership income optimization"
    },
    {
      id: "estate-planning",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Estate Planning Coordination",
      subtitle: "Seamless integration with your wealth planning team"
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                Personal & Family Services
              </Badge>
              <h1 className="text-hero mb-6">
                Expert Tax & Financial Services for 
                <span className="block text-primary">Professionals & Families</span>
              </h1>
              <p className="text-subtitle mb-8">
                Comprehensive tax preparation, strategic planning, and wealth coordination services 
                for high-income professionals, executives, and multi-generational families in Orange County.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start with Core Tax Care
                </Button>
                <Button size="lg" variant="outline" className="btn-outline">
                  Compare All Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Our Personal Services</h2>
              <p className="text-subtitle">
                Comprehensive tax and financial services tailored for individuals and families
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const serviceLinks = {
                  'individual-tax': '/services/individual-tax-preparation',
                  'rsu-equity': '/services/rsu-equity-planning',
                  'rental-k1': '/services/rental-k1-support',
                  'estate-planning': '/services/personal-estate-planning'
                };
                
                return (
                  <Card key={service.id} className="card-elegant p-6 text-center group hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
                    <Button variant="outline" size="sm" className="btn-outline group-hover:btn-primary" asChild>
                      <a href={serviceLinks[service.id as keyof typeof serviceLinks]}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Packages Overview */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Choose Your Service Level</h2>
              <p className="text-subtitle">
                Three comprehensive packages designed for different levels of complexity and support needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                  >
                    {index === 1 ? 'Get Started' : 'Learn More'}
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Not sure which package is right for you? Schedule a consultation to discuss your needs.
              </p>
              <Button variant="outline" className="btn-outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Simplify Your Personal Finances?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Choose from our three comprehensive packages designed for different levels of complexity and support needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start with Core Tax Care
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">$119</div>
                  <div className="text-primary-foreground/80">Starting Monthly Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-primary-foreground/80">Families Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-primary-foreground/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalServices;