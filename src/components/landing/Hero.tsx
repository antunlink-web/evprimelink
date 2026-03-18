import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              {t('Bez ulaganja • Bez rizika • Samo zarada', 'No Investment • No Risk • Just Revenue')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6">
            {t('Zarađujte od', 'Earn From')}
            <br />
            <span className="text-accent">
              {t('EV punjenja', 'EV Charging')}
            </span>
            <br />
            <span className="text-primary-foreground/90">
              {t('bez investicije', 'Without Investment')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl leading-relaxed">
            {t(
              'Mi instaliramo, upravljamo i održavamo punionice na vašoj lokaciji. Vi dobivate dodatni prihod i više posjetitelja — bez ikakvog troška.',
              'We install, manage, and maintain chargers at your location. You get extra income and more visitors — at zero cost to you.'
            )}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" variant="secondary" className="gap-2 text-base h-13 px-8" asChild>
              <a href="#contact">
                {t('Postanite partner', 'Become a Partner')}
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base h-13 px-8 border-primary-foreground/25 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20" asChild>
              <a href="#contact">
                <MapPin size={18} />
                {t('Prijavite lokaciju', 'Submit Your Location')}
              </a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/15">
            {[
              { value: '0 €', label: t('Vaša investicija', 'Your Investment') },
              { value: '150+', label: t('Aktivnih lokacija', 'Active Locations') },
              { value: '24/7', label: t('Upravljanje i podrška', 'Management & Support') },
              { value: '99.5%', label: t('Uptime punionica', 'Charger Uptime') },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
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
