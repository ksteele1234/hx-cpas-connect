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

        {/* Services Navigation */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container-width">
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-surface transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {service.icon}
                  {service.title}
                </a>
              ))}
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

        {/* Individual Tax Preparation */}
        <section id="individual-tax" className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Individual Tax Preparation</h2>
                    <p className="text-muted-foreground">Comprehensive tax services for professionals and families</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Perfect for These Individuals:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">High-Income Professionals</h4>
                        <p className="text-sm text-muted-foreground">Doctors, lawyers, executives, tech professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Multi-State Residents</h4>
                        <p className="text-sm text-muted-foreground">Complex residency and income situations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Business Owners</h4>
                        <p className="text-sm text-muted-foreground">Personal returns coordinated with business taxes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Retirees & Estate Beneficiaries</h4>
                        <p className="text-sm text-muted-foreground">Complex retirement and inheritance situations</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Tax Services Include:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Federal and state tax preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Multi-state income allocation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Alternative Minimum Tax (AMT) planning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Quarterly estimated tax payments
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Tax withholding optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        IRS notice response and representation
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Maximize deductions and credits
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Audit protection and support
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Proactive tax planning strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Year-round tax guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Family-focused approach
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-primary" />
                        Peace of mind and confidence
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Tax Season Timeline</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong>January:</strong> Document collection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong>February:</strong> Tax preparation begins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong>March:</strong> Review and filing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong>April:</strong> Final submissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong>Year-round:</strong> Planning support</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* RSU and Equity Planning */}
        <section id="rsu-equity" className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">RSU and Equity Planning</h2>
                    <p className="text-muted-foreground">Strategic tax planning for stock compensation</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Essential for Professionals With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Restricted Stock Units (RSUs)</h4>
                        <p className="text-sm text-muted-foreground">Tech company equity compensation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Stock Options (ISOs/NQSOs)</h4>
                        <p className="text-sm text-muted-foreground">Incentive and non-qualified options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Employee Stock Purchase Plans</h4>
                        <p className="text-sm text-muted-foreground">ESPP participation optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Executive Compensation</h4>
                        <p className="text-sm text-muted-foreground">Complex equity packages</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Equity Planning Services:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        RSU vesting strategy planning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Stock option exercise timing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Tax withholding optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        AMT impact analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Section 83(b) election guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Stock sale timing strategies
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Strategic Outcomes:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Minimize tax impact on equity events
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Optimize vesting and exercise timing
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Avoid costly tax mistakes
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Maximize after-tax value
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Coordinate with financial planning
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-primary" />
                        Long-term wealth building strategy
                      </li>
                    </ul>
                  </Card>
                </div>

                <Card className="card-elegant p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Tech Professional Expertise</h3>
                  <p className="text-muted-foreground mb-4">
                    With extensive experience serving Silicon Valley and Orange County tech professionals, 
                    we understand the unique challenges of equity compensation taxation.
                  </p>
                  <Button className="btn-primary">
                    Schedule Equity Planning Session
                  </Button>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Common Scenarios</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">IPO Preparation</h4>
                      <p className="text-muted-foreground">Pre-IPO planning to minimize tax impact</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Job Transition</h4>
                      <p className="text-muted-foreground">Exercise decisions when changing companies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Large Vesting Events</h4>
                      <p className="text-muted-foreground">Managing significant income spikes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Retirement Planning</h4>
                      <p className="text-muted-foreground">Optimizing equity for retirement goals</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Rental and K-1 Support */}
        <section id="rental-k1" className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Rental and K-1 Support</h2>
                    <p className="text-muted-foreground">Expert handling of investment income and partnership distributions</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Designed for Investors With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Rental Properties</h4>
                        <p className="text-sm text-muted-foreground">Single and multi-family investment properties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Partnership Investments</h4>
                        <p className="text-sm text-muted-foreground">Real estate partnerships and LLCs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Private Equity Investments</h4>
                        <p className="text-sm text-muted-foreground">Alternative investment vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">REITs and Funds</h4>
                        <p className="text-sm text-muted-foreground">Real estate investment trusts</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Investment Tax Services:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Rental income and expense tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Depreciation optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        K-1 analysis and reporting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Passive activity loss planning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Section 1031 exchange support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Investment property sale planning
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Investor Benefits:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Maximize deductions and depreciation
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Strategic tax loss harvesting
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Compliance with complex regulations
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Portfolio optimization strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Year-round investment guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-primary" />
                        Performance tracking and analysis
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Real Estate Expertise</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground">Orange County Focus</h4>
                      <p className="text-muted-foreground">Deep understanding of local real estate market and regulations</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Multi-State Properties</h4>
                      <p className="text-muted-foreground">Experience with out-of-state investment properties</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Professional Networks</h4>
                      <p className="text-muted-foreground">Connections with real estate professionals and attorneys</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Estate Planning Coordination */}
        <section id="estate-planning" className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Estate Planning Coordination</h2>
                    <p className="text-muted-foreground">Seamless integration with your wealth planning team</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Essential for Families With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Multi-Generational Wealth</h4>
                        <p className="text-sm text-muted-foreground">Families planning wealth transfer</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Business Ownership</h4>
                        <p className="text-sm text-muted-foreground">Family business succession planning</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Charitable Giving Goals</h4>
                        <p className="text-sm text-muted-foreground">Philanthropic planning strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Trust Structures</h4>
                        <p className="text-sm text-muted-foreground">Complex trust and estate arrangements</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Family Office Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    We coordinate seamlessly with your estate planning attorney, wealth manager, and insurance 
                    professionals to ensure your tax strategies align with your overall wealth plan.
                  </p>
                  <Button className="btn-primary">
                    Discuss Family Planning Needs
                  </Button>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Coordination Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Estate tax planning and compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Gift tax strategy and reporting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Trust income tax preparation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Charitable giving optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Generation-skipping transfer tax
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Advisor team coordination
                    </li>
                  </ul>
                </Card>
              </div>
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