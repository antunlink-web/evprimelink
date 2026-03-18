import { Plug, Zap, BatteryCharging } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

import bfAmppalAc44 from '@/assets/chargers/bf-amppal-ac-44.png';
import bfAmppalDc120 from '@/assets/chargers/bf-amppal-dc-120.png';
import dobratehDc320_360kw from '@/assets/chargers/dobrateh-dc-320-360kw.png';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Plug,
      title: t('AC punjenje', 'AC Charging'),
      power: '7–44 kW',
      image: bfAmppalAc44,
      useCase: t(
        'Idealno za hotele, trgovine i parkirališta gdje se vozila zadrže dulje.',
        'Ideal for hotels, retail, and parking lots where vehicles stay longer.'
      ),
      features: [
        t('Zidne i stojeće izvedbe', 'Wall & floor-standing models'),
        t('Dual priključci', 'Dual connectors'),
        t('OCPP kompatibilno', 'OCPP compatible'),
      ],
    },
    {
      icon: Zap,
      title: t('DC brzo punjenje', 'DC Fast Charging'),
      power: '20–160 kW',
      image: bfAmppalDc120,
      useCase: t(
        'Za benzinske postaje, restorane i lokacije uz prometnice s kratkim zadržavanjem.',
        'For gas stations, restaurants, and roadside locations with short stops.'
      ),
      features: [
        t('CCS2 + CHAdeMO konektori', 'CCS2 + CHAdeMO connectors'),
        t('Modularni dizajn', 'Modular design'),
        t('Punjenje za 30–60 min', '30–60 min charging'),
      ],
    },
    {
      icon: BatteryCharging,
      title: t('Ultra-brzo punjenje', 'Ultra-Fast Charging'),
      power: '160–360 kW',
      image: dobratehDc320_360kw,
      useCase: t(
        'Za autoceste i punilačke hubove. Vozilo napunjeno za 15 minuta.',
        'For highways and charging hubs. Vehicle charged in 15 minutes.'
      ),
      features: [
        t('CCS2 + GB/T konektori', 'CCS2 + GB/T connectors'),
        t('Modularna arhitektura', 'Modular architecture'),
        t('Veliki zaslon s reklamom', 'Large screen with advertising'),
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Rješenja po mjeri', 'Tailored Solutions')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Ne prodajemo samo punjače — nudimo kompletna rješenja prilagođena vašem poslovnom scenariju.',
              'We don\'t just sell chargers — we offer complete solutions tailored to your business scenario.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <Card key={i} className="group hover:shadow-xl hover:border-primary/30 transition-all overflow-hidden">
              <div className="w-full h-56 bg-gradient-to-br from-secondary to-background flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <sol.icon size={20} className="text-primary" />
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-sm font-semibold rounded">
                    {sol.power}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{sol.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{sol.useCase}</p>
                <ul className="space-y-2">
                  {sol.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              {t('Pogledajte sve modele', 'View All Models')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
