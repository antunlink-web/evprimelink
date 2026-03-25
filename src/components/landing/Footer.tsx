import { useLanguage } from '@/contexts/LanguageContext';
import voltappLogo from '@/assets/app/voltapp-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center mb-4">
              <img src={voltappLogo} alt="VoltAPP" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-background/70 max-w-sm">
              {t(
                'Vaš partner za EV punilačku infrastrukturu. Instaliramo, upravljamo i zarađujemo — zajedno.',
                'Your partner for EV charging infrastructure. We install, manage, and earn — together.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Navigacija', 'Navigation')}</h4>
            <ul className="space-y-2">
              {[
                { href: '#process', label: t('Kako radi', 'How It Works') },
                { href: '#locations', label: t('Lokacije', 'Locations') },
                { href: '#platform', label: t('Platforma', 'Platform') },
                { href: '#revenue', label: t('Zarada', 'Revenue') },
                { href: '#contact', label: t('Kontakt', 'Contact') },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Kontakt', 'Contact')}</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="tel:+385915122888" className="hover:text-background transition-colors">+385 91 512 2888</a></li>
              <li><a href="mailto:info@voltapp.hr" className="hover:text-background transition-colors">info@voltapp.hr</a></li>
              <li>Tarska 26a, 10040 Zagreb</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 VoltAPP. {t('Sva prava pridržana.', 'All rights reserved.')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">{t('Politika privatnosti', 'Privacy Policy')}</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">{t('Uvjeti korištenja', 'Terms of Use')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
