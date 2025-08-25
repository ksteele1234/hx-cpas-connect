import { Helmet } from 'react-helmet-async';
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
  TrendingUp, 
  BarChart,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  DollarSign,
  Users,
  Phone,
  Building,
  Briefcase,
  PieChart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CFOConsulting = () => {
  return (
    <>
      <Helmet>
        <title>CFO Consulting Services | Virtual CFO | Financial Advisory | HRX CPAs Irvine</title>
        <meta name="description" content="Fractional CFO services for $1M-$10M businesses: financial planning, KPI dashboards, fundraising support, business growth strategies in Orange County." />
        <link rel="canonical" href="https://hrxcpas.com/services/cfo-consulting" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CFO Consulting Services | Virtual CFO | Financial Advisory | HRX CPAs" />
        <meta property="og:description" content="Fractional CFO services for $1M-$10M businesses: financial planning, KPI dashboards, fundraising support, business growth strategies in Orange County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/services/cfo-consulting" />
        <meta property="og:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CFO Consulting Services | Virtual CFO | Financial Advisory | HRX CPAs" />
        <meta name="twitter:description" content="Fractional CFO services for $1M-$10M businesses: financial planning, KPI dashboards, fundraising support, business growth strategies." />
        <meta name="twitter:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta name="twitter:image:alt" content="HRX CPAs CFO Consulting Services" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="HRX CPAs" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              CFO Consulting & Virtual CFO
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Executive-level financial leadership for growing businesses. Get C-suite strategic insights 
              without the C-suite cost, helping you scale efficiently and profitably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule CFO Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">
                  View CFO Packages
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
                    Strategic Financial Leadership
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our CFO consulting services provide the strategic financial guidance growing businesses 
                    need. From cash flow forecasting to KPI development, we help you make data-driven 
                    decisions that drive growth and profitability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <BarChart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Financial Analysis</h3>
                    <p className="text-sm text-muted-foreground">Deep insights and performance metrics</p>
                  </Card>
                  
                  <Card className="p-4">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Growth Strategy</h3>
                    <p className="text-sm text-muted-foreground">Strategic planning for sustainable growth</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">CFO Services Include</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Monthly CFO strategy sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Custom KPI dashboards</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Budget and forecast development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Cash flow management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Pricing strategy analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Board presentation materials</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CFO Service Areas */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              CFO Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <PieChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic budgeting, forecasting, and scenario planning to guide business decisions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual budget development</li>
                  <li>• Rolling forecasts</li>
                  <li>• Scenario modeling</li>
                  <li>• Capital planning</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  KPI development and financial analysis to measure and improve performance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• KPI dashboard creation</li>
                  <li>• Variance analysis</li>
                  <li>• Profitability analysis</li>
                  <li>• Benchmarking studies</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Growth Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic guidance for funding, acquisitions, and sustainable growth initiatives.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Investment readiness</li>
                  <li>• M&A support</li>
                  <li>• Growth modeling</li>
                  <li>• Exit planning</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Cash Management</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize cash flow, working capital, and liquidity management strategies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cash flow forecasting</li>
                  <li>• Working capital optimization</li>
                  <li>• Credit facility management</li>
                  <li>• Investment strategies</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Risk Management</h3>
                <p className="text-muted-foreground mb-4">
                  Identify, assess, and mitigate financial and operational risks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Risk assessment</li>
                  <li>• Internal controls</li>
                  <li>• Insurance optimization</li>
                  <li>• Compliance oversight</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Board Relations</h3>
                <p className="text-muted-foreground mb-4">
                  Professional board reporting and investor relations support.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Board presentation prep</li>
                  <li>• Investor reporting</li>
                  <li>• Due diligence support</li>
                  <li>• Strategic communications</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Results & Outcomes */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              CFO Service Outcomes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">20-40%</div>
                <div className="text-muted-foreground">Improvement in profitability</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Data-driven decisions</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">Forecast accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">Investment</div>
                <div className="text-muted-foreground">Ready financials</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                CFO Success Story
              </h2>
              <div className="space-y-6">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-4">Case Study</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Manufacturing Company Scales from $2M to $8M
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  A family-owned manufacturing business needed strategic financial guidance to scale operations 
                  and prepare for potential acquisition. Our CFO services helped them achieve remarkable growth:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">CFO Initiatives</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Implemented advanced KPI tracking</li>
                      <li>• Developed 3-year growth plan</li>
                      <li>• Optimized pricing strategies</li>
                      <li>• Prepared investment-ready financials</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Results Achieved</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 300% revenue growth in 3 years</li>
                      <li>• 35% improvement in margins</li>
                      <li>• Secured $2M growth capital</li>
                      <li>• Successfully acquired by strategic buyer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
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
                <AccordionTrigger>What's the difference between CFO consulting and traditional accounting?</AccordionTrigger>
                <AccordionContent>
                  Traditional accounting focuses on recording transactions and compliance. CFO consulting provides strategic financial leadership including forecasting, KPI analysis, funding strategies, and business growth planning. We help you understand what your numbers mean and how to use them to drive business decisions and growth.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need a full-time CFO or is consulting better?</AccordionTrigger>
                <AccordionContent>
                  For most businesses under $10M revenue, fractional CFO consulting is more cost-effective than a full-time hire. You get executive-level expertise without the $200K+ salary and benefits. As you grow beyond $10-15M in revenue, you might consider transitioning to a full-time CFO, and we can help with that transition.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you help with fundraising and investor relations?</AccordionTrigger>
                <AccordionContent>
                  We prepare comprehensive financial packages including historical financials, projections, and investor-ready presentations. We help structure deals, model different funding scenarios, and provide ongoing financial reporting that meets investor expectations. Our experience includes debt financing, equity raises, and M&A transactions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  We work across many industries including technology, professional services, manufacturing, real estate, and healthcare. Our focus is on businesses with $1M-$10M in revenue that need strategic financial guidance. Each industry has unique challenges, and we adapt our approach to your specific sector's needs and metrics.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>How quickly can you help improve our financial performance?</AccordionTrigger>
                <AccordionContent>
                  Most clients see immediate improvements in financial visibility and decision-making within the first month. Operational improvements typically show results within 2-3 months, while strategic initiatives and major process improvements can take 6-12 months to fully implement. We provide both quick wins and long-term strategic value.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>What's included in your monthly CFO consulting package?</AccordionTrigger>
                <AccordionContent>
                  Our packages include monthly financial analysis and reporting, KPI dashboards, cash flow forecasting, budget vs. actual analysis, quarterly business reviews, unlimited email/phone support, and strategic project work. We customize the service level based on your business size and complexity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for CFO-Level Financial Leadership?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with strategic financial guidance from experienced CFO professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule CFO Consultation
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
    </>
  );
};

export default CFOConsulting;