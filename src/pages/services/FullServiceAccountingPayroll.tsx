import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Clock,
  Phone,
  Building,
  Calculator,
  BarChart,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FullServiceAccountingPayroll = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Full-Service Accounting & Payroll
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive accounting and payroll solutions that handle all your financial operations, 
              from daily transactions to strategic reporting and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">
                  View Service Packages
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
                    Complete Financial Operations
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our full-service accounting and payroll solutions provide everything your business 
                    needs for complete financial operations. From bookkeeping to payroll processing, 
                    we handle the details so you can focus on growing your business.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <FileText className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Full Accounting</h3>
                    <p className="text-sm text-muted-foreground">Complete bookkeeping and reporting</p>
                  </Card>
                  
                  <Card className="p-4">
                    <Users className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Payroll Services</h3>
                    <p className="text-sm text-muted-foreground">End-to-end payroll management</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Complete Services Include</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Full-cycle bookkeeping and accounting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Complete payroll processing and compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Monthly financial statement packages</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Tax preparation and planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Accounts receivable and payable management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Financial analysis and advisory</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Components */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Complete Service Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Accounting Services */}
              <Card className="p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Accounting Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Daily Bookkeeping</h4>
                      <p className="text-sm text-muted-foreground">Transaction recording and categorization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Bank Reconciliation</h4>
                      <p className="text-sm text-muted-foreground">Monthly account reconciliation and review</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Financial Statements</h4>
                      <p className="text-sm text-muted-foreground">P&L, balance sheet, and cash flow reports</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">A/R and A/P Management</h4>
                      <p className="text-sm text-muted-foreground">Invoice processing and vendor payments</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Payroll Services */}
              <Card className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Payroll Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Payroll Processing</h4>
                      <p className="text-sm text-muted-foreground">Bi-weekly or monthly payroll runs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Tax Compliance</h4>
                      <p className="text-sm text-muted-foreground">Federal, state, and local tax filings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Benefits Administration</h4>
                      <p className="text-sm text-muted-foreground">Health insurance and retirement plan support</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Year-End Reporting</h4>
                      <p className="text-sm text-muted-foreground">W-2s, 1099s, and quarterly reports</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Service Tier Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Badge variant="secondary" className="mb-4">Essential</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-4">Basic Operations</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$1,200</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Perfect for small businesses with basic needs</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Basic bookkeeping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Simple payroll (up to 10 employees)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly financial statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Basic tax compliance</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
              
              <Card className="p-6 border-2 border-primary">
                <Badge className="mb-4">Most Popular</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-4">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$2,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Comprehensive solution for growing businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Complete accounting services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full payroll (up to 25 employees)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced financial reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">A/R and A/P management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly advisory calls</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <Badge variant="secondary" className="mb-4">Enterprise</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-4">Complete Solution</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$3,500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Full-service solution for complex businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full accounting & payroll</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Unlimited employees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">CFO-level advisory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom reporting & analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose Full-Service Accounting & Payroll?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Time Savings</h3>
                <p className="text-sm text-muted-foreground">
                  Free up 20+ hours per week to focus on growing your business
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">
                  Lower cost than hiring full-time accounting and payroll staff
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Better Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Professional-level financial reporting and analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  Services grow with your business needs and complexity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Streamline Your Financial Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle your accounting and payroll so you can focus on what you do best - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Consultation
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

export default FullServiceAccountingPayroll;