import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/siteData';

interface ServicesProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForConsultation,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              PROFESSIONAL SERVICES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA]">
              CORE PRACTICE AREAS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8B0BC] max-w-md leading-relaxed">
            Three integrated practice divisions covering indirect tax
            litigation, statutory &amp; IT auditing, and professional GST
            training.
          </p>
        </div>

        {/* 3 Service Categories */}
        <div className="space-y-8">
          {SERVICE_CATEGORIES.map((category, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <div
                key={category.number}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`border transition-colors duration-200 ${
                  isSelected
                    ? 'border-[#C8F542]/60 bg-[#12161B]'
                    : 'border-white/10 bg-[#0B0D10] hover:border-white/25'
                }`}
              >
                {/* Category Header */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                    <span className="font-display font-mono-tabular text-3xl sm:text-4xl font-extrabold text-[#C8F542]">
                      {category.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8F9FA]">
                        {category.title}
                      </h3>
                      <p className="text-sm text-[#A8B0BC] mt-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectServiceForConsultation(category.title)
                    }
                    className="self-start lg:self-center inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B0D10] border border-white/20 text-xs font-display font-bold tracking-wide text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap group"
                  >
                    <span>CONSULT THIS DIVISION</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Category Body */}
                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Image & Overview (4 cols) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="aspect-[4/3] bg-[#0B0D10] border border-white/10 overflow-hidden">
                      <img
                        src={category.imagePath}
                        alt={category.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Right Services List (8 cols) */}
                  <div className="lg:col-span-8 divide-y divide-white/10">
                    {category.services.map((srv) => (
                      <div
                        key={srv.title}
                        className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                      >
                        <div className="space-y-2 max-w-2xl">
                          <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA]">
                            {srv.title}
                          </h4>
                          <p className="text-sm text-[#A8B0BC] leading-relaxed">
                            {srv.scope}
                          </p>
                          <div className="text-xs text-[#A8B0BC] pt-1">
                            <span className="text-[#F8F9FA] font-medium">
                              For:{' '}
                            </span>
                            {srv.relevantTo}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            onSelectServiceForConsultation(srv.title)
                          }
                          className="self-start shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8F542] hover:underline whitespace-nowrap pt-1"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
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
