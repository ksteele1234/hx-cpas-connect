import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, FileText, Users, MessageCircle, Scale, Shield, BookOpen, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Home className="h-5 w-5" />,
      pages: [
        { title: "Homepage", path: "/", description: "Welcome to HRX CPAs" },
        { title: "About Us", path: "/about", description: "Learn about our team and story" },
        { title: "Contact Us", path: "/contact", description: "Get in touch with our team" },
        { title: "Book Consultation", path: "/book-consultation", description: "Schedule a meeting" }
      ]
    },
    {
      category: "Services",
      icon: <Building className="h-5 w-5" />,
      pages: [
        { title: "Business Services", path: "/business-services", description: "Tax, accounting, and CFO services for businesses" },
        { title: "Personal Services", path: "/personal-services", description: "Individual tax and planning services" },
        { title: "Pricing", path: "/pricing", description: "Service packages and pricing" }
      ]
    },
    {
      category: "Resources & Information",
      icon: <BookOpen className="h-5 w-5" />,
      pages: [
        { title: "Blog", path: "/blog", description: "Tax tips and business insights" },
        { title: "Testimonials", path: "/testimonials", description: "Client success stories" },
        { title: "FAQ", path: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: <Scale className="h-5 w-5" />,
      pages: [
        { title: "Privacy Policy", path: "/privacy-policy", description: "How we protect your information" },
        { title: "Terms of Service", path: "/terms-of-service", description: "Professional service agreement" },
        { title: "ADA Compliance", path: "/ada-compliance", description: "Accessibility statement" }
      ]
    }
  ];

  const blogPosts = [
    { title: "2025 Tax Planning Strategies for High-Income Professionals", path: "/blog/2025-tax-planning-strategies-high-income-professionals" },
    { title: "R&D Tax Credits: Hidden Opportunities for Tech Companies", path: "/blog/rd-tax-credits-hidden-opportunities-tech-companies" },
    { title: "Estate Planning for Multi-Generational Families", path: "/blog/estate-planning-multi-generational-families" },
    { title: "Key Tax Law Changes for 2025: What Business Owners Need to Know", path: "/blog/key-tax-law-changes-2025-business-owners" },
    { title: "RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit", path: "/blog/rsu-tax-planning-timing-stock-vesting-maximum-benefit" },
    { title: "Small Business Tax Deductions You Might Be Missing", path: "/blog/small-business-tax-deductions-you-might-be-missing" }
  ];

  return (
    <>
      <Helmet>
        <title>Site Map | Website Navigation | HRX CPAs Irvine</title>
        <meta name="description" content="Complete site map for HRX CPAs website: Find all pages including services, resources, legal information, and contact details for our Irvine CPA firm." />
        <link rel="canonical" href="https://hrxcpas.com/sitemap" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate our complete website structure and find exactly what you're looking for.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Main Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Blog Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Service Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Mobile Friendly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Site Structure */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Website Structure
            </h2>
            
            <div className="space-y-8">
              {siteStructure.map((section, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2">
                              <Link to={page.path} className="hover:text-primary transition-colors">
                                {page.title}
                              </Link>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">{page.description}</p>
                            <div className="text-xs text-primary font-mono">{page.path}</div>
                          </div>
                          <Button asChild variant="ghost" size="sm">
                            <Link to={page.path}>
                              Visit
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Blog Articles
            </h2>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Recent Articles</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.map((post, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:bg-background transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          <Link to={post.path} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="text-xs text-primary font-mono">{post.path}</div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={post.path}>
                          Read
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Button asChild variant="outline">
                  <Link to="/blog">
                    View All Blog Posts
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* XML Sitemap */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                XML Sitemap for Search Engines
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                For search engines and web crawlers, we provide a machine-readable XML sitemap 
                that includes all our pages with metadata about update frequency and priority.
              </p>
              <div className="text-center">
                <a 
                  href="/sitemap.xml" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /sitemap.xml
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help you find the information or services you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/book-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 px-4">
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
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

export default Sitemap;