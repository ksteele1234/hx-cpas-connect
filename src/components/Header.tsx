import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import hrxLogo from "@/assets/hrx-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [personalDropdownOpen, setPersonalDropdownOpen] = useState(false);

  const businessServices = [
    { name: "Tax Planning & Preparation", href: "/services/tax-planning-prep" },
    { name: "Bookkeeping", href: "/services/bookkeeping" },
    { name: "CFO Consulting", href: "/services/cfo-consulting" },
    { name: "Full Service Accounting & Payroll", href: "/services/full-service-accounting-payroll" },
    { name: "Business Valuation", href: "/services/business-valuation" },
    { name: "Exit Planning", href: "/services/exit-planning" },
    { name: "Buyer Due Diligence", href: "/services/buyer-due-diligence" },
    { name: "Estate Planning Coordination", href: "/services/estate-planning-coordination" },
  ];

  const personalServices = [
    { name: "Individual Tax Preparation", href: "/services/individual-tax-preparation" },
    { name: "RSU & Equity Planning", href: "/services/rsu-equity-planning" },
    { name: "Rental & K-1 Support", href: "/services/rental-k1-support" },
    { name: "Personal Estate Planning", href: "/services/personal-estate-planning" },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const endNavigationLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Utility Mini-Bar (Desktop Only) */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-width flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a 
              href="tel:(949) 431-0469" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (949) 431-0469
            </a>
            <span className="text-primary-foreground/70">|</span>
            <span>Mon-Thu: 10 AM–4 PM</span>
          </div>
          <Button 
            size="sm" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src={hrxLogo} 
                  alt="HRX CPAs Logo" 
                  className="w-[150px] h-auto"
                  width="150"
                  height="40"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Business Services Dropdown */}
              <div className="relative group flex items-center gap-1">
                <Link 
                  to="/business-services"
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative"
                >
                  Business Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white shadow-lg border border-border z-50">
                    {businessServices.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link 
                          to={service.href}
                          className="w-full px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors cursor-pointer"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Personal Services Dropdown */}
              <div className="relative group flex items-center gap-1">
                <Link 
                  to="/personal-services"
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative"
                >
                  Personal & Family Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white shadow-lg border border-border z-50">
                    {personalServices.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link 
                          to={service.href}
                          className="w-full px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors cursor-pointer"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* End Navigation Links */}
              {endNavigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Client Portal Button (Desktop) */}
            <div className="hidden lg:block">
              <Button 
                className="text-white" 
                style={{ backgroundColor: 'rgb(109,160,202)', opacity: 1 }}
                asChild
              >
                <a 
                  href="https://login.qount.io/hrx?rd=https://hrx.qount.io&org=hrx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Portal
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-foreground hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Business Services */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    to="/business-services"
                    className="text-foreground hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Business Services
                  </Link>
                  <button
                    onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                    className="p-1 text-foreground hover:text-primary transition-colors duration-200"
                    aria-expanded={businessDropdownOpen}
                    aria-label="Toggle business services menu"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${businessDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {businessDropdownOpen && (
                  <div className="pl-4 space-y-2">
                    {businessServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Personal Services */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    to="/personal-services"
                    className="text-foreground hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Personal & Family Services
                  </Link>
                  <button
                    onClick={() => setPersonalDropdownOpen(!personalDropdownOpen)}
                    className="p-1 text-foreground hover:text-primary transition-colors duration-200"
                    aria-expanded={personalDropdownOpen}
                    aria-label="Toggle personal services menu"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${personalDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {personalDropdownOpen && (
                  <div className="pl-4 space-y-2">
                    {personalServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* End Navigation Links (Mobile) */}
              {endNavigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-foreground hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: 'rgb(109,160,202)', opacity: 1 }}
                  asChild
                >
                  <a 
                    href="https://login.qount.io/hrx?rd=https://hrx.qount.io&org=hrx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Portal
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link to="/book-consultation">Book a Consultation</Link>
                </Button>
                <div className="pt-2">
                  <a 
                    href="tel:(949) 431-0469" 
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    (949) 431-0469
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;