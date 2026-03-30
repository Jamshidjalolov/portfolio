import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';
import BrandLogo from './BrandLogo';
import Container from './Container';
import SocialLinks from './SocialLinks';

type FooterProps = {
  locale: Locale;
};

function Footer({ locale }: FooterProps) {
  const content = portfolioContent[locale];

  return (
    <footer className="pb-8 pt-12">
      <Container>
        <div className="panel px-5 py-8 text-center sm:px-6 lg:px-8 xl:text-left">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
            <div className="mx-auto max-w-xl xl:mx-0">
              <BrandLogo className="mx-auto h-24 w-auto sm:h-28 xl:mx-0" />
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
                {content.footer.text}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 xl:items-end">
              <nav className="flex flex-wrap justify-center gap-3 text-sm text-slate-300 xl:justify-end">
                {content.navigation.map((item) => (
                  <a
                    className="group rounded-full border border-transparent px-3 py-1.5 transition duration-300 hover:border-white/10 hover:bg-white/[0.06]"
                    href={item.href}
                    key={item.href}
                  >
                    <span className="text-hover-accent">{item.label}</span>
                  </a>
                ))}
              </nav>
              <SocialLinks links={content.socialLinks} size="sm" />
            </div>
          </div>

          <div className="mt-8 soft-divider" />
          <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              (c) {new Date().getFullYear()} {content.profile.name}. {content.footer.rights}
            </span>
            <span>{content.profile.location}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
