import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Filter,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Distretto del Suino Nero',
    client: 'Consorzio Suino Nero',
    status: 'in-progress',
    progress: 75,
    budget: '€2.5M',
    category: 'Agroalimentare',
    image: '/assets/blog_suino.jpg',
  },
  {
    id: 2,
    name: 'Contratto di Filiera Fio.Re',
    client: 'Federazione Italiana',
    status: 'completed',
    progress: 100,
    budget: '€4.2M',
    category: 'Agroalimentare',
    image: '/assets/blog_contratto.jpg',
  },
  {
    id: 3,
    name: 'Efficienza Energetica Industriale',
    client: 'Industria Tecno',
    status: 'in-progress',
    progress: 45,
    budget: '€850K',
    category: 'Energia',
    image: '/assets/hero_bg.jpg',
  },
  {
    id: 4,
    name: 'Internazionalizzazione Startup',
    client: 'TechInnovation',
    status: 'completed',
    progress: 100,
    budget: '€1.2M',
    category: 'Innovazione',
    image: '/assets/consulting_sartoriale.jpg',
  },
  {
    id: 5,
    name: 'Formazione Management',
    client: 'Gruppo Agro',
    status: 'in-progress',
    progress: 60,
    budget: '€320K',
    category: 'Formazione',
    image: '/assets/blog_team.jpg',
  },
  {
    id: 6,
    name: 'Brevetto Tecnologico',
    client: 'R&D Solutions',
    status: 'in-progress',
    progress: 30,
    budget: '€1.8M',
    category: 'R&D',
    image: '/assets/blog_contratto.jpg',
  },
];

const filters = ['Tutti', 'In corso', 'Completati', 'Agroalimentare', 'Energia', 'Innovazione'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tutti');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'Tutti') return true;
    if (activeFilter === 'In corso') return project.status === 'in-progress';
    if (activeFilter === 'Completati') return project.status === 'completed';
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-lacc-purple/10 text-lacc-purple rounded-full text-sm font-medium mb-4">
              Progetti
            </span>
            <h2 className="text-3xl font-bold text-lacc-dark">
              I nostri <span className="text-gradient-purple">successi</span>
            </h2>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              {activeFilter}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-app-lg border border-gray-100 overflow-hidden z-10"
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setShowFilters(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                      activeFilter === filter ? 'bg-lacc-purple/10 text-lacc-purple' : 'text-gray-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-app-lg transition-all cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lacc-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    project.status === 'completed'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-500 text-white'
                  }`}>
                    {project.status === 'completed' ? 'Completato' : 'In corso'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{project.name}</p>
                  <p className="text-gray-300 text-sm">{project.client}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="font-semibold text-lacc-dark">{project.budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Categoria</p>
                    <p className="font-medium text-lacc-purple">{project.category}</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-500">Progresso</span>
                    <span className="font-medium text-lacc-dark">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className={`h-full rounded-full ${
                        project.status === 'completed' ? 'bg-emerald-500' : 'bg-lacc-purple'
                      }`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {project.status === 'completed' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Completato</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>In corso</span>
                      </>
                    )}
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-lacc-purple group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Progetti Totali', value: '500+', icon: TrendingUp },
            { label: 'Completati', value: '380+', icon: CheckCircle2 },
            { label: 'In Corso', value: '120+', icon: Clock },
            { label: 'Budget Gestito', value: '€98M+', icon: TrendingUp },
          ].map((stat) => (
            <div key={stat.label} className="bg-lacc-dark rounded-2xl p-5 text-white">
              <stat.icon className="w-5 h-5 text-lacc-purple mb-3" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
