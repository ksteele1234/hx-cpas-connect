import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Heart, 
  Shield, 
  TrendingUp, 
  MapPin,
  Calendar,
  ArrowRight,
  Building,
  Clock
} from "lucide-react";
import hirenPortrait from "@/assets/hiren-portrait.jpeg";
import hirenPresentation from "@/assets/hiren-presentation.png";
import officeBuildingImage from "@/assets/office-building.png";
import spectrumCenterImage from "@/assets/spectrum-center.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About HRX CPAs | Hiren Parmar CPA, CVA, CEPA | Irvine Accounting Firm</title>
        <meta name="description" content="Meet Hiren Parmar, CPA, CVA, CEPA, founder of HRX CPAs. 15+ years serving Orange County businesses with strategic tax planning, CFO services, and exit planning expertise." />
        <meta name="keywords" content="Hiren Parmar CPA, HRX CPAs about, Irvine CPA firm history, certified valuation analyst, exit planning advisor" />
        <link rel="canonical" href="https://hrxcpas.com/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero mb-6">About HRX CPAs</h1>
              <p className="text-subtitle">
                A family-focused CPA firm dedicated to serving multi-generational families, 
                entrepreneurial business owners, and high-net-worth individuals in Orange County.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Who We Serve */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-section-title">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At HRX CPAs, we believe that financial success shouldn't come at the expense of 
                    family time or peace of mind. Our mission is to provide comprehensive financial 
                    guidance that helps businesses grow and families build lasting wealth across generations.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Who We Serve</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Growing Businesses</h4>
                        <p className="text-muted-foreground text-sm">
                          Companies with $1M-$10M revenue seeking strategic CFO guidance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Multi-Generational Families</h4>
                        <p className="text-muted-foreground text-sm">
                          Families focused on wealth preservation and estate planning
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">High-Net-Worth Individuals</h4>
                        <p className="text-muted-foreground text-sm">
                          Professionals and executives with complex financial situations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <Card className="card-elegant overflow-hidden">
                  <img 
                    src={hirenPresentation} 
                    alt="Hiren Parmar giving a presentation at HRXCPAS office with a podium and large screen in the background"
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hiren Parmar Section */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Meet Our President</h2>
              <p className="text-subtitle">
                Leading with expertise, integrity, and a commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Profile Image and Credentials */}
              <div className="space-y-8">
                <Card className="card-elegant overflow-hidden">
                  <img 
                    src={hirenPortrait} 
                    alt="Hiren Parmar, CPA, President of HRXCPAS, professional headshot"
                    className="w-full h-[500px] object-cover"
                  />
                </Card>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Hiren Parmar</h3>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">CPA</Badge>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">CVA</Badge>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">CEPA</Badge>
                  </div>
                  <p className="text-muted-foreground">President & Founder</p>
                </div>
              </div>

              {/* Career Timeline and Expertise */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Career Highlights</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">2004 - Present</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">HRX CPAs Founder & President</h4>
                      <p className="text-muted-foreground text-sm">
                        Built a premier family-focused CPA firm serving over 500 clients across Orange County
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">2018</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">CEPA Certification</h4>
                      <p className="text-muted-foreground text-sm">
                        Became a Certified Exit Planning Advisor, specializing in business transitions
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">2015</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">CVA Certification</h4>
                      <p className="text-muted-foreground text-sm">
                        Earned Certified Valuation Analyst credentials for business valuations
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">1998</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">CPA License</h4>
                      <p className="text-muted-foreground text-sm">
                        Licensed Certified Public Accountant in California
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm text-muted-foreground">• Strategic Tax Planning</div>
                    <div className="text-sm text-muted-foreground">• Business Valuations</div>
                    <div className="text-sm text-muted-foreground">• Exit Planning</div>
                    <div className="text-sm text-muted-foreground">• CFO Advisory</div>
                    <div className="text-sm text-muted-foreground">• Estate Planning</div>
                    <div className="text-sm text-muted-foreground">• Family Office Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our Team</h2>
              <p className="text-subtitle">
                Experienced professionals dedicated to your financial success
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-elegant p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Renee Noseda</h3>
                      <p className="text-primary font-medium">Senior Tax Manager</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Renee brings over 15 years of tax expertise to our team, specializing in 
                      complex individual and business tax situations. She ensures our clients 
                      receive accurate, timely tax preparation and strategic planning advice.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Specializations:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Multi-state tax returns</li>
                        <li>• High-income professional tax planning</li>
                        <li>• Real estate investor taxation</li>
                        <li>• Partnership and K-1 reporting</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-20 h-20 text-primary-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional photo coming soon
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our Values & Approach</h2>
              <p className="text-subtitle">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Family-First Approach</h3>
                <p className="text-muted-foreground text-sm">
                  We understand that behind every business is a family, and we tailor our services accordingly.
                </p>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Proactive Planning</h3>
                <p className="text-muted-foreground text-sm">
                  We don't just react to tax season - we plan strategically year-round for optimal outcomes.
                </p>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Collaborative Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  We work closely with your attorneys, wealth managers, and other advisors as a unified team.
                </p>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Excellence & Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest professional standards while always acting in your best interest.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Details */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our Irvine Office</h2>
              <p className="text-subtitle">
                Located in the heart of Orange County's business district
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Images */}
              <div className="space-y-6">
                <Card className="card-elegant overflow-hidden">
                  <img 
                    src={officeBuildingImage} 
                    alt="Modern three-story HRXCPAS office building with glass windows and palm trees"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Contemporary Office Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Our headquarters features a modern, professional environment designed for client comfort.
                    </p>
                  </div>
                </Card>
                
                <Card className="card-elegant overflow-hidden">
                  <img 
                    src={spectrumCenterImage} 
                    alt="Spectrum Business Center entrance with HRXCPAS office in Irvine, California"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Spectrum Business Center</h4>
                    <p className="text-sm text-muted-foreground">
                      Located in the prestigious Spectrum Business Center with convenient parking and access.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Office Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Address</h4>
                        <p className="text-muted-foreground">
                          6 Venture #250<br />
                          Irvine, CA 92618
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Office Hours</h4>
                        <div className="text-muted-foreground">
                          <p>Monday–Thursday: 10:00 AM–4:00 PM</p>
                          <p>Friday–Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Amenities</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Free parking available</li>
                          <li>• ADA accessible entrance</li>
                          <li>• Private meeting rooms</li>
                          <li>• Complimentary refreshments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Ready to visit our office or schedule a virtual consultation?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="btn-primary group"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="btn-outline"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default About;