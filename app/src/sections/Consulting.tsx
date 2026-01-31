import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedButton } from '@/components/AnimatedButton';

const services = [
  'Ricerca e sviluppo',
  'Miglioramento ed ampliamento aziendale',
  'Internazionalizzazione e promozione in mercati comunitari ed extra UE',
  'Management della sostenibilità',
  'Riduzione dell\'impronta ecologica',
  'Uso razionale delle risorse',
];

export function Consulting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vueffe-green/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/consulting_sartoriale.jpg"
                  alt="Consulenza Sartoriale"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vueffe-dark/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-vueffe-green rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-vueffe-dark">98%</p>
                    <p className="text-sm text-gray-500">Clienti Soddisfatti</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "La Vueffe Consulting ha trasformato la nostra visione in realtà"
                </p>
              </motion.div>

              {/* Decorative Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -left-8 w-24 h-24 border-4 border-vueffe-green/30 rounded-full"
              />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div ref={ref}>
            <AnimatedSection delay={0}>
              <span className="inline-block px-4 py-2 bg-vueffe-green/10 text-vueffe-green rounded-full text-sm font-medium mb-6">
                Consulenza Personalizzata
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-vueffe-dark mb-6">
                Una Consulenza{' '}
                <span className="relative">
                  <span className="text-gradient-green">Sartoriale</span>
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
                per la Crescita della Tua Impresa
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Garantiamo soluzioni su misura per affrontare le sfide del mercato con efficacia e innovazione. Esaminare le opportunità offerte dal mercato non è sufficiente; per questo condividiamo il nostro know-how con attività di coaching personalizzate, indispensabili per guidare un'azienda verso il successo.
              </p>
            </AnimatedSection>

            {/* Services List */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-6 h-6 bg-vueffe-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-vueffe-green transition-colors"
                    >
                      <Check className="w-4 h-4 text-vueffe-green group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-vueffe-dark transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <AnimatedButton variant="primary" size="lg" showArrow>
                Scopri i servizi
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
