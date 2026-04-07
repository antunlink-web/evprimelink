import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

const acChargers = [
  {
    name: 'Wall-Mounted/Floor-Standed AC Charging Station (New style) 7kW',
    power: '7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6984bbfdfb204d0a245e75d1_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(24).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/wall-mounted-floor-standed-ac-charging-station-new-style-7kw',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: 'Wall-Mounted AC Plug&Charge/RFID Box 7kW',
    power: '7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/697518bcc2e76f1573c0b720_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(10).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/wall-mounted-ac-plug-charge-rfid-box-7kw',
    type: 'Wall-Mounted',
  },
  {
    name: 'Wall-Mounted AC Charging Box 3.5 / 7kW',
    power: '3.5–7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/69751884bdb9cfdbd3958c78_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(9).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/wall-mounted-ac-charging-box-3-5-7kw',
    type: 'Wall-Mounted',
  },
  {
    name: 'Integrated AC Charging Station 14kW',
    power: '14 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6975074564ed71543795ec9d_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(12).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/integrated-ac-charging-station-14kw',
    type: 'Integrated',
  },
  {
    name: 'Wall-Mounted / Floor-Standed AC Charging Station 7/11/22kW (Plastic)',
    power: '7–22 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974ea56f9d53d42fdc00ca9_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(8).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-7kw-11kw-22kw-wall-mounted-ac-charging-station-plastic-type',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: '7kW Wall-Mounted / Floor-Standed AC Charging Station OCPP (New style)',
    power: '7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974dd65ea30868aee453fcc_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(6).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-7kw-stenska-polnilna-postaja-ac-posodobljeno',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: 'Wall-Mounted AC Charging Box 7kW',
    power: '7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974b69a60a435dfd91c6cdd_68e82909b2dc558984d5b4f9_7u0a8080-kaobei-scaled.jpeg',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-3-5kw-7kw-wall-mounted-ac-charging-station-67565',
    type: 'Wall-Mounted',
  },
  {
    name: 'Integrated AC Charging Station 22 / 44kW',
    power: '22–44 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6975074564ed71543795ec9d_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(12).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-14kw-ac-charger-station',
    type: 'Integrated',
  },
  {
    name: 'Integrated AC Charging Station 14kW (Socket)',
    power: '14 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974f5a131883777dbd253e7_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(11).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-14kw-integrated-ac-charging-station-socket-type',
    type: 'Integrated',
  },
  {
    name: 'Wall-Mounted/Floor-Standed AC Charging Station 3.5/7/11kW',
    power: '3.5–11 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6977811f503e642c8e4462cd_My%20ev%20charger%20app%20supported%20(1).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-7kw-floor-standed-ac-charging-station-hjghj1',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: 'Integrated AC Charging Station 22/44kW (Socket)',
    power: '22–44 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974f5a131883777dbd253e7_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(11).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-22-44kw-integrated-ac-charging-station',
    type: 'Integrated',
  },
  {
    name: 'Wall-Mounted / Floor-Standed AC Charging Station 11/22kW (Steel box)',
    power: '11–22 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974ee3746685eba29b14101_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(9).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-11-22kw-floor-standed-ac-charging-station-metal-type',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: '7kW Wall-Mounted / Floor-Standed AC Charging Station OCPP',
    power: '7 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974d05ae6f7b5a73cae710b_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(4).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-7kw-floor-standed-ac-charging-station-5d689',
    type: 'Wall-Mounted / Floor',
  },
  {
    name: 'Wall-Mounted / Floor-Standed AC Charging Station 7/14kW OCPP (Steel box)',
    power: '7–14 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6974e40993e4bb20968067dd_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(7).png',
    link: 'https://www.dobrateh.eu/products-ac-dobratehs-floor-mounted/dobrateh-7kw-floor-standed-ac-charging-station',
    type: 'Wall-Mounted / Floor',
  },
];

const dcChargers = [
  {
    name: 'Integrated DC Charging Station 180–240 kW',
    power: '180–240 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6976344bfabc6a218042e093_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(20).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/integrated-dc-charging-station-180-240-kw',
    type: 'Integrated',
  },
  {
    name: 'Electric Vehicle DC Charging Station 20/30/40kW',
    power: '20–40 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6976248a6ee88f4dce5b9420_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(16).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-20-30-40kw-wall-mounted-dc-charging-station-7b36a3',
    type: 'Wall-Mounted',
  },
  {
    name: 'Integrated DC Charging Station 30 / 40 kW',
    power: '30–40 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/697629ce599c7cf450c43625_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(17).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-30-40kw-integrated-dc-charging-station-23',
    type: 'Integrated',
  },
  {
    name: 'Integrated DC Charging Station 320–360 kW',
    power: '320–360 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/69763b7de05ee9209b3188d0_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(21).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-60-80-120-180kw-integrated-dc-charging-station-be5f03',
    type: 'Integrated',
  },
  {
    name: 'Integrated DC Charging Station 60/80/120/160 kW (Big Screen)',
    power: '60–160 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/69762e4c56bf8eeeb41d2b40_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(18).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-60-80-120-180kw-integrated-dc-charging-station3',
    type: 'Integrated',
  },
  {
    name: 'Integrated DC Charging Station 60–160 kW',
    power: '60–160 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/6976344bfabc6a218042e093_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(20).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-60-80-120-160kw-integrated-dc-charging-stationn-d688a53',
    type: 'Integrated',
  },
  {
    name: 'AMPPAL 240 kW – 1440 kW Charging System (Air / Liquid Cooling)',
    power: '240–1440 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/69763f5c6c590f96c7276c43_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(22).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-240kw-1440kw-charging-team-efb563',
    type: 'System',
  },
  {
    name: 'Integrated AC/DC Charging Station 142 kW',
    power: '142 kW',
    image: 'https://cdn.prod.website-files.com/68dec8f4ced650667c85058a/697631e2d50cc16bbb0e5e49_%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%20(19).png',
    link: 'https://www.dobrateh.eu/products-dc-amppal-floor/amppal-142kw-integratedac-dc-charging-stationr-2dfd53',
    type: 'Integrated',
  },
];

type Charger = typeof acChargers[0];

const ChargerCard = ({ charger }: { charger: Charger }) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-secondary/30 flex items-center justify-center p-4">
        <img
          src={charger.image}
          alt={charger.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="border-primary/40 text-primary text-xs">
            <Zap className="w-3 h-3 mr-1" />
            {charger.power}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {charger.type}
          </Badge>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {charger.name}
        </h3>
        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
          <a href={charger.link} target="_blank" rel="noopener noreferrer">
            {t('Saznaj više', 'Learn more')}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const EquipmentContent = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <BatteryCharging className="w-3.5 h-3.5 mr-1.5" />
              {t('Naša oprema', 'Our Equipment')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('Punionice za električna vozila', 'EV Charging Stations')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t(
                'Širok izbor AC i DC punionica za svaku potrebu — od kućnog punjenja do ultra-brzih stanica.',
                'Wide range of AC and DC chargers for every need — from home charging to ultra-fast stations.'
              )}
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="ac" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-secondary/50 h-12 p-1">
                <TabsTrigger value="ac" className="px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  AC {t('Punionice', 'Chargers')} ({acChargers.length})
                </TabsTrigger>
                <TabsTrigger value="dc" className="px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  DC {t('Punionice', 'Chargers')} ({dcChargers.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ac">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {acChargers.map((charger, i) => (
                  <ChargerCard key={i} charger={charger} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dc">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dcChargers.map((charger, i) => (
                  <ChargerCard key={i} charger={charger} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t('Trebate pomoć pri odabiru?', 'Need help choosing?')}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t(
                  'Naš tim će vam pomoći odabrati idealnu punionicu za vašu lokaciju.',
                  'Our team will help you choose the ideal charger for your location.'
                )}
              </p>
              <Button asChild size="lg">
                <Link to="/#contact">
                  {t('Kontaktirajte nas', 'Contact Us')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Equipment = () => (
  <LanguageProvider>
    <EquipmentContent />
  </LanguageProvider>
);

export default Equipment;
