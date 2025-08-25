import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const generalFAQs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We specialize in serving businesses with $1M-$10M in revenue, including tech startups, professional services, manufacturing, retail, and real estate companies. Our sweet spot is growing businesses that need strategic CFO-level guidance alongside traditional accounting services."
    },
    {
      question: "How do your monthly packages work?",
      answer: "Our packages include everything from bookkeeping to CFO advisory on a predictable monthly basis. You'll get consistent service delivery, proactive communication, and strategic insights to help grow your business. All packages include a dedicated team and guaranteed response times."
    },
    {
      question: "What makes HRX different from other CPA firms?",
      answer: "Our family office approach means we coordinate with your other advisors (attorneys, wealth managers) to provide comprehensive financial strategy. We're proactive rather than reactive, offering strategic planning and growth advisory alongside traditional compliance work."
    },
    {
      question: "Do you handle multi-state tax situations?",
      answer: "Yes, we regularly handle multi-state tax situations for our business and individual clients. Whether you have operations in multiple states, rental properties across state lines, or complex residency situations, we have the expertise to navigate these complexities."
    },
    {
      question: "What are your response time guarantees?",
      answer: "Response times vary by package level. Business Essential clients receive responses within 48 hours, Business Professional within 24 hours, and Business Premium within 4 hours during business days. For urgent matters, all clients have access to priority contact methods."
    }
  ];

  const businessFAQs = [
    {
      question: "What's included in monthly bookkeeping?",
      answer: "Monthly bookkeeping includes transaction categorization, bank reconciliation, financial statement preparation, accounts receivable/payable management, and monthly financial reporting with insights and recommendations."
    },
    {
      question: "How do you handle payroll processing?",
      answer: "We manage full-service payroll including salary calculations, tax withholdings, direct deposits, quarterly reporting, and year-end W-2 preparation. We also handle contractor payments and 1099 reporting."
    },
    {
      question: "What CFO services do you provide?",
      answer: "Our CFO services include cash flow forecasting, financial modeling, budgeting and planning, KPI development, board presentation preparation, acquisition support, and strategic financial guidance for growth decisions."
    },
    {
      question: "Do you help with business acquisitions?",
      answer: "Yes, we provide comprehensive acquisition support including due diligence review, financial modeling, tax structure optimization, integration planning, and post-acquisition financial management."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in technology (SaaS, fintech), professional services, healthcare, manufacturing, retail/e-commerce, and real estate. Each industry has unique challenges we understand well."
    },
    {
      question: "How do you handle R&D tax credits?",
      answer: "We identify qualifying R&D activities, document expenses properly, prepare detailed calculations, and manage the credit application process. We've helped clients claim millions in R&D credits across various industries."
    }
  ];

  const personalFAQs = [
    {
      question: "What personal tax situations do you handle?",
      answer: "We handle complex personal tax situations including high-income professionals, stock options/RSUs, rental properties, international income, business ownership, and multi-state residency issues."
    },
    {
      question: "How do you help with stock option planning?",
      answer: "We provide timing strategies for option exercises, tax impact analysis, AMT planning, holding period optimization, and coordination with financial advisors for comprehensive wealth management."
    },
    {
      question: "Do you provide estate planning support?",
      answer: "While we don't draft estate documents, we coordinate closely with estate attorneys to ensure tax-efficient structures, provide valuation support, and handle the tax aspects of estate and gift planning."
    },
    {
      question: "What if I have international income or assets?",
      answer: "We handle all international tax compliance including FBAR, Form 8938, foreign income reporting, tax treaty benefits, and coordination with international tax advisors when needed."
    },
    {
      question: "How do you help with retirement planning?",
      answer: "We provide tax-efficient retirement distribution strategies, Roth conversion planning, social security optimization, and coordination with financial advisors for comprehensive retirement planning."
    }
  ];

  const processFAQs = [
    {
      question: "How do you onboard new clients?",
      answer: "Our onboarding process includes an initial consultation, document collection, system setup, historical review, and a comprehensive planning session. Most clients are fully onboarded within 2-3 weeks."
    },
    {
      question: "What technology platforms do you use?",
      answer: "We use leading cloud-based platforms including QuickBooks Online, Xero, Bill.com, Gusto for payroll, and secure document portals. We'll work with your existing systems or recommend optimal solutions."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain bank-level security with encrypted data transmission, secure cloud storage, multi-factor authentication, regular security audits, and comprehensive cyber liability insurance."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer transparent monthly pricing based on business size and complexity. Most businesses save money compared to hiring internal staff, while receiving higher-level expertise and strategic guidance."
    },
    {
      question: "Can I upgrade or downgrade my package?",
      answer: "Yes, packages can be adjusted as your business grows or needs change. We review service levels quarterly and recommend adjustments to ensure you're getting optimal value."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const FAQSection = ({ title, faqs, startIndex }: { title: string; faqs: any[]; startIndex: number }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const globalIndex = startIndex + index;
          return (
            <Card key={globalIndex} className="overflow-hidden">
              <button
                onClick={() => toggleItem(globalIndex)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={openItems.includes(globalIndex)}
              >
                <h4 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h4>
                {openItems.includes(globalIndex) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(globalIndex) && (
                <div className="px-6 pb-4 border-t border-border">
                  <div className="pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | CPA Services FAQ | HRX CPAs Irvine</title>
        <meta name="description" content="Get answers to common questions about our CPA services, pricing, business packages, personal tax services, and CFO consulting. Learn more about HRX CPAs." />
        <meta name="keywords" content="CPA FAQ Irvine, tax services questions, CFO consulting FAQ, bookkeeping questions, business tax FAQ Orange County" />
        <link rel="canonical" href="https://hrxcpas.com/faq" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...generalFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })),
              ...businessFAQs.map(faq => ({
                "@type": "Question", 
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })),
              ...personalFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": faq.answer
                }
              })),
              ...processFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get answers to common questions about our services, processes, and approach. 
              Can't find what you're looking for? We're here to help.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" size="sm" onClick={() => document.getElementById('general')?.scrollIntoView({ behavior: 'smooth' })}>
                General
              </Button>
              <Button variant="outline" size="sm" onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}>
                Business
              </Button>
              <Button variant="outline" size="sm" onClick={() => document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' })}>
                Personal
              </Button>
              <Button variant="outline" size="sm" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
                Process
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div id="general">
              <FAQSection 
                title="General Questions" 
                faqs={generalFAQs} 
                startIndex={0} 
              />
            </div>
            
            <div id="business">
              <FAQSection 
                title="Business Services" 
                faqs={businessFAQs} 
                startIndex={generalFAQs.length} 
              />
            </div>
            
            <div id="personal">
              <FAQSection 
                title="Personal Services" 
                faqs={personalFAQs} 
                startIndex={generalFAQs.length + businessFAQs.length} 
              />
            </div>
            
            <div id="process">
              <FAQSection 
                title="Process & Technology" 
                faqs={processFAQs} 
                startIndex={generalFAQs.length + businessFAQs.length + personalFAQs.length} 
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground">
                Our team is here to help you find the answers you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant answers during business hours
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1234567890">
                    (123) 456-7890
                  </a>
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed questions welcome
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">
                    Contact Form
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation to discuss your specific needs and learn how we can help.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/book-consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default FAQ;