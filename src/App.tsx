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
import ResumePage from './pages/ResumePage';
import { Locale } from './types';

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
const emptySectionIds: string[] = [];
const localeStorageKey = 'portfolio-locale';

function resolveRoute(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  return normalizedPath === '/resume' ? 'resume' : 'portfolio';
}

function updateMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.content = content;
  }
}

function App() {
  const route = resolveRoute(window.location.pathname);
  const isResumePage = route === 'resume';
  const activeSection = useActiveSection(isResumePage ? emptySectionIds : sectionIds);
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

  useEffect(() => {
    const title = isResumePage
      ? 'Jalolov Jamshid | Resume'
      : locale === 'uz'
        ? 'Jalolov Jamshid | Premium Portfolio'
        : 'Jalolov Jamshid | Premium Portfolio';
    const description = isResumePage
      ? locale === 'uz'
        ? "Jalolov Jamshidning premium resume sahifasi. Frontend, backend, React, TypeScript, FastAPI va PostgreSQL yo'nalishidagi tajriba, ko'nikmalar va loyihalar."
        : 'Premium resume page for Jalolov Jamshid covering frontend, backend, React, TypeScript, FastAPI, and PostgreSQL.'
      : locale === 'uz'
        ? "Jalolov Jamshidning portfolio sayti. Frontend va backend yo'nalishida zamonaviy, responsiv va mahsulotga yo'naltirilgan web tajribalar."
        : 'Portfolio website of Jalolov Jamshid, a frontend and backend developer building modern, responsive, product-focused web experiences.';

    document.title = title;
    updateMetaContent('meta[name="description"]', description);
    updateMetaContent('meta[property="og:title"]', title);
    updateMetaContent('meta[property="og:description"]', description);
    updateMetaContent('meta[name="twitter:title"]', title);
    updateMetaContent('meta[name="twitter:description"]', description);
  }, [isResumePage, locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    startTransition(() => {
      setLocale(nextLocale);
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-night text-white">
      <div className="print-hide">
        <ScrollProgress />
        <PageLoader loading={loading} locale={locale} />
      </div>

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

      <div className="print-hide">
        <Navbar activeSection={activeSection} isResumePage={isResumePage} locale={locale} onLocaleChange={handleLocaleChange} />
      </div>

      {isResumePage ? (
        <ResumePage locale={locale} />
      ) : (
        <>
          <main>
            <HeroSection locale={locale} />
            <AboutSection locale={locale} />
            <SkillsSection locale={locale} />
            <ProjectsSection locale={locale} />
            <ContactSection locale={locale} />
          </main>

          <Footer locale={locale} />
        </>
      )}
    </div>
  );
}

export default App;
