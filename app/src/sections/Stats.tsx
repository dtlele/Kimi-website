import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Aziende Supportate' },
  { value: '€50M+', label: 'Finanziati' },
  { value: '15+', label: 'Anni di Esperienza' },
  { value: '98%', label: 'Clienti Soddisfatti' },
];

export function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Blue Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            I Nostri <span className="text-blue-400">Successi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-400/50 transition duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-slate-400 text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider Line Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}