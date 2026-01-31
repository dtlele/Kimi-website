import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedButton } from '@/components/AnimatedButton';

const faqs = [
  {
    question: 'Quali settori supportate?',
    answer: 'Supportiamo principalmente il settore agricolo e agroindustriale, ma la nostra esperienza si estende anche ad altri settori produttivi. Offriamo consulenza specializzata per aziende che operano nella trasformazione dei prodotti agricoli, nell\'innovazione tecnologica e nella sostenibilità ambientale.',
  },
  {
    question: 'Aiutate anche le startup?',
    answer: 'Assolutamente sì! Le startup rappresentano per noi un\'opportunità di crescita congiunta. Offriamo pacchetti dedicati alle nuove imprese, con focus su business plan, ricerca di finanziamenti, networking e supporto nella fase di avvio e consolidamento.',
  },
  {
    question: 'Come posso accedere ai finanziamenti agevolati?',
    answer: 'Il nostro team ti guiderà passo dopo passo nell\'identificazione delle opportunità di finanziamento più adatte alla tua azienda. Ci occupiamo di tutta la documentazione necessaria, dalla presentazione delle domande al follow-up con gli enti erogatori, assicurando il massimo supporto in ogni fase.',
  },
  {
    question: 'Offrite supporto anche dopo l\'implementazione dei progetti?',
    answer: 'Sì, il nostro impegno non si conclude con l\'approvazione del progetto. Continuiamo a supportare le aziende durante tutta la fase di implementazione, con monitoraggio, reporting e assistenza continua per garantire il raggiungimento degli obiettivi prefissati.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vueffe-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-vueffe-green/10 text-vueffe-green rounded-full text-sm font-medium mb-6">
                FAQ
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-vueffe-dark mb-6">
                Domande{' '}
                <span className="text-gradient-green">Frequenti</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-600 mb-8">
                Hai delle domande? Qui trovi le risposte alle richieste più comuni, per aiutarti a capire meglio i nostri servizi e come possiamo supportare il tuo business.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <AnimatedButton variant="primary" showArrow>
                Contattaci
              </AnimatedButton>
            </AnimatedSection>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <motion.div
                  initial={false}
                  className={`bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300 ${
                    openIndex === index ? 'shadow-card-hover ring-2 ring-vueffe-green/20' : ''
                  }`}
                >
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                    whileHover={{ backgroundColor: 'rgba(154, 205, 50, 0.02)' }}
                  >
                    <span className="font-semibold text-vueffe-dark pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === index ? 'bg-vueffe-green text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5">
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="text-gray-600 leading-relaxed"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
