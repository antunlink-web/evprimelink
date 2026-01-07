import { Zap, Plug, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('Brzo i praktično punjenje', 'Fast and Convenient Charging'),
    },
    {
      icon: Plug,
      title: t('Ugradnja punionica ključ u ruke', 'Turnkey Charging Station Installation'),
    },
    {
      icon: Briefcase,
      title: t('Poslovni portal za vaš vozni park', 'Business Portal for Your Fleet'),
    },
  ];

  return (
    <section className="py-8 -mt-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg leading-tight">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
