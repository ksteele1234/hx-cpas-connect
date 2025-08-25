import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Building,
  Heart,
  Target,
  FileText,
  Phone,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PersonalEstatePlanning = () => {
  const familyTypes = [
    {
      title: "Multi-Generational Wealth",
      description: "Families planning wealth transfer",
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      title: "Business Ownership",
      description: "Family business succession planning",
      icon: <Building className="w-5 h-5 text-primary" />
    },
    {
      title: "Charitable Giving Goals",
      description: "Philanthropic planning strategies",
      icon: <Heart className="w-5 h-5 text-primary" />
    },
    {
      title: "Trust Structures",
      description: "Complex trust and estate arrangements",
      icon: <Shield className="w-5 h-5 text-primary" />
    }
  ];

  const coordinationServices = [
    "Estate tax planning and compliance",
    "Gift tax strategy and reporting",
    "Trust income tax preparation",
    "Charitable giving optimization",
    "Generation-skipping transfer tax",
    "Family business succession support"
  ];

  const planningProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Comprehensive review of current estate plan and tax situation"
    },
    {
      step: "2",
      title: "Strategy",
      description: "Development of coordinated tax and estate planning strategies"
    },
    {
      step: "3",
      title: "Coordination",
      description: "Integration with attorney, wealth manager, and insurance team"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execution of strategies with ongoing monitoring and adjustments"
    }
  ];

  const caseStudy = {
    title: "Multi-Generational Family Wealth Transfer",
    challenge: "A successful Orange County family needed to transfer $50M business to next generation while minimizing estate taxes.",
    solution: [
      "Implemented grantor retained annuity trust (GRAT)",
      "Coordinated with family limited partnership",
      "Optimized annual gifting strategies",
      "Structured charitable remainder trust"
    ],
    results: [
      "Reduced estate tax liability by $15M",
      "Preserved family business control",
      "Created sustainable charitable giving plan",
      "Established family governance structure"
    ]
  };

  const coordinationAreas = [
    {
      title: "Tax Minimization",
      description: "Strategic coordination to reduce estate and gift taxes",
      features: [
        "Annual exclusion optimization",
        "Lifetime exemption planning",
        "Valuation discount strategies",
        "Tax-efficient gift structures"
      ]
    },
    {
      title: "Professional Coordination",
      description: "Seamless integration with your advisory team",
      features: [
        "Estate attorney collaboration",
        "Wealth manager coordination",
        "Insurance planning integration",
        "Family office services support"
      ]
    },
    {
      title: "Family Governance",
      description: "Multi-generational wealth preservation",
      features: [
        "Next generation education",
        "Family meeting facilitation",
        "Governance structure development",
        "Succession planning support"
      ]
    }
  ];

  const results = [
    { metric: "$15M", description: "Average estate tax savings" },
    { metric: "25+", description: "Years of estate planning experience" },
    { metric: "100%", description: "Multi-generational success rate" },
    { metric: "50+", description: "Families served" }
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
                  Estate Planning Coordination
                </Badge>
                <h1 className="text-hero mb-6">
                  Personal Estate Planning Coordination
                </h1>
                <p className="text-subtitle mb-8">
                  Seamless integration with your wealth planning team to minimize estate taxes 
                  and preserve family wealth across generations. Expert coordination ensures 
                  your tax strategies align with your overall estate plan.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary" asChild>
                    <Link to="/book-consultation">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Estate Review
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline" asChild>
                    <a href="#process">
                      Our Planning Process
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="card-elegant p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Family Office Approach</h3>
                      <p className="text-muted-foreground text-sm">Coordinated wealth planning</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">$15M</div>
                      <div className="text-muted-foreground">Avg Tax Savings</div>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">25+</div>
                      <div className="text-muted-foreground">Years Experience</div>
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
              <h2 className="text-section-title">Coordinated Wealth Planning</h2>
              <p className="text-subtitle">
                Expert integration of tax strategies with comprehensive estate planning
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="card-elegant p-6 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Essential for Families With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {familyTypes.map((type, index) => (
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

                <Card className="card-elegant p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Family Office Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    We coordinate seamlessly with your estate planning attorney, wealth manager, and insurance 
                    professionals to ensure your tax strategies align with your overall wealth plan.
                  </p>
                  <Button className="btn-primary" asChild>
                    <Link to="/book-consultation">
                      Discuss Family Planning Needs
                    </Link>
                  </Button>
                </Card>
              </div>

              <div>
                <Card className="card-elegant p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Coordination Services</h3>
                  <ul className="space-y-2 text-sm">
                    {coordinationServices.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Key Results</h3>
                  <div className="space-y-3">
                    {results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-surface rounded-lg">
                        <div className="text-lg font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Process */}
        <section id="process" className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Our Estate Planning Process</h2>
              <p className="text-subtitle">
                A systematic approach to coordinated wealth planning and tax optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {planningProcess.map((step, index) => (
                <Card key={index} className="card-elegant p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Estate Planning Focus Areas</h2>
              <p className="text-subtitle">
                Specialized expertise across all aspects of estate and wealth planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coordinationAreas.map((area, index) => (
                <Card key={index} className="card-elegant p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Case Study: Family Wealth Transfer</h2>
              <p className="text-subtitle">
                Real results from comprehensive estate planning coordination
              </p>
            </div>

            <Card className="card-elegant p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mb-6">{caseStudy.challenge}</p>
                  
                  <h4 className="font-bold text-foreground mb-3">Our Solution:</h4>
                  <ul className="space-y-2 mb-6">
                    {caseStudy.solution.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3">Results Achieved:</h4>
                  <ul className="space-y-2 mb-6">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">$15M</div>
                    <div className="text-sm text-muted-foreground">Total Estate Tax Savings</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <Card className="card-elegant p-8 text-center bg-gradient-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Protect Your Family's Financial Future
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let poor coordination between your advisors cost your family millions in taxes. 
                Schedule a consultation to review your estate plan and optimize your wealth transfer strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Estate Planning Review
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
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
  );
};

export default PersonalEstatePlanning;