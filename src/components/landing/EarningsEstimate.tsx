import { useState } from 'react';
import { ArrowRight, Star, Hotel, ShoppingBag, Building2, Fuel, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const locationTypes = [
  { value: 'hotel', icon: Hotel, label: 'Hotel' },
  { value: 'retail', icon: ShoppingBag, label: 'Trgovina / Retail' },
  { value: 'office', icon: Building2, label: 'Ured / Office' },
  { value: 'gas', icon: Fuel, label: 'Benzinska / Gas Station' },
] as const;

type LocationType = typeof locationTypes[number]['value'];

const tierHighlights: Record<LocationType, number> = {
  office: 0,
  retail: 1,
  hotel: 2,
  gas: 2,
};

const EarningsEstimate = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<LocationType | null>(null);

  const tiers = [
    {
      title: t('Manje prometne lokacije', 'Lower-Traffic Locations'),
      range: '100€ – 300€',
      period: t('/ mjesečno', '/ month'),
      examples: t('Manji uredi, stambene zgrade', 'Small offices, residential buildings'),
    },
    {
      title: t('Standardne lokacije', 'Standard Locations'),
      range: '300€ – 800€',
      period: t('/ mjesečno', '/ month'),
      examples: t('Trgovački centri, veći uredi', 'Shopping centers, larger offices'),
    },
    {
      title: t('Premium lokacije', 'Premium Locations'),
      range: '800€ – 1.500€+',
      period: t('/ mjesečno', '/ month'),
      examples: t('Hoteli, retail, benzinske postaje', 'Hotels, retail, gas stations'),
      premium: true,
    },
  ];

  const highlightIndex = selected !== null ? tierHighlights[selected] : null;

  return (
    <section id="calculator" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Koliki prihod možete očekivati?', 'What Revenue Can You Expect?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Temeljeno na europskim prosjecima i projekcijama za Hrvatsku.',
              'Based on European averages and projections for Croatia.'
            )}
          </p>
        </div>

        {/* Location selector */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-foreground/70 font-medium mb-4">
            {t('Vaša lokacija je:', 'Your location is:')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {locationTypes.map((lt) => (
              <button
                key={lt.value}
                onClick={() => setSelected(selected === lt.value ? null : lt.value)}
                className={`flex flex-col items-center gap-2 px-4 py-4 rounded-xl text-sm font-medium transition-all ${
                  selected === lt.value
                    ? 'bg-primary text-primary-foreground shadow-lg scale-[1.03]'
                    : 'bg-card border border-border text-foreground hover:border-primary/40'
                }`}
              >
                <lt.icon size={22} />
                {lt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Earning tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {tiers.map((tier, i) => {
            const isHighlighted = highlightIndex === i;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 text-center transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-card border-2 border-primary shadow-xl scale-[1.03]'
                    : 'bg-card border border-border shadow-md'
                } ${tier.premium && !isHighlighted ? 'border-primary/20' : ''}`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    {t('Preporučeno', 'Recommended')}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-4">{tier.title}</h3>
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${isHighlighted ? 'text-primary' : 'text-foreground'}`}>
                  {tier.range}
                </div>
                <div className="text-sm text-muted-foreground mb-4">{tier.period}</div>
                <p className="text-xs text-muted-foreground">{tier.examples}</p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto mb-20">
          {t(
            '* Procjene se temelje na iskustvu s drugih EU tržišta. Stvarni rezultati ovise o lokaciji i prometu.',
            '* Estimates are based on experience from other EU markets. Actual results depend on location and traffic.'
          )}
        </p>

        {/* Early partner positioning block */}
        <div className="gradient-hero rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Sparkles size={24} className="text-primary/40" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t(
              'Postanite među prvim VoltApp partnerima u Hrvatskoj',
              'Be Among the First VoltApp Partners in Croatia'
            )}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              {
                emoji: '🏁',
                text: t('Ograničen broj lokacija', 'Limited number of locations'),
              },
              {
                emoji: '⚡',
                text: t('Prioritet za rane partnere', 'Priority for early partners'),
              },
              {
                emoji: '🤝',
                text: t('Najbolji uvjeti suradnje', 'Best partnership terms'),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-foreground/80 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="gap-2 h-14 px-10 text-base" asChild>
            <a href="#contact">
              {t('Zatražite procjenu za svoju lokaciju', 'Request an Estimate for Your Location')}
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EarningsEstimate;
