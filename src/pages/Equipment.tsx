import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, BatteryCharging, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { acChargers } from '@/data/acChargers';
import { dcChargers } from '@/data/dcChargers';
import type { Charger } from '@/data/acChargers';

const ChargerCard = ({ charger }: { charger: Charger }) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

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
        <p className="text-xs text-muted-foreground line-clamp-2">
          {charger.description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? t('Sakrij specifikacije', 'Hide specifications')
            : t('Prikaži specifikacije', 'View specifications')}
          {expanded ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </Button>
        {expanded && (
          <div className="mt-3 border-t border-border/50 pt-3 space-y-1.5">
            {charger.specs.map((spec, i) => (
              <div key={i} className="flex justify-between gap-2 text-xs">
                <span className="text-muted-foreground shrink-0">{spec.label}</span>
                <span className="text-foreground text-right font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
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
