import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import evCar from '@/assets/ev-car-hero.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Decorative Circles - like batteryfly.by */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-[20%] w-48 h-48 bg-primary-foreground/20 rounded-full" />
        <div className="absolute top-32 right-[10%] w-64 h-64 bg-primary-foreground/15 rounded-full" />
        <div className="absolute top-20 right-[5%] w-32 h-32 bg-primary-foreground/25 rounded-full" />
        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="40%" y1="0" x2="100%" y2="60%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="40%" x2="60%" y2="100%" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 italic">
              Primelink - <span className="text-accent">Get the Power</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-lg leading-relaxed">
              {t(
                'Mreža punionica s vlastitom platformom i servisom.',
                'Charging station network with its own platform and service.'
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
                  {t('Godina iskustva', 'Years of Experience')}
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

          {/* Right Content - EV Car Image */}
          <div className="relative hidden lg:flex items-end justify-end -mr-20 xl:-mr-32">
            <img 
              src={evCar} 
              alt="Electric Vehicle" 
              className="w-full max-w-3xl object-contain drop-shadow-2xl mix-blend-multiply"
            />
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
