import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Phone,
  Users,
  Building,
  TrendingUp,
  FileText,
  DollarSign,
  Clock,
  Plus,
  Minus,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const businessPackages = [
    {
      name: "Founders Books",
      price: "$995",
      period: "/month",
      onboarding: "$1,500",
      ideal: "Startups under $1M in revenue seeking professional bookkeeping and basic CFO insights",
      responseTime: "2 business days",
      badge: "Startup",
      color: "secondary",
      limits: {
        revenue: "Up to $1M annually",
        accounts: "Up to 3 bank accounts",
        transactions: "250 transactions/month",
        payroll: "Up to 5 employees",
        forms1099: "15 1099s annually",
        entities: "Single entity"
      },
      inclusions: [
        "Monthly accrual bookkeeping",
        "Monthly P&L and Balance Sheet",
        "Bank reconciliations",
        "Full-service payroll processing",
        "Sales tax compliance",
        "1099 and W-2 processing",
        "Quarterly business reviews",
        "Basic KPI reporting"
      ],
      addOns: [
        "Additional bank account: $50/month",
        "Extra transactions (per 100): $75/month", 
        "Additional employee payroll: $25/month",
        "Extra 1099s (per 10): $150/year",
        "Advanced reporting: $200/month"
      ]
    },
    {
      name: "Operator Finance",
      price: "$1,950",
      period: "/month",
      onboarding: "$3,000",
      ideal: "Growing companies up to $5M revenue needing strategic financial guidance and operational support",
      responseTime: "1 business day",
      badge: "Growth",
      color: "primary",
      limits: {
        revenue: "Up to $5M annually",
        accounts: "Up to 6 bank accounts",
        transactions: "700 transactions/month",
        payroll: "Up to 20 employees",
        forms1099: "40 1099s annually",
        entities: "Up to 2 entities"
      },
      inclusions: [
        "Everything in Founders Books",
        "Custom KPI dashboard",
        "Light accounts payable/receivable",
        "Quarterly tax planning sessions",
        "Monthly CFO advisory session",
        "Cash flow forecasting",
        "Budget vs. actual reporting",
        "Vendor management support"
      ],
      addOns: [
        "Additional entity: $500/month",
        "Full AP/AR management: $750/month",
        "Weekly CFO sessions: $800/month",
        "Advanced analytics: $400/month",
        "Fundraising support: $2,500/project"
      ]
    },
    {
      name: "Boardroom CFO",
      price: "$4,500", 
      period: "/month",
      onboarding: "$7,500",
      ideal: "Multi-entity businesses over $5M revenue requiring executive-level financial leadership",
      responseTime: "Same day",
      badge: "Enterprise",
      color: "primary",
      limits: {
        revenue: "$5M+ annually",
        accounts: "Up to 10 bank accounts",
        transactions: "1,400 transactions/month",
        payroll: "Up to 50 employees",
        forms1099: "100 1099s annually",
        entities: "Up to 3 entities"
      },
      inclusions: [
        "Everything in Operator Finance",
        "Weekly CFO strategy meetings",
        "Multi-entity consolidations",
        "Advanced cash flow management",
        "Board presentation materials",
        "Pricing strategy analysis",
        "Investment committee support",
        "Dedicated senior accountant"
      ],
      addOns: [
        "Additional entity: $1,000/month",
        "Daily CFO availability: $2,000/month",
        "Audit preparation: $5,000/project",
        "Due diligence support: $10,000/project",
        "Public company readiness: $15,000/project"
      ]
    }
  ];

  const personalPackages = [
    {
      name: "Core Tax Care",
      price: "$119",
      period: "/month",
      onboarding: "Included",
      ideal: "W-2 employees in California with straightforward tax situations",
      responseTime: "3 business days",
      badge: "Essential",
      color: "secondary",
      limits: {
        income: "W-2 income primarily",
        states: "California only",
        w2s: "Up to 2 W-2s",
        complexity: "Standard deduction",
        rentals: "None included",
        k1s: "None included"
      },
      inclusions: [
        "Federal and California tax prep",
        "IRS transcript monitoring",
        "Annual withholding review",
        "30-minute annual consultation",
        "Tax planning reminders",
        "Secure document portal",
        "Basic tax guidance",
        "E-filing included"
      ],
      addOns: [
        "Additional state: $150/year",
        "Schedule A itemization: $200/year",
        "1 rental property: $300/year",
        "1 K-1 partnership: $400/year",
        "Quarterly check-ins: $100/quarter"
      ]
    },
    {
      name: "Professional Plus",
      price: "$249",
      period: "/month", 
      onboarding: "Included",
      ideal: "High-income professionals with RSUs, multiple income sources, and moderate complexity",
      responseTime: "2 business days",
      badge: "Professional",
      color: "primary",
      limits: {
        income: "High W-2 + investment income",
        states: "Up to 2 states",
        complexity: "Schedule A, RSUs, basic investments",
        rentals: "1 rental property included",
        k1s: "1 K-1 included"
      },
      inclusions: [
        "Everything in Core Tax Care",
        "Multi-state tax preparation",
        "RSU and stock option planning",
        "Schedule A itemization",
        "Quarterly estimated payments",
        "1 rental property",
        "1 K-1 partnership/S-Corp",
        "Midyear tax strategy review"
      ],
      addOns: [
        "Additional state: $200/year",
        "Extra rental property: $400/year",
        "Additional K-1: $500/year",
        "AMT planning: $600/year",
        "Charitable planning: $800/year"
      ]
    },
    {
      name: "Private Wealth",
      price: "$495",
      period: "/month",
      onboarding: "Included", 
      ideal: "Executives and investors with complex multi-state situations, multiple income sources, and wealth planning needs",
      responseTime: "1 business day",
      badge: "Executive",
      color: "primary",
      limits: {
        income: "Complex multi-source income",
        states: "Up to 3 states",
        complexity: "AMT, complex investments, trusts",
        rentals: "Up to 3 rental properties",
        k1s: "Up to 4 K-1s"
      },
      inclusions: [
        "Everything in Professional Plus",
        "Multi-state optimization (up to 3)",
        "AMT planning and review", 
        "Up to 3 rental properties",
        "Up to 4 K-1 partnerships",
        "Charitable giving strategies",
        "Quarterly planning calls",
        "Audit notice response",
        "Estate planning coordination"
      ],
      addOns: [
        "Additional state: $300/year",
        "Extra rental (per property): $500/year",
        "Additional K-1: $600/year",
        "Trust tax preparation: $1,200/year",
        "Family office coordination: $2,400/year"
      ]
    }
  ];

  const faqs = [
    {
      category: "Scope & Services",
      question: "What happens if I exceed the transaction limits?",
      answer: "We'll notify you before you reach 80% of your limit and provide options to either upgrade your package or add additional transaction capacity. Overage fees are clearly defined in your service agreement and charged only after approval."
    },
    {
      category: "Entity Management", 
      question: "How do you handle multiple entities and subsidiaries?",
      answer: "Each additional entity requires separate bookkeeping and may need its own package or add-on services. We can consolidate reporting across entities and provide unified management reporting. Complex multi-entity structures typically work best with our Operator Finance or Boardroom CFO packages."
    },
    {
      category: "Multi-State Issues",
      question: "Do you handle clients with operations in multiple states?",
      answer: "Yes! We regularly handle multi-state tax situations for both businesses and individuals. Each state has different requirements, so we'll assess your specific situation and recommend the appropriate service level. Additional states beyond package limits incur add-on fees."
    },
    {
      category: "Service Levels",
      question: "What do the different response times mean?",
      answer: "Response times indicate how quickly we'll respond to your questions during business hours (Monday-Thursday, 10 AM-4 PM). Same-day response means within 4 hours, 1 business day means by end of next business day, etc. Urgent matters are always prioritized regardless of package level."
    },
    {
      category: "Billing & Contracts",
      question: "Are there long-term contracts or can I change packages?",
      answer: "We offer month-to-month service with no long-term contracts. You can upgrade or downgrade packages with 30 days' notice. Onboarding fees apply when starting service but not when upgrading. We want you to stay because you love the service, not because you're locked in."
    },
    {
      category: "Getting Started",
      question: "What's included in the onboarding process?",
      answer: "Onboarding includes initial consultation, system setup, historical data review, process documentation, team introductions, and first month's service delivery setup. For business packages, we also include QuickBooks setup/cleanup and initial reporting configuration."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                Transparent Pricing
              </Badge>
              <h1 className="text-hero mb-6">
                Simple, Transparent Pricing for
                <span className="block text-primary">Every Stage of Growth</span>
              </h1>
              <p className="text-subtitle mb-8">
                Choose from our comprehensive packages designed for businesses and individuals 
                at different stages of growth and complexity. No hidden fees, no surprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <a href="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
                  <a href="tel:+1-949-455-4842">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 455-4842
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Packages */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <h2 className="text-section-title">Business Packages</h2>
              </div>
              <p className="text-subtitle">
                Monthly accounting, CFO advisory, and tax planning for growing businesses
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {businessPackages.map((pkg, index) => (
                <Card 
                  key={pkg.name}
                  className={`card-elegant p-6 relative ${index === 1 ? 'border-2 border-primary shadow-xl' : ''}`}
                >
                  <Badge 
                    variant={pkg.color === "primary" ? "default" : "secondary"}
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                      pkg.color === "primary" ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {pkg.badge}
                  </Badge>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Onboarding:</span> {pkg.onboarding}
                    </div>
                    <p className="text-sm text-muted-foreground italic">{pkg.ideal}</p>
                  </div>

                  {/* Package Limits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Package Limits</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="text-foreground font-medium">{pkg.limits.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank Accounts:</span>
                        <span className="text-foreground font-medium">{pkg.limits.accounts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transactions:</span>
                        <span className="text-foreground font-medium">{pkg.limits.transactions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payroll:</span>
                        <span className="text-foreground font-medium">{pkg.limits.payroll}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">1099s:</span>
                        <span className="text-foreground font-medium">{pkg.limits.forms1099}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entities:</span>
                        <span className="text-foreground font-medium">{pkg.limits.entities}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Inclusions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Response Time */}
                  <div className="mb-6 p-3 bg-surface rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Response Time:</span>
                      <span className="text-sm text-primary font-medium">{pkg.responseTime}</span>
                    </div>
                  </div>

                  {/* Common Add-ons */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Common Add-ons</h4>
                    <ul className="space-y-1">
                      {pkg.addOns.slice(0, 3).map((addon, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground">
                          • {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${pkg.color === "primary" ? 'btn-primary' : 'btn-outline'}`}
                    asChild
                  >
                    <a href="/book-consultation">
                      {pkg.color === "primary" ? 'Get Started' : 'Learn More'}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Packages */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-section-title">Personal & Family Packages</h2>
              </div>
              <p className="text-subtitle">
                Individual tax preparation and planning for professionals and families
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {personalPackages.map((pkg, index) => (
                <Card 
                  key={pkg.name}
                  className={`card-elegant p-6 relative ${index === 1 ? 'border-2 border-primary shadow-xl' : ''}`}
                >
                  <Badge 
                    variant={pkg.color === "primary" ? "default" : "secondary"}
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                      pkg.color === "primary" ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {pkg.badge}
                  </Badge>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Onboarding:</span> {pkg.onboarding}
                    </div>
                    <p className="text-sm text-muted-foreground italic">{pkg.ideal}</p>
                  </div>

                  {/* Package Scope */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Package Scope</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Income Types:</span>
                        <span className="text-foreground font-medium text-xs">{pkg.limits.income}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">States:</span>
                        <span className="text-foreground font-medium">{pkg.limits.states}</span>
                      </div>
                      {pkg.limits.w2s && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">W-2s:</span>
                          <span className="text-foreground font-medium">{pkg.limits.w2s}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rentals:</span>
                        <span className="text-foreground font-medium">{pkg.limits.rentals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">K-1s:</span>
                        <span className="text-foreground font-medium">{pkg.limits.k1s}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Inclusions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Response Time */}
                  <div className="mb-6 p-3 bg-surface rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Response Time:</span>
                      <span className="text-sm text-primary font-medium">{pkg.responseTime}</span>
                    </div>
                  </div>

                  {/* Common Add-ons */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Common Add-ons</h4>
                    <ul className="space-y-1">
                      {pkg.addOns.slice(0, 3).map((addon, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground">
                          • {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${pkg.color === "primary" ? 'btn-primary' : 'btn-outline'}`}
                    asChild
                  >
                    <a href="/book-consultation">
                      {pkg.color === "primary" ? 'Get Started' : 'Learn More'}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Frequently Asked Questions</h2>
              <p className="text-subtitle">
                Common questions about our pricing, services, and processes
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-elegant">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/50 transition-colors rounded-lg"
                    aria-expanded={openFaq === index}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Choose the package that fits your needs, or schedule a consultation 
                to discuss a custom solution for your unique situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group" asChild>
                  <a href="/book-consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group" asChild>
                  <a href="/contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">No Contracts</div>
                    <div className="text-primary-foreground/80 text-sm">Month-to-month service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">Transparent</div>
                    <div className="text-primary-foreground/80 text-sm">No hidden fees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">Scalable</div>
                    <div className="text-primary-foreground/80 text-sm">Grow with your business</div>
                  </div>
                </div>
                
                <div className="text-sm text-primary-foreground/70 border-t border-primary-foreground/20 pt-6">
                  <p className="mb-2">
                    <strong>Billing Note:</strong> All packages are billed monthly in advance. 
                    Onboarding fees are due upon contract signing.
                  </p>
                  <p>
                    Add-on services are billed separately and can be added or removed with 30 days' notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;