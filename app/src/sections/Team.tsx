import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    name: 'Francesco Vendola',
    role: 'CEO & Senior Account',
    image: '/assets/blog_team.jpg',
    bio: '15 anni di esperienza nella consulenza aziendale',
    linkedin: '#',
    email: 'francesco@lacc.agency',
  },
  {
    name: 'Maria Rossi',
    role: 'Head of Operations',
    image: '/assets/hero_bg.jpg',
    bio: 'Esperta in gestione progetti e team',
    linkedin: '#',
    email: 'maria@lacc.agency',
  },
  {
    name: 'Luca Bianchi',
    role: 'Financial Advisor',
    image: '/assets/consulting_sartoriale.jpg',
    bio: 'Specialista in finanza agevolata',
    linkedin: '#',
    email: 'luca@lacc.agency',
  },
  {
    name: 'Anna Verdi',
    role: 'Innovation Manager',
    image: '/assets/blog_contratto.jpg',
    bio: 'Esperta in R&D e brevetti',
    linkedin: '#',
    email: 'anna@lacc.agency',
  },
];

const certifications = [
  { name: 'Innovation Broker', issuer: 'Regione Puglia' },
  { name: 'Certified Consultant', issuer: 'EU Commission' },
  { name: 'Energy Auditor', issuer: 'ENEA' },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-lacc-purple/10 text-lacc-purple rounded-full text-sm font-medium mb-4">
            Il Nostro Team
          </span>
          <h2 className="text-3xl font-bold text-lacc-dark mb-4">
            Professionisti al tuo <span className="text-gradient-purple">servizio</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Un team di esperti dedicati a trasformare le tue idee in progetti di successo
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-app hover:shadow-app-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lacc-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-gray-300 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-lacc-purple hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-lacc-purple hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-app"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-lacc-purple" />
            <h3 className="text-lg font-semibold text-lacc-dark">Certificazioni</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-lacc-purple/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-lacc-purple" />
                </div>
                <div>
                  <p className="font-medium text-lacc-dark">{cert.name}</p>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
