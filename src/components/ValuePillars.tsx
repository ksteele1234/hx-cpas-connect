import { 
  Heart, 
  Award, 
  Shield, 
  TrendingUp 
} from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Personalized Guidance",
      benefit: "We take time to understand your unique situation and provide tailored solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Experience",
      benefit: "Over 20 years serving Orange County businesses and high-net-worth families."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Peace of Mind",
      benefit: "Rest assured knowing your finances are managed by experienced professionals."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Strategic Growth",
      benefit: "Proactive planning and advisory to help you achieve your financial goals."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Why Choose HRX CPAs</h2>
          <p className="text-subtitle mt-4 max-w-3xl mx-auto">
            Our core values guide everything we do, ensuring you receive exceptional service 
            and meaningful results for your business and family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="text-center space-y-4 animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  {pillar.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;