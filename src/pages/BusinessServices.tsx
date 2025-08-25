import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  DollarSign, 
  Target,
  Shield,
  Search,
  ArrowRight,
  Calendar,
  CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessServices = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Bookkeeping",
      description: "Monthly financials delivered within 10 business days with detailed reconciliations and management reports.",
      href: "/services/bookkeeping"
    },
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Tax Planning & Preparation",
      description: "Strategic planning to minimize your annual tax burden with quarterly reviews and compliance support.",
      href: "/services/tax-planning-prep"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "CFO Consulting",
      description: "Executive-level financial insights for business growth with custom KPI dashboards and strategic planning.",
      href: "/services/cfo-consulting"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Estate Planning Coordination",
      description: "Seamless coordination with your estate planning attorney to optimize tax strategies and succession planning.",
      href: "/services/estate-planning-coordination"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Business Valuation",
      description: "Professional valuations for transactions and planning with comprehensive analysis and detailed reporting.",
      href: "/services/business-valuation"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Exit Planning",
      description: "Maximize business value for your eventual exit strategy with comprehensive planning and implementation.",
      href: "/services/exit-planning"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Full Service Accounting & Payroll",
      description: "Complete financial management solutions including payroll processing, benefits administration, and compliance.",
      href: "/services/full-service-accounting-payroll"
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Buyer Due Diligence",
      description: "Professional analysis for acquisition decisions with thorough financial review and risk assessment.",
      href: "/services/buyer-due-diligence"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Services | CFO Consulting, Tax Planning & Bookkeeping | HRX CPAs Irvine</title>
        <meta name="description" content="Comprehensive business services for $1M-$10M revenue companies: CFO consulting, tax planning, bookkeeping, exit planning & business valuations in Orange County." />
        <meta name="keywords" content="business CFO services Irvine, business tax planning Orange County, bookkeeping services Irvine, exit planning CPA, business valuation services" />
        <link rel="canonical" href="https://hrxcpas.com/business-services" />
      </Helmet>
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
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
                  <Link to="/contact">
                    Download Service Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our Business Services</h2>
              <p className="text-subtitle mt-4 max-w-3xl mx-auto">
                Comprehensive financial services designed to support your business growth at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={service.title} 
                  to={service.href}
                  className="block group"
                >
                  <Card 
                    className="card-service group-hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          {service.icon}
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold"
                          asChild
                        >
                          <span>
                            Learn More →
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business Finances?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                With over 15 years of experience serving businesses with $1M-$10M in revenue, 
                we have the expertise to help you scale efficiently and profitably.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10" asChild>
                  <Link to="/contact">
                    Contact Us Today
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-white/80">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$500M+</div>
                  <div className="text-sm text-white/80">Revenue Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/80">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default BusinessServices;