import { useState } from 'react';
import { Send, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const WEB3FORMS_ACCESS_KEY = '4987abd8-8745-47a4-a916-13348be49533';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        toast({
          title: t('Prijava poslana!', 'Submission Sent!'),
          description: t(
            'Hvala! Javit ćemo vam se u roku 24 sata s besplatnom evaluacijom.',
            'Thank you! We\'ll get back to you within 24 hours with a free evaluation.'
          ),
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('Greška', 'Error'),
        description: t(
          'Došlo je do greške. Pokušajte ponovno ili nas kontaktirajte direktno.',
          'An error occurred. Please try again or contact us directly.'
        ),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('Telefon', 'Phone'),
      value: '+385 91 512 2888',
      href: 'tel:+385915122888',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@voltapp.hr',
      href: 'mailto:info@voltapp.hr',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="gradient-hero rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Saznajte koliko možete zaraditi', 'Find Out How Much You Can Earn')}
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto mb-6 text-lg">
            {t(
              'Prijavite svoju lokaciju i dobijte besplatnu procjenu zarade — bez ikakve obveze.',
              'Submit your location and get a free earnings estimate — with no obligation.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm">
              <ArrowRight size={14} /> {t('Odgovor u 24h', 'Response in 24h')}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm">
              <ArrowRight size={14} /> {t('Bez obveze', 'No obligation')}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm">
              <ArrowRight size={14} /> {t('Besplatno', 'Free')}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {t('Provjerite svoju lokaciju', 'Check Your Location')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('Ime i prezime', 'Full Name')} *</Label>
                  <Input id="name" name="name" required placeholder={t('Vaše ime', 'Your name')} maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="email@primjer.hr" maxLength={255} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('Telefon', 'Phone')}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+385 XX XXX XXXX" maxLength={20} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t('Tvrtka / Lokacija', 'Company / Location')}</Label>
                  <Input id="company" name="company" placeholder={t('Naziv', 'Name')} maxLength={100} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location_type">{t('Tip lokacije', 'Location Type')}</Label>
                <Input id="location_type" name="location_type" placeholder={t('Hotel, trgovina, ured...', 'Hotel, retail, office...')} maxLength={100} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('Poruka (opcionalno)', 'Message (optional)')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder={t('Dodatne informacije o lokaciji...', 'Additional information about the location...')}
                  maxLength={2000}
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  t('Šaljem...', 'Sending...')
                ) : (
                  <>
                    <Send size={18} />
                    {t('Zatražite procjenu zarade', 'Request Earnings Estimate')}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {t('Ili nas kontaktirajte direktno', 'Or Contact Us Directly')}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium text-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Local trust */}
            <div className="mt-10 p-6 bg-card rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-3">
                {t('Aktivni u gradovima:', 'Active in cities:')}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Zagreb', 'Split', 'Rijeka'].map((city) => (
                  <span key={city} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
