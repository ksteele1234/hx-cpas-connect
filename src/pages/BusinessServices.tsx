import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  DollarSign, 
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Building,
  BarChart,
  Briefcase,
  Shield,
  Search,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessServices = () => {
  const services = [
    {
      id: "tax-planning",
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Tax Planning and Compliance",
      subtitle: "Strategic tax optimization for growing businesses"
    },
    {
      id: "accounting-payroll",
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Full-Service Accounting and Payroll",
      subtitle: "Complete financial management solutions"
    },
    {
      id: "cfo-consulting",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "CFO Consulting and Virtual CFO",
      subtitle: "Executive-level financial leadership"
    },
    {
      id: "business-valuation",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Business Valuation and Exit Planning",
      subtitle: "Maximize your business value and plan your exit"
    },
    {
      id: "buyer-due-diligence",
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Buyer Due Diligence",
      subtitle: "Professional analysis for acquisition decisions"
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
                Business Services
              </Badge>
              <h1 className="text-hero mb-6">
                Strategic Financial Services for 
                <span className="block text-primary">Growing Businesses</span>
              </h1>
              <p className="text-subtitle mb-8">
                Comprehensive accounting, tax planning, and CFO advisory services specifically 
                designed for companies with $1M–$10M in revenue seeking to scale efficiently and profitably.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="btn-outline">
                  Download Service Guide
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

        {/* Tax Planning and Compliance */}
        <section id="tax-planning" className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Tax Planning and Compliance</h2>
                    <p className="text-muted-foreground">Proactive strategies to minimize tax burden and ensure compliance</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Ideal for These Businesses:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Growing Companies</h4>
                        <p className="text-sm text-muted-foreground">$1M-$10M revenue seeking tax optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Multi-Entity Structures</h4>
                        <p className="text-sm text-muted-foreground">Complex ownership and operational structures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">High-Growth Startups</h4>
                        <p className="text-sm text-muted-foreground">Rapid scaling requiring strategic planning</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Exit-Planning Businesses</h4>
                        <p className="text-sm text-muted-foreground">Preparing for sale or succession</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">What You Receive:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Quarterly tax planning sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Annual tax return preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Multi-state tax compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Entity structure optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Tax provision calculations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        IRS audit support and representation
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Business Outcomes:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        15-30% reduction in effective tax rate
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        100% tax compliance confidence
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Improved cash flow through timing strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Strategic advantage in business decisions
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Optimized entity structure for growth
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Peace of mind for ownership team
                      </li>
                    </ul>
                  </Card>
                </div>

                <Card className="card-elegant p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Ready to Optimize Your Tax Strategy?</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a complimentary tax planning consultation to discover potential savings opportunities.
                  </p>
                  <Button className="btn-primary">
                    Schedule Tax Planning Session
                  </Button>
                </Card>
              </div>

              {/* Sidebar CTA */}
              <div className="space-y-6">
                <Card className="card-elegant p-6 sticky top-8">
                  <h3 className="text-lg font-bold text-foreground mb-4">Start Your Journey</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Ready to transform your business finances? Book a consultation to discuss your specific needs.
                  </p>
                  <Button size="lg" className="w-full btn-primary mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="w-full btn-outline">
                    Call (949) 431-0469
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CFO Consulting */}
        <section id="cfo-consulting" className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">CFO Consulting and Virtual CFO</h2>
                    <p className="text-muted-foreground">Executive-level financial leadership for strategic growth</p>
                  </div>
                </div>

                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Designed for Business Leaders Who Need:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Strategic Financial Guidance</h4>
                        <p className="text-sm text-muted-foreground">C-level insights without C-level costs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Growth Planning</h4>
                        <p className="text-sm text-muted-foreground">Scaling strategies and capital planning</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">KPI Development</h4>
                        <p className="text-sm text-muted-foreground">Data-driven performance metrics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Investment Readiness</h4>
                        <p className="text-sm text-muted-foreground">Preparation for funding rounds</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">CFO Services Include:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Monthly CFO strategy sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Custom KPI dashboards
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Budget and forecast development
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Cash flow management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Pricing strategy analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Board presentation materials
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Strategic Outcomes:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        20-40% improvement in profitability
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-primary" />
                        Data-driven decision making
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Clear growth roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Optimized cash flow management
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Investment-ready financials
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Confident leadership team
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Success Story</h3>
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "Hiren's CFO guidance helped us scale from $2M to $8M in revenue while maintaining healthy margins. 
                    His strategic insights were invaluable during our growth phase."
                  </blockquote>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Sarah Chen</p>
                    <p className="text-muted-foreground">CEO, TechFlow Solutions</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Valuation and Exit Planning */}
        <section id="business-valuation" className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Business Valuation and Exit Planning</h2>
                    <p className="text-muted-foreground">Maximize business value and plan successful transitions</p>
                  </div>
                </div>

                <Card className="card-elegant p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">CEPA Certified Exit Planning</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Hiren Parmar is one of the few CPAs in Orange County with CEPA (Certified Exit Planning Advisor) 
                    credentials, providing specialized expertise in business exit strategies.
                  </p>
                  <Button className="btn-primary">
                    Schedule Exit Planning Consultation
                  </Button>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Typical Engagement</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Initial business assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Formal valuation report</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Exit strategy development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Implementation roadmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Ongoing monitoring & updates</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Timeline: 4-8 weeks for initial valuation and exit plan
                    </p>
                  </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Partner with HRX CPAs for strategic financial guidance that drives growth, 
                minimizes risk, and maximizes value for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Call (949) 431-0469
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-primary-foreground/80">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">$1M-$10M</div>
                  <div className="text-primary-foreground/80">Revenue Sweet Spot</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-primary-foreground/80">Businesses Served</div>
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

export default BusinessServices;