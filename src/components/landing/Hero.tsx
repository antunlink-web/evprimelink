import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium">
                {t('Pouzdana EV infrastruktura', 'Reliable EV Infrastructure')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Primelink
              <span className="block text-accent">
                Get the Power
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              {t(
                'AC i DC punjači za tvrtke, javnu infrastrukturu i dom.',
                'AC and DC chargers for business, public infrastructure, and home.'
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#products" className="gap-2">
                  {t('Pogledaj proizvode', 'View Products')}
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-foreground bg-primary-foreground hover:bg-primary-foreground/90" asChild>
                <a href="#contact">
                  {t('Kontaktirajte nas', 'Contact Us')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold text-accent">22+</div>
                <div className="text-sm text-primary-foreground/70">
                  {t('Godina međunarodnog iskustva', 'Years of International Experience')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">
                  {t('Suradnika', 'Partners')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-primary-foreground/70">
                  {t('Patenata', 'Patents')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - EV Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Battery/EV Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 rounded-3xl bg-gradient-to-b from-primary-foreground/20 to-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/20 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-20 h-8 rounded-full bg-accent/30" />
                  <div className="flex-1 w-full rounded-2xl bg-gradient-to-t from-accent via-accent/60 to-transparent relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-accent animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap size={48} className="text-primary-foreground drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="text-primary-foreground font-bold text-lg">100%</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
                <Zap size={24} className="text-accent" />
              </div>
              <div className="absolute bottom-20 left-0 w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
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
