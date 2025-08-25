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
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Heart,
  Scale,
  FileText,
  Phone,
  Building,
  Briefcase,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EstatePlanningCoordination = () => {
  return (
    <>
      <Helmet>
        <title>Estate Planning Coordination | Business Succession | Multi-Generational Wealth | HRX CPAs</title>
        <meta name="description" content="Professional estate planning coordination for business owners and families: succession planning, tax minimization, trust administration, and multi-generational strategies." />
        <link rel="canonical" href="https://hrxcpas.com/services/estate-planning-coordination" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Estate Planning Coordination | Business Succession | Multi-Generational Wealth | HRX CPAs" />
        <meta property="og:description" content="Professional estate planning coordination for business owners and families: succession planning, tax minimization, trust administration, and multi-generational strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/services/estate-planning-coordination" />
        <meta property="og:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estate Planning Coordination | Business Succession | Multi-Generational Wealth | HRX CPAs" />
        <meta name="twitter:description" content="Professional estate planning coordination for business owners and families: succession planning, tax minimization, trust administration." />
        <meta name="twitter:image" content="https://hrxcpas.com/assets/hrx-logo.png" />
        <meta name="twitter:image:alt" content="HRX CPAs Estate Planning Coordination Services" />
        
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
            <Badge variant="secondary" className="mb-4">Personal Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Estate Planning Coordination
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Seamless coordination with your estate planning team to ensure your wealth transfer 
              strategies are tax-efficient and aligned with your family's goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Estate Planning Review
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">
                  View Personal Services
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
                    Coordinated Wealth Planning
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Estate planning requires seamless coordination between your CPA, attorney, and wealth 
                    manager. We serve as the financial hub, ensuring all strategies are tax-optimized 
                    and working together toward your family's objectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Tax Optimization</h3>
                    <p className="text-sm text-muted-foreground">Minimize estate and gift taxes</p>
                  </Card>
                  
                  <Card className="p-4">
                    <Users className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Family Coordination</h3>
                    <p className="text-sm text-muted-foreground">Multi-generational planning</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Coordination Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Estate tax projection and planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Gift tax strategy and compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Trust tax preparation and planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Business valuation for estate purposes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Charitable giving strategies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Family office coordination</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Estate Planning Areas */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Estate Planning Focus Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Scale className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Tax Minimization</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic planning to minimize estate, gift, and generation-skipping taxes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual exclusion planning</li>
                  <li>• Lifetime exemption optimization</li>
                  <li>• Valuation discount strategies</li>
                  <li>• Tax-efficient structures</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Business Succession</h3>
                <p className="text-muted-foreground mb-4">
                  Coordinate business valuation and succession planning with your estate goals.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business entity restructuring</li>
                  <li>• Gifting and sale strategies</li>
                  <li>• Management succession</li>
                  <li>• Exit planning coordination</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Charitable Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Integrate philanthropic goals with tax-efficient giving strategies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Charitable remainder trusts</li>
                  <li>• Donor advised funds</li>
                  <li>• Private foundations</li>
                  <li>• Appreciated asset giving</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Trust Administration</h3>
                <p className="text-muted-foreground mb-4">
                  Tax compliance and strategic planning for all types of trusts.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Trust tax return preparation</li>
                  <li>• Distribution planning</li>
                  <li>• Income tax optimization</li>
                  <li>• Beneficiary coordination</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Family Governance</h3>
                <p className="text-muted-foreground mb-4">
                  Structure family financial relationships for multiple generations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family limited partnerships</li>
                  <li>• Next-generation education</li>
                  <li>• Governance structures</li>
                  <li>• Conflict resolution</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Coordination</h3>
                <p className="text-muted-foreground mb-4">
                  Work seamlessly with your estate attorney and wealth manager.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Attorney collaboration</li>
                  <li>• Advisor team meetings</li>
                  <li>• Implementation oversight</li>
                  <li>• Regular plan reviews</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Estate Planning Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive review of current estate plan and tax situation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Develop tax-efficient strategies aligned with family goals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Work with your attorney and advisor team on implementation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing compliance and plan optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Estate Planning Success Story
              </h2>
              <div className="space-y-6">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-4">Case Study</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Multi-Generational Family Saves $2.3M in Estate Taxes
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  A successful business owner with a $15M estate needed comprehensive planning to 
                  minimize taxes while providing for three generations of family members:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Strategies Implemented</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Family limited partnership structure</li>
                      <li>• Grantor retained annuity trust (GRAT)</li>
                      <li>• Charitable remainder trust</li>
                      <li>• Generation-skipping planning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Results Achieved</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• $2.3M estate tax savings</li>
                      <li>• 40% valuation discounts achieved</li>
                      <li>• $500K annual gift capacity</li>
                      <li>• Three-generation benefit structure</li>
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
                <AccordionTrigger>How do you coordinate with my existing estate planning attorney?</AccordionTrigger>
                <AccordionContent>
                  We work collaboratively with your estate planning team, providing tax analysis for proposed strategies, implementing tax-efficient trust funding, and ensuring your business succession plan aligns with personal estate goals. We respect attorney-client privilege while providing essential financial and tax expertise to optimize your overall plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What's included in business succession planning?</AccordionTrigger>
                <AccordionContent>
                  We help develop strategies for transferring business ownership including buy-sell agreements, family limited partnerships, employee stock ownership plans (ESOPs), management buyouts, and third-party sales. This includes valuation planning, tax optimization, and coordination with your estate plan to minimize overall tax burden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you help minimize estate taxes for business owners?</AccordionTrigger>
                <AccordionContent>
                  We use strategies like grantor retained annuity trusts (GRATs), charitable remainder trusts, family limited partnerships with valuation discounts, annual gifting programs, and business structure optimization. The key is starting early and coordinating these strategies with your overall business and personal financial plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>When should I start estate planning for my business?</AccordionTrigger>
                <AccordionContent>
                  The best time is now, regardless of your business size. Early planning allows for more strategic options and better tax benefits. If your business is worth over $1M or growing rapidly, estate planning becomes critical. Waiting until retirement or health issues arise significantly limits your options and increases costs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>What's the difference between personal and business estate planning?</AccordionTrigger>
                <AccordionContent>
                  Personal estate planning focuses on family wealth transfer and personal assets. Business estate planning addresses business succession, key employee retention, buy-sell agreements, and coordinating business value with overall estate plan. For business owners, both must work together to achieve optimal results and tax efficiency.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>How do you handle multi-generational business planning?</AccordionTrigger>
                <AccordionContent>
                  We develop comprehensive strategies that address current ownership transition, next-generation preparation, family governance structures, and long-term wealth preservation. This includes education for rising generations, family employment policies, dividend policies, and structures that maintain family harmony while ensuring business success.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Family's Financial Future
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Coordinate your estate planning with expert tax guidance to maximize wealth transfer efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Estate Planning Review
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

export default EstatePlanningCoordination;