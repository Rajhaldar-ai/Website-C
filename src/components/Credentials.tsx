import React from 'react';
import { CREDENTIALS_LIST } from '../data/siteData';

export const Credentials: React.FC = () => {
  return (
    <section
      aria-label="Credentials and Professional Recognition"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              CREDENTIALS &amp; RECOGNITION
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA]">
              VERIFIED HONORS &amp; APPOINTMENTS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A8B0BC] max-w-md leading-relaxed">
            Verified statutory qualifications, national tax awards, and
            professional leadership positions.
          </p>
        </div>

        {/* Clean Recognition List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {CREDENTIALS_LIST.map((cred, index) => (
            <div
              key={cred.title}
              className="py-6 px-4 hover:bg-[#12161B] transition-colors duration-150 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="font-mono-tabular text-xs font-bold text-[#C8F542]">
                  0{index + 1}
                </span>
                <span className="text-xs sm:text-sm text-[#A8B0BC]">
                  {cred.category}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-display text-lg sm:text-2xl font-bold text-[#F8F9FA]">
                  {cred.title}
                </h3>
              </div>

              <div className="lg:col-span-2 text-xs sm:text-sm text-[#A8B0BC]">
                {cred.organization}
              </div>

              <div className="lg:col-span-2 lg:text-right text-xs font-mono-tabular">
                <span
                  className={
                    cred.isHistorical ? 'text-[#A8B0BC]' : 'text-[#C8F542]'
                  }
                >
                  {cred.statusNote}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
