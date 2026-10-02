import React, { useState } from 'react';
import { INDUSTRIES_LIST } from '../data/siteData';

export const Industries: React.FC = () => {
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState<number>(0);

  return (
    <section
      aria-label="Industries Served"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              INDUSTRIES &amp; CLIENT TYPES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA] leading-[1.08]">
              EXPERIENCE ACROSS{' '}
              <span className="block text-[#A8B0BC]">
                COMPLEX BUSINESS ENVIRONMENTS.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8B0BC] max-w-md leading-relaxed">
            Pan-India operational advisory and judicial representation tailored
            to sector-specific tax and regulatory requirements.
          </p>
        </div>

        {/* Clean Numbered Industry Rows */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {INDUSTRIES_LIST.map((industry, idx) => {
            const isActive = selectedIndustryIdx === idx;
            return (
              <div
                key={industry.number}
                onMouseEnter={() => setSelectedIndustryIdx(idx)}
                onClick={() => setSelectedIndustryIdx(idx)}
                className="group relative py-5 px-4 transition-colors duration-150 hover:bg-[#12161B] cursor-pointer"
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#C8F542] transition-transform duration-150 origin-top ${
                    isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-4 flex items-baseline gap-4">
                    <span
                      className={`font-mono-tabular text-xs sm:text-sm font-bold ${
                        isActive ? 'text-[#C8F542]' : 'text-[#A8B0BC]'
                      }`}
                    >
                      {industry.number}
                    </span>
                    <h3
                      className={`font-display text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? 'text-[#F8F9FA]'
                          : 'text-[#A8B0BC] group-hover:text-[#F8F9FA]'
                      }`}
                    >
                      {industry.name}
                    </h3>
                  </div>

                  <div className="lg:col-span-3 text-xs sm:text-sm font-medium text-[#C8F542]">
                    {industry.focusArea}
                  </div>

                  <div className="lg:col-span-5 text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                    {industry.advisoryScope}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
