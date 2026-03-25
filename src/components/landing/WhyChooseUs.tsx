import { Shield, Award, Headphones, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Zap,
      title: t('Certificirani punjači', 'Certified Chargers'),
      description: t(
        'Koristimo samo premium opremu s CE, TÜV i ISO certifikatima.',
        'We use only premium equipment with CE, TÜV, and ISO certifications.'
      ),
    },
    {
      icon: Award,
      title: t('22+ godina iskustva', '22+ Years Experience'),
      description: t(
        'Naši partneri imaju preko dva desetljeća iskustva u energetici i EV industriji.',
        'Our partners have over two decades of experience in energy and the EV industry.'
      ),
    },
    {
      icon: Shield,
      title: t('Potpuna odgovornost', 'Full Responsibility'),
      description: t(
        'Mi snosimo sve troškove instalacije, održavanja i popravaka.',
        'We bear all costs of installation, maintenance, and repairs.'
      ),
    },
    {
      icon: Headphones,
      title: t('24/7 podrška', '24/7 Support'),
      description: t(
        'Naš tim je dostupan non-stop za partnere i korisnike punionica.',
        'Our team is available around the clock for partners and charger users.'
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('Zašto VoltAPP?', 'Why VoltAPP?')}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {t(
                'Nismo samo dobavljač opreme. Mi smo operator koji preuzima potpunu odgovornost za vašu punilačku infrastrukturu.',
                'We\'re not just an equipment supplier. We\'re an operator that takes full responsibility for your charging infrastructure.'
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

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-5 rounded-xl bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">{t('Aktivnih lokacija', 'Active Locations')}</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-accent/10">
                  <div className="text-3xl font-bold text-accent mb-1">99.5%</div>
                  <div className="text-sm text-muted-foreground">{t('Uptime', 'Uptime')}</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-accent/10">
                  <div className="text-3xl font-bold text-accent mb-1">0 €</div>
                  <div className="text-sm text-muted-foreground">{t('Trošak za partnera', 'Cost for Partner')}</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">{t('Podrška', 'Support')}</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
