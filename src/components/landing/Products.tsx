import { useState } from 'react';
import { Zap, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import charger images from BatteryFly
import amppalDc from '@/assets/chargers/amppal-dc.webp';
import amppalAc from '@/assets/chargers/amppal-ac.webp';
import amppalWallboxDc from '@/assets/chargers/amppal-wallbox-dc.webp';
import amppalWallboxAc from '@/assets/chargers/amppal-wallbox-ac.webp';

// Import charger images from Dobrateh
import dobratehAc7kw from '@/assets/chargers/dobrateh-ac-7kw-wall.jpg';
import dobratehAcXvision from '@/assets/chargers/dobrateh-ac-xvision.png';
import dobratehAc22_44kw from '@/assets/chargers/dobrateh-ac-22-44kw.png';
import dobratehAc14kwFloor from '@/assets/chargers/dobrateh-ac-14kw-floor.png';
import dobratehDc20_40kw from '@/assets/chargers/dobrateh-dc-20-40kw-wall.jpeg';
import dobratehDc60_160kw from '@/assets/chargers/dobrateh-dc-60-160kw.png';
import dobratehDc320_360kw from '@/assets/chargers/dobrateh-dc-320-360kw.png';
import dobratehDcBigscreen from '@/assets/chargers/dobrateh-dc-bigscreen.jpg';

type ProductCategory = 'dc' | 'ac';

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
        name: 'Primelink DC 320-360kW',
        power: '320-360 kW',
        image: dobratehDc320_360kw,
        description: t(
          'Ultra-brza stanica za punjenje nove generacije. Idealna za autoceste i prometna čvorišta.',
          'Ultra-fast next-generation charging station. Ideal for highways and traffic hubs.'
        ),
        features: ['CCS2 + GB/T', t('Modularna arhitektura', 'Modular architecture'), t('Punjenje za 15 min', '15 min charging')],
      },
      {
        name: 'Primelink DC 60-160kW',
        power: '60-160 kW',
        image: dobratehDc60_160kw,
        description: t(
          'Integrirani DC punjač s CCS2 i GBT konektorima. Istovremeno punjenje do 2 vozila.',
          'Integrated DC charger with CCS2 and GBT connectors. Simultaneous charging of up to 2 vehicles.'
        ),
        features: ['CCS2 + GB/T', t('Veliki zaslon', 'Large display'), t('Dinamička raspodjela', 'Dynamic power sharing')],
      },
      {
        name: 'Primelink DC 60-160kW Pro',
        power: '60-160 kW',
        image: dobratehDcBigscreen,
        description: t(
          'Premium DC stanica s velikim zaslonom. Savršena za benzinske postaje i trgovačke centre.',
          'Premium DC station with large screen. Perfect for gas stations and shopping centers.'
        ),
        features: [t('15" zaslon osjetljiv na dodir', '15" touchscreen'), 'CCS2 + CHAdeMO + GB/T', t('Hlađenje tekućinom', 'Liquid cooling')],
      },
      {
        name: 'Primelink DC 60-160kW Classic',
        power: '60-160 kW',
        image: amppalDc,
        description: t(
          'Klasični DC punjač za sve tipove električnih vozila.',
          'Classic DC charger for all types of electric vehicles.'
        ),
        features: ['CCS2 + GB/T', t('Modularni dizajn', 'Modular design'), t('OCPP 1.6J/2.0', 'OCPP 1.6J/2.0')],
      },
      {
        name: 'Primelink Wallbox DC 20-40kW',
        power: '20-40 kW',
        image: dobratehDc20_40kw,
        description: t(
          'Kompaktni zidni DC punjač za poslovne objekte i manje flote.',
          'Compact wall-mounted DC charger for business premises and smaller fleets.'
        ),
        features: [t('Zidna montaža', 'Wall mounted'), 'CCS2 + GB/T', t('Tihi rad', 'Silent operation')],
      },
      {
        name: 'Primelink Wallbox DC 20-30kW',
        power: '20-30 kW',
        image: amppalWallboxDc,
        description: t(
          'Ekonomični zidni DC punjač za garaže i parkirališta.',
          'Economical wall-mounted DC charger for garages and parking lots.'
        ),
        features: [t('Kompaktan dizajn', 'Compact design'), 'CCS2', t('Jednostavna instalacija', 'Easy installation')],
      },
    ],
    ac: [
      {
        name: 'Primelink AC 22-44kW',
        power: '22-44 kW',
        image: dobratehAc22_44kw,
        description: t(
          'Dvostruki AC punjač za javne lokacije i poslovne parkinge.',
          'Dual AC charger for public locations and business parking lots.'
        ),
        features: [t('Dual priključak', 'Dual connector'), 'Type 2', t('OCPP protokol', 'OCPP protocol')],
      },
      {
        name: 'Primelink AC 44kW Floor',
        power: '44 kW',
        image: amppalAc,
        description: t(
          'Stojeća AC stanica za punjenje. Savršena za parkirališta i javne lokacije.',
          'Floor-standing AC charging station. Perfect for parking lots and public locations.'
        ),
        features: [t('Dual priključak', 'Dual connector'), 'Type 2', t('LED indikator', 'LED indicator')],
      },
      {
        name: 'Primelink AC 14kW Floor',
        power: '14 kW',
        image: dobratehAc14kwFloor,
        description: t(
          'Elegantna stojeća AC stanica s dvostrukim priključkom.',
          'Elegant floor-standing AC station with dual connector.'
        ),
        features: [t('Kompaktan dizajn', 'Compact design'), 'Type 2', t('Robusna konstrukcija', 'Robust construction')],
      },
      {
        name: 'Primelink AC 7-22kW X-Vision',
        power: '7-22 kW',
        image: dobratehAcXvision,
        description: t(
          'Premium zidni punjač s futurističkim dizajnom i RGB osvjetljenjem.',
          'Premium wall charger with futuristic design and RGB lighting.'
        ),
        features: ['Type 2', t('RGB osvjetljenje', 'RGB lighting'), t('WiFi + Bluetooth', 'WiFi + Bluetooth')],
      },
      {
        name: 'Primelink Wallbox AC 7kW',
        power: '7 kW',
        image: dobratehAc7kw,
        description: t(
          'Kompaktni zidni punjač idealan za kućnu upotrebu i garaže.',
          'Compact wall charger ideal for home use and garages.'
        ),
        features: [t('Zidna montaža', 'Wall mounted'), t('WiFi povezivost', 'WiFi connectivity'), t('RFID autorizacija', 'RFID authorization')],
      },
      {
        name: 'Primelink Wallbox AC 7kW Mini',
        power: '7 kW',
        image: amppalWallboxAc,
        description: t(
          'Najmanji zidni punjač za ograničene prostore.',
          'Smallest wall charger for limited spaces.'
        ),
        features: [t('Ultra kompaktan', 'Ultra compact'), 'Type 2', t('Plug & Play', 'Plug & Play')],
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
              'Nudimo samo pouzdanu opremu koju koristimo na vlastitim lokacijama. Stanice za punjenje za osobnu i komercijalnu upotrebu snage od 7 do 360 kW.',
              'We offer only reliable equipment that we use at our own locations. Charging stations for personal and commercial use with power from 7 to 360 kW.'
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
                <div className="w-full h-64 bg-gradient-to-br from-secondary to-background flex items-center justify-center p-4 overflow-hidden">
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
