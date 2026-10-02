import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERTISE_INDEX } from '../data/siteData';

interface ExpertiseProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({
  onSelectServiceForConsultation,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section
      id="expertise"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              AREAS OF SPECIALIZATION
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA]">
              EXPERTISE BUILT FOR COMPLEX MATTERS.
            </h2>
          </div>
          <div className="text-xs font-mono-tabular text-[#A8B0BC]">
            01 — 08 SPECIALIZATIONS
          </div>
        </div>

        {/* Interactive Index + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: 01 - 08 List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {EXPERTISE_INDEX.map((item, idx) => {
              const isSelected = hoveredIdx === idx;
              return (
                <button
                  key={item.number}
                  type="button"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => setHoveredIdx(idx)}
                  className={`w-full text-left py-5 px-4 transition-colors duration-150 flex items-baseline justify-between gap-4 group ${
                    isSelected ? 'bg-[#0B0D10]' : 'hover:bg-[#0B0D10]/50'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono-tabular text-sm font-bold ${
                        isSelected ? 'text-[#C8F542]' : 'text-[#A8B0BC]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <span
                        className={`font-display text-xl sm:text-2xl xl:text-3xl font-bold tracking-tight block transition-colors ${
                          isSelected
                            ? 'text-[#F8F9FA]'
                            : 'text-[#A8B0BC] group-hover:text-[#F8F9FA]'
                        }`}
                      >
                        {item.title}
                      </span>
                      {isSelected && (
                        <p className="lg:hidden text-xs sm:text-sm text-[#A8B0BC] mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <span
                    className={`text-xs hidden sm:inline-block whitespace-nowrap ${
                      isSelected ? 'text-[#C8F542]' : 'text-[#A8B0BC]'
                    }`}
                  >
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Specialization Detail Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-[#0B0D10] border border-white/15 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono-tabular">
              <span className="text-[#C8F542]">
                {EXPERTISE_INDEX[hoveredIdx].number} / 08
              </span>
              <span className="text-[#A8B0BC]">
                {EXPERTISE_INDEX[hoveredIdx].category}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8F9FA]">
                {EXPERTISE_INDEX[hoveredIdx].title}
              </h3>
              <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
                {EXPERTISE_INDEX[hoveredIdx].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-mono-tabular text-[#C8F542]">
                KEY CAPABILITIES
              </div>
              <ul className="space-y-2">
                {EXPERTISE_INDEX[hoveredIdx].capabilities.map((cap, cIdx) => (
                  <li
                    key={cap}
                    className="flex items-center justify-between text-xs sm:text-sm text-[#F8F9FA] py-1.5 border-b border-white/5"
                  >
                    <span>{cap}</span>
                    <span className="font-mono-tabular text-xs text-[#A8B0BC]">
                      0{cIdx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onSelectServiceForConsultation(
                    EXPERTISE_INDEX[hoveredIdx].title
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-xs sm:text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
              >
                <span>CONSULT ON {EXPERTISE_INDEX[hoveredIdx].title}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
