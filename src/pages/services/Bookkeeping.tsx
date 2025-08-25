import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Bookkeeping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Bookkeeping Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accurate, timely financial records that give you complete visibility into your business performance 
              and enable strategic decision-making.
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
                  View Pricing
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
                    Monthly Financial Clarity
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our professional bookkeeping services provide accurate, timely financial records 
                    delivered within 10 business days each month. From transaction categorization to 
                    financial statement preparation, we handle the details so you can focus on growing your business.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <FileText className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Transaction Processing</h3>
                    <p className="text-sm text-muted-foreground">Complete categorization and reconciliation</p>
                  </Card>
                  
                  <Card className="p-4">
                    <BarChart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Financial Statements</h3>
                    <p className="text-sm text-muted-foreground">Monthly P&L, balance sheet, and cash flow</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Bank and credit card reconciliation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Transaction categorization and coding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Monthly financial statement package</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Accounts receivable and payable management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Sales tax preparation and filing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">1099 contractor reporting</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Bookkeeping Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic import of bank transactions and receipt processing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Expert categorization and reconciliation of all transactions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly financial statements with insights and analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Complete package delivered within 10 business days
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Bookkeeping Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Essential</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Perfect for small businesses with basic needs</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Up to 100 transactions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly financial statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Bank reconciliation</span>
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
                  <span className="text-3xl font-bold text-primary">$800</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Comprehensive bookkeeping for growing businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Up to 300 transactions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Complete financial package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">A/R and A/P management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Sales tax filing</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$1,200</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">Full-service solution for complex businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Unlimited transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced reporting & analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-entity support</span>
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

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in your bookkeeping service?</AccordionTrigger>
                <AccordionContent>
                  We provide complete monthly bookkeeping including bank reconciliation, transaction categorization, accounts receivable/payable management, monthly financial statements (P&L, balance sheet, cash flow), sales tax preparation, and 1099 contractor reporting. Everything is delivered within 10 business days each month.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly do you close the books each month?</AccordionTrigger>
                <AccordionContent>
                  We guarantee delivery of your complete financial package within 10 business days of month-end. Most clients receive their financials within 7 business days. This fast turnaround gives you timely insights to make informed business decisions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What accounting software do you use?</AccordionTrigger>
                <AccordionContent>
                  We primarily work with QuickBooks Online, Xero, and other cloud-based platforms. If you're already using a system, we can likely work with it. If you're starting fresh, we'll recommend the best platform based on your business needs and help with setup and training.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you handle sales tax filing?</AccordionTrigger>
                <AccordionContent>
                  Yes, sales tax preparation and filing is included in our Professional and Enterprise packages. We'll calculate your sales tax liability, prepare the returns, and can handle the filing process to ensure you stay compliant with all jurisdictions where you collect sales tax.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you clean up books from previous years?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We offer catch-up bookkeeping services to clean up and organize prior periods. This ensures your historical data is accurate before we begin ongoing monthly services. We'll provide a separate proposal for catch-up work based on the scope required.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>How do you ensure accuracy and quality control?</AccordionTrigger>
                <AccordionContent>
                  Every client's books go through our multi-step review process. Initial work is completed by experienced bookkeepers, then reviewed by senior staff, and finally approved by our CPA. We also maintain detailed documentation and follow standardized procedures to ensure consistency and accuracy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Your Books in Order?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle your bookkeeping so you can focus on what you do best - growing your business.
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

export default Bookkeeping;