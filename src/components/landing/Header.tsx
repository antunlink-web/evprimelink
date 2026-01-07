import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Primelink</span>
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
            <button
              onClick={() => setLanguage(language === 'hr' ? 'en' : 'hr')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border hover:bg-secondary transition-colors text-sm font-medium"
            >
              {language === 'hr' ? '🇭🇷 HR' : '🇬🇧 EN'}
            </button>
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
              <button
                onClick={() => setLanguage(language === 'hr' ? 'en' : 'hr')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border hover:bg-secondary transition-colors text-sm font-medium w-fit"
              >
                {language === 'hr' ? '🇭🇷 HR' : '🇬🇧 EN'}
              </button>
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
