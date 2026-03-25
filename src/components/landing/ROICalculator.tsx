import { useState, useMemo } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';

const ROICalculator = () => {
  const { t } = useLanguage();
  const [parkingSpots, setParkingSpots] = useState(2);
  const [locationType, setLocationType] = useState('hotel');
  const [city, setCity] = useState('zagreb');

  const locationTypes = [
    { value: 'hotel', label: t('Hotel', 'Hotel') },
    { value: 'retail', label: t('Trgovina / Retail', 'Retail / Shopping') },
    { value: 'office', label: t('Ured', 'Office') },
    { value: 'gas_station', label: t('Benzinska postaja', 'Gas Station') },
  ];

  const cities = [
    { value: 'zagreb', label: 'Zagreb' },
    { value: 'split', label: 'Split' },
    { value: 'other', label: t('Ostalo', 'Other') },
  ];

  const earnings = useMemo(() => {
    const basePerSpot: Record<string, number> = {
      hotel: 280,
      retail: 220,
      office: 180,
      gas_station: 320,
    };
    const cityMultiplier: Record<string, number> = {
      zagreb: 1.2,
      split: 1.1,
      other: 0.9,
    };
    const base = (basePerSpot[locationType] || 250) * (cityMultiplier[city] || 1);
    const monthly = Math.round(base * parkingSpots);
    const yearly = monthly * 12;
    const sharePercent = parkingSpots >= 5 ? 25 : parkingSpots >= 3 ? 20 : 15;

    return { monthly, yearly, sharePercent };
  }, [parkingSpots, locationType, city]);

  return (
    <section id="calculator" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Koliko možete zaraditi?', 'How Much Can You Earn?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Izračunajte potencijalnu zaradu na vašoj lokaciji u Hrvatskoj.',
              'Calculate your potential earnings at your location in Croatia.'
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Calculator size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t('Vaši podaci', 'Your Details')}
              </h3>
            </div>

            <div className="space-y-8">
              {/* Parking spots */}
              <div>
                <Label className="text-foreground mb-3 block">
                  {t('Broj parking mjesta za punjače', 'Number of charging spots')}
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[parkingSpots]}
                    onValueChange={(v) => setParkingSpots(v[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary w-8 text-right">{parkingSpots}</span>
                </div>
              </div>

              {/* Location type */}
              <div>
                <Label className="text-foreground mb-3 block">
                  {t('Tip lokacije', 'Location Type')}
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {locationTypes.map((lt) => (
                    <button
                      key={lt.value}
                      onClick={() => setLocationType(lt.value)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        locationType === lt.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {lt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* City */}
              <div>
                <Label className="text-foreground mb-3 block">
                  {t('Grad', 'City')}
                </Label>
                <div className="flex gap-2">
                  {cities.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setCity(c.value)}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        city === c.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-8">
                {t('Procjena zarade', 'Earnings Estimate')}
              </h3>

              <div className="space-y-6">
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <div className="text-sm text-foreground/60 mb-1">{t('Mjesečna zarada', 'Monthly Earnings')}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary">€{earnings.monthly}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <div className="text-xs text-foreground/50 mb-1">{t('Godišnja zarada', 'Yearly Earnings')}</div>
                    <div className="text-2xl font-bold text-foreground">€{earnings.yearly.toLocaleString()}</div>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <div className="text-xs text-foreground/50 mb-1">{t('Vaš udio', 'Your Share')}</div>
                    <div className="text-2xl font-bold text-primary">{earnings.sharePercent}%</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center italic">
                {t(
                  '* Ovo je procjena temeljena na stvarnim podacima iz Hrvatske',
                  '* This is an estimate based on real data from Croatia'
                )}
              </p>
            </div>

            <Button size="lg" className="w-full gap-2 mt-8 h-14" asChild>
              <a href="#contact">
                {t('Zatražite točnu procjenu', 'Request Exact Estimate')}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
