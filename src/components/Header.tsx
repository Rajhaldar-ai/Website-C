import React, { useEffect, useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteData';

interface HeaderProps {
  activeSection: string;
  onOpenMobileMenu: () => void;
  onSelectService?: (serviceTitle: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onOpenMobileMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#0B0D10] border-b border-white/10'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single clean brand wordmark */}
        <a
          href="#home"
          className="font-display text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-[#F8F9FA] hover:text-[#C8F542] transition-colors whitespace-nowrap shrink-0"
        >
          RAJINDER ARORA &amp; ASSOCIATES
        </a>

        {/* Zone 2: Clean navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {NAV_ITEMS.filter(
            (item) =>
              item.label !== 'Expertise' &&
              item.label !== 'GST Foundation' &&
              item.label !== 'Insights'
          ).map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`inline-block relative py-1 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#C8F542]'
                    : 'text-[#A8B0BC] hover:text-[#F8F9FA]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8F542] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#C8F542] text-[#0B0D10] font-display text-xs font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span>BOOK A CORPORATE CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-white/15 text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
