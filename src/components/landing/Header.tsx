import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import voltappBolt from '@/assets/app/voltapp-bolt.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { href: '#process', label: t('Kako radi', 'How It Works') },
    { href: '#locations', label: t('Lokacije', 'Locations') },
    { href: '#platform', label: t('Platforma', 'Platform') },
    { href: '#revenue', label: t('Zarada', 'Revenue') },
    { href: '#about', label: t('O nama', 'About') },
    { href: '/oprema', label: t('Oprema', 'Equipment'), isRoute: true },
    { href: '/voltapp', label: 'VoltAPP', isRoute: true },
  ];

  const renderNavLink = (link: { href: string; label: string; isRoute?: boolean }, onClick?: () => void) => {
    if (link.isRoute) {
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
          onClick={onClick}
        >
          {link.label}
        </Link>
      );
    }
    const href = isHome ? link.href : `/${link.href}`;
    return (
      <a
        key={link.href}
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center text-2xl font-bold text-foreground tracking-tight">
            V<img src={voltappBolt} alt="O" className="inline-block h-[0.85em] -mx-[0.08em] relative top-[0.03em]" />LT<span className="text-primary">APP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex rounded-md border border-border overflow-hidden">
              <button onClick={() => setLanguage('hr')} className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'hr' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>HR</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>EN</button>
            </div>
            <Button asChild>
              {isHome ? (
                <a href="#contact">{t('Postanite partner', 'Become a Partner')}</a>
              ) : (
                <Link to="/#contact">{t('Postanite partner', 'Become a Partner')}</Link>
              )}
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => renderNavLink(link, () => setIsMenuOpen(false)))}
              <div className="flex rounded-md border border-border overflow-hidden w-fit">
                <button onClick={() => setLanguage('hr')} className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'hr' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>HR</button>
                <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>EN</button>
              </div>
              <Button asChild className="w-fit">
                <a href={isHome ? '#contact' : '/#contact'}>{t('Postanite partner', 'Become a Partner')}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
