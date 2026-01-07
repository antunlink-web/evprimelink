import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const links = {
    products: [
      { label: t('AC punjači', 'AC Chargers'), href: '#products' },
      { label: t('DC punjači', 'DC Chargers'), href: '#products' },
      { label: t('Prijenosni punjači', 'Portable Chargers'), href: '#products' },
    ],
    company: [
      { label: t('O nama', 'About Us'), href: '#about' },
      { label: t('Kontakt', 'Contact'), href: '#contact' },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Primelink</span>
            </a>
            <p className="text-background/70 max-w-md">
              {t(
                'Vaš pouzdani partner za profesionalna rješenja punjenja električnih vozila. Gradimo održivu budućnost zajedno.',
                'Your trusted partner for professional electric vehicle charging solutions. Building a sustainable future together.'
              )}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t('Proizvodi', 'Products')}</h4>
            <ul className="space-y-2">
              {links.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('Tvrtka', 'Company')}</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 Primelink. {t('Sva prava pridržana.', 'All rights reserved.')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              {t('Politika privatnosti', 'Privacy Policy')}
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              {t('Uvjeti korištenja', 'Terms of Use')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
