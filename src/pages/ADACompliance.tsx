import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Shield, Eye, Headphones, Monitor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ADACompliance = () => {
  return (
    <>
      <Helmet>
        <title>ADA Compliance Statement | Website Accessibility | HRX CPAs Irvine</title>
        <meta name="description" content="HRX CPAs ADA compliance statement: Our commitment to website accessibility, WCAG guidelines compliance, and inclusive design for all users and disabilities." />
        <link rel="canonical" href="https://hrxcpas.com/ada-compliance" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ADA Compliance Statement
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HRX CPAs is committed to ensuring digital accessibility for people with disabilities. 
              We continually work to improve the user experience for everyone.
            </p>
          </div>
        </section>

        {/* Commitment Overview */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Accessibility Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inclusive Design</h3>
                <p className="text-muted-foreground">
                  We believe everyone should have equal access to our professional services and information.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">WCAG Compliance</h3>
                <p className="text-muted-foreground">
                  Our website follows Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We regularly audit and update our website to maintain and improve accessibility.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Accessibility Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visual Accessibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">High contrast color schemes for better readability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Scalable fonts that work with browser zoom up to 200%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Alternative text for all meaningful images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Focus indicators for keyboard navigation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Navigation & Interaction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Full keyboard navigation support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Screen reader compatible structure and labels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Consistent navigation and page layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear headings and document structure</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Content Accessibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Plain language and clear communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Descriptive link text and button labels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Error messages and form validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Video captions when applicable</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Standards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">WCAG 2.1 Level AA compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Semantic HTML markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">ARIA labels and landmarks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Regular accessibility testing and audits</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Browser and Assistive Technology Support */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Supported Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Monitor className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Web Browsers</h3>
                <p className="text-muted-foreground mb-3">Our website is optimized for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Chrome (latest version)</li>
                  <li>• Firefox (latest version)</li>
                  <li>• Safari (latest version)</li>
                  <li>• Microsoft Edge (latest version)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <Headphones className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Assistive Technologies</h3>
                <p className="text-muted-foreground mb-3">Compatible with:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• JAWS screen reader</li>
                  <li>• NVDA screen reader</li>
                  <li>• VoiceOver (Mac/iOS)</li>
                  <li>• Dragon speech recognition software</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Feedback and Contact */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Accessibility Feedback
            </h2>
            
            <Card className="p-8 bg-primary/5">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Help Us Improve
                </h3>
                <p className="text-muted-foreground mb-6">
                  We welcome your feedback on the accessibility of our website. If you encounter 
                  any accessibility barriers or have suggestions for improvement, please let us know.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a href="mailto:hiren.parmar@hrxcpas.com" className="text-primary hover:text-primary/80">
                    hiren.parmar@hrxcpas.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <a href="tel:+19494310469" className="text-primary hover:text-primary/80">
                    (949) 431-0469
                  </a>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-foreground mb-2">Mail</h4>
                  <p className="text-muted-foreground">
                    HRX CPAs - Accessibility Team<br />
                    6 Venture #250<br />
                    Irvine, CA 92618
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button asChild>
                  <Link to="/contact">
                    Contact Our Team
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Third-party Content */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Third-party Content
            </h2>
            <Card className="p-6">
              <p className="text-muted-foreground text-center">
                While we strive to ensure all content on our website is accessible, some third-party 
                content (such as embedded maps or external tools) may not meet the same accessibility 
                standards. We are working with our vendors to improve accessibility across all 
                integrated services. If you need assistance accessing any third-party content, 
                please contact us for alternative access methods.
              </p>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-4">
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                Return to Home
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

export default ADACompliance;