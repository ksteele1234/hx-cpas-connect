import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Users, TrendingUp, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const featured = [
    {
      quote: "Hiren and his team at HRX CPAs transformed our business finances. Their strategic tax planning saved us six figures last year, and their CFO advisory helped us scale from $2M to $8M in revenue.",
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      industry: "Technology",
      rating: 5,
      savings: "$180,000",
      period: "Annual Tax Savings"
    },
    {
      quote: "The family office approach at HRX is exactly what we needed. They coordinate seamlessly with our estate attorney and wealth manager, giving us a true comprehensive financial strategy.",
      name: "Michael Rodriguez", 
      title: "Managing Partner",
      industry: "Real Estate Development",
      rating: 5,
      savings: "$2.3M",
      period: "Estate Tax Optimization"
    },
    {
      quote: "As a high-income professional with complex RSU vesting, I needed specialized tax expertise. HRX's Professional Plus package has been worth every penny in tax savings and peace of mind.",
      name: "Dr. Jennifer Park",
      title: "Orthopedic Surgeon",
      industry: "Healthcare",
      rating: 5,
      savings: "$65,000",
      period: "Annual Tax Optimization"
    }
  ];

  const businessTestimonials = [
    {
      quote: "HRX helped us navigate a complex acquisition while minimizing tax impact. Their due diligence support was invaluable, and they identified tax savings opportunities we never would have found.",
      name: "David Kumar",
      title: "Founder & CEO",
      company: "CloudScale Technologies",
      industry: "SaaS",
      rating: 5
    },
    {
      quote: "The monthly CFO services transformed how we make financial decisions. Having access to real-time insights and strategic guidance has been a game-changer for our growth.",
      name: "Lisa Martinez",
      title: "Co-Founder",
      company: "GreenTech Manufacturing",
      industry: "Clean Energy",
      rating: 5
    },
    {
      quote: "Multi-state compliance was a nightmare before HRX. Now it's handled seamlessly, and we actually saved money despite expanding to five new states.",
      name: "Robert Kim",
      title: "VP Finance",
      company: "Retail Innovations Group",
      industry: "Retail",
      rating: 5
    },
    {
      quote: "Their R&D tax credit expertise saved us over $400K. The process was smooth, well-documented, and gave us confidence in every decision.",
      name: "Amanda Foster",
      title: "CTO",
      company: "BioMed Solutions",
      industry: "Healthcare Technology",
      rating: 5
    }
  ];

  const individualTestimonials = [
    {
      quote: "Stock option planning with HRX made the difference between financial stress and financial freedom. Their timing strategies for my IPO were perfect.",
      name: "James Liu",
      title: "Senior Software Engineer",
      company: "Major Tech Company",
      rating: 5
    },
    {
      quote: "International tax compliance for my overseas properties seemed impossible until I found HRX. They made it straightforward and saved me from costly mistakes.",
      name: "Maria Gonzalez",
      title: "Investment Director",
      company: "Global Investment Firm",
      rating: 5
    },
    {
      quote: "Retirement planning with multiple practice sales required sophisticated strategies. HRX delivered a comprehensive plan that maximized every dollar.",
      name: "Dr. Steven Walsh",
      title: "Retiring Orthodontist",
      company: "Private Practice",
      rating: 5
    },
    {
      quote: "Estate planning coordination between my attorney, wealth manager, and HRX was seamless. Finally, all my advisors are on the same page.",
      name: "Patricia Chen",
      title: "Business Owner",
      company: "Family Enterprise",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: TrendingUp,
      number: "$50M+",
      label: "Tax Savings Delivered"
    },
    {
      icon: Shield,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how HRX CPAs has helped businesses and individuals achieve their financial goals 
              through strategic planning, expert guidance, and measurable results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-12 w-12 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Featured Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featured.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="p-6 border-2 border-primary/20 bg-primary/5"
                >
                  <div className="space-y-6">
                    {/* Savings Highlight */}
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{testimonial.savings}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.period}</div>
                    </div>

                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground leading-relaxed italic text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.industry}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Testimonials */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Business Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessTestimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="p-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground leading-relaxed italic text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.industry}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Individual Client Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {individualTestimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="p-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground leading-relaxed italic text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust HRX CPAs with their most important financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Contact Us
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

export default Testimonials;