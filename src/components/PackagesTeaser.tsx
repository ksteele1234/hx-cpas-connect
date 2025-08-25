import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PackagesTeaser = () => {
  const businessPackages = [
    {
      name: "Founders Books",
      price: "$995",
      period: "/month",
      description: "For startups under $1M in revenue",
      features: ["Accrual bookkeeping", "Monthly P&L & balance sheet", "Payroll for up to 5 employees"],
      badge: "Startup"
    },
    {
      name: "Operator Finance", 
      price: "$1,950",
      period: "/month",
      description: "For growing firms up to $5M revenue",
      features: ["Everything in Founders", "KPI dashboard", "Quarterly tax planning"],
      badge: "Growth"
    },
    {
      name: "Boardroom CFO",
      price: "$4,500", 
      period: "/month",
      description: "For multi-entity businesses over $5M",
      features: ["Monthly CFO meetings", "Cash flow management", "Multi-entity consolidations"],
      badge: "Enterprise"
    }
  ];

  const personalPackages = [
    {
      name: "Core Tax Care",
      price: "$119",
      period: "/month", 
      description: "For W-2 earners in California",
      features: ["1040 + CA preparation", "Transcript monitoring", "Annual withholding review"],
      badge: "Essential"
    },
    {
      name: "Professional Plus",
      price: "$249",
      period: "/month",
      description: "For high-income professionals", 
      features: ["RSU and stock planning", "Schedule A itemization", "Midyear review"],
      badge: "Professional"
    },
    {
      name: "Private Wealth",
      price: "$495",
      period: "/month",
      description: "For executives and investors",
      features: ["Multi-state returns", "Charitable planning", "Quarterly planning calls"], 
      badge: "Executive"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Our Service Packages</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            Choose from our comprehensive packages designed for businesses and individuals 
            at different stages of growth and complexity.
          </p>
        </div>

        {/* Business Packages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Business Packages</h3>
            <p className="text-muted-foreground">Monthly accounting and CFO services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessPackages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className="card-elegant p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                      {pkg.badge}
                    </Badge>
                    <h4 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h4>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Packages */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Personal Packages</h3>
            <p className="text-muted-foreground">Individual and family tax services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalPackages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className="card-elegant p-6 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">
                      {pkg.badge}
                    </Badge>
                    <h4 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h4>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary group"
            asChild
          >
            <Link to="/pricing">
              View All Pricing Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesTeaser;