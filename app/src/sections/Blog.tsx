import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AnimatedButton } from '@/components/AnimatedButton';

const articles = [
  {
    id: 1,
    title: 'Incontro pubblico per la costituzione del Distretto del Suino Nero Pugliese',
    excerpt: 'Si è tenuto l\'importante incontro pubblico per la costituzione del Distretto del Suino Nero Pugliese, un passo significativo per la valorizzazione del territorio.',
    image: '/assets/blog_suino.jpg',
    date: '3 Aprile 2025',
    readTime: '5 min',
    category: 'Eventi',
  },
  {
    id: 2,
    title: 'Il count down è ormai esaurito: parte il Contratto di Filiera Fio.Re.',
    excerpt: 'Con l\'espletamento di tutto l\'iter autorizzativo è partito il Contratto di Filiera Fio.Re., un progetto ambizioso per il settore agroalimentare.',
    image: '/assets/blog_contratto.jpg',
    date: '5 Marzo 2025',
    readTime: '4 min',
    category: 'News',
  },
  {
    id: 3,
    title: 'Il VALORE di un team',
    excerpt: 'Francesco Vendola, CEO e Senior Account Manager, parla del valore di un team fortemente motivato e coeso sulla visione e sugli obiettivi da raggiungere.',
    image: '/assets/blog_team.jpg',
    date: '5 Marzo 2025',
    readTime: '6 min',
    category: 'Team',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vueffe-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-vueffe-green/10 text-vueffe-green rounded-full text-sm font-medium mb-6">
                Blog
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-vueffe-dark mb-4">
                Lasciati ispirare dalle nostre{' '}
                <span className="text-gradient-green">guide</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-600">
                Esplora articoli, approfondimenti e consigli pratici per affrontare con successo le sfide del mercato.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <AnimatedButton variant="outline" showArrow>
              Tutti gli articoli
            </AnimatedButton>
          </AnimatedSection>
        </div>

        {/* Articles Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {articles.map((article) => (
            <StaggerItem key={article.id} direction="up">
              <motion.article
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vueffe-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-vueffe-dark text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-vueffe-dark mb-3 group-hover:text-vueffe-green transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <motion.a
                    href={`#article-${article.id}`}
                    className="inline-flex items-center gap-2 text-vueffe-green font-medium text-sm mt-auto group/link"
                  >
                    Leggi di più
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="transition-transform"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
