import { AnimatePresence, motion } from 'framer-motion';
import { Locale } from '../types';

type PageLoaderProps = {
  loading: boolean;
  locale: Locale;
};

const copy = {
  uz: {
    label: 'Portfolio yuklanmoqda',
    sub: 'Interfeys tayyorlanmoqda',
  },
  en: {
    label: 'Loading portfolio',
    sub: 'Preparing interface',
  },
};

function LoaderCard() {
  return (
    <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-4 shadow-panel">
      <div className="skeleton-line h-3 w-24 rounded-full" />
      <div className="mt-5 skeleton-line h-10 w-full rounded-2xl" />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="skeleton-line h-16 rounded-2xl" />
        <div className="skeleton-line h-16 rounded-2xl" />
      </div>
    </div>
  );
}

function PageLoader({ loading, locale }: PageLoaderProps) {
  const text = copy[locale];

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#030712]"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          initial={{ opacity: 1 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-[14%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute right-[6%] top-[26%] h-72 w-72 rounded-full bg-amber-200/8 blur-3xl" />
            <div className="absolute bottom-[8%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1080px] px-5">
            <motion.div
              animate="show"
              className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]"
              initial="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                  {text.sub}
                </div>
                <div className="max-w-xl">
                  <div className="skeleton-line h-4 w-24 rounded-full" />
                  <div className="mt-6 skeleton-line h-16 w-full rounded-[28px]" />
                  <div className="mt-3 skeleton-line h-16 w-4/5 rounded-[28px]" />
                  <div className="mt-6 skeleton-line h-4 w-full rounded-full" />
                  <div className="mt-3 skeleton-line h-4 w-3/4 rounded-full" />
                </div>
                <div className="mt-8 flex gap-3">
                  <div className="skeleton-line h-12 w-40 rounded-full" />
                  <div className="skeleton-line h-12 w-32 rounded-full" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <LoaderCard />
                  <LoaderCard />
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="rounded-[36px] border border-white/8 bg-white/[0.03] p-5 shadow-panel">
                  <div className="skeleton-line h-3 w-32 rounded-full" />
                  <div className="mt-5 skeleton-line h-[25rem] w-full rounded-[30px]" />
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="skeleton-line h-24 rounded-[24px]" />
                    <div className="skeleton-line h-24 rounded-[24px]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-8 text-center text-sm text-slate-400">{text.label}</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default PageLoader;
