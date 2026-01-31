import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 080 35 13 564',
    href: 'tel:+390803513564',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lacc.agency',
    href: 'mailto:info@lacc.agency',
  },
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: 'Via Example 123, Bari, Italia',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Orari',
    value: 'Lun-Ven: 9:00 - 18:00',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-lacc-purple/10 text-lacc-purple rounded-full text-sm font-medium mb-4">
            Contatti
          </span>
          <h2 className="text-3xl font-bold text-lacc-dark mb-4">
            Restiamo in <span className="text-gradient-purple">contatto</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Siamo qui per aiutarti. Scegli il canale più conveniente per te.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-app hover:shadow-app-lg transition-all"
              >
                <div className="w-12 h-12 bg-lacc-purple/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-lacc-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-lacc-dark">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-xl shadow-app"
            >
              <p className="text-sm text-gray-500 mb-3">Seguici su</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-lacc-purple hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-app">
              <h3 className="text-lg font-semibold text-lacc-dark mb-6">
                Invia un messaggio
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                    placeholder="mario@esempio.it"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all resize-none"
                  placeholder="Come possiamo aiutarti?"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-lacc-dark hover:bg-lacc-dark/90 py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Invia Messaggio
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
