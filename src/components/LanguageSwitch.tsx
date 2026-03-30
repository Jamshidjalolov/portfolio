import { Locale } from '../types';

type LanguageSwitchProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
  compact?: boolean;
};

function LanguageSwitch({ locale, onChange, compact = false }: LanguageSwitchProps) {
  return (
    <div
      aria-label="Language switch"
      className={`inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1 ${compact ? '' : 'shadow-panel'}`}
      role="group"
    >
      {(['uz', 'en'] as const).map((item) => {
        const active = item === locale;

        return (
          <button
            aria-pressed={active}
            className={`rounded-full px-2.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition duration-300 sm:px-3 sm:text-xs sm:tracking-[0.24em] ${
              active
                ? 'bg-cyan-300/[0.16] text-white'
                : 'text-slate-400 hover:text-slate-100'
            } ${compact ? 'min-w-[46px] sm:min-w-[52px]' : 'min-w-[50px] sm:min-w-[56px]'}`}
            key={item}
            onClick={() => onChange(item)}
            type="button"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitch;
