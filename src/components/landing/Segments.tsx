import { Hotel, ShoppingBag, Building2, Fuel } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Segments = () => {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Hotel,
      title: t('Hoteli i turizam', 'Hotels & Tourism'),
      description: t(
        'Gosti s EV vozilima ciljano biraju hotele s punjačima. Ponudite im premium uslugu bez troškova.',
        'Guests with EVs actively seek hotels with chargers. Offer them a premium amenity at no cost.'
      ),
      stat: t('+34% više EV gostiju', '+34% more EV guests'),
    },
    {
      icon: ShoppingBag,
      title: t('Trgovine i retail', 'Retail & Shopping'),
      description: t(
        'Kupci koji pune auto troše u prosjeku 40% više jer ostaju dulje. Vaše parkiralište postaje profit centar.',
        'Customers charging their car spend on average 40% more because they stay longer. Your parking lot becomes a profit center.'
      ),
      stat: t('+40% potrošnja kupaca', '+40% customer spending'),
    },
    {
      icon: Building2,
      title: t('Uredske zgrade', 'Office Buildings'),
      description: t(
        'Privucite kvalitetne stanare i zaposlenike. EV punjenje je novi standard za moderne poslovne prostore.',
        'Attract quality tenants and employees. EV charging is the new standard for modern business spaces.'
      ),
      stat: t('Premium pozicioniranje', 'Premium positioning'),
    },
    {
      icon: Fuel,
      title: t('Benzinske postaje', 'Fuel Stations'),
      description: t(
        'Proširite ponudu uz postojeću infrastrukturu. Pripremite se za budućnost mobilnosti.',
        'Expand your offering alongside existing infrastructure. Prepare for the future of mobility.'
      ),
      stat: t('Budućnost mobilnosti', 'Future of mobility'),
    },
  ];

  return (
    <section id="locations" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Idealne lokacije za partnerstvo', 'Ideal Partner Locations')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Svaka lokacija s parkiralištem može postati punilački centar — i izvor prihoda.',
              'Any location with parking can become a charging hub — and a revenue source.'
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
                    <p className="text-muted-foreground mb-3">{segment.description}</p>
                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {segment.stat}
                    </div>
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
