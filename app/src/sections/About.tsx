import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedButton } from '@/components/AnimatedButton';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Trasformare idee imprenditoriali in progetti di successo attraverso consulenza strategica di eccellenza.',
  },
  {
    icon: Lightbulb,
    title: 'Innovazione',
    description: 'Promuoviamo l\'innovazione come asset fondamentale per mantenere alta la competitività.',
  },
  {
    icon: TrendingUp,
    title: 'Crescita',
    description: 'Supportiamo le aziende nel raggiungimento dei propri obiettivi di crescita sostenibile.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Costruiamo relazioni durature basate sulla fiducia e su risultati concreti.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vueffe-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vueffe-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection delay={0}>
              <span className="inline-block px-4 py-2 bg-vueffe-green/10 text-vueffe-green rounded-full text-sm font-medium mb-6">
                Chi Siamo
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-vueffe-dark mb-6">
                Soluzioni di{' '}
                <span className="relative">
                  <span className="text-gradient-green">Eccellenza</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      d="M2 10C50 2 150 2 198 10"
                      stroke="#9ACD32"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                al Servizio delle Imprese
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trasformiamo idee imprenditoriali in progetti di successo. La nostra esperienza decennale nel settore della consulenza ci permette di offrire soluzioni su misura per affrontare le sfide del mercato con efficacia e innovazione.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                <AnimatedButton variant="primary" showArrow>
                  Chi siamo
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Values Grid */}
          <div ref={ref} className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.2 + index * 0.1} direction="scale">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 bg-vueffe-green/10 rounded-xl flex items-center justify-center mb-4"
                  >
                    <value.icon className="w-7 h-7 text-vueffe-green" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-vueffe-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <AnimatedSection delay={0.6} className="mt-20">
          <div className="bg-vueffe-dark rounded-3xl p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Progetti Completati' },
                { value: '150+', label: 'Clienti Attivi' },
                { value: '25+', label: 'Esperti nel Team' },
                { value: '15+', label: 'Anni di Attività' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold text-vueffe-green mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
