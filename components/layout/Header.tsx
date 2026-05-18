import { navLinks, socialLinks } from "@/data/site-content";

export function Header() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="site-header__brand" href="#top" aria-label="Paper Tiger home">
        <span className="site-header__mark">PT</span>
        <span>Paper Tiger</span>
      </a>
      <nav className="site-header__nav">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="site-header__social" href={socialLinks.instagram} rel="noreferrer" target="_blank">
        Instagram
      </a>
    </header>
  );
}
