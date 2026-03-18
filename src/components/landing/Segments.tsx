import { Hotel, ShoppingBag, Truck, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Segments = () => {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Hotel,
      title: t('Hoteli i turizam', 'Hotels & Tourism'),
      description: t(
        'Privucite goste s EV vozilima i povećajte prihod lokacije. Gosti punjenje percipiraju kao premium uslugu.',
        'Attract EV-driving guests and increase venue revenue. Guests perceive charging as a premium amenity.'
      ),
      benefits: [
        t('Privlačite premium goste', 'Attract premium guests'),
        t('Dodatni izvor prihoda', 'Additional revenue stream'),
        t('ESG i zeleni imidž', 'ESG & green branding'),
      ],
    },
    {
      icon: ShoppingBag,
      title: t('Trgovine i retail', 'Retail & Shopping'),
      description: t(
        'Dulje zadržavanje kupaca i veća potrošnja. EV punjenje pretvara parkiralište u profit centar.',
        'Longer customer dwell time and higher spending. EV charging turns your parking lot into a profit center.'
      ),
      benefits: [
        t('Veća potrošnja kupaca', 'Higher customer spending'),
        t('Konkurentska prednost', 'Competitive advantage'),
        t('Monetizacija parkirališta', 'Parking lot monetization'),
      ],
    },
    {
      icon: Truck,
      title: t('Flote i logistika', 'Fleets & Logistics'),
      description: t(
        'Smanjite troškove goriva i održavanja voznog parka prelaskom na električnu mobilnost.',
        'Reduce fuel and maintenance costs by transitioning your fleet to electric mobility.'
      ),
      benefits: [
        t('Do 70% niži troškovi goriva', 'Up to 70% lower fuel costs'),
        t('Manji troškovi održavanja', 'Lower maintenance costs'),
        t('Smart fleet management', 'Smart fleet management'),
      ],
    },
    {
      icon: Building2,
      title: t('Gradovi i općine', 'Cities & Municipalities'),
      description: t(
        'Izgradite javnu punilačku mrežu i pozicionirajte svoju zajednicu kao lidera u zelenoj mobilnosti.',
        'Build a public charging network and position your community as a green mobility leader.'
      ),
      benefits: [
        t('EU sufinanciranje', 'EU co-funding eligible'),
        t('Zelena tranzicija', 'Green transition'),
        t('Privlačenje investicija', 'Investment attraction'),
      ],
    },
  ];

  return (
    <section id="segments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Kome je ovo namijenjeno?', 'Who Is This For?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'EV punjenje nije trošak — to je investicija. Pronađite svoje rješenje.',
              'EV charging isn\'t a cost — it\'s an investment. Find your solution.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((segment, i) => (
            <Card key={i} className="group hover:shadow-lg hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <segment.icon size={28} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{segment.title}</h3>
                    <p className="text-muted-foreground mb-4">{segment.description}</p>
                    <ul className="space-y-2">
                      {segment.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
