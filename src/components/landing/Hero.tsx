import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroEvCar from '@/assets/hero-ev-car.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                {t('Bez ulaganja • Bez rizika • Samo zarada', 'No Investment • No Risk • Just Revenue')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-6">
              {t(
                'Zarađujte do 500€+ mjesečno po lokaciji uz EV punionice',
                'Earn up to €500+/month per location with EV chargers'
              )}
              <span className="block text-primary mt-2">
                {t('— bez ulaganja', '— zero investment')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed">
              {t(
                'Postavljamo, održavamo i upravljamo punionicom na vašoj lokaciji. Vi dobivate pasivan prihod — bez rizika.',
                'We install, maintain and manage chargers at your location. You get passive income — zero risk.'
              )}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2 text-base h-14 px-8" asChild>
                <a href="#contact">
                  {t('Provjerite svoju lokaciju (besplatno)', 'Check Your Location (free)')}
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-14 px-8 border-foreground/25 text-foreground hover:bg-foreground/10" asChild>
                <a href="#process">
                  <Play size={18} />
                  {t('Pogledajte kako funkcionira', 'See How It Works')}
                </a>
              </Button>
            </div>

            {/* Earnings highlight badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '300–800€', label: t('mjesečno (prosjek)', '/month (average)') },
                { value: '1.000€+', label: t('top lokacije', 'top locations') },
                { value: '0€', label: t('ulaganja', 'investment') },
                { value: '24/7', label: t('upravljanje', 'management') },
              ].map((stat, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-foreground/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - EV Car (reduced dominance) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <img
              src={heroEvCar}
              alt="Electric Vehicle"
              className="w-full max-w-md drop-shadow-2xl opacity-80"
            />
            <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-75 -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
