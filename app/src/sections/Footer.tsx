import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Servizi', href: '#services' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Team', href: '#team' },
  ],
  company: [
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Contatti', href: '#contact' },
    { name: 'Lavora con Noi', href: '#work' },
    { name: 'Blog', href: '#blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Termini di Servizio', href: '#terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-lacc-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lacc-purple to-lacc-purple-light flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 13L12 4L18 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="4" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                LACC<span className="text-lacc-purple">.</span>AGENCY
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              La tua piattaforma di consulenza aziendale integrata. 
              Trasformiamo idee in progetti di successo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+390803513564"
                className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
              >
                +39 080 35 13 564
              </a>
              <a
                href="#prenota"
                className="px-4 py-2 bg-lacc-purple rounded-lg text-sm hover:bg-lacc-purple/90 transition-colors"
              >
                Prenota
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Piattaforma</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legale</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LACC.Agency. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">
              P.IVA: 12345678901
            </span>
            <span className="text-gray-500 text-sm">
              Bari, Italia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
