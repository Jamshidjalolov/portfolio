import markLogo from '../assets/brand/jamshid-mark.svg';
import wordmarkLogo from '../assets/brand/jamshid-wordmark.svg';

type BrandLogoProps = {
  variant?: 'mark' | 'full';
  className?: string;
};

function BrandLogo({ variant = 'full', className = '' }: BrandLogoProps) {
  const src = variant === 'mark' ? markLogo : wordmarkLogo;
  const alt = variant === 'mark' ? 'Jalolov Jamshid logo mark' : 'Jalolov Jamshid logo';

  return (
    <img
      alt={alt}
      className={className}
      src={src}
    />
  );
}

export default BrandLogo;
