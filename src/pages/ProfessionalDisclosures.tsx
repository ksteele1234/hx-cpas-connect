import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Scale, AlertTriangle, Shield, CheckCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProfessionalDisclosures = () => {
  return (
    <>
      <Helmet>
        <title>Professional Disclosures | CPA Ethics & Compliance | HRX CPAs Irvine</title>
        <meta name="description" content="Professional disclosures and regulatory compliance information for HRX CPAs: California Board of Accountancy licensing, professional standards, and regulatory requirements." />
        <link rel="canonical" href="https://hrxcpas.com/professional-disclosures" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Disclosures
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Regulatory compliance, professional licensing, and ethical standards for HRX CPAs.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Licensing Information */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Professional Licensing & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">California CPA License</h3>
                <p className="text-muted-foreground mb-3">
                  Licensed by the California Board of Accountancy
                </p>
                <p className="text-sm text-muted-foreground">
                  License #: [License Number]<br/>
                  Status: Active and in good standing
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Insurance</h3>
                <p className="text-muted-foreground mb-3">
                  Comprehensive professional liability coverage
                </p>
                <p className="text-sm text-muted-foreground">
                  Coverage: $2,000,000<br/>
                  Provider: [Insurance Company]
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuing Education</h3>
                <p className="text-muted-foreground mb-3">
                  Annual CPE requirements exceeded
                </p>
                <p className="text-sm text-muted-foreground">
                  40+ hours annually<br/>
                  Ethics training current
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* CPA Advertising Rules */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                California CPA Advertising Compliance
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Required Disclosures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All advertising materials comply with California Business and Professions Code Section 5061</li>
                    <li>• No false, misleading, or deceptive statements regarding professional qualifications</li>
                    <li>• Client testimonials reflect actual experiences and are not guaranteed outcomes</li>
                    <li>• Professional credentials (CPA, CVA, CEPA) are accurately represented</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Professional Standards</h3>
                  <p className="text-muted-foreground mb-3">
                    Our practice adheres to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• American Institute of CPAs (AICPA) Code of Professional Conduct</li>
                    <li>• California Society of CPAs (CalCPA) ethical standards</li>
                    <li>• IRS Circular 230 requirements for tax practice</li>
                    <li>• California Board of Accountancy regulations</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Service Limitations */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Service Limitations & Disclaimers
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Important Notice</h3>
                  <p className="text-muted-foreground mb-4">
                    The information on this website is for general guidance only and does not constitute 
                    professional advice for your specific situation. Tax laws are complex and subject to change.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Individual consultation required for personalized advice</li>
                    <li>• Past results do not guarantee future outcomes</li>
                    <li>• Tax savings estimates are projections, not guarantees</li>
                    <li>• All advice subject to IRS examination and interpretation</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What We Do</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Tax preparation and planning</li>
                      <li>• Accounting and bookkeeping services</li>
                      <li>• Business consulting and CFO advisory</li>
                      <li>• Estate planning coordination</li>
                      <li>• Business valuations (CVA credential)</li>
                      <li>• Exit planning advisory (CEPA credential)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What We Don't Do</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Legal advice (refer to qualified attorneys)</li>
                      <li>• Investment management or securities sales</li>
                      <li>• Insurance sales or recommendations</li>
                      <li>• Real estate transactions</li>
                      <li>• Immigration law or services</li>
                      <li>• Audit or attest services for public companies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Independence and Conflicts */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Independence & Conflict of Interest Policy
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Professional Independence</h3>
                  <p className="text-muted-foreground">
                    We maintain professional independence in accordance with AICPA standards. We do not have 
                    financial interests that would compromise our professional judgment in serving clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Conflict Identification</h3>
                  <p className="text-muted-foreground">
                    We screen for potential conflicts of interest before accepting new clients. If conflicts 
                    arise during an engagement, we will notify affected parties and take appropriate action.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Referral Relationships</h3>
                  <p className="text-muted-foreground">
                    We may receive referral fees from other professionals when referring clients for services 
                    outside our expertise. All such arrangements are disclosed to clients in advance.
                  </p>
                </div>
              </div>
            </Card>

            {/* Regulatory Contact Information */}
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Regulatory Information & Complaints
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">California Board of Accountancy</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>2000 Evergreen Street, Suite 250</p>
                    <p>Sacramento, CA 95815</p>
                    <p>Phone: (916) 561-1729</p>
                    <p><a href="https://www.dca.ca.gov/cba/" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.dca.ca.gov/cba/</a></p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Professional Associations</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p><strong>AICPA:</strong> <a href="https://www.aicpa.org" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.aicpa.org</a></p>
                    <p><strong>CalCPA:</strong> <a href="https://www.calcpa.org" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.calcpa.org</a></p>
                    <p><strong>NACVA (CVA):</strong> <a href="https://www.nacva.com" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.nacva.com</a></p>
                    <p><strong>Exit Planning Institute (CEPA):</strong> <a href="https://www.exitplanninginstitute.org" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.exitplanninginstitute.org</a></p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded border">
                <h4 className="font-semibold text-foreground mb-2">File a Complaint</h4>
                <p className="text-muted-foreground text-sm">
                  If you have concerns about our professional services, please contact us directly first. 
                  If you need to file a formal complaint, you may contact the California Board of Accountancy 
                  or the appropriate professional association.
                </p>
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
    </>
  );
};

export default ProfessionalDisclosures;