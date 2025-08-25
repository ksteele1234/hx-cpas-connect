import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Database, Lock, UserCheck, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HRX CPAs is committed to protecting your privacy and maintaining the confidentiality 
              of your personal and financial information.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Privacy Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                <p className="text-muted-foreground">
                  We implement industry-leading security measures to protect your sensitive information.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  Clear information about what data we collect, how we use it, and your rights.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Your Control</h3>
                <p className="text-muted-foreground">
                  You have control over your personal information and how it's used.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Information We Collect */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Name, address, phone number, and email address</li>
                    <li>• Social Security Number and tax identification numbers</li>
                    <li>• Financial information including income, assets, and liabilities</li>
                    <li>• Bank account and investment account information</li>
                    <li>• Business information for commercial clients</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Website Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address and browser information</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Contact form submissions and consultation requests</li>
                    <li>• Cookie data for website functionality and analytics</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                How We Use Your Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Professional Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tax preparation and planning</li>
                    <li>• Accounting and financial services</li>
                    <li>• Business advisory and consulting</li>
                    <li>• Compliance with tax laws and regulations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Communication</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Service delivery and updates</li>
                    <li>• Important deadlines and reminders</li>
                    <li>• Tax law changes and planning opportunities</li>
                    <li>• Client portal access and support</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Information Sharing */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Information Sharing and Disclosure
              </h2>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    We Do NOT Sell Your Information
                  </h3>
                  <p className="text-muted-foreground">
                    HRX CPAs does not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Limited Sharing</h3>
                  <p className="text-muted-foreground mb-3">
                    We may share your information only in these specific circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal obligations and court orders</li>
                    <li>• With professional service providers (e.g., software vendors) under strict confidentiality agreements</li>
                    <li>• To other professionals in your advisory team (attorneys, financial advisors) when authorized</li>
                    <li>• In connection with business transfers (with client notification)</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Data Security */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                Data Security
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical Safeguards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 256-bit SSL encryption for data transmission</li>
                    <li>• Secure cloud storage with encryption at rest</li>
                    <li>• Multi-factor authentication for access</li>
                    <li>• Regular security audits and updates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Administrative Safeguards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Limited access on need-to-know basis</li>
                    <li>• Employee training on data protection</li>
                    <li>• Secure document destruction procedures</li>
                    <li>• Comprehensive cyber liability insurance</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Your Rights and Choices
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Access and Correction</h3>
                    <p className="text-muted-foreground">Request access to or correction of your personal information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Communication Preferences</h3>
                    <p className="text-muted-foreground">Opt out of non-essential communications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Data Portability</h3>
                    <p className="text-muted-foreground">Request a copy of your data in a portable format</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Account Closure</h3>
                    <p className="text-muted-foreground">Request closure of your account (subject to legal retention requirements)</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this privacy policy or how we handle your information, 
                please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:privacy@hrxcpas.com" className="text-primary hover:text-primary/80">
                    privacy@hrxcpas.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+19494310469" className="text-primary hover:text-primary/80">
                    (949) 431-0469
                  </a>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-foreground mb-2">Mail</h3>
                  <p className="text-muted-foreground">
                    HRX CPAs<br />
                    6 Venture #250<br />
                    Irvine, CA 92618
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Navigation */}
            <div className="text-center pt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  Return to Home
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

export default PrivacyPolicy;