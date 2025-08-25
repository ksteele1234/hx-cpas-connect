import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const saveSettings = (settings: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...settings,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto p-6 bg-white shadow-xl border border-border">
        {!showSettings ? (
          // Main Cookie Notice
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We use essential cookies for basic functionality and optional analytics cookies to improve our website. 
                    We don't use marketing cookies. You can manage your preferences or learn more in our{' '}
                    <Link to="/cookie-policy" className="text-primary hover:text-primary/80 underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                onClick={acceptAll}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Accept All
              </Button>
              <Button 
                onClick={acceptEssential}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Essential Only
              </Button>
              <Button 
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>
            </div>
          </div>
        ) : (
          // Cookie Settings
          <CookieSettings 
            onSave={saveSettings}
            onBack={() => setShowSettings(false)}
            onClose={() => setIsVisible(false)}
          />
        )}
      </Card>
    </div>
  );
};

const CookieSettings = ({ 
  onSave, 
  onBack, 
  onClose 
}: { 
  onSave: (settings: { essential: boolean; analytics: boolean; marketing: boolean }) => void;
  onBack: () => void;
  onClose: () => void;
}) => {
  const [settings, setSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Cookie Preferences</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {/* Essential Cookies */}
        <div className="flex items-start justify-between p-4 bg-muted/50 rounded-lg">
          <div className="space-y-1 flex-1">
            <h4 className="font-medium text-foreground">Essential Cookies</h4>
            <p className="text-sm text-muted-foreground">
              Required for basic website functionality. Cannot be disabled.
            </p>
          </div>
          <div className="ml-4">
            <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Analytics Cookies */}
        <div className="flex items-start justify-between p-4 bg-muted/50 rounded-lg">
          <div className="space-y-1 flex-1">
            <h4 className="font-medium text-foreground">Analytics Cookies</h4>
            <p className="text-sm text-muted-foreground">
              Help us understand how visitors use our website through Google Analytics.
            </p>
          </div>
          <div className="ml-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, analytics: !prev.analytics }))}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                settings.analytics 
                  ? 'bg-primary justify-end' 
                  : 'bg-border justify-start'
              }`}
              role="switch"
              aria-checked={settings.analytics}
              aria-label="Toggle analytics cookies"
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Marketing Cookies */}
        <div className="flex items-start justify-between p-4 bg-muted/50 rounded-lg opacity-60">
          <div className="space-y-1 flex-1">
            <h4 className="font-medium text-foreground">Marketing Cookies</h4>
            <p className="text-sm text-muted-foreground">
              Currently not used. Track visitors across websites for advertising purposes.
            </p>
          </div>
          <div className="ml-4">
            <div className="w-12 h-6 bg-border rounded-full flex items-center justify-start px-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
        <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Save Preferences
        </Button>
        <Button onClick={onBack} variant="outline">
          Back
        </Button>
        <div className="text-sm text-muted-foreground pt-2">
          Learn more in our{' '}
          <Link to="/cookie-policy" className="text-primary hover:text-primary/80 underline">
            Cookie Policy
          </Link>{' '}
          or{' '}
          <Link to="/privacy-policy" className="text-primary hover:text-primary/80 underline">
            Privacy Policy
          </Link>.
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;