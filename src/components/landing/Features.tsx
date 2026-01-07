import { Zap, Wrench, Building2, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('Brzo punjenje', 'Fast Charging'),
      description: t(
        'DC punjači do 360kW za minimalno vrijeme punjenja',
        'DC chargers up to 360kW for minimal charging time'
      ),
    },
    {
      icon: Wrench,
      title: t('Ključ u ruke', 'Turnkey Solutions'),
      description: t(
        'Kompletna instalacija i održavanje uključeno',
        'Complete installation and maintenance included'
      ),
    },
    {
      icon: Building2,
      title: t('Poslovna rješenja', 'Business Solutions'),
      description: t(
        'Prilagođena rješenja za tvrtke i javnu infrastrukturu',
        'Customized solutions for businesses and public infrastructure'
      ),
    },
    {
      icon: Clock,
      title: t('24/7 Podrška', '24/7 Support'),
      description: t(
        'Tehnička podrška dostupna non-stop',
        'Technical support available around the clock'
      ),
    },
  ];

  return (
    <section className="py-8 -mt-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
