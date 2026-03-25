import { MapPin, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Trust = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Target,
      value: '10+',
      label: t('lokacija u pripremi', 'locations in preparation'),
    },
    {
      icon: MapPin,
      value: t('Zagreb, Split, Rijeka', 'Zagreb, Split, Rijeka'),
      label: t('fokus gradovi u Hrvatskoj', 'focus cities in Croatia'),
      isText: true,
    },
    {
      icon: TrendingUp,
      value: '+47%',
      label: t('rast potražnje za EV punjenjem godišnje', 'annual growth in EV charging demand'),
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Već razvijamo mrežu u Hrvatskoj', 'Already Building a Network in Croatia')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Rastuća potražnja za EV punjenjem stvara jedinstvenu priliku za vlasnike lokacija diljem Hrvatske.',
              'Growing EV charging demand creates a unique opportunity for location owners across Croatia.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-md hover:border-primary/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <stat.icon size={28} className="text-primary" />
              </div>
              <div className={`font-bold text-foreground mb-2 ${stat.isText ? 'text-xl' : 'text-3xl text-primary'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Local context */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Dubrovnik'].map((city) => (
              <div key={city} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                <MapPin size={14} className="text-primary" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
