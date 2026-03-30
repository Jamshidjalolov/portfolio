import { startTransition, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import { Locale } from './types';

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
const localeStorageKey = 'portfolio-locale';

function App() {
  const activeSection = useActiveSection(sectionIds);
  const [locale, setLocale] = useState<Locale>('uz');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);

    if (savedLocale === 'uz' || savedLocale === 'en') {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLoading(false);
    }, 1350);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    startTransition(() => {
      setLocale(nextLocale);
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-night text-white">
      <ScrollProgress />
      <PageLoader loading={loading} locale={locale} />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, 24, 0] }}
          className="absolute left-[-5rem] top-8 h-48 w-48 rounded-full bg-cyan-400/12 blur-3xl sm:left-[-6rem] sm:top-10 sm:h-72 sm:w-72"
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 34, 0] }}
          className="absolute right-[-6rem] top-1/4 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl sm:right-[-8rem] sm:h-[24rem] sm:w-[24rem]"
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, 16, 0], y: [0, -18, 0] }}
          className="absolute bottom-[-8rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-400/8 blur-3xl sm:bottom-[-10rem] sm:h-80 sm:w-80"
          transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity }}
        />
        <div className="absolute left-[10%] top-[18%] hidden h-40 w-40 rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] blur-2xl sm:block sm:h-56 sm:w-56" />
        <div className="absolute right-[10%] top-[52%] hidden h-40 w-40 rounded-full border border-amber-200/10 bg-amber-200/[0.03] blur-2xl sm:block sm:h-56 sm:w-56" />
        <div className="absolute inset-x-[8%] top-[12%] hidden h-px bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent sm:block" />
        <div className="absolute inset-x-[14%] top-[48%] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(245,183,95,0.08),transparent_22%)]" />
      </div>

      <Navbar activeSection={activeSection} locale={locale} onLocaleChange={handleLocaleChange} />

      <main>
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>

      <Footer locale={locale} />
    </div>
  );
}

export default App;
