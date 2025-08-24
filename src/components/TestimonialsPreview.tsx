import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      quote: "Hiren and his team at HRX CPAs transformed our business finances. Their strategic tax planning saved us six figures last year, and their CFO advisory helped us scale from $2M to $8M in revenue.",
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      industry: "Technology",
      rating: 5
    },
    {
      quote: "The family office approach at HRX is exactly what we needed. They coordinate seamlessly with our estate attorney and wealth manager, giving us a true comprehensive financial strategy.",
      name: "Michael Rodriguez", 
      title: "Managing Partner",
      industry: "Real Estate Development",
      rating: 5
    },
    {
      quote: "As a high-income professional with complex RSU vesting, I needed specialized tax expertise. HRX's Professional Plus package has been worth every penny in tax savings and peace of mind.",
      name: "Dr. Jennifer Park",
      title: "Orthopedic Surgeon",
      industry: "Healthcare",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">What Our Clients Say</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            Hear from business owners and professionals who trust HRX CPAs 
            with their most important financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="card-elegant p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic text-center">
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

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="btn-outline group"
            asChild
          >
            <a href="/testimonials">
              Read More Testimonials
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;