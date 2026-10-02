import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, OFFICE_LOCATIONS } from '../data/siteData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 bg-[#0B0D10] flex flex-col justify-between overflow-y-auto"
    >
      <div className="px-4 sm:px-8 h-16 flex items-center justify-between border-b border-white/10 shrink-0">
        <span className="font-display text-sm sm:text-base font-extrabold tracking-tight text-[#F8F9FA]">
          RAJINDER ARORA &amp; ASSOCIATES
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex items-center justify-center w-11 h-11 border border-white/15 text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6 sm:px-10 py-8 flex-1 flex flex-col justify-center">
        <nav className="flex flex-col space-y-2">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#C8F542] transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono-tabular text-xs text-[#C8F542] font-bold">
                    0{index + 1}
                  </span>
                  <span
                    className={`font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                      isActive
                        ? 'text-[#C8F542]'
                        : 'text-[#F8F9FA] group-hover:text-[#C8F542]'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#A8B0BC] group-hover:text-[#C8F542]" />
              </a>
            );
          })}
        </nav>
      </div>

      <div className="px-6 sm:px-10 py-6 bg-[#12161B] border-t border-white/10 shrink-0 space-y-4">
        <a
          href="#contact"
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#C8F542] text-[#0B0D10] font-display text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap"
        >
          <span>BOOK A CORPORATE CONSULTATION</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A8B0BC]">
          <span>New Delhi: Shastri Nagar · Moti Nagar</span>
          <span>{OFFICE_LOCATIONS.workingHours}</span>
        </div>
      </div>
    </div>
  );
};
