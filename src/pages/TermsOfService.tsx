import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Scale, UserCheck, Shield, AlertCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional services agreement and terms of engagement for HRX CPAs clients and website users.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </section>

        {/* Agreement Overview */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Service Agreement Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
                <p className="text-muted-foreground">
                  We maintain the highest professional and ethical standards in all client relationships.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Client Responsibilities</h3>
                <p className="text-muted-foreground">
                  Clear expectations for client participation and information sharing.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mutual Protection</h3>
                <p className="text-muted-foreground">
                  Terms that protect both our firm and our clients' interests.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Service Agreement */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Professional Service Agreement
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Engagement Terms</h3>
                  <p className="text-muted-foreground mb-3">
                    By engaging HRX CPAs for professional services, you agree to the following terms:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Services will be performed in accordance with professional standards and applicable laws</li>
                    <li>• Client will provide accurate and complete information necessary for service delivery</li>
                    <li>• Fees and payment terms as outlined in the specific engagement letter</li>
                    <li>• Confidentiality will be maintained in accordance with professional ethics</li>
                    <li>• Services are limited to those specifically outlined in the engagement letter</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Scope of Services</h3>
                  <p className="text-muted-foreground">
                    Our services include tax preparation, financial planning, accounting, and business advisory services 
                    as specifically outlined in individual engagement letters. We do not provide legal advice, 
                    investment management, or insurance services unless specifically licensed to do so.
                  </p>
                </div>
              </div>
            </Card>

            {/* Client Responsibilities */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Client Responsibilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Information Provision</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide accurate and complete financial information</li>
                    <li>• Submit documents by agreed-upon deadlines</li>
                    <li>• Notify us of any changes in financial circumstances</li>
                    <li>• Respond to requests for information promptly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Monthly packages due in advance</li>
                    <li>• Project fees due per engagement letter terms</li>
                    <li>• Late payment fees may apply after 30 days</li>
                    <li>• Services may be suspended for non-payment</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Limitations and Disclaimers */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                Limitations and Disclaimers
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Professional Liability
                  </h3>
                  <p className="text-muted-foreground">
                    Our liability is limited to the fees paid for the specific service where an error occurred. 
                    We maintain professional liability insurance as required by law.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Service Limitations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We are not responsible for client decisions based on our advice</li>
                    <li>• Tax law interpretations may vary and are subject to examination</li>
                    <li>• Investment advice is limited to tax implications only</li>
                    <li>• We do not guarantee specific tax savings or outcomes</li>
                    <li>• Audit representation is limited to matters we prepared</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Website Disclaimer</h3>
                  <p className="text-muted-foreground">
                    Information on our website is for general information purposes only and does not constitute 
                    professional advice for your specific situation. Always consult with a qualified professional 
                    before making financial decisions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Privacy and Confidentiality */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Confidentiality and Privacy
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Client-CPA Privilege</h3>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality of all client information in accordance with professional 
                    ethics and applicable laws. Limited exceptions apply for legal compliance or with client consent.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Security</h3>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect client information. 
                    See our <Link to="/privacy-policy" className="text-primary hover:text-primary/80">Privacy Policy</Link> for detailed information.
                  </p>
                </div>
              </div>
            </Card>

            {/* Termination */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Termination of Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Client Termination</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 30-day written notice for ongoing services</li>
                    <li>• Immediate termination for project-based work</li>
                    <li>• Outstanding fees remain due upon termination</li>
                    <li>• Client files will be provided upon request</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Firm Termination</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We may terminate for non-payment</li>
                    <li>• Professional ethics conflicts</li>
                    <li>• Failure to provide required information</li>
                    <li>• 30-day notice when possible</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Dispute Resolution */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dispute Resolution
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Resolution Process</h3>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Direct discussion with your service team</li>
                    <li>Escalation to firm management if needed</li>
                    <li>Mediation through professional association if required</li>
                    <li>Arbitration or legal proceedings as a last resort</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Governing Law</h3>
                  <p className="text-muted-foreground">
                    These terms are governed by California state law and federal regulations applicable to 
                    certified public accounting practice.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about these terms of service or need clarification on any aspect 
                of our professional relationship, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@hrxcpas.com" className="text-primary hover:text-primary/80">
                    info@hrxcpas.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+19494310469" className="text-primary hover:text-primary/80">
                    (949) 431-0469
                  </a>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-foreground mb-2">Office</h3>
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

export default TermsOfService;