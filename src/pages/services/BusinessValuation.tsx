import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  BarChart,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Phone,
  Building,
  Briefcase,
  PieChart,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BusinessValuation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Business Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Business Valuation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional business valuations for transactions, planning, compliance, and strategic 
              decisions. Get accurate, defensible valuations from a Certified Valuation Analyst (CVA).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Valuation Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Request Valuation Quote
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
                    Professional Business Valuations
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our Certified Valuation Analyst (CVA) provides comprehensive business valuations 
                    using proven methodologies and industry best practices. Whether for transactions, 
                    tax planning, or strategic purposes, we deliver accurate, defensible valuations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <DollarSign className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Market Valuations</h3>
                    <p className="text-sm text-muted-foreground">Fair market value assessments</p>
                  </Card>
                  
                  <Card className="p-4">
                    <BarChart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Financial Analysis</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive financial review</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Valuation Purposes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Mergers and acquisitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Estate and gift tax planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Buy-sell agreement pricing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Shareholder disputes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Financial reporting (ASC 805)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">SBA loan compliance</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Approaches */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Valuation Methodologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <PieChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Income Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Value based on the company's ability to generate future cash flows.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Discounted cash flow (DCF)</li>
                  <li>• Capitalization of earnings</li>
                  <li>• Multiple period analysis</li>
                  <li>• Risk-adjusted returns</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Market Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Value based on comparable company transactions and market multiples.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comparable company analysis</li>
                  <li>• Transaction multiples</li>
                  <li>• Industry benchmarking</li>
                  <li>• Market conditions assessment</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Asset Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Value based on the company's underlying assets and liabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Adjusted book value</li>
                  <li>• Liquidation value</li>
                  <li>• Replacement cost</li>
                  <li>• Asset-based adjustments</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Industries We Value
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Professional Services</h3>
                <p className="text-sm text-muted-foreground">Law firms, consulting, accounting</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Manufacturing</h3>
                <p className="text-sm text-muted-foreground">Industrial, automotive, aerospace</p>
              </Card>
              
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Technology</h3>
                <p className="text-sm text-muted-foreground">SaaS, fintech, software development</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Healthcare</h3>
                <p className="text-sm text-muted-foreground">Medical practices, healthcare services</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Valuation Process */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Valuation Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Define scope, purpose, and valuation date
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Financial and operational due diligence
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Research</h3>
                <p className="text-sm text-muted-foreground">
                  Industry and market research
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Valuation</h3>
                <p className="text-sm text-muted-foreground">
                  Apply appropriate methodologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Report</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive valuation report
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-primary/5">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Certified Valuation Expertise
                </h2>
                <Badge variant="secondary" className="mb-4">CVA Credential</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Professional Standards</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• NACVA business valuation standards</li>
                    <li>• IRS Revenue Ruling 59-60 compliance</li>
                    <li>• AICPA valuation guidelines</li>
                    <li>• Court-admissible reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Deliverables</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Comprehensive valuation report</li>
                    <li>• Executive summary</li>
                    <li>• Supporting schedules and analysis</li>
                    <li>• Professional opinion letter</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need a Professional Business Valuation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get an accurate, defensible valuation from a Certified Valuation Analyst for your transaction or planning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Valuation Consultation
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

export default BusinessValuation;