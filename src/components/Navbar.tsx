import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';
import BrandLogo from './BrandLogo';
import Button from './Button';
import Container from './Container';
import LanguageSwitch from './LanguageSwitch';

type NavbarProps = {
  activeSection: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

function Navbar({ activeSection, locale, onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const content = portfolioContent[locale];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activeSection, locale]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-3 sm:px-5 sm:pt-4">
      <Container
        className={`rounded-[24px] border transition duration-300 sm:rounded-[28px] ${
          isScrolled
            ? 'border-white/10 bg-slate-950/75 shadow-panel backdrop-blur-2xl'
            : 'border-white/5 bg-slate-950/40 backdrop-blur-xl'
        }`}
      >
        <div className="flex h-[66px] items-center justify-between gap-2 sm:h-[74px] sm:gap-3">
          <a className="flex items-center gap-2 sm:gap-3" href="#home">
            <BrandLogo className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" variant="mark" />
            <div className="hidden min-[430px]:block">
              <BrandLogo className="h-8 w-auto sm:h-10" />
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                {content.profile.role}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {content.navigation.map((item) => {
              const isActive = item.href === `#${activeSection}`;

              return (
                <a
                  className={`group rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'border-cyan-300/20 bg-white/[0.08] text-white shadow-[0_14px_28px_rgba(4,8,22,0.24)]'
                      : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06]'
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  <span className={`text-hover-accent ${isActive ? 'is-active' : ''}`}>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch locale={locale} onChange={onLocaleChange} />
            <Button href="#contact" showArrow size="sm">
              {content.labels.contactCta}
            </Button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <LanguageSwitch compact locale={locale} onChange={onLocaleChange} />
            <button
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:h-11 sm:w-11"
              onClick={() => setIsOpen((current) => !current)}
              type="button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              animate={{ opacity: 1, height: 'auto' }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-2 py-3 sm:py-4">
                {content.navigation.map((item) => {
                  const isActive = item.href === `#${activeSection}`;

                  return (
                    <a
                      className={`group rounded-2xl border px-4 py-3 text-sm font-medium transition duration-300 ${
                        isActive
                          ? 'border-cyan-300/20 bg-white/[0.08] text-white shadow-[0_14px_28px_rgba(4,8,22,0.24)]'
                          : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06]'
                      }`}
                      href={item.href}
                      key={item.href}
                    >
                      <span className={`text-hover-accent ${isActive ? 'is-active' : ''}`}>{item.label}</span>
                    </a>
                  );
                })}
                <Button className="mt-2 w-full" href="#contact" showArrow>
                  {content.labels.contactCta}
                </Button>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

export default Navbar;
