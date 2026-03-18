import { Banknote, PieChart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const RevenueModels = () => {
  const { t } = useLanguage();

  const models = [
    {
      icon: Banknote,
      title: t('Fiksna renta', 'Fixed Rent'),
      description: t(
        'Primajte fiksni mjesečni iznos za svaki punjač na vašoj lokaciji. Garantirani prihod neovisno o korištenju.',
        'Receive a fixed monthly amount for each charger at your location. Guaranteed income regardless of usage.'
      ),
      highlight: t('Garantirani prihod', 'Guaranteed Income'),
      example: t('od 50€/mj po punjaču', 'from €50/mo per charger'),
    },
    {
      icon: PieChart,
      title: t('Udio u prihodu', 'Revenue Share'),
      description: t(
        'Dijelite prihod od punjenja s nama. Što je lokacija prometnija, to više zarađujete.',
        'Share the charging revenue with us. The busier your location, the more you earn.'
      ),
      highlight: t('Veći potencijal zarade', 'Higher Earning Potential'),
      example: t('do 30% prihoda od punjenja', 'up to 30% of charging revenue'),
    },
  ];

  return (
    <section id="revenue" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Kako zarađujete?', 'How Do You Earn?')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Odaberite model koji vam odgovara. Mi se brinemo o svemu ostalom.',
              'Choose the model that suits you. We take care of everything else.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {models.map((model, i) => (
            <Card key={i} className="hover:shadow-xl hover:border-primary/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <model.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6">{model.description}</p>
                <div className="p-4 rounded-xl bg-accent/10 mb-4">
                  <div className="text-sm font-bold text-accent mb-1">{model.highlight}</div>
                  <div className="text-lg font-bold text-foreground">{model.example}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              {t('Saznajte koliko možete zaraditi', 'Find Out How Much You Can Earn')}
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RevenueModels;
