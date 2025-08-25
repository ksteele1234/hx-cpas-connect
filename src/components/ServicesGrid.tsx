import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  Shield, 
  DollarSign, 
  Target,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Bookkeeping",
      outcome: "Monthly financials delivered within 10 business days",
      href: "/services/bookkeeping"
    },
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Tax Planning and Preparation",
      outcome: "Strategic planning to minimize your annual tax burden",
      href: "/services/tax-planning-prep"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "CFO Consulting",
      outcome: "Executive-level financial insights for business growth",
      href: "/services/cfo-consulting"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Estate Planning Coordination",
      outcome: "Seamless coordination with your estate planning attorney",
      href: "/services/estate-planning-coordination"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Business Valuations",
      outcome: "Professional valuations for transactions and planning",
      href: "/services/business-valuation"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Exit Planning",
      outcome: "Maximize business value for your eventual exit strategy",
      href: "/services/exit-planning"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Comprehensive Financial Services</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            From startup bookkeeping to complex exit strategies, we provide the financial expertise 
            your business needs at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-service group animate-fade-in" 
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
                    {service.outcome}
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold"
                    asChild
                  >
                    <Link to={service.href}>
                      Learn More →
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;