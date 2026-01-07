import { useState } from 'react';
import { Zap, BatteryCharging, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type ProductCategory = 'ac' | 'dc' | 'portable';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('ac');
  const { t } = useLanguage();

  const categories = [
    { id: 'ac' as const, label: t('AC Punjači', 'AC Chargers'), icon: Plug },
    { id: 'dc' as const, label: t('DC Punjači', 'DC Chargers'), icon: Zap },
    { id: 'portable' as const, label: t('Prijenosni', 'Portable'), icon: BatteryCharging },
  ];

  const products = {
    ac: [
      {
        name: 'Primelink AC 7kW',
        power: '7 kW',
        description: t(
          'Idealan za kućnu upotrebu. Kompaktan dizajn, jednostavna instalacija.',
          'Ideal for home use. Compact design, easy installation.'
        ),
        features: [t('Zidna montaža', 'Wall mounted'), t('WiFi povezivost', 'WiFi connectivity'), t('RFID autorizacija', 'RFID authorization')],
      },
      {
        name: 'Primelink AC 11kW',
        power: '11 kW',
        description: t(
          'Napredni punjač za dom i manje tvrtke. Brže punjenje s trofaznim priključkom.',
          'Advanced charger for home and small businesses. Faster charging with three-phase connection.'
        ),
        features: [t('Trofazni', 'Three-phase'), t('Pametno upravljanje', 'Smart management'), t('Dinamičko balansiranje', 'Dynamic load balancing')],
      },
      {
        name: 'Primelink AC 22kW',
        power: '22 kW',
        description: t(
          'Profesionalno rješenje za tvrtke i javne lokacije.',
          'Professional solution for businesses and public locations.'
        ),
        features: [t('Dual priključak', 'Dual connector'), t('OCPP protokol', 'OCPP protocol'), t('Plaćanje karticama', 'Card payment')],
      },
    ],
    dc: [
      {
        name: 'Primelink DC 30kW',
        power: '30 kW',
        description: t(
          'Kompaktni DC punjač za manje lokacije i flote vozila.',
          'Compact DC charger for smaller locations and vehicle fleets.'
        ),
        features: ['CCS2 + CHAdeMO', t('Kompaktan dizajn', 'Compact design'), t('Tihi rad', 'Silent operation')],
      },
      {
        name: 'Primelink DC 60kW',
        power: '60 kW',
        description: t(
          'Srednja snaga za trgovačke centre i odmorišta.',
          'Medium power for shopping centers and rest areas.'
        ),
        features: [t('Dual izlaz', 'Dual output'), t('Dinamička raspodjela', 'Dynamic power sharing'), t('Touchscreen', 'Touchscreen')],
      },
      {
        name: 'Primelink DC 120kW',
        power: '120 kW',
        description: t(
          'Brzo punjenje za autoceste i velike prometnice.',
          'Fast charging for highways and major roads.'
        ),
        features: [t('Ultra brzo punjenje', 'Ultra-fast charging'), t('Hlađenje tekućinom', 'Liquid cooling'), t('15" zaslon', '15" display')],
      },
      {
        name: 'Primelink DC 360kW',
        power: '360 kW',
        description: t(
          'Najsnažniji punjač za maksimalnu brzinu punjenja.',
          'Most powerful charger for maximum charging speed.'
        ),
        features: [t('Punjenje u 15 min', '15 min charging'), t('Modularna arhitektura', 'Modular architecture'), t('99% učinkovitost', '99% efficiency')],
      },
    ],
    portable: [
      {
        name: 'Primelink Mobile 3.6kW',
        power: '3.6 kW',
        description: t(
          'Prijenosni punjač za punjenje bilo gdje s običnom utičnicom.',
          'Portable charger for charging anywhere with a standard outlet.'
        ),
        features: [t('Plug & Play', 'Plug & Play'), t('LED indikator', 'LED indicator'), t('Zaštita od preopterećenja', 'Overload protection')],
      },
      {
        name: 'Primelink Mobile 7.4kW',
        power: '7.4 kW',
        description: t(
          'Snažniji prijenosni punjač za brže punjenje na putu.',
          'More powerful portable charger for faster on-the-go charging.'
        ),
        features: [t('CEE priključak', 'CEE connector'), t('Torba za nošenje', 'Carrying bag'), t('IP65 zaštita', 'IP65 protection')],
      },
    ],
  };

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Naši proizvodi', 'Our Products')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Širok asortiman punjača za sve potrebe - od kućnog punjenja do javne infrastrukture brzog punjenja.',
              'Wide range of chargers for all needs - from home charging to public fast charging infrastructure.'
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="gap-2"
            >
              <category.icon size={18} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products[activeCategory].map((product, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <div className="text-center">
                    <Zap size={48} className="text-primary mx-auto mb-2" />
                    <span className="text-2xl font-bold text-primary">{product.power}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
