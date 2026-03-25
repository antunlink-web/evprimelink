import { useLanguage } from '@/contexts/LanguageContext';
import voltappBolt from '@/assets/app/voltapp-bolt.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-foreground py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center mb-4 text-2xl font-bold text-foreground">
              V<img src={voltappBolt} alt="O" className="inline-block h-[0.85em] -mx-[0.02em] relative top-[0.03em]" />LT<span className="text-primary">APP</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              {t(
                'Vaš partner za EV punilačku infrastrukturu. Instaliramo, upravljamo i zarađujemo — zajedno.',
                'Your partner for EV charging infrastructure. We install, manage, and earn — together.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('Navigacija', 'Navigation')}</h4>
            <ul className="space-y-2">
              {[
                { href: '#process', label: t('Kako radi', 'How It Works') },
                { href: '#locations', label: t('Lokacije', 'Locations') },
                { href: '#platform', label: t('Platforma', 'Platform') },
                { href: '#revenue', label: t('Zarada', 'Revenue') },
                { href: '#contact', label: t('Kontakt', 'Contact') },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('Kontakt', 'Contact')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="tel:+385915122888" className="hover:text-primary transition-colors">+385 91 512 2888</a></li>
              <li><a href="mailto:info@voltapp.hr" className="hover:text-primary transition-colors">info@voltapp.hr</a></li>
              <li>Tarska 26a, 10040 Zagreb</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 VoltAPP. {t('Sva prava pridržana.', 'All rights reserved.')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('Politika privatnosti', 'Privacy Policy')}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('Uvjeti korištenja', 'Terms of Use')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
