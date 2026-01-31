import { useEffect } from 'react';
import { PageTransition } from '@/components/PageTransition';
import { Navbar } from '@/sections/Navbar';
import { Stats } from '@/sections/Stats';
import { Dashboard } from '@/sections/Dashboard';
import { Services } from '@/sections/Services';
import { Team } from '@/sections/Team';
import { Projects } from '@/sections/Projects';
import { Prenota } from '@/sections/Prenota';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <main>
          <Stats />
          <Dashboard />
          <Services />
          <Projects />
          <Team />
          <Prenota />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;