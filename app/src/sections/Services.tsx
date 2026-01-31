import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PiggyBank, 
  Network, 
  Zap, 
  GraduationCap, 
  FlaskConical, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const services = [
  {
    id: 'finanza',
    icon: PiggyBank,
    title: 'Finanza agevolata',
    description: 'Accesso a bandi, contributi e finanziamenti pubblici per la tua azienda.',
    features: ['Bandi regionali', 'Fondi europei', 'Agevolazioni fiscali'],
    stats: { projects: '120+', funded: '€25M' },
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'lobbying',
    icon: Network,
    title: 'Lobbying & Networking',
    description: 'Rappresentanza istituzionale e partnership strategiche.',
    features: ['Relazioni istituzionali', 'Advocacy', 'Partnership'],
    stats: { projects: '85+', funded: '€18M' },
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'efficienza',
    icon: Zap,
    title: 'Efficienza energetica',
    description: 'Audit energetici e transizione verso fonti rinnovabili.',
    features: ['Audit energetici', 'Fonti rinnovabili', 'Certificazioni'],
    stats: { projects: '200+', funded: '€32M' },
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'formazione',
    icon: GraduationCap,
    title: 'Formazione',
    description: 'Workshop, seminari e coaching per il tuo team.',
    features: ['Workshop', 'Seminari', 'Coaching'],
    stats: { projects: '150+', funded: '€8M' },
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'ricerca',
    icon: FlaskConical,
    title: 'R&D',
    description: 'Ricerca e sviluppo per brevetti e innovazione.',
    features: ['Brevetti', 'Prototipazione', 'Test di mercato'],
    stats: { projects: '45+', funded: '€15M' },
    color: 'from-rose-500 to-pink-500',
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-lacc-purple/10 text-lacc-purple rounded-full text-sm font-medium mb-4">
              Servizi
            </span>
            <h2 className="text-3xl font-bold text-lacc-dark">
              Soluzioni per la tua <span className="text-gradient-purple">impresa</span>
            </h2>
          </div>
          <a 
            href="#prenota" 
            className="inline-flex items-center gap-2 text-lacc-purple hover:underline"
          >
            Prenota una consulenza
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-app-lg transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-lacc-dark mb-2 group-hover:text-lacc-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-lg font-bold text-lacc-dark">{service.stats.projects}</p>
                  <p className="text-xs text-gray-500">Progetti</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-lacc-purple">{service.stats.funded}</p>
                  <p className="text-xs text-gray-500">Finanziati</p>
                </div>
              </div>

              {/* Hover Action */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: hoveredService === service.id ? 1 : 0, x: hoveredService === service.id ? 0 : 10 }}
                className="absolute top-6 right-6"
              >
                <div className="w-8 h-8 bg-lacc-purple rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
