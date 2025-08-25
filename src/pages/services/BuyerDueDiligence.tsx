import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Users,
  Phone,
  Building,
  FileText,
  Target,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BuyerDueDiligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Buyer Due Diligence Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional financial and operational analysis to help buyers make informed acquisition 
              decisions with confidence and clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Due Diligence Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Request Due Diligence Quote
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
                    Professional Due Diligence Analysis
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our comprehensive due diligence services provide buyers with thorough financial and 
                    operational analysis of acquisition targets. We identify risks, opportunities, and 
                    help you make confident investment decisions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <Search className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Financial Review</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive financial analysis</p>
                  </Card>
                  
                  <Card className="p-4">
                    <BarChart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Risk Assessment</h3>
                    <p className="text-sm text-muted-foreground">Identify and quantify risks</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Due Diligence Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Financial statement analysis and verification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Quality of earnings assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Working capital analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Tax compliance review</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Management reporting assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Risk identification and mitigation planning</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Due Diligence Areas */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Due Diligence Focus Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive review of financial performance, trends, and quality of earnings.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Revenue recognition analysis</li>
                  <li>• Expense normalization</li>
                  <li>• Cash flow assessment</li>
                  <li>• Profitability trends</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality of Earnings</h3>
                <p className="text-muted-foreground mb-4">
                  Deep dive into earnings quality, sustainability, and potential adjustments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• One-time item identification</li>
                  <li>• Accounting policy review</li>
                  <li>• Earnings sustainability assessment</li>
                  <li>• Pro forma adjustments</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Working Capital</h3>
                <p className="text-muted-foreground mb-4">
                  Analysis of working capital requirements and optimization opportunities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• A/R and A/P analysis</li>
                  <li>• Inventory assessment</li>
                  <li>• Cash conversion cycle</li>
                  <li>• Working capital trends</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Tax Compliance</h3>
                <p className="text-muted-foreground mb-4">
                  Review of tax compliance history and potential liabilities or opportunities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tax return review</li>
                  <li>• Compliance assessment</li>
                  <li>• Tax provision analysis</li>
                  <li>• Potential liability identification</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Operations Review</h3>
                <p className="text-muted-foreground mb-4">
                  Assessment of operational efficiency and management systems.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Management reporting quality</li>
                  <li>• Internal controls assessment</li>
                  <li>• Systems and processes review</li>
                  <li>• Key personnel analysis</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Growth Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Evaluation of growth prospects, market position, and scalability.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market analysis</li>
                  <li>• Competitive positioning</li>
                  <li>• Growth sustainability</li>
                  <li>• Investment requirements</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Due Diligence Process */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Due Diligence Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Define scope and develop due diligence checklist
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Data Room</h3>
                <p className="text-sm text-muted-foreground">
                  Request and review financial documents
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive financial and operational analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Management</h3>
                <p className="text-sm text-muted-foreground">
                  Management interviews and validation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Report</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive due diligence report
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Due Diligence Deliverables
            </h2>
            
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Key findings and recommendations</li>
                    <li>• Risk assessment summary</li>
                    <li>• Investment highlights</li>
                    <li>• Deal considerations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Detailed Analysis</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Financial statement analysis</li>
                    <li>• Quality of earnings report</li>
                    <li>• Working capital assessment</li>
                    <li>• Risk register and mitigation plans</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Supporting Schedules</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Normalized financial statements</li>
                    <li>• Trend analysis and ratios</li>
                    <li>• Management reporting samples</li>
                    <li>• Benchmark comparisons</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Action Items</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Post-closing integration recommendations</li>
                    <li>• System improvement opportunities</li>
                    <li>• Tax optimization strategies</li>
                    <li>• Performance improvement areas</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Professional Due Diligence Matters
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Risk identification rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">15-25%</div>
                <div className="text-muted-foreground">Typical valuation adjustments</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client satisfaction rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Deals analyzed annually</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Make Informed Acquisition Decisions
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with our experienced team for comprehensive due diligence analysis that protects your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Due Diligence Consultation
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

export default BuyerDueDiligence;