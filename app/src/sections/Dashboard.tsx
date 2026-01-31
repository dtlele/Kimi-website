import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  Award,
  ArrowUpRight,
  Calendar,
  Phone,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const stats = [
  { label: 'Progetti Completati', value: '500+', change: '+12%', icon: Briefcase },
  { label: 'Clienti Soddisfatti', value: '150+', change: '+8%', icon: Users },
  { label: 'Esperti nel Team', value: '25+', change: '+15%', icon: Award },
  { label: 'Anni di Esperienza', value: '15+', change: 'Steady', icon: TrendingUp },
];

const quickActions = [
  { 
    label: 'Prenota Consulenza', 
    description: 'Schedule a meeting with our experts',
    icon: Calendar, 
    href: '#prenota',
    color: 'bg-lacc-purple',
    primary: true
  },
  { 
    label: 'Chiama Ora', 
    description: '+39 080 35 13 564',
    icon: Phone, 
    href: 'tel:+390803513564',
    color: 'bg-emerald-500',
    primary: false
  },
  { 
    label: 'Scrivici', 
    description: 'info@lacc.agency',
    icon: MessageSquare, 
    href: 'mailto:info@lacc.agency',
    color: 'bg-blue-500',
    primary: false
  },
];

const recentProjects = [
  { name: 'Distretto Suino Nero', status: 'In corso', progress: 75 },
  { name: 'Contratto Fio.Re', status: 'Completato', progress: 100 },
  { name: 'Efficienza Energetica', status: 'In corso', progress: 45 },
];

export function Dashboard() {
  return (
    <section id="dashboard" className="min-h-screen pt-24 pb-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-lacc-dark mb-2">
            Benvenuto su <span className="text-gradient-purple">LACC.Agency</span>
          </h1>
          <p className="text-gray-500">
            La tua piattaforma di consulenza aziendale integrata
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 shadow-app hover:shadow-app-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-lacc-purple/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-lacc-purple" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-lacc-dark">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-6 shadow-app">
              <h2 className="text-lg font-semibold text-lacc-dark mb-4">Azioni Rapide</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <motion.a
                    key={action.label}
                    href={action.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden rounded-xl p-5 transition-all ${
                      action.primary 
                        ? 'bg-lacc-dark text-white' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className={`font-semibold mb-1 ${action.primary ? 'text-white' : 'text-lacc-dark'}`}>
                      {action.label}
                    </p>
                    <p className={`text-sm ${action.primary ? 'text-gray-300' : 'text-gray-500'}`}>
                      {action.description}
                    </p>
                    <ArrowUpRight className={`absolute top-4 right-4 w-4 h-4 ${
                      action.primary ? 'text-white/50' : 'text-gray-400'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-app mt-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-lacc-dark">Progetti Recenti</h2>
                <a href="#projects" className="text-sm text-lacc-purple hover:underline flex items-center gap-1">
                  Vedi tutti
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-lacc-dark">{project.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status === 'Completato' 
                            ? 'bg-emerald-100 text-emerald-600' 
                            : 'bg-amber-100 text-amber-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="w-24">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                          className="h-full bg-lacc-purple rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-lacc-dark to-gray-900 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4">Hai bisogno di aiuto?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Il nostro team è disponibile per supportarti in ogni fase del tuo progetto.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+390803513564" 
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+39 080 35 13 564</span>
                </a>
                <a 
                  href="mailto:info@lacc.agency" 
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">info@lacc.agency</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-app">
              <h3 className="font-semibold text-lacc-dark mb-4">Orari di Apertura</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lunedì - Venerdì</span>
                  <span className="text-lacc-dark font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sabato</span>
                  <span className="text-lacc-dark font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Domenica</span>
                  <span className="text-gray-400">Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
