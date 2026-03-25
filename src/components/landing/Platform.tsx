import { Smartphone, LayoutDashboard, MapPin, CreditCard, BarChart3, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Platform = () => {
  const { t } = useLanguage();

  const appFeatures = [
    { icon: MapPin, label: t('Karta punionica', 'Charger Map') },
    { icon: CreditCard, label: t('Plaćanje u aplikaciji', 'In-App Payment') },
    { icon: Smartphone, label: t('Start/Stop punjenja', 'Start/Stop Charging') },
  ];

  const dashboardFeatures = [
    { icon: BarChart3, label: t('Analitika i prihodi', 'Analytics & Revenue') },
    { icon: Wrench, label: t('Status i održavanje', 'Status & Maintenance') },
    { icon: LayoutDashboard, label: t('Real-time monitoring', 'Real-time Monitoring') },
  ];

  return (
    <section id="platform" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Pametna platforma', 'Smart Platform')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Sve se upravlja kroz naš softver. Korisnici koriste aplikaciju, a vi pratite prihode na dashboardu.',
              'Everything is managed through our software. Users use the app, and you track revenue on the dashboard.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mobile App */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Smartphone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('Mobilna aplikacija', 'Mobile App')}
                </h3>
                <p className="text-sm text-muted-foreground">{t('Za vozače EV-a', 'For EV drivers')}</p>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border shadow-xl p-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-foreground">VoltAPP</div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="w-2 h-2 rounded-full bg-muted" />
                  <div className="w-2 h-2 rounded-full bg-muted" />
                </div>
              </div>
              <div className="bg-muted rounded-2xl h-40 mb-4 flex items-center justify-center">
                <MapPin size={32} className="text-primary" />
                <span className="ml-2 text-sm text-muted-foreground">{t('Interaktivna karta', 'Interactive Map')}</span>
              </div>
              <div className="space-y-3">
                {appFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <f.icon size={18} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <LayoutDashboard size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('Partner dashboard', 'Partner Dashboard')}
                </h3>
                <p className="text-sm text-muted-foreground">{t('Za vlasnike lokacija', 'For location owners')}</p>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-foreground">{t('Pregled prihoda', 'Revenue Overview')}</div>
                <div className="text-xs text-muted-foreground">{t('Zadnjih 30 dana', 'Last 30 days')}</div>
              </div>
              <div className="flex items-end gap-1 h-32 mb-6">
                {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85, 95, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-primary/20 relative" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-primary" style={{ height: `${h * 0.7}%` }} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/5 text-center">
                  <div className="text-lg font-bold text-primary">€840</div>
                  <div className="text-xs text-muted-foreground">{t('Vaš mjesečni prihod', 'Your Monthly Income')}</div>
                </div>
                <div className="p-3 rounded-xl bg-accent/10 text-center">
                  <div className="text-lg font-bold text-accent">1,280</div>
                  <div className="text-xs text-muted-foreground">{t('Sesija punjenja', 'Charging Sessions')}</div>
                </div>
              </div>
              <div className="space-y-3">
                {dashboardFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <f.icon size={18} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
