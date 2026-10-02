import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      aria-label="Professional Process"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              PROFESSIONAL PROCESS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA]">
              FOUR-STAGE CASE WORKFLOW.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8B0BC] max-w-md leading-relaxed">
            Structured execution from initial notice evaluation through
            appellate and tribunal representation.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 border transition-colors duration-150 cursor-pointer flex flex-col justify-between min-h-[310px] ${
                  isSelected
                    ? 'bg-[#12161B] border-[#C8F542]'
                    : 'bg-[#0B0D10] border-white/15 hover:border-white/30'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-display font-mono-tabular text-4xl sm:text-5xl font-extrabold ${
                        isSelected ? 'text-[#C8F542]' : 'text-[#F8F9FA]/40'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs text-[#A8B0BC]">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#F8F9FA] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 text-xs">
                  <span className="text-[#A8B0BC] block">Outcome:</span>
                  <span className="font-semibold text-[#F8F9FA] mt-0.5 block">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
