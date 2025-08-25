import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Building,
  BarChart,
  Target,
  DollarSign,
  Clock,
  Users,
  Phone,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TaxPlanningPrep = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tax Planning & Preparation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Proactive tax strategies that minimize your burden while ensuring full compliance. 
              We help businesses and individuals optimize their tax position year-round.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Tax Planning Session
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">
                  View Tax Packages
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Strategic Tax Optimization
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our comprehensive tax planning approach goes far beyond annual preparation. 
                    We provide quarterly planning sessions, entity structure optimization, and 
                    proactive strategies that can reduce your effective tax rate by 15-30%.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <Calculator className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Tax Preparation</h3>
                    <p className="text-sm text-muted-foreground">Federal, state, and local returns</p>
                  </Card>
                  
                  <Card className="p-4">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Strategic Planning</h3>
                    <p className="text-sm text-muted-foreground">Year-round tax optimization</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Tax Services Include</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Quarterly tax planning sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Federal and state tax preparation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Multi-state compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Entity structure optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Tax provision calculations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">IRS audit support and representation</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Strategies */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Key Tax Strategies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Entity Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Choose the right business structure and optimize elections for maximum tax efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• S-Corp elections</li>
                  <li>• Partnership structures</li>
                  <li>• LLC classifications</li>
                  <li>• Multi-entity planning</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Timing Strategies</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic timing of income and deductions to optimize your tax brackets across years.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Income deferral</li>
                  <li>• Expense acceleration</li>
                  <li>• Asset disposal timing</li>
                  <li>• Retirement contributions</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Credit Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Identify and maximize all available tax credits and incentives for your situation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• R&D tax credits</li>
                  <li>• Work opportunity credits</li>
                  <li>• Energy efficiency credits</li>
                  <li>• State-specific incentives</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Results & Outcomes */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Typical Client Outcomes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">15-30%</div>
                <div className="text-muted-foreground">Reduction in effective tax rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Compliance confidence</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
                <div className="text-muted-foreground">Average annual savings</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Client Success Story
              </h2>
              <div className="space-y-6">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-4">Case Study</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Tech Startup Saves $180,000 Annually
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  A growing SaaS company with $5M revenue was using a basic tax prep service and 
                  missing significant opportunities. Through strategic planning, we implemented:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Strategies Implemented</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• R&D tax credit optimization</li>
                      <li>• Entity structure reorganization</li>
                      <li>• Stock option planning</li>
                      <li>• Multi-state tax planning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Results Achieved</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• $180,000 annual tax savings</li>
                      <li>• 25% reduction in effective rate</li>
                      <li>• Improved cash flow management</li>
                      <li>• Audit-ready documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Optimize Your Tax Strategy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a complimentary tax planning consultation to discover your savings opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Tax Planning Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (949) 431-0469
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaxPlanningPrep;