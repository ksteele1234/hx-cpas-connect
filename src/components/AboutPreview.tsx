import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import hirenPortrait from "@/assets/hiren-portrait.jpeg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="animate-fade-in">
            <Card className="card-elegant overflow-hidden">
              <img 
                src={hirenPortrait} 
                alt="Hiren Parmar, CPA, President of HRXCPAS, professional headshot"
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  Meet Our President
                </Badge>
              </div>
              
              <h2 className="text-section-title">
                Hiren Parmar, CPA, CVA, CEPA
              </h2>
              
              <p className="text-subtitle">
                With over 20 years of experience serving Orange County businesses and families, 
                Hiren brings a unique blend of technical expertise and personalized service.
              </p>
            </div>

            {/* Credentials & Expertise */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Professional Credentials</h3>
                  <p className="text-muted-foreground text-sm">
                    Certified Public Accountant (CPA), Certified Valuation Analyst (CVA), 
                    and Certified Exit Planning Advisor (CEPA)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Family-Focused Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Specializes in multi-generational wealth planning and business succession 
                    strategies for growing families
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Growth Advisory Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Proven track record helping businesses scale from startup to successful 
                    exit, with expertise in $1M-$10M revenue companies
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                variant="outline" 
                className="btn-outline group"
                asChild
              >
                <Link to="/about">
                  Learn More About Our Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;