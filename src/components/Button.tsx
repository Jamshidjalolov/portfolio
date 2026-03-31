import { ArrowUpRight } from 'lucide-react';
import { MouseEventHandler, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  showArrow?: boolean;
  disabled?: boolean;
};

type AnchorButtonProps = CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function getButtonClasses(
  variant: CommonProps['variant'],
  size: CommonProps['size'],
  className: string,
  disabled: boolean,
) {
  const base =
    'group relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-full border font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70';
  const variants = {
    primary:
      'border-cyan-300/30 bg-[linear-gradient(180deg,rgba(103,232,249,0.18),rgba(8,47,73,0.72))] text-white shadow-[0_18px_40px_rgba(8,47,73,0.34)] hover:-translate-y-0.5 hover:border-cyan-200/60',
    secondary:
      'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]',
    ghost: 'border-transparent bg-transparent text-slate-300 hover:bg-white/[0.08] hover:text-white',
  };
  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-5 py-3 text-sm sm:text-[0.95rem]',
  };
  const disabledState = disabled ? 'cursor-not-allowed opacity-70 hover:translate-y-0' : '';

  return `${base} ${variants[variant ?? 'primary']} ${sizes[size ?? 'md']} ${disabledState} ${className}`;
}

function Button(props: AnchorButtonProps | NativeButtonProps) {
  const {
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    showArrow = false,
    disabled = false,
  } = props;

  const content = (
    <>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_65%)]" />
        <span
          className={`absolute inset-0 -translate-x-[130%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)] transition duration-700 ${
            disabled ? '' : 'group-hover:translate-x-[130%]'
          }`}
        />
      </span>
      <span className="relative z-10">{children}</span>
      {showArrow ? (
        <ArrowUpRight
          className={`relative z-10 h-4 w-4 transition duration-300 ${
            disabled ? '' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          }`}
        />
      ) : null}
    </>
  );

  if ('href' in props && typeof props.href === 'string') {
    const external = props.href.startsWith('http') || props.href.startsWith('mailto:');

    return (
      <a
        aria-disabled={disabled}
        className={getButtonClasses(variant, size, className, disabled)}
        href={props.href}
        onClick={disabled ? undefined : props.onClick}
        rel={external ? 'noreferrer' : undefined}
        target={external ? '_blank' : undefined}
      >
        {content}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button
      className={getButtonClasses(variant, size, className, disabled)}
      disabled={disabled}
      onClick={buttonProps.onClick}
      type={buttonProps.type ?? 'button'}
    >
      {content}
    </button>
  );
}

export default Button;
