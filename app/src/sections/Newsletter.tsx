import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-vueffe-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-vueffe-green/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vueffe-green/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-vueffe-green/50 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-20%', '20%'],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <AnimatedSection>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-flex items-center justify-center w-16 h-16 bg-vueffe-green/20 rounded-2xl mb-6"
            >
              <Sparkles className="w-8 h-8 text-vueffe-green" />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Iscriviti alla Newsletter e{' '}
              <span className="text-gradient-green">Resta Aggiornato!</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Ricevi periodicamente aggiornamenti su bandi, finanziamenti, eventi e novità dal mondo della consulenza aziendale.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Inserisci la tua email"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-vueffe-green focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto px-8 py-4 bg-vueffe-green hover:bg-vueffe-green-light text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <>
                          Iscriviti
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Cliccando sul pulsante ISCRIVITI accetti di ricevere informazioni su Vueffe Consulting. 
                  <a href="#privacy" className="underline hover:text-vueffe-green transition-colors ml-1">
                    Privacy Policy
                  </a>
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-vueffe-green/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-16 h-16 bg-vueffe-green rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Iscrizione Completata!</h3>
                <p className="text-gray-400">
                  Grazie per esserti iscritto. Riceverai presto i nostri aggiornamenti.
                </p>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
