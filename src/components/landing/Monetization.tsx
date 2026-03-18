import { TrendingUp, Clock, Zap, PiggyBank } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Monetization = () => {
  const { t } = useLanguage();

  const models = [
    {
      icon: Zap,
      title: t('Po kWh', 'Per kWh'),
      description: t(
        'Naplatite po utrošenoj energiji. Najpopularniji model za javne lokacije.',
        'Charge per energy consumed. The most popular model for public locations.'
      ),
      example: t('Primjer: 0.35 €/kWh × 50 kWh = 17.50 €', 'Example: €0.35/kWh × 50 kWh = €17.50'),
    },
    {
      icon: Clock,
      title: t('Po vremenu', 'Per Time'),
      description: t(
        'Naplatite po minutama punjenja. Idealno za lokacije s visokim prometom.',
        'Charge per minute of charging. Ideal for high-traffic locations.'
      ),
      example: t('Primjer: 0.10 €/min × 45 min = 4.50 €', 'Example: €0.10/min × 45 min = €4.50'),
    },
    {
      icon: PiggyBank,
      title: t('Fiksna naknada', 'Flat Fee'),
      description: t(
        'Fiksni iznos po sesiji punjenja. Jednostavno i predvidljivo za korisnike.',
        'Fixed amount per charging session. Simple and predictable for users.'
      ),
      example: t('Primjer: 5.00 € po sesiji', 'Example: €5.00 per session'),
    },
  ];

  return (
    <section id="monetization" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('Zaradite s vašim punionicom', 'Earn With Your Charger')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t(
                'Vaša punionica nije trošak — ona je izvor prihoda. Odaberite model naplate koji odgovara vašoj lokaciji i počnite zarađivati od prvog dana.',
                'Your charger isn\'t a cost — it\'s a revenue source. Choose the billing model that fits your location and start earning from day one.'
              )}
            </p>

            {/* ROI highlight */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <TrendingUp size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{t('Primjer ROI-a', 'ROI Example')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/5">
                  <div className="text-2xl font-bold text-primary">€2,800</div>
                  <div className="text-xs text-muted-foreground">{t('Mjesečni prihod (DC 60kW)', 'Monthly Revenue (DC 60kW)')}</div>
                </div>
                <div className="p-4 rounded-xl bg-accent/10">
                  <div className="text-2xl font-bold text-accent">18 mj.</div>
                  <div className="text-xs text-muted-foreground">{t('Povrat investicije', 'Return on Investment')}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t(
                  '* Bazirano na prosječnoj lokaciji s 15+ punjenja dnevno',
                  '* Based on average location with 15+ charges per day'
                )}
              </p>
            </div>

            <Button size="lg" className="mt-6 gap-2" asChild>
              <a href="#contact">
                {t('Izračunajte svoj ROI', 'Calculate Your ROI')}
                <TrendingUp size={18} />
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {models.map((model, i) => (
              <Card key={i} className="hover:shadow-md hover:border-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <model.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{model.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{model.description}</p>
                      <div className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {model.example}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
