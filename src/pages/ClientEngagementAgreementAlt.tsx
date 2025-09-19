import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, DollarSign, Shield, AlertCircle, Calendar, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ClientEngagementAgreementAlt = () => {
  return (
    <>
      <Helmet>
        <title>Client Engagement Agreement – Alt | Professional Services Contract | HRX CPAs</title>
        <meta name="description" content="Alternative client engagement agreement for HRX CPAs professional services: terms, responsibilities, fees, and service scope for tax and accounting clients." />
        <link rel="canonical" href="https://hrxcpas.com/client-engagement-agreement-alt" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client Engagement Agreement – Alt
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Standard terms and conditions for professional accounting and tax services provided by HRX CPAs.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Template updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Agreement Overview */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Professional Service Agreement
              </h2>
              <p className="text-lg text-muted-foreground">
                This agreement outlines the terms of our professional relationship
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Service Scope</h3>
                <p className="text-sm text-muted-foreground">Clearly defined deliverables</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Responsibilities</h3>
                <p className="text-sm text-muted-foreground">Both client and firm duties</p>
              </Card>
              
              <Card className="p-6 text-center">
                <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fee Structure</h3>
                <p className="text-sm text-muted-foreground">Transparent pricing terms</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-sm text-muted-foreground">Liability and confidentiality</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Agreement Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Services Scope */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Scope of Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Services to be Provided
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    This engagement letter specifically outlines the services HRX CPAs will provide. 
                    Services not listed require a separate agreement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Tax Services</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Federal and state income tax preparation</li>
                      <li>• Quarterly estimated tax planning</li>
                      <li>• Multi-state tax compliance</li>
                      <li>• Tax planning and strategy consultation</li>
                      <li>• IRS correspondence and representation</li>
                      <li>• Business entity tax returns</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Accounting Services</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monthly financial statement preparation</li>
                      <li>• Bookkeeping and transaction recording</li>
                      <li>• Payroll processing and compliance</li>
                      <li>• Sales tax preparation and filing</li>
                      <li>• Year-end closing procedures</li>
                      <li>• Financial analysis and reporting</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Advisory Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Business Advisory</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• CFO consulting</li>
                        <li>• Business planning</li>
                        <li>• Cash flow management</li>
                        <li>• Entity structure advice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Valuation Services</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Business valuations</li>
                        <li>• Estate planning valuations</li>
                        <li>• Gift and estate tax valuations</li>
                        <li>• Litigation support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Exit Planning</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Business exit strategies</li>
                        <li>• Succession planning</li>
                        <li>• Transaction structuring</li>
                        <li>• Post-sale tax planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Client Responsibilities */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Client Responsibilities
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Critical for Service Quality
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Client cooperation and timely information provision are essential for accurate, 
                    high-quality service delivery.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Information & Documentation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Provide complete and accurate financial records</li>
                      <li>• Submit documents by agreed deadlines</li>
                      <li>• Notify of changes in financial circumstances</li>
                      <li>• Maintain organized books and records</li>
                      <li>• Respond promptly to information requests</li>
                      <li>• Review drafts and provide feedback</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Communication & Decisions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Maintain regular communication schedule</li>
                      <li>• Make timely decisions on recommendations</li>
                      <li>• Inform of business or personal changes</li>
                      <li>• Attend scheduled meetings and calls</li>
                      <li>• Provide authorization for filings</li>
                      <li>• Review and approve final deliverables</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Document Retention Policy</h4>
                  <p className="text-muted-foreground text-sm">
                    Clients are responsible for maintaining supporting documentation for all tax positions 
                    for at least seven (7) years after filing. We recommend keeping business records 
                    permanently for operational and historical purposes.
                  </p>
                </div>
              </div>
            </Card>

            {/* Fees and Payment */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-primary" />
                Fees and Payment Terms
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Fee Structure</h3>
                    <div className="space-y-3">
                      <div className="border border-border p-3 rounded">
                        <h4 className="font-semibold text-foreground">Monthly Packages</h4>
                        <p className="text-sm text-muted-foreground">Fixed monthly fees for ongoing services, paid in advance</p>
                      </div>
                      <div className="border border-border p-3 rounded">
                        <h4 className="font-semibold text-foreground">Project-Based</h4>
                        <p className="text-sm text-muted-foreground">Fixed fees for specific deliverables like tax returns or valuations</p>
                      </div>
                      <div className="border border-border p-3 rounded">
                        <h4 className="font-semibold text-foreground">Hourly Consulting</h4>
                        <p className="text-sm text-muted-foreground">$200-$400/hour for specialized advisory services</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monthly packages: Due by 1st of each month</li>
                      <li>• Project fees: 50% at start, 50% upon completion</li>
                      <li>• Tax returns: Due before e-filing</li>
                      <li>• Late fees: 1.5% per month after 30 days</li>
                      <li>• Payment methods: ACH, wire, check</li>
                      <li>• Annual packages: 5% discount if paid in advance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    Service Suspension Policy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Services may be suspended for accounts more than 30 days past due. Work will not 
                    resume until payment is current. Client remains responsible for deadlines during 
                    suspension periods.
                  </p>
                </div>
              </div>
            </Card>

            {/* Professional Standards */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Professional Standards & Limitations
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Professional Standards</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AICPA Code of Professional Conduct</li>
                      <li>• California Board of Accountancy regulations</li>
                      <li>• IRS Circular 230 requirements</li>
                      <li>• Continuing education requirements</li>
                      <li>• Professional liability insurance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Liability Limitations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Limited to fees paid for specific service</li>
                      <li>• No consequential or punitive damages</li>
                      <li>• Claims must be made within 2 years</li>
                      <li>• Subject to professional liability coverage</li>
                      <li>• California law governs agreement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                  <h4 className="font-semibold text-foreground mb-2">Important Disclaimers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No guarantee of specific tax savings or outcomes</li>
                    <li>• Tax positions subject to IRS examination and interpretation</li>
                    <li>• Client remains responsible for business and financial decisions</li>
                    <li>• We do not provide legal, investment, or insurance advice</li>
                    <li>• Audit representation limited to matters we prepared</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Confidentiality and Records */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Confidentiality and Record Management
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Confidentiality</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Strict confidentiality of all client information</li>
                      <li>• Limited exceptions for legal compliance</li>
                      <li>• Client authorization required for disclosure</li>
                      <li>• Professional ethics protections</li>
                      <li>• Secure data handling procedures</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Record Retention</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Client files retained for 7 years minimum</li>
                      <li>• Electronic storage with backup systems</li>
                      <li>• Access provided upon request</li>
                      <li>• Secure destruction after retention period</li>
                      <li>• Compliance with professional standards</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Data Security Measures
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Encrypted cloud storage and transmission</li>
                    <li>• Multi-factor authentication requirements</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Secure client portal for document exchange</li>
                    <li>• Staff training on data protection protocols</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Engagement Termination */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Engagement Termination
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Client-Initiated Termination</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 30-day written notice required</li>
                      <li>• Payment due for services completed</li>
                      <li>• Client files returned within 10 business days</li>
                      <li>• Monthly packages: Pro-rated final month</li>
                      <li>• Project work: Final invoice upon completion of deliverables</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Firm-Initiated Termination</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 30-day written notice (unless emergency)</li>
                      <li>• Immediate termination for non-payment</li>
                      <li>• Professional responsibility conflicts</li>
                      <li>• Client non-cooperation or misconduct</li>
                      <li>• Assistance with transition to new firm</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Post-Termination Obligations</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Both parties remain bound by confidentiality provisions after termination. 
                    HRX CPAs will cooperate reasonably with successor professionals.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Client records available for pickup or secure transfer</li>
                    <li>• Working papers remain property of HRX CPAs</li>
                    <li>• Outstanding fees remain due and payable</li>
                    <li>• Confidentiality obligations continue indefinitely</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Signature Section */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Client Engagement Form
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-4">
                  Please complete the form below to formally engage our services. This constitutes 
                  your acceptance of the terms outlined in this agreement.
                </p>
              </div>

              <div className="w-full max-w-4xl mx-auto">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/KeM2LXidS0Fz1aQoazCF"
                  style={{width: '100%', height: '900px', border: 'none', borderRadius: '10px'}}
                  id="inline-KeM2LXidS0Fz1aQoazCF" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Client Engagement Agreement"
                  data-height="undefined"
                  data-layout-iframe-id="inline-KeM2LXidS0Fz1aQoazCF"
                  data-form-id="KeM2LXidS0Fz1aQoazCF"
                  title="Client Engagement Agreement"
                />
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center py-12">
              <Card className="p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Questions about our engagement terms? We're here to help clarify any aspects 
                  of our professional relationship before you sign.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/book-consultation">
                      Discuss This Engagement
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link to="/">
                      Return to Home
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default ClientEngagementAgreementAlt;