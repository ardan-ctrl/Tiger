import { socialLinks } from "@/data/site-content";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__type" aria-hidden="true">
        <AnimatedTitle text="Paper Tiger" />
      </div>
      <div className="site-footer__links">
        <a href={socialLinks.instagram} rel="noreferrer" target="_blank">
          Instagram
        </a>
        <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a>
      </div>
      <p>© {new Date().getFullYear()} Paper Tiger. Animated brand attention.</p>
    </footer>
  );
}
