import { Banknote, Users, Leaf, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Banknote,
      title: t('Dodatni prihod', 'Extra Income'),
      description: t('Fiksna renta ili udio u prihodu', 'Fixed rent or revenue share'),
    },
    {
      icon: Users,
      title: t('Više posjetitelja', 'More Visitors'),
      description: t('EV vozači biraju lokacije s punjačima', 'EV drivers choose locations with chargers'),
    },
    {
      icon: Leaf,
      title: t('Zeleni imidž', 'Green Positioning'),
      description: t('ESG ciljevi i održivi branding', 'ESG goals & sustainable branding'),
    },
    {
      icon: Clock,
      title: t('Dulje zadržavanje', 'Longer Stay'),
      description: t('Kupci ostaju dok se auto puni', 'Customers stay while their car charges'),
    },
  ];

  return (
    <section className="py-8 -mt-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-6 md:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-tight mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
