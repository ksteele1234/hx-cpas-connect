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
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Shield,
  Target,
  Star,
  BarChart,
  Phone,
  Zap,
  TrendingDown
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RSUEquityPlanning = () => {
  const equityTypes = [
    {
      title: "Restricted Stock Units (RSUs)",
      description: "Tech company equity compensation",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Stock Options (ISOs/NQSOs)",
      description: "Incentive and non-qualified options",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Employee Stock Purchase Plans",
      description: "ESPP participation optimization",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Executive Compensation",
      description: "Complex equity packages",
      icon: <Star className="w-5 h-5 text-primary" />
    }
  ];

  const planningServices = [
    "RSU vesting strategy planning",
    "Stock option exercise timing",
    "Tax withholding optimization",
    "AMT impact analysis",
    "Section 83(b) election guidance",
    "Stock sale timing strategies"
  ];

  const strategicOutcomes = [
    { text: "Minimize tax impact on equity events", icon: <DollarSign className="w-4 h-4 text-primary" /> },
    { text: "Optimize vesting and exercise timing", icon: <Target className="w-4 h-4 text-primary" /> },
    { text: "Avoid costly tax mistakes", icon: <Shield className="w-4 h-4 text-primary" /> },
    { text: "Maximize after-tax value", icon: <TrendingUp className="w-4 h-4 text-primary" /> },
    { text: "Coordinate with financial planning", icon: <Calendar className="w-4 h-4 text-primary" /> },
    { text: "Long-term wealth building strategy", icon: <BarChart className="w-4 h-4 text-primary" /> }
  ];

  const commonScenarios = [
    {
      title: "IPO Preparation",
      description: "Pre-IPO planning to minimize tax impact",
      impact: "Save 15-30% on tax liability"
    },
    {
      title: "Job Transition",
      description: "Exercise decisions when changing companies",
      impact: "Optimize timing and tax outcomes"
    },
    {
      title: "Large Vesting Events",
      description: "Managing significant income spikes",
      impact: "Reduce AMT exposure by 40%+"
    },
    {
      title: "Retirement Planning",
      description: "Optimizing equity for retirement goals",
      impact: "Maximize long-term wealth growth"
    }
  ];

  const results = [
    { metric: "35%", description: "Average tax savings on equity events" },
    { metric: "50%", description: "Reduction in AMT exposure" },
    { metric: "98%", description: "Client satisfaction rate" },
    { metric: "15+", description: "Years of equity planning experience" }
  ];

  return (
    <>
      <Helmet>
        <title>RSU & Equity Planning | Stock Compensation Tax Strategy | HRX CPAs Irvine</title>
        <meta name="description" content="Expert RSU and equity compensation planning: tax optimization, vesting strategies, stock option planning for tech professionals and executives in Orange County." />
        <link rel="canonical" href="https://hrxcpas.com/services/rsu-equity-planning" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="RSU & Equity Planning | Stock Compensation Tax Strategy | HRX CPAs" />
        <meta property="og:description" content="Expert RSU and equity compensation planning: tax optimization, vesting strategies, stock option planning for tech professionals and executives in Orange County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/services/rsu-equity-planning" />
        <meta property="og:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RSU & Equity Planning | Stock Compensation Tax Strategy | HRX CPAs" />
        <meta name="twitter:description" content="Expert RSU and equity compensation planning: tax optimization, vesting strategies, stock option planning for tech professionals and executives." />
        <meta name="twitter:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta name="twitter:image:alt" content="HRX CPAs RSU & Equity Planning Services" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="HRX CPAs" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                  Equity Compensation Services
                </Badge>
                <h1 className="text-hero mb-6">
                  RSU & Equity Planning
                </h1>
                <p className="text-subtitle mb-8">
                  Strategic tax planning for stock compensation that maximizes your after-tax value. 
                  Navigate complex equity structures with confidence while avoiding costly tax mistakes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary" asChild>
                    <Link to="/book-consultation">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Equity Review
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline" asChild>
                    <a href="#scenarios">
                      Explore Common Scenarios
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="card-elegant p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Tech Professional Expertise</h3>
                      <p className="text-muted-foreground text-sm">Silicon Valley & Orange County focus</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">35%</div>
                      <div className="text-muted-foreground">Avg Tax Savings</div>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-muted-foreground">Equity Plans Optimized</div>
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
              <h2 className="text-section-title">Comprehensive Equity Planning</h2>
              <p className="text-subtitle">
                Expert guidance for all types of stock compensation and equity structures
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="card-elegant p-6 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Essential for Professionals With:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {equityTypes.map((type, index) => (
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
                    <h3 className="text-lg font-bold text-foreground mb-4">Equity Planning Services:</h3>
                    <ul className="space-y-2 text-sm">
                      {planningServices.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="card-elegant p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Strategic Outcomes:</h3>
                    <ul className="space-y-2 text-sm">
                      {strategicOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {outcome.icon}
                          {outcome.text}
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

        {/* Common Scenarios */}
        <section id="scenarios" className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Common Equity Planning Scenarios</h2>
              <p className="text-subtitle">
                Real-world situations where strategic planning makes a significant difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonScenarios.map((scenario, index) => (
                <Card key={index} className="card-elegant p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{scenario.title}</h3>
                      <p className="text-muted-foreground mb-3">{scenario.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{scenario.impact}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Professional Focus */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                  Industry Expertise
                </Badge>
                <h2 className="text-section-title mb-4">Tech Professional Expertise</h2>
                <p className="text-subtitle mb-6">
                  With extensive experience serving Silicon Valley and Orange County tech professionals, 
                  we understand the unique challenges of equity compensation taxation.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Deep understanding of RSU vesting schedules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>IPO and acquisition planning expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Multi-state tax optimization for remote workers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>ESPP and stock option strategy coordination</span>
                  </div>
                </div>

                <Button className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    Schedule Equity Planning Session
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-elegant p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Meta</h3>
                  <p className="text-sm text-muted-foreground">RSU optimization specialist</p>
                </Card>
                
                <Card className="card-elegant p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Google</h3>
                  <p className="text-sm text-muted-foreground">Complex equity structures</p>
                </Card>
                
                <Card className="card-elegant p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Apple</h3>
                  <p className="text-sm text-muted-foreground">ESPP coordination</p>
                </Card>
                
                <Card className="card-elegant p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Startups</h3>
                  <p className="text-sm text-muted-foreground">Pre-IPO planning</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-section-title">Frequently Asked Questions</h2>
              <p className="text-subtitle">Common questions about RSU and equity compensation planning</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>When should I sell my RSUs after they vest?</AccordionTrigger>
                  <AccordionContent>
                    There's no one-size-fits-all answer. The decision depends on your overall financial situation, tax bracket, stock price trends, and diversification goals. We help you create a systematic selling strategy that balances tax efficiency with risk management, often including scheduled sales regardless of stock price to avoid emotional decision-making.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How are RSUs taxed differently from stock options?</AccordionTrigger>
                  <AccordionContent>
                    RSUs are taxed as ordinary income when they vest (W-2 income), while stock options are typically taxed when exercised. RSUs have no exercise price - you receive the full stock value. ISOs can qualify for capital gains treatment if holding periods are met, while RSUs are always ordinary income at vest, then capital gains on any appreciation after vesting.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Should I make an 83(b) election for my equity compensation?</AccordionTrigger>
                  <AccordionContent>
                    83(b) elections are typically relevant for restricted stock (not RSUs) and certain stock options. The election allows you to pay taxes upfront on the grant value, potentially converting future appreciation to capital gains. This decision must be made within 30 days of grant and requires careful analysis of your situation and stock prospects.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I minimize taxes on my equity compensation?</AccordionTrigger>
                  <AccordionContent>
                    Strategies include timing sales for optimal tax brackets, using tax-loss harvesting, contributing to retirement accounts to offset income, charitable giving with appreciated stock, and coordinating with other income sources. For executives, deferred compensation plans might also be beneficial. Each strategy depends on your specific circumstances.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>What happens to my equity if I leave the company?</AccordionTrigger>
                  <AccordionContent>
                    This depends on your specific grant agreements. Typically, unvested RSUs are forfeited, while vested RSUs remain yours. Stock options usually have exercise deadlines (often 90 days post-termination). Some companies offer acceleration in certain situations. We review your agreements to help you understand your options and optimal timing.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>How should equity compensation fit into my overall financial plan?</AccordionTrigger>
                  <AccordionContent>
                    Equity compensation should be integrated with your broader financial goals including emergency funds, retirement planning, debt management, and investment diversification. We help ensure you're not over-concentrated in company stock and that your equity strategy supports your long-term financial objectives, including major purchases and retirement planning.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <Card className="card-elegant p-8 text-center bg-gradient-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Maximize Your Equity Value
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let poor timing or lack of planning reduce your equity's value. Schedule a consultation 
                to develop a comprehensive strategy that aligns with your financial goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
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
    </>
  );
};

export default RSUEquityPlanning;