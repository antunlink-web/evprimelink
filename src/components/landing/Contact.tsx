import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
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
          title: t('Poruka poslana!', 'Message Sent!'),
          description: t(
            'Hvala na upitu. Javit ćemo vam se uskoro.',
            'Thank you for your inquiry. We will get back to you soon.'
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
      value: 'primelink@primelink.hr',
      href: 'mailto:primelink@primelink.hr',
    },
    {
      icon: MapPin,
      label: t('Adresa', 'Address'),
      value: 'Tarska 26a, 10040 Zagreb, Hrvatska',
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Kontaktirajte nas', 'Contact Us')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Imate pitanja o našim proizvodima ili trebate prilagođeno rješenje? Javite nam se!',
              'Have questions about our products or need a customized solution? Get in touch!'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label htmlFor="company">{t('Tvrtka', 'Company')}</Label>
                  <Input id="company" name="company" placeholder={t('Naziv tvrtke', 'Company name')} maxLength={100} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('Poruka', 'Message')} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t('Opišite svoj upit...', 'Describe your inquiry...')}
                  maxLength={2000}
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  t('Šaljem...', 'Sending...')
                ) : (
                  <>
                    <Send size={18} />
                    {t('Pošalji poruku', 'Send Message')}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-primary-foreground" />
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

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                <span className="text-sm">{t('Karta lokacije', 'Location Map')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
