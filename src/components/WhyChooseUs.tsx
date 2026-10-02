import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      aria-label="Why the Firm"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Clear Stacked Headline (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              WHY THE FIRM
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.06] text-[#F8F9FA]">
              <span className="block">PRECISION.</span>
              <span className="block text-[#A8B0BC]">EXPERIENCE.</span>
              <span className="block text-[#C8F542]">EXPERTISE.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
              Anchored by dual legal and accounting qualifications, national
              recognition, and over two decades of active practice.
            </p>
          </div>

          {/* RIGHT: 01 - 04 Differentiator Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-8 bg-[#0B0D10] border border-white/15 hover:border-[#C8F542] transition-colors duration-150 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="font-mono-tabular text-3xl font-extrabold text-[#C8F542]">
                    {item.number}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F9FA]">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#C8F542]">
                    {item.highlight}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed pt-5 border-t border-white/10 mt-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
