import { ClipboardCheck, Wrench, MonitorSmartphone, Banknote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardCheck,
      step: '01',
      title: t('Prijavite lokaciju', 'Submit Location'),
      description: t(
        'Ispunite kratki obrazac. Mi evaluiramo vašu lokaciju i predlažemo optimalan broj punjača — besplatno.',
        'Fill out a short form. We evaluate your location and propose the optimal number of chargers — for free.'
      ),
    },
    {
      icon: Wrench,
      step: '02',
      title: t('Instalacija na naš trošak', 'We Install at Our Cost'),
      description: t(
        'Naš tim obavlja kompletnu instalaciju — od elektro priključka do puštanja u rad. Vi ne plaćate ništa.',
        'Our team handles the complete installation — from electrical connection to commissioning. You pay nothing.'
      ),
    },
    {
      icon: MonitorSmartphone,
      step: '03',
      title: t('Mi upravljamo svime', 'We Manage Everything'),
      description: t(
        'Održavanje, naplata, korisnička podrška, ažuriranje softvera — sve je na nama.',
        'Maintenance, billing, customer support, software updates — it\'s all on us.'
      ),
    },
    {
      icon: Banknote,
      step: '04',
      title: t('Vi zarađujete', 'You Earn'),
      description: t(
        'Primajte mjesečnu rentu ili udio u prihodu. Bez rizika, bez brige.',
        'Receive monthly rent or revenue share. No risk, no hassle.'
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
              '4 koraka do zarade — bez ikakvog ulaganja s vaše strane.',
              '4 steps to revenue — with zero investment on your part.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border z-0" />
              )}
              <div className="relative z-10 mb-4 mx-auto w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <step.icon size={32} className="text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* No cost emphasis */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-2xl font-bold text-primary">0 €</span>
            <span className="text-foreground font-medium">
              {t('ulaganja s vaše strane', 'investment on your part')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
