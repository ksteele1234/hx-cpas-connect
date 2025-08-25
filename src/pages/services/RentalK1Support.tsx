import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Shield,
  Target,
  Users,
  BarChart,
  TrendingUp,
  Home,
  Phone,
  FileText,
  Calculator
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RentalK1Support = () => {
  const investorTypes = [
    {
      title: "Rental Properties",
      description: "Single and multi-family investment properties",
      icon: <Home className="w-5 h-5 text-primary" />
    },
    {
      title: "Partnership Investments",
      description: "Real estate partnerships and LLCs",
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      title: "Private Equity Investments",
      description: "Alternative investment vehicles",
      icon: <BarChart className="w-5 h-5 text-primary" />
    },
    {
      title: "REITs and Funds",
      description: "Real estate investment trusts",
      icon: <TrendingUp className="w-5 h-5 text-primary" />
    }
  ];

  const taxServices = [
    "Rental income and expense tracking",
    "Depreciation optimization",
    "K-1 analysis and reporting",
    "Passive activity loss planning",
    "Section 1031 exchange support",
    "Investment property sale planning"
  ];

  const investorBenefits = [
    { text: "Maximize deductions and depreciation", icon: <DollarSign className="w-4 h-4 text-primary" /> },
    { text: "Strategic tax loss harvesting", icon: <Target className="w-4 h-4 text-primary" /> },
    { text: "Compliance with complex regulations", icon: <Shield className="w-4 h-4 text-primary" /> },
    { text: "Portfolio optimization strategies", icon: <TrendingUp className="w-4 h-4 text-primary" /> },
    { text: "Year-round investment guidance", icon: <Calendar className="w-4 h-4 text-primary" /> },
    { text: "Performance tracking and analysis", icon: <BarChart className="w-4 h-4 text-primary" /> }
  ];

  const serviceFeatures = [
    {
      title: "Rental Property Analysis",
      description: "Comprehensive income and expense optimization",
      features: [
        "Monthly rental income tracking",
        "Expense categorization and optimization",
        "Depreciation schedule management",
        "Repair vs. improvement analysis",
        "Cash flow optimization strategies"
      ]
    },
    {
      title: "K-1 Partnership Support",
      description: "Expert handling of partnership distributions",
      features: [
        "K-1 document analysis and review",
        "Partnership income allocation",
        "Passive activity loss optimization",
        "At-risk and basis calculations",
        "Multi-state partnership compliance"
      ]
    },
    {
      title: "Investment Strategy Planning",
      description: "Long-term portfolio tax optimization",
      features: [
        "1031 exchange coordination",
        "Investment timing strategies",
        "Exit planning for properties",
        "Estate planning integration",
        "Multi-generational wealth planning"
      ]
    }
  ];

  const results = [
    { metric: "30%", description: "Average tax savings on rental income" },
    { metric: "15+", description: "Years of real estate expertise" },
    { metric: "95%", description: "Client retention rate" },
    { metric: "$2M+", description: "Average client property portfolio" }
  ];

  const orangeCountyFocus = [
    "Deep understanding of local real estate market and regulations",
    "Experience with out-of-state investment properties",
    "Connections with real estate professionals and attorneys",
    "Knowledge of California rental property laws and tax implications"
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
                  Investment Tax Services
                </Badge>
                <h1 className="text-hero mb-6">
                  Rental & K-1 Support
                </h1>
                <p className="text-subtitle mb-8">
                  Expert tax handling for real estate investors and partnership income. Maximize 
                  deductions, optimize depreciation, and navigate complex K-1 reporting with 
                  confidence and precision.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary" asChild>
                    <a href="/book-consultation">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Investment Review
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline" asChild>
                    <a href="#services">
                      Explore Our Services
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="card-elegant p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Real Estate Expertise</h3>
                      <p className="text-muted-foreground text-sm">Orange County focused</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">30%</div>
                      <div className="text-muted-foreground">Avg Tax Savings</div>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-muted-foreground">Properties Managed</div>
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
              <h2 className="text-section-title">Comprehensive Investment Tax Services</h2>
              <p className="text-subtitle">
                Expert handling of investment income and partnership distributions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="card-elegant p-6 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Designed for Investors With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {investorTypes.map((type, index) => (
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
                    <h3 className="text-lg font-bold text-foreground mb-4">Investment Tax Services:</h3>
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
                    <h3 className="text-lg font-bold text-foreground mb-4">Investor Benefits:</h3>
                    <ul className="space-y-2 text-sm">
                      {investorBenefits.map((benefit, index) => (
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
                  <h3 className="text-lg font-bold text-foreground mb-4">Key Results</h3>
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-surface rounded-lg">
                        <div className="text-xl font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section id="services" className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Specialized Service Areas</h2>
              <p className="text-subtitle">
                Comprehensive support for all aspects of investment taxation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <Card key={index} className="card-elegant p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Orange County Focus */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                  Local Expertise
                </Badge>
                <h2 className="text-section-title mb-4">Orange County Real Estate Expertise</h2>
                <p className="text-subtitle mb-6">
                  With deep roots in Orange County's real estate market, we understand the unique 
                  opportunities and challenges facing local property investors.
                </p>
                
                <div className="space-y-4 mb-6">
                  {orangeCountyFocus.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>

                <Button className="btn-primary" asChild>
                  <a href="/book-consultation">
                    Discuss Your Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-elegant p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Tax Optimization</h3>
                  <p className="text-sm text-muted-foreground">Maximize deductions and minimize liability</p>
                </Card>
                
                <Card className="card-elegant p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Growth Strategy</h3>
                  <p className="text-sm text-muted-foreground">Long-term wealth building plans</p>
                </Card>
                
                <Card className="card-elegant p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Compliance</h3>
                  <p className="text-sm text-muted-foreground">Stay compliant with all regulations</p>
                </Card>
                
                <Card className="card-elegant p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Professional Network</h3>
                  <p className="text-sm text-muted-foreground">Connected to top advisors</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <Card className="card-elegant p-8 text-center bg-gradient-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Optimize Your Investment Portfolio
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let complex tax rules limit your investment potential. Schedule a consultation 
                to review your portfolio and discover optimization opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <a href="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Portfolio Review
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

export default RentalK1Support;