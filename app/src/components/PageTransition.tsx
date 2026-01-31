import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-lacc-dark flex items-center justify-center"
          >
            <div className="relative">
              {/* Logo Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-4"
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
                    <rect x="8" y="8" width="64" height="64" rx="16" fill="url(#gradient)" />
                    <path d="M28 52L40 28L52 52" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="40" cy="24" r="6" fill="white" />
                    <defs>
                      <linearGradient id="gradient" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366F1" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-2xl font-bold text-white tracking-tight"
                >
                  LACC<span className="text-lacc-purple">.</span>AGENCY
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-gray-400 text-sm mt-2"
                >
                  Al Servizio Delle Imprese
                </motion.p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gray-700 rounded-full overflow-hidden origin-left"
              >
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 0.8, repeat: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-lacc-purple to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.98 : 1,
          filter: isLoading ? "blur(8px)" : "blur(0px)"
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
