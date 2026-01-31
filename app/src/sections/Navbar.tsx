import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '#dashboard', icon: 'LayoutDashboard' },
  { name: 'Servizi', href: '#services', icon: 'Layers' },
  { name: 'Team', href: '#team', icon: 'Users' },
  { name: 'Progetti', href: '#projects', icon: 'FolderKanban' },
  { name: 'Contatti', href: '#contact', icon: 'MessageSquare' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-app' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lacc-purple to-lacc-purple-light flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 13L12 4L18 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="4" r="2" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold tracking-tight transition-colors ${isScrolled ? 'text-lacc-dark' : 'text-lacc-dark'}`}>
                  LACC<span className="text-lacc-purple">.</span>AGENCY
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation - App Style */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace('#', ''))}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-lacc-purple/10 text-lacc-purple'
                      : 'text-gray-600 hover:text-lacc-dark hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.a
                href="tel:+390803513564"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-lacc-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Chiama
              </motion.a>
              <motion.a
                href="#prenota"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 bg-lacc-dark text-white text-sm font-medium rounded-lg hover:bg-lacc-dark/90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Prenota
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-lacc-dark hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - App Drawer Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl text-lacc-dark hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                  <motion.a
                    href="tel:+390803513564"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-2 w-full p-3 border border-gray-200 rounded-xl text-lacc-dark font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    Chiama Ora
                  </motion.a>
                  <motion.a
                    href="#prenota"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center justify-center gap-2 w-full p-3 bg-lacc-dark text-white rounded-xl font-medium"
                  >
                    <Calendar className="w-5 h-5" />
                    Prenota Appuntamento
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
