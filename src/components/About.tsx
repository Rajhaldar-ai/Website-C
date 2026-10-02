import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_PRACTICE_AREAS, GENERATED_IMAGES } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Clear Editorial Headline & Visual */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                ABOUT THE FIRM · NEW DELHI
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-[#F8F9FA]">
                BUILT ON EXPERIENCE.{' '}
                <span className="block text-[#A8B0BC]">
                  DESIGNED FOR COMPLEXITY.
                </span>
              </h2>
            </div>

            <div className="relative aspect-[16/10] border border-white/15 bg-[#12161B] overflow-hidden">
              <img
                src={GENERATED_IMAGES.jurisprudence}
                alt="Tax jurisprudence and statutory legal treatises on dark graphite desk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono-tabular text-[#F8F9FA]">
                <span>Shastri Nagar &amp; Moti Nagar, New Delhi</span>
                <span className="text-[#C8F542]">20+ Years Practice</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Clear Narrative & Practice Areas */}
          <div className="lg:col-span-6 space-y-8 lg:pt-6">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <p className="text-xl sm:text-2xl font-semibold text-[#F8F9FA] leading-snug">
                Rajinder Arora &amp; Associates is a full-service Chartered
                Accountancy practice headquartered in New Delhi.
              </p>

              <p className="text-[#A8B0BC]">
                The practice has evolved over more than two decades into a
                multidisciplinary professional platform focused on complex
                taxation, litigation, corporate advisory and professional
                education.
              </p>
            </div>

            {/* Clean 2-Column List of Practice Areas */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-4">
                THE FIRM WORKS ACROSS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {ABOUT_PRACTICE_AREAS.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center justify-between py-2.5 border-b border-white/10 text-sm sm:text-base font-medium text-[#F8F9FA]"
                  >
                    <span>{area}</span>
                    <span className="font-mono-tabular text-xs text-[#C8F542]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
              >
                <span>DISCOVER THE FIRM</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
