import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Header Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              COMMON QUESTIONS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA] leading-[1.08]">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
              Clear answers regarding GST litigation representation, statutory
              auditing, corporate law advisory, and GST Research Foundation
              courses.
            </p>
          </div>

          {/* Right Accordion List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-6 group"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-mono-tabular text-[#C8F542]">
                        0{idx + 1} · {item.category}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] group-hover:text-[#C8F542] transition-colors">
                        {item.question}
                      </h3>
                    </div>

                    <span
                      className={`w-8 h-8 border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                        isOpen
                          ? 'border-[#C8F542] bg-[#C8F542] text-[#0B0D10]'
                          : 'border-white/20 text-[#F8F9FA] group-hover:border-[#C8F542]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-10 text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
