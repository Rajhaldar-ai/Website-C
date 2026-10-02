import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Consultation: React.FC = () => {
  return (
    <section
      aria-label="Corporate Consultation Call to Action"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#0B0D10] border border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              CORPORATE CONSULTATION
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-[#F8F9FA]">
              READY TO NAVIGATE{' '}
              <span className="block text-[#C8F542]">
                COMPLEX TAX &amp; CORPORATE MATTERS?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A8B0BC] max-w-2xl leading-relaxed">
              Professional advisory, GST, litigation, auditing and corporate
              finance support from Rajinder Arora &amp; Associates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-xs sm:text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
            >
              <span>BOOK A CORPORATE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/25 text-[#F8F9FA] font-display text-xs sm:text-sm font-semibold tracking-wide hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap group"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
