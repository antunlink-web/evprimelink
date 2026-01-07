import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import primelinkLogo from '@/assets/primelink-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#products', label: t('Proizvodi', 'Products') },
    { href: '#about', label: t('O nama', 'About') },
    { href: '#contact', label: t('Kontakt', 'Contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={primelinkLogo} alt="PrimeLink" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex rounded-md border border-border overflow-hidden">
              <button
                onClick={() => setLanguage('hr')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'hr' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
              >
                HR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
              >
                EN
              </button>
            </div>
            <Button asChild>
              <a href="#contact">{t('Kontaktirajte nas', 'Contact Us')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex rounded-md border border-border overflow-hidden w-fit">
                <button
                  onClick={() => setLanguage('hr')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'hr' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  HR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  EN
                </button>
              </div>
              <Button asChild className="w-fit">
                <a href="#contact">{t('Kontaktirajte nas', 'Contact Us')}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
