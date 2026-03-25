import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Expansion = () => {
  const { t } = useLanguage();

  const activeCities = ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Dubrovnik'];
  const comingSoon = ['Pula', 'Šibenik', 'Varaždin', 'Karlovac', 'Slavonski Brod', 'Velika Gorica'];

  return (
    <section id="expansion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Širimo mrežu', 'Expanding the Network')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Aktivno tražimo nove lokacije diljem Hrvatske. Pridružite se našoj rastućoj mreži.',
              'We\'re actively seeking new locations across Croatia. Join our growing network.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="font-bold text-foreground">{t('Aktivni gradovi', 'Active Cities')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeCities.map((city) => (
                <div key={city} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  <MapPin size={14} className="text-primary" />
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-muted-foreground animate-pulse" />
              <h3 className="font-bold text-foreground">{t('Uskoro', 'Coming Soon')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {comingSoon.map((city) => (
                <div key={city} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  <MapPin size={14} />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expansion;
