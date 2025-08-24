import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  FileText,
  Phone,
  MessageCircle,
  Shield,
  ArrowRight,
  Star,
  Building,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookConsultation = () => {
  const preparationItems = [
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      title: "Recent Financial Statements",
      description: "Last 2-3 months of P&L, balance sheet, or tax returns",
      required: true
    },
    {
      icon: <Building className="w-5 h-5 text-primary" />,
      title: "Business Overview",
      description: "Revenue size, number of employees, industry, and growth goals",
      required: true
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "Current Challenges",
      description: "Specific pain points or opportunities you'd like to discuss",
      required: true
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Decision Makers",
      description: "Key stakeholders who should be involved in the conversation",
      required: false
    }
  ];

  const whoShouldAttend = [
    {
      role: "Business Owner/CEO",
      description: "Primary decision maker for financial and strategic matters",
      recommended: true
    },
    {
      role: "CFO/Finance Director", 
      description: "Current financial leadership (if applicable)",
      recommended: true
    },
    {
      role: "Operations Manager",
      description: "Key operational stakeholder for process discussions",
      recommended: false
    },
    {
      role: "Spouse/Co-Owner",
      description: "For family businesses or personal tax coordination",
      recommended: false
    }
  ];

  const nextSteps = [
    {
      step: 1,
      title: "Confirmation Email",
      description: "You'll receive an immediate confirmation with meeting details and our questionnaire to complete before the call.",
      timeframe: "Immediate"
    },
    {
      step: 2, 
      title: "Pre-Call Preparation",
      description: "Complete our brief questionnaire and gather the recommended documents listed above.",
      timeframe: "Before the call"
    },
    {
      step: 3,
      title: "Discovery Consultation", 
      description: "30-45 minute conversation to understand your needs and explore how we can help.",
      timeframe: "Scheduled time"
    },
    {
      step: 4,
      title: "Custom Proposal",
      description: "We'll prepare a detailed service proposal with transparent pricing within 2 business days.",
      timeframe: "Within 2 days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                Free Consultation
              </Badge>
              <h1 className="text-hero mb-6">
                Schedule Your Strategic
                <span className="block text-primary">Financial Consultation</span>
              </h1>
              <p className="text-subtitle mb-8">
                Book a complimentary 30-45 minute consultation with our CPA team to discuss your 
                business goals, current challenges, and how our services can help you grow and save on taxes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">30-45 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive discussion</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">No Obligation</h3>
                  <p className="text-sm text-muted-foreground">Free strategic guidance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Advice</h3>
                  <p className="text-sm text-muted-foreground">20+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Booking Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side - Calendar */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Select Your Preferred Time</h2>
                  <p className="text-muted-foreground">
                    Choose a time that works best for your schedule. All consultations are conducted 
                    via secure video conference or phone call.
                  </p>
                </div>

                {/* Calendar Embed Placeholder */}
                <Card className="card-elegant p-8">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Calendar className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Interactive Calendar</h3>
                      <p className="text-muted-foreground mb-6">
                        Our booking calendar will be embedded here, allowing you to select 
                        available times directly from Hiren's schedule.
                      </p>
                    </div>

                    {/* Placeholder booking interface */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-7 gap-2 text-center">
                        <div className="text-xs font-medium text-muted-foreground p-2">Sun</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Mon</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Tue</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Wed</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Thu</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Fri</div>
                        <div className="text-xs font-medium text-muted-foreground p-2">Sat</div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {[...Array(35)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                              i > 5 && i < 30 && i % 7 !== 0 && i % 7 !== 6
                                ? 'hover:bg-primary hover:text-primary-foreground bg-surface' 
                                : 'text-muted-foreground/50'
                            }`}
                          >
                            {i > 5 && i < 30 ? i - 5 : ''}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">
                        <strong>Available Hours:</strong> Monday-Thursday, 10:00 AM - 4:00 PM PST
                      </p>
                      <Button className="btn-primary" size="lg">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Alternative Contact Methods */}
                <Card className="card-elegant p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Prefer to Talk First?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you'd rather discuss your needs before scheduling, we're happy to chat.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="btn-outline flex-1" asChild>
                      <a href="tel:(949) 431-0469">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (949) 431-0469
                      </a>
                    </Button>
                    <Button variant="outline" className="btn-outline flex-1" asChild>
                      <a href="/contact">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Right Side - Preparation & Info */}
              <div className="space-y-8">
                {/* What to Prepare */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Come Prepared</h2>
                  <p className="text-muted-foreground mb-6">
                    To make the most of our time together, please prepare the following information:
                  </p>
                  
                  <div className="space-y-4">
                    {preparationItems.map((item, index) => (
                      <Card key={index} className="card-elegant p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              {item.required && (
                                <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground">
                                  Required
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Who Should Attend */}
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Who Should Attend?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    For the most productive conversation, consider including these key stakeholders:
                  </p>
                  
                  <div className="space-y-4">
                    {whoShouldAttend.map((attendee, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {attendee.recommended ? (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          ) : (
                            <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {attendee.role}
                            {attendee.recommended && (
                              <span className="text-primary text-xs ml-2">(Recommended)</span>
                            )}
                          </h4>
                          <p className="text-xs text-muted-foreground">{attendee.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Meeting Format */}
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Meeting Format</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Secure video conference (Zoom/Teams)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Phone call option available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">In-person meetings by appointment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Screen sharing for document review</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-section-title">What Happens After You Book?</h2>
              <p className="text-subtitle">
                Our streamlined process ensures you get maximum value from your consultation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nextSteps.map((step, index) => (
                <Card key={index} className="card-elegant p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {step.timeframe}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reschedule & Support */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <Card className="card-elegant p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Need to Reschedule or Have Questions?</h2>
                  <p className="text-muted-foreground">
                    We understand that schedules change. You can easily reschedule your appointment 
                    or contact us with any questions about the consultation process.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="btn-outline group">
                      <Calendar className="w-4 h-4 mr-2" />
                      Reschedule Appointment
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="btn-outline" asChild>
                      <a href="/contact">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact Support
                      </a>
                    </Button>
                    <Button variant="outline" className="btn-outline" asChild>
                      <a href="tel:(949) 431-0469">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Office
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-6 border-t border-border text-sm text-muted-foreground">
                    <p>
                      <strong>Office Hours:</strong> Monday-Thursday, 10:00 AM - 4:00 PM PST<br />
                      <strong>Response Time:</strong> We respond to all inquiries within 4 business hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Testimonial */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-primary-foreground/90 mb-6">
                  "The consultation with Hiren was incredibly valuable. He identified three immediate 
                  tax savings opportunities that more than paid for his services in the first month. 
                  His strategic insights have been game-changing for our business."
                </blockquote>
                <div className="text-primary-foreground/80">
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm">CEO, TechFlow Solutions</p>
                </div>
              </div>
              
              <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;