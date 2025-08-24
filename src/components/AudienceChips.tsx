import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  TrendingUp, 
  Building, 
  Shield 
} from "lucide-react";

const AudienceChips = () => {
  const audiences = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Entrepreneurs",
      description: "Growing businesses with $1M-$10M revenue seeking strategic financial guidance"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "High-Income Professionals",
      description: "Executives and professionals with complex tax situations and wealth planning needs"
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Real Estate Investors",
      description: "Property investors managing multiple rental properties and K-1 income streams"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Family Trusts",
      description: "Multi-generational families focused on wealth preservation and estate planning"
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-primary-foreground">We Work Best With</h2>
          <p className="text-xl text-primary-foreground/90 mt-4">
            Our expertise is specifically tailored for these client segments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                  {audience.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {audience.title}
              </h3>
              
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceChips;