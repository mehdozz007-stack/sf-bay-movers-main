import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a move cost?",
    answer: "Our pricing depends on several factors including distance, volume of items, services needed, and timing. We offer competitive flat rates and transparent pricing. Contact us for a free, customized quote with no hidden fees.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes! S&F Moving is fully licensed by the State of California and carries comprehensive insurance coverage up to $1M. All our team members are background-checked and professionally trained.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 2-4 weeks in advance, especially during peak moving season (May-September). However, we often accommodate last-minute moves based on availability. Contact us to check our schedule.",
  },
  {
    question: "Do you provide packing services?",
    answer: "Yes! We offer full packing services including materials, or you can pack yourself and we'll handle the loading and transport. We also offer partial packing assistance for fragile or valuable items.",
  },
  {
    question: "What's included in your moving services?",
    answer: "Our standard service includes professional movers, truck rental, basic equipment (dollies, straps, blankets), loading, transport, and unloading. Packing materials and services are available for an additional fee.",
  },
  {
    question: "Do you move on weekends and holidays?",
    answer: "Yes, we operate 7 days a week from 7:00 AM to 8:00 PM, including most holidays. Weekend moves are popular, so book early to secure your preferred time slot.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve a wide coverage area within an 800-mile radius of Oakland, covering all of California, Nevada, parts of Oregon, and Arizona. From San Diego to Sacramento, Los Angeles to Las Vegas - we've got you covered!",
  },
  {
    question: "What if something gets damaged during the move?",
    answer: "While we take extreme care with all items, our insurance covers any accidental damage. We document the condition of items before moving and work quickly to resolve any claims.",
  },
  {
    question: "Can you move large or specialty items?",
    answer: "Absolutely! We specialize in heavy lifting including pianos, safes, pool tables, gym equipment, and large furniture. Our team has the equipment and expertise for specialty moves.",
  },
  {
    question: "Do I need to be present during the move?",
    answer: "We recommend being present at both locations, but it's not required. You can designate a representative or provide detailed instructions. We'll keep you updated throughout the process.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers. If you don't see what you're looking for, give us a call.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-gold/20 rounded-lg px-6 hover:border-gold/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:+15107037904"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-heading font-semibold transition-colors"
          >
            Call us at +1 (510) 703-7904
          </a>
        </div>
      </div>
    </section>
  );
};
