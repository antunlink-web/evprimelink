import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Smartphone, QrCode, Nfc } from 'lucide-react';

import voltappHero from '@/assets/app/voltapp-hero.avif';
import voltappMap from '@/assets/app/voltapp-map.avif';
import voltappInsights from '@/assets/app/voltapp-insights.avif';
import voltappTap from '@/assets/app/voltapp-tap.avif';
import voltappCta from '@/assets/app/voltapp-cta.avif';
import voltappLogo from '@/assets/app/voltapp-logo.png';
import voltappBolt from '@/assets/app/voltapp-bolt.png';

const VoltAppContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative gradient-hero pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Circuit-like decorative lines */}
            <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10" viewBox="0 0 600 800" fill="none">
              <path d="M100 0 L100 200 L300 200 L300 400 L500 400 L500 600" stroke="hsl(var(--accent))" strokeWidth="2" />
              <path d="M200 0 L200 100 L400 100 L400 300 L600 300" stroke="hsl(var(--accent))" strokeWidth="1.5" />
              <path d="M50 200 L150 200 L150 350 L350 350 L350 500 L500 500" stroke="hsl(var(--accent))" strokeWidth="1" />
              <circle cx="100" cy="200" r="4" fill="hsl(var(--accent))" />
              <circle cx="300" cy="200" r="4" fill="hsl(var(--accent))" />
              <circle cx="300" cy="400" r="4" fill="hsl(var(--accent))" />
              <circle cx="500" cy="400" r="4" fill="hsl(var(--accent))" />
              <circle cx="400" cy="100" r="3" fill="hsl(var(--accent))" />
              <circle cx="400" cy="300" r="3" fill="hsl(var(--accent))" />
              <circle cx="150" cy="350" r="3" fill="hsl(var(--accent))" />
              <circle cx="350" cy="350" r="3" fill="hsl(var(--accent))" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 flex items-center">
                   V<img src={voltappBolt} alt="O" className="inline-block h-[1.1em] -mx-[0.05em] relative top-[0.05em]" />LT<span className="text-primary">APP</span>
                 </h1>
                <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg">
                  {t(
                     'VoltAPP je vaš pametni pratilac za jednostavno punjenje električnih vozila. Pronađite, punite i plaćajte — sve u jednoj aplikaciji.',
                     'VoltAPP is your smart companion for effortless electric vehicle charging. Find, charge, and pay — all in one app.'
                  )}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" variant="secondary" className="gap-2 h-14 px-5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.76C5.55 8.4 6.96 7.53 8.5 7.51C9.77 7.49 10.97 8.39 11.74 8.39C12.51 8.39 13.97 7.31 15.46 7.47C16.08 7.5 17.62 7.72 18.61 9.15C18.53 9.2 16.61 10.31 16.63 12.63C16.66 15.42 19.1 16.33 19.13 16.35C19.11 16.41 18.74 17.71 17.9 19.05L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                    App Store
                  </Button>
                  <Button size="lg" variant="secondary" className="gap-2 h-14 px-5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
                    Google Play
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 h-14 px-5 border-foreground/25 text-foreground hover:bg-foreground/10">
                    <Smartphone size={18} />
                    {t('Otvori u pregledniku', 'Open in Browser')}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img src={voltappHero} alt="VoltAPP" className="w-72 md:w-80 lg:w-96 drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* LIVE STATION FINDER */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <img src={voltappMap} alt="Station Finder" className="w-64 md:w-80 drop-shadow-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('Pronađite punionicu uživo', 'Live Station Finder')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t(
                    'Napajana podacima u stvarnom vremenu, naša ',
                    'Powered by real-time data, our '
                  )}
                  <span className="text-primary font-semibold">{t('pametna karta', 'smart map')}</span>
                  {t(
                    ' vam daje uvid u status stanice, cjenovne trendove i kompatibilnost punjača. Planirajte unaprijed — bilo da ste u gradu ili na autocesti, uvijek ćete znati gdje dalje puniti.',
                    ' gives you live insights into station status, price trends, and charger compatibility. Plan ahead — whether you\'re in the city or on the highway, you\'ll always know where to charge next.'
                  )}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    t('Status stanice', 'Station Status'),
                    t('Cjenovni trendovi', 'Price Trends'),
                    t('Kompatibilnost punjača', 'Charger Compatibility'),
                  ].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENERGY INSIGHTS */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('Energetski uvidi', 'Energy Insights')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <span className="text-primary font-semibold">{t('Energetski uvidi', 'Energy Insights')}</span>
                  {t(
                    ' pružaju jasnoću potrebnu za učinkovito upravljanje. Vizualizirajte protok energije i detaljnu potrošnju uz ',
                    ' provides the essential clarity required for efficient management. Visualize power flow and detailed spending with '
                  )}
                  <span className="text-primary font-semibold">{t('sveobuhvatnu analitiku', 'comprehensive analytics')}</span>
                  {t(
                    ' dizajniranu da vam pruži neviđeno razumijevanje i mogućnost optimizacije troškova u cijelom sustavu.',
                    ' designed to give you unprecedented understanding and the ability to optimize costs across your entire operation.'
                  )}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img src={voltappInsights} alt="Energy Insights" className="w-64 md:w-80 drop-shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* TAP TO CHARGE */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <img src={voltappTap} alt="Tap to Charge" className="w-64 md:w-80 drop-shadow-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('Tap-to-Charge', 'Tap-to-Charge')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t(
                    'Eliminirajte trenje i maksimizirajte učinkovitost. Tap-to-Charge modernizira korisničko iskustvo, omogućujući trenutno pokretanje sesije putem dva univerzalno dostupna načina: ',
                    'Eliminate friction and maximize efficiency. Tap-to-Charge modernizes the user experience, allowing for immediate session initiation through two universally accessible methods: '
                  )}
                  <span className="text-primary font-semibold">{t('QR sken', 'QR scan')}</span>
                  {t(' ili ', ' or ')}
                  <span className="text-primary font-semibold">{t('NFC tehnologiju', 'NFC technology')}</span>
                  {t(
                    '. To osigurava brz, pouzdan i profesionalan proces punjenja bez kašnjenja.',
                    '. This ensures a rapid, reliable, and professional charging process with zero delay.'
                  )}
                </p>
                <div className="flex gap-4 mt-6">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10">
                    <QrCode size={28} className="text-primary" />
                    <span className="text-base font-medium text-foreground">QR Scan</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10">
                    <Nfc size={28} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">NFC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="gradient-hero rounded-3xl p-8 md:p-14 overflow-hidden relative">
              {/* Decorative circuit lines */}
              <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
                <path d="M0 100 L200 100 L200 200 L400 200 L400 100 L600 100 L600 300 L800 300" stroke="hsl(var(--accent))" strokeWidth="2" />
                <path d="M0 300 L100 300 L100 50 L300 50 L300 350 L500 350" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                <circle cx="200" cy="100" r="4" fill="hsl(var(--accent))" />
                <circle cx="200" cy="200" r="4" fill="hsl(var(--accent))" />
                <circle cx="400" cy="200" r="4" fill="hsl(var(--accent))" />
                <circle cx="600" cy="100" r="4" fill="hsl(var(--accent))" />
              </svg>

              <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    {t('Preuzmite aplikaciju!', 'Download The App!')}
                  </h2>
                  <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
                    {t(
                      'Preuzmite kontrolu nad vašim EV punjenjem bilo gdje, bilo kada. Pratite sesije u stvarnom vremenu, nadzirite troškove i pronađite dostupne stanice jednim dodirom.',
                      'Take control of your EV charging experience anywhere, anytime. Track real-time sessions, monitor costs, and find available stations with a single tap.'
                    )}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" variant="secondary" className="gap-2 h-14 px-5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.76C5.55 8.4 6.96 7.53 8.5 7.51C9.77 7.49 10.97 8.39 11.74 8.39C12.51 8.39 13.97 7.31 15.46 7.47C16.08 7.5 17.62 7.72 18.61 9.15C18.53 9.2 16.61 10.31 16.63 12.63C16.66 15.42 19.1 16.33 19.13 16.35C19.11 16.41 18.74 17.71 17.9 19.05L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                      App Store
                    </Button>
                    <Button size="lg" variant="secondary" className="gap-2 h-14 px-5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
                      Google Play
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 h-14 px-5 border-primary-foreground/25 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                      <Smartphone size={18} />
                      {t('U pregledniku', 'In Browser')}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img src={voltappCta} alt="VoltAPP" className="w-64 md:w-80 drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const VoltApp = () => {
  return (
    <LanguageProvider>
      <VoltAppContent />
    </LanguageProvider>
  );
};

export default VoltApp;
