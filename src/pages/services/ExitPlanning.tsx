import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Users,
  Phone,
  Building,
  Briefcase,
  BarChart,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ExitPlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exit Planning Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Maximize your business value and plan your successful exit strategy. 
              Our CEPA-certified planning helps you achieve your financial and personal goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Exit Planning Session
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Request Exit Readiness Assessment
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
                    Strategic Exit Planning
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Exit planning is much more than selling your business. It's a comprehensive strategy 
                    that maximizes value, minimizes taxes, and ensures your post-exit financial security. 
                    Our CEPA-certified approach addresses all aspects of your transition.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <Target className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Value Maximization</h3>
                    <p className="text-sm text-muted-foreground">Optimize business value for exit</p>
                  </Card>
                  
                  <Card className="p-4">
                    <DollarSign className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Tax Optimization</h3>
                    <p className="text-sm text-muted-foreground">Minimize transaction taxes</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Exit Planning Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Business valuation and value enhancement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Tax-efficient exit strategies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Succession planning and management transition</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Financial security analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Deal structure optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Post-exit wealth management coordination</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Exit Planning Process */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Exit Planning Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive business and personal financial assessment
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Develop customized exit strategy aligned with your goals
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Enhancement</h3>
                <p className="text-sm text-muted-foreground">
                  Implement value enhancement initiatives
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Execute the exit strategy and transition plan
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Exit Options */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Exit Strategy Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Sale</h3>
                <p className="text-muted-foreground mb-4">
                  Sale to strategic acquirer seeking synergies and market expansion.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Highest valuation potential</li>
                  <li>• Synergy premiums</li>
                  <li>• Market expansion opportunities</li>
                  <li>• Cultural fit considerations</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Buyer Sale</h3>
                <p className="text-muted-foreground mb-4">
                  Sale to private equity or financial buyers focused on returns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional management retention</li>
                  <li>• Growth capital availability</li>
                  <li>• Operational expertise</li>
                  <li>• Potential rollover equity</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Management Buyout</h3>
                <p className="text-muted-foreground mb-4">
                  Transfer ownership to existing management team or employees.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cultural continuity</li>
                  <li>• Management commitment</li>
                  <li>• ESOP possibilities</li>
                  <li>• Gradual transition options</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Recapitalization</h3>
                <p className="text-muted-foreground mb-4">
                  Partial liquidity while retaining significant ownership stake.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Partial liquidity event</li>
                  <li>• Continued ownership</li>
                  <li>• Growth capital injection</li>
                  <li>• Risk diversification</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Family Succession</h3>
                <p className="text-muted-foreground mb-4">
                  Transfer business to next generation family members.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family legacy preservation</li>
                  <li>• Tax-efficient transfer strategies</li>
                  <li>• Next-generation preparation</li>
                  <li>• Gradual transition planning</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">IPO</h3>
                <p className="text-muted-foreground mb-4">
                  Public offering for qualified high-growth companies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Access to public markets</li>
                  <li>• Liquidity for shareholders</li>
                  <li>• Growth capital access</li>
                  <li>• Enhanced credibility</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CEPA Credentials */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-primary/5">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Certified Exit Planning Advisor (CEPA)
                </h2>
                <Badge variant="secondary" className="mb-4">CEPA Credential</Badge>
                <p className="text-muted-foreground">
                  Our team includes a Certified Exit Planning Advisor (CEPA), representing 
                  the highest level of exit planning expertise and professional standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">CEPA Expertise</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Value acceleration strategies</li>
                    <li>• Exit readiness assessment</li>
                    <li>• Advisor team coordination</li>
                    <li>• Post-exit planning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Holistic Approach</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Business value optimization</li>
                    <li>• Personal financial security</li>
                    <li>• Tax minimization strategies</li>
                    <li>• Legacy and impact planning</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Exit Planning Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">25-40%</div>
                <div className="text-muted-foreground">Value enhancement potential</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">$5M+</div>
                <div className="text-muted-foreground">Average tax savings</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Goal achievement rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">3-7</div>
                <div className="text-muted-foreground">Years planning horizon</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Plan Your Successful Exit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your exit planning journey with a comprehensive assessment from our CEPA-certified team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Exit Planning Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

export default ExitPlanning;