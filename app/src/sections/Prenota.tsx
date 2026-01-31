import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  Video, 
  MapPin, 
  Clock, 
  ChevronLeft,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const meetingTypes = [
  { 
    id: 'video', 
    label: 'Videochiamata', 
    description: 'Google Meet o Zoom',
    icon: Video,
    duration: '30 min'
  },
  { 
    id: 'phone', 
    label: 'Telefonata', 
    description: 'Chiamata diretta',
    icon: Phone,
    duration: '20 min'
  },
  { 
    id: 'inperson', 
    label: 'In sede', 
    description: 'Presso i nostri uffici',
    icon: MapPin,
    duration: '45 min'
  },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
];

export function Prenota() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const reset = () => {
    setSelectedType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setStep(1);
    setIsConfirmed(false);
  };

  if (isConfirmed) {
    return (
      <section id="prenota" className="py-24 bg-gray-50/50">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-app-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-emerald-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-lacc-dark mb-2">
              Appuntamento Confermato!
            </h2>
            <p className="text-gray-500 mb-6">
              Ti abbiamo inviato una email con tutti i dettagli.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-lacc-purple" />
                <span className="text-lacc-dark font-medium">{selectedDate}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-lacc-purple" />
                <span className="text-lacc-dark font-medium">{selectedTime}</span>
              </div>
              <div className="flex items-center gap-3">
                {selectedType && meetingTypes.find(t => t.id === selectedType)?.icon && (
                  <>
                    {(() => {
                      const Icon = meetingTypes.find(t => t.id === selectedType)!.icon;
                      return <Icon className="w-5 h-5 text-lacc-purple" />;
                    })()}
                    <span className="text-lacc-dark font-medium">
                      {meetingTypes.find(t => t.id === selectedType)?.label}
                    </span>
                  </>
                )}
              </div>
            </div>
            <Button onClick={reset} variant="outline" className="w-full">
              Prenota un altro appuntamento
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="prenota" className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-lacc-dark mb-3">
            Prenota una <span className="text-gradient-purple">Consulenza</span>
          </h2>
          <p className="text-gray-500">
            Scegli il tipo di incontro e l'orario più conveniente per te
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: step >= s ? '#6366F1' : '#E5E7EB',
                  scale: step === s ? 1.1 : 1,
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
              >
                <span className={step >= s ? 'text-white' : 'text-gray-500'}>{s}</span>
              </motion.div>
              {s < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${step > s ? 'bg-lacc-purple' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-app-lg overflow-hidden"
        >
          {/* Step 1: Meeting Type */}
          {step === 1 && (
            <div className="p-8">
              <h3 className="text-lg font-semibold text-lacc-dark mb-6">
                Come preferisci incontrarci?
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {meetingTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedType(type.id)}
                    className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedType === type.id
                        ? 'border-lacc-purple bg-lacc-purple/5'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      selectedType === type.id ? 'bg-lacc-purple' : 'bg-gray-100'
                    }`}>
                      <type.icon className={`w-6 h-6 ${
                        selectedType === type.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <p className="font-semibold text-lacc-dark mb-1">{type.label}</p>
                    <p className="text-sm text-gray-500">{type.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-lacc-purple">
                      <Clock className="w-3 h-3" />
                      {type.duration}
                    </div>
                    {selectedType === type.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-6 h-6 bg-lacc-purple rounded-full flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedType}
                  className="bg-lacc-dark hover:bg-lacc-dark/90"
                >
                  Continua
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={() => setStep(1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-semibold text-lacc-dark">
                  Seleziona data e ora
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar Mock */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-medium">Gennaio 2025</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ChevronLeft className="w-5 h-5 rotate-180" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map(d => (
                      <div key={d} className="py-2 text-gray-400 font-medium">{d}</div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <motion.button
                        key={day}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedDate(`3 Febbraio 2025`)}
                        className={`py-2 rounded-lg transition-colors ${
                          selectedDate?.includes(day.toString())
                            ? 'bg-lacc-purple text-white'
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {day}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {selectedDate || 'Seleziona una data'}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-lacc-purple text-white'
                            : 'bg-gray-100 text-lacc-dark hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Indietro
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-lacc-dark hover:bg-lacc-dark/90"
                >
                  Continua
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={() => setStep(2)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-semibold text-lacc-dark">
                  Conferma appuntamento
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-medium text-lacc-dark mb-4">Riepilogo</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {selectedType && meetingTypes.find(t => t.id === selectedType)?.icon && (
                      <>
                        {(() => {
                          const Icon = meetingTypes.find(t => t.id === selectedType)!.icon;
                          return <Icon className="w-5 h-5 text-lacc-purple" />;
                        })()}
                        <span className="text-gray-600">
                          {meetingTypes.find(t => t.id === selectedType)?.label}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-lacc-purple" />
                    <span className="text-gray-600">{selectedDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-lacc-purple" />
                    <span className="text-gray-600">{selectedTime}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-lacc-dark mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    placeholder="Mario Rossi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-lacc-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="mario@esempio.it"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-lacc-dark mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    placeholder="+39 123 456 7890"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lacc-purple focus:ring-2 focus:ring-lacc-purple/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Indietro
                </Button>
                <Button
                  onClick={handleConfirm}
                  className="bg-lacc-dark hover:bg-lacc-dark/90"
                >
                  Conferma Appuntamento
                </Button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Direct Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-2 gap-4"
        >
          <a
            href="tel:+390803513564"
            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-app hover:shadow-app-lg transition-all"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-semibold text-lacc-dark">Chiama Ora</p>
              <p className="text-sm text-gray-500">+39 080 35 13 564</p>
            </div>
          </a>
          <a
            href="mailto:info@lacc.agency"
            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-app hover:shadow-app-lg transition-all"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-lacc-dark">Scrivici</p>
              <p className="text-sm text-gray-500">info@lacc.agency</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
