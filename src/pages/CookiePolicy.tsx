import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Eye, Shield, ToggleLeft, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Website Tracking & Privacy | HRX CPAs Irvine</title>
        <meta name="description" content="HRX CPAs cookie policy: How we use cookies, tracking technologies, and your choices for website privacy and functionality preferences." />
        <link rel="canonical" href="https://hrxcpas.com/cookie-policy" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Information about how we use cookies and similar technologies on our website.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Cookie Overview */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Understanding Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Cookie className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">What Are Cookies</h3>
                <p className="text-muted-foreground">
                  Small text files stored on your device to improve website functionality and user experience.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Your Control</h3>
                <p className="text-muted-foreground">
                  You can control cookie preferences through your browser settings or our cookie preferences.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We clearly explain what cookies we use, why we use them, and how you can manage them.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Essential Cookies */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Essential Cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Always Active - Required for Basic Functionality
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Security & Authentication</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Session management for secure browsing</li>
                      <li>• CSRF protection tokens</li>
                      <li>• SSL certificate verification</li>
                      <li>• Login state management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Core Functionality</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Contact form submission</li>
                      <li>• Page navigation and routing</li>
                      <li>• Language and accessibility preferences</li>
                      <li>• Cookie consent management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Analytics Cookies */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <ToggleLeft className="h-6 w-6 text-primary" />
                Analytics Cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Optional - Help Us Improve Our Website
                  </h3>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors use our website so we can improve it.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Google Analytics</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-border rounded-lg">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left p-3 border-b border-border">Cookie Name</th>
                          <th className="text-left p-3 border-b border-border">Purpose</th>
                          <th className="text-left p-3 border-b border-border">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="p-3 border-b border-border">_ga</td>
                          <td className="p-3 border-b border-border">Distinguishes unique users</td>
                          <td className="p-3 border-b border-border">2 years</td>
                        </tr>
                        <tr>
                          <td className="p-3 border-b border-border">_ga_[ID]</td>
                          <td className="p-3 border-b border-border">Session tracking</td>
                          <td className="p-3 border-b border-border">2 years</td>
                        </tr>
                        <tr>
                          <td className="p-3">_gid</td>
                          <td className="p-3">Distinguishes users for 24 hours</td>
                          <td className="p-3">24 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white rounded border">
                    <h4 className="font-semibold text-foreground mb-2">What We Track</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page views and popular content</li>
                      <li>• Time spent on website</li>
                      <li>• Geographic location (city/state level)</li>
                      <li>• Device type and browser information</li>
                      <li>• Referral sources (how you found us)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Marketing Cookies */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Marketing & Personalization Cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Currently Not Used
                  </h3>
                  <p className="text-muted-foreground">
                    We do not currently use marketing or advertising cookies. If this changes, 
                    we will update this policy and request your consent.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Future Considerations</h3>
                  <p className="text-muted-foreground mb-3">
                    If we implement marketing cookies in the future, they may include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Social media integration (LinkedIn, Facebook)</li>
                    <li>• Retargeting for relevant content</li>
                    <li>• Personalized service recommendations</li>
                    <li>• Email marketing campaign tracking</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Any such implementations will require explicit opt-in consent.
                  </p>
                </div>
              </div>
            </Card>

            {/* Managing Cookies */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Managing Your Cookie Preferences
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Browser Settings</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chrome: Settings {`>`} Privacy and security {`>`} Cookies</li>
                    <li>• Firefox: Options {`>`} Privacy & Security {`>`} Cookies</li>
                    <li>• Safari: Preferences {`>`} Privacy {`>`} Cookies</li>
                    <li>• Edge: Settings {`>`} Site permissions {`>`} Cookies</li>
                  </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Opt-Out Options</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Browser Add-on</a></li>
                      <li>• Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Opt-out Tool</a></li>
                      <li>• Digital Advertising Alliance: <a href="https://optout.aboutads.info/" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Consumer Choice</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Impact of Disabling Cookies
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Disabling certain cookies may affect website functionality:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contact forms may not work properly</li>
                    <li>• Preferences will not be saved</li>
                    <li>• Some security features may be disabled</li>
                    <li>• Website performance may be reduced</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Third-Party Services */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Third-Party Services
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Google Services</h3>
                  <p className="text-muted-foreground mb-2">
                    We use Google Analytics and Google Fonts. Please review their privacy policies:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <a href="https://policies.google.com/privacy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                    <li>• <a href="https://policies.google.com/technologies/partner-sites" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">How Google uses data</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Processing</h3>
                  <p className="text-muted-foreground">
                    Analytics data is processed in accordance with our Privacy Policy and may be 
                    transferred to servers outside of California for processing by our service providers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our use of cookies or this policy, please contact us:
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
              </div>
            </Card>
            
            {/* Navigation */}
            <div className="text-center pt-8 space-y-4">
              <Button asChild size="lg">
                <Link to="/privacy-policy">
                  View Full Privacy Policy
                </Link>
              </Button>
              <div>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">
                    Return to Home
                  </Link>
                </Button>
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

export default CookiePolicy;