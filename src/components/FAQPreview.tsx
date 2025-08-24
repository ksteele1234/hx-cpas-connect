import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const FAQPreview = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We specialize in serving businesses with $1M-$10M in revenue, including tech startups, professional services, manufacturing, retail, and real estate companies. Our sweet spot is growing businesses that need strategic CFO-level guidance alongside traditional accounting services."
    },
    {
      question: "How do your monthly packages work?",
      answer: "Our packages include everything from bookkeeping to CFO advisory on a predictable monthly basis. You'll get consistent service delivery, proactive communication, and strategic insights to help grow your business. All packages include a dedicated team and guaranteed response times."
    },
    {
      question: "Do you handle multi-state tax situations?",
      answer: "Yes, we regularly handle multi-state tax situations for our business and individual clients. Whether you have operations in multiple states, rental properties across state lines, or complex residency situations, we have the expertise to navigate these complexities."
    },
    {
      question: "What makes HRX different from other CPA firms?",
      answer: "Our family office approach means we coordinate with your other advisors (attorneys, wealth managers) to provide comprehensive financial strategy. We're proactive rather than reactive, offering strategic planning and growth advisory alongside traditional compliance work."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Frequently Asked Questions</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            Get answers to common questions about our services, processes, and approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-border rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="btn-outline group"
            asChild
          >
            <a href="/faq">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;