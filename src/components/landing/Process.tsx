import { ClipboardCheck, Search, Wrench, Banknote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardCheck,
      step: '01',
      title: t('Prijavite lokaciju', 'Submit Location'),
      description: t(
        'Ispunite kratki obrazac s podacima o vašoj lokaciji.',
        'Fill out a short form with your location details.'
      ),
    },
    {
      icon: Search,
      step: '02',
      title: t('Mi procjenjujemo potencijal', 'We Assess Potential'),
      description: t(
        'Analiziramo promet, pristupačnost i zaradu — besplatno.',
        'We analyze traffic, accessibility and earnings — for free.'
      ),
    },
    {
      icon: Wrench,
      step: '03',
      title: t('Instaliramo punionicu (0€ za vas)', 'We Install Chargers (€0 for you)'),
      description: t(
        'Kompletna instalacija na naš trošak. Vi ne plaćate ništa.',
        'Complete installation at our cost. You pay nothing.'
      ),
    },
    {
      icon: Banknote,
      step: '04',
      title: t('Vi zarađujete mjesečno', 'You Earn Monthly'),
      description: t(
        'Primajte pasivan prihod svaki mjesec — bez rizika i brige.',
        'Receive passive income every month — no risk, no hassle.'
      ),
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Kako funkcionira?', 'How Does It Work?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              '4 jednostavna koraka do zarade — bez ikakvog ulaganja s vaše strane.',
              '4 simple steps to revenue — with zero investment on your part.'
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
                <step.icon size={32} className="text-background" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2 h-14 px-8" asChild>
            <a href="#contact">
              {t('Provjerite svoju lokaciju', 'Check Your Location')}
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
