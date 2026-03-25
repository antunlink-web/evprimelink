import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('Tko plaća električnu energiju?', 'Who pays for electricity?'),
      a: t(
        'VoltApp upravlja naplatom i pokriva troškove iz prihoda od punjenja. Vi ne plaćate ništa dodatno.',
        'VoltApp manages billing and covers costs from charging revenue. You pay nothing extra.'
      ),
    },
    {
      q: t('Koliko traje instalacija?', 'How long does installation take?'),
      a: t(
        '4–8 tjedana ovisno o lokaciji i potrebnim prilagodama električne infrastrukture.',
        '4–8 weeks depending on the location and required electrical infrastructure adjustments.'
      ),
    },
    {
      q: t('Postoji li rizik za mene?', 'Is there any risk for me?'),
      a: t(
        'Ne — nema ulaganja s vaše strane. Mi snosimo sve troškove instalacije, održavanja i upravljanja.',
        'No — there is zero investment on your part. We bear all costs of installation, maintenance and management.'
      ),
    },
    {
      q: t('Trebam li se baviti korisnicima?', 'Do I need to deal with users?'),
      a: t(
        'Ne — mi upravljamo cijelim sustavom uključujući korisničku podršku, naplatu i održavanje.',
        'No — we manage the entire system including customer support, billing and maintenance.'
      ),
    },
    {
      q: t('Koliko dugo traje ugovor?', 'How long is the contract?'),
      a: t(
        'Standardni ugovor je na 5 godina s mogućnošću produljenja. Fleksibilni uvjeti za veće lokacije.',
        'Standard contract is 5 years with renewal options. Flexible terms for larger locations.'
      ),
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Česta pitanja', 'Frequently Asked Questions')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Odgovori na najčešća pitanja naših partnera u Hrvatskoj.',
              'Answers to the most common questions from our partners in Croatia.'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
