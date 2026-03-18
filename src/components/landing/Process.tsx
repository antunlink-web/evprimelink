import { ClipboardCheck, Wrench, MonitorSmartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardCheck,
      step: '01',
      title: t('Konzultacija', 'Consultation'),
      description: t(
        'Analiziramo vašu lokaciju, promet i potrebe te predlažemo optimalno rješenje.',
        'We analyze your location, traffic, and needs to propose the optimal solution.'
      ),
    },
    {
      icon: Wrench,
      step: '02',
      title: t('Instalacija', 'Installation'),
      description: t(
        'Naš tim obavlja kompletnu instalaciju — od elektro priključka do puštanja u rad.',
        'Our team handles the complete installation — from electrical connection to commissioning.'
      ),
    },
    {
      icon: MonitorSmartphone,
      step: '03',
      title: t('Aktivacija platforme', 'Platform Activation'),
      description: t(
        'Povezujemo punionicu s našom platformom — mobilna app, dashboard, naplata.',
        'We connect the charger to our platform — mobile app, dashboard, billing.'
      ),
    },
    {
      icon: TrendingUp,
      step: '04',
      title: t('Zarađujete', 'You Earn'),
      description: t(
        'Punionica počinje zarađivati. Mi brinemo o održavanju i podršci 24/7.',
        'The charger starts earning. We handle maintenance and 24/7 support.'
      ),
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Kako funkcionira?', 'How Does It Work?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Od prvog kontakta do zarade — u 4 jednostavna koraka.',
              'From first contact to revenue — in 4 simple steps.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border z-0" />
              )}
              <div className="relative z-10 mb-4 mx-auto w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <step.icon size={32} className="text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-accent mb-2">{step.step}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
