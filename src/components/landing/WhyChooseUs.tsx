import { Shield, Award, Users, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Shield,
      title: t('3 godine garancije', '3 Year Warranty'),
      description: t(
        'Svi naši proizvodi dolaze s trogodišnjom garancijom i besplatnim servisom.',
        'All our products come with a three-year warranty and free service.'
      ),
    },
    {
      icon: Award,
      title: t('Certificirana kvaliteta', 'Certified Quality'),
      description: t(
        'ISO 9001, ISO 14001, TÜV i CE certifikati jamče najvišu kvalitetu.',
        'ISO 9001, ISO 14001, TÜV and CE certificates guarantee the highest quality.'
      ),
    },
    {
      icon: Users,
      title: t('Stručni tim', 'Expert Team'),
      description: t(
        'Više od 80 R&D stručnjaka kontinuirano razvija nove tehnologije.',
        'More than 80 R&D experts continuously develop new technologies.'
      ),
    },
    {
      icon: Headphones,
      title: t('24/7 Tehnička podrška', '24/7 Technical Support'),
      description: t(
        'Naš tim za podršku dostupan je non-stop za sve vaše upite.',
        'Our support team is available around the clock for all your inquiries.'
      ),
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('Zašto odabrati Primelink?', 'Why Choose Primelink?')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                'S više od 22 godine iskustva u industriji, Primelink je vaš pouzdani partner za sva rješenja punjenja električnih vozila. Nudimo kompletne usluge od konzultacija do instalacije i održavanja.',
                'With more than 22 years of industry experience, Primelink is your trusted partner for all electric vehicle charging solutions. We offer complete services from consultations to installation and maintenance.'
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-primary/5">
                  <div className="text-4xl font-bold text-primary mb-2">22+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Godina iskustva', 'Years of Experience')}
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-accent/10">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Zaposlenika', 'Employees')}
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-accent/10">
                  <div className="text-4xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Patenata', 'Patents')}
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary/5">
                  <div className="text-4xl font-bold text-primary mb-2">80+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('R&D stručnjaka', 'R&D Experts')}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
