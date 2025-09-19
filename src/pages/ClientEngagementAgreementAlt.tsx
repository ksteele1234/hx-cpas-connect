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

        {/* Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-2xl mx-auto">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/KeM2LXidS0Fz1aQoazCF"
              style={{
                width: '100%',
                minHeight: '1000px',
                border: 'none',
                borderRadius: '10px'
              }}
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
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default ClientEngagementAgreementAlt;