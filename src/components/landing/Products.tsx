import { useState } from 'react';
import { Zap, BatteryCharging, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import charger images
import amppalDc from '@/assets/chargers/amppal-dc.webp';
import amppalAc from '@/assets/chargers/amppal-ac.webp';
import amppalWallboxDc from '@/assets/chargers/amppal-wallbox-dc.webp';
import amppalWallboxAc from '@/assets/chargers/amppal-wallbox-ac.webp';
import strimEcA from '@/assets/chargers/strim-ec-a.webp';
import strimAc from '@/assets/chargers/strim-ac.webp';

type ProductCategory = 'ac' | 'dc';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('dc');
  const { t } = useLanguage();

  const categories = [
    { id: 'dc' as const, label: t('DC Punjači', 'DC Chargers'), icon: Zap },
    { id: 'ac' as const, label: t('AC Punjači', 'AC Chargers'), icon: Plug },
  ];

  const products = {
    dc: [
      {
        name: 'Primelink DC 60-160kW',
        power: '60-160 kW',
        image: amppalDc,
        description: t(
          'Stanica za brzo punjenje s CCS2 i GBT konektorima. Istovremeno punjenje do 2 vozila.',
          'Fast charging station with CCS2 and GBT connectors. Simultaneous charging of up to 2 vehicles.'
        ),
        features: ['CCS2 + GB/T', t('Modularni dizajn', 'Modular design'), t('Touchscreen zaslon', 'Touchscreen display')],
      },
      {
        name: 'Primelink DC 80kW',
        power: '80 kW',
        image: strimEcA,
        description: t(
          'Kompaktna DC stanica za brzo punjenje. Idealna za benzinske postaje i trgovačke centre.',
          'Compact DC fast charging station. Ideal for gas stations and shopping centers.'
        ),
        features: ['CCS2 + CHAdeMO + GB/T', t('Kompaktan dizajn', 'Compact design'), t('Jednostavna instalacija', 'Easy installation')],
      },
      {
        name: 'Primelink Wallbox DC 20-30kW',
        power: '20-30 kW',
        image: amppalWallboxDc,
        description: t(
          'Zidni DC punjač za poslovne objekte i manje flote vozila.',
          'Wall-mounted DC charger for business premises and smaller vehicle fleets.'
        ),
        features: [t('Zidna montaža', 'Wall mounted'), 'CCS2 + GB/T', t('Tihi rad', 'Silent operation')],
      },
    ],
    ac: [
      {
        name: 'Primelink AC 44kW',
        power: '44 kW',
        image: amppalAc,
        description: t(
          'Dvostruka AC stanica za punjenje. Savršena za parkirališta i javne lokacije.',
          'Dual AC charging station. Perfect for parking lots and public locations.'
        ),
        features: [t('Dual priključak', 'Dual connector'), 'Type 2', t('OCPP protokol', 'OCPP protocol')],
      },
      {
        name: 'Primelink Wallbox AC 7kW',
        power: '7 kW',
        image: amppalWallboxAc,
        description: t(
          'Kompaktni zidni punjač idealan za kućnu upotrebu i garaže.',
          'Compact wall charger ideal for home use and garages.'
        ),
        features: [t('Zidna montaža', 'Wall mounted'), t('WiFi povezivost', 'WiFi connectivity'), t('RFID autorizacija', 'RFID authorization')],
      },
      {
        name: 'Primelink AC 7-22kW Hub',
        power: '7-22 kW',
        image: strimAc,
        description: t(
          'Stanica za parkinge i poslovne objekte. Više priključaka za istovremeno punjenje.',
          'Station for parking garages and business premises. Multiple connectors for simultaneous charging.'
        ),
        features: [t('Višestruki priključci', 'Multiple connectors'), t('Pametno upravljanje', 'Smart management'), t('Dinamičko balansiranje', 'Dynamic load balancing')],
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
              'Nudimo samo pouzdanu opremu koju koristimo na vlastitim lokacijama. Stanice za punjenje za osobnu i komercijalnu upotrebu snage od 7 do 160 kW.',
              'We offer only reliable equipment that we use at our own locations. Charging stations for personal and commercial use with power from 7 to 160 kW.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[activeCategory].map((product, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/30 transition-all overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-secondary to-background flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-semibold rounded">
                    {product.power}
                  </span>
                </div>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4">{product.description}</CardDescription>
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
