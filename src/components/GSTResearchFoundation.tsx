import React, { useState } from 'react';
import { ArrowUpRight, Edit3, Check } from 'lucide-react';
import {
  GST_FOUNDATION_DATA,
  GENERATED_IMAGES,
  OFFICE_LOCATIONS,
} from '../data/siteData';

interface GSTResearchFoundationProps {
  onSelectTrainingInquiry: (topic: string) => void;
}

export const GSTResearchFoundation: React.FC<GSTResearchFoundationProps> = ({
  onSelectTrainingInquiry,
}) => {
  const [isEditingPlaceholders, setIsEditingPlaceholders] = useState(false);
  const [batchSchedule, setBatchSchedule] = useState(
    OFFICE_LOCATIONS.defaultPlaceholders.batchSchedule
  );
  const [courseDuration, setCourseDuration] = useState(
    OFFICE_LOCATIONS.defaultPlaceholders.courseDuration
  );
  const [courseFee, setCourseFee] = useState(
    OFFICE_LOCATIONS.defaultPlaceholders.courseFee
  );

  return (
    <section
      id="gst-foundation"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Clean Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#C8F542] font-semibold">
              <span>EDUCATIONAL PLATFORM</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F8F9FA]">GST RESEARCH FOUNDATION</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A8B0BC]">“Happy GST”</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.06] text-[#F8F9FA]">
              GST LITERACY{' '}
              <span className="block text-[#C8F542]">
                FOR NATION BUILDING.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <p className="text-base sm:text-lg text-[#F8F9FA] font-medium leading-relaxed">
              GST Research Foundation focuses on professional GST education,
              practical learning and tax literacy.
            </p>
            <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
              Practical training programs led by CA Rajender Arora combining
              live GST portal demonstrations, Tally configurations, and GSTAT
              case studies.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-start">
          {/* Left Auditorium Visual & Target Audience (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B0D10] border border-white/15 overflow-hidden">
            <div className="relative aspect-[16/10] border-b border-white/10">
              <img
                src={GENERATED_IMAGES.auditorium}
                alt="GST Research Foundation executive seminar and training auditorium"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs font-mono-tabular">
                <span className="text-[#C8F542]">Training Center</span>
                <span className="text-[#F8F9FA]">DLF Tower, Moti Nagar</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
                  WHO CAN ENROLL
                </div>
                <h3 className="font-display text-xl font-bold text-[#F8F9FA] mb-4">
                  Structured for Practitioners &amp; Business Leaders
                </h3>
                <div className="divide-y divide-white/10 border-t border-b border-white/10">
                  {GST_FOUNDATION_DATA.audiences.map((aud, i) => (
                    <div
                      key={aud}
                      className="py-2.5 flex items-center justify-between text-xs sm:text-sm text-[#F8F9FA]"
                    >
                      <span>{aud}</span>
                      <span className="font-mono-tabular text-xs text-[#A8B0BC]">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectTrainingInquiry('GST Research Foundation Training')
                }
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-xs sm:text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
              >
                <span>EXPLORE GST TRAINING</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right: 6 Curriculum Modules + Clean Schedule Information (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {GST_FOUNDATION_DATA.curriculumModules.map((mod) => (
                <div
                  key={mod.code}
                  className="p-6 bg-[#0B0D10] border border-white/15 hover:border-[#C8F542] transition-colors duration-150 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="text-xs font-mono-tabular text-[#C8F542] font-bold">
                      MODULE {mod.code}
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA]">
                      {mod.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed mt-4 pt-4 border-t border-white/10">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Clean Editable Program Details Bar */}
            <div className="p-6 sm:p-8 bg-[#0B0D10] border border-white/15 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                    PROGRAM &amp; BATCH INFORMATION
                  </div>
                  <p className="text-xs text-[#A8B0BC] mt-0.5">
                    Editable placeholders for upcoming cohort dates and course
                    details.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setIsEditingPlaceholders(!isEditingPlaceholders)
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-xs font-medium text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap"
                >
                  {isEditingPlaceholders ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C8F542]" />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Customize Details</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#12161B] border border-white/10">
                  <div className="text-xs text-[#A8B0BC]">Upcoming Batch</div>
                  {isEditingPlaceholders ? (
                    <input
                      type="text"
                      value={batchSchedule}
                      onChange={(e) => setBatchSchedule(e.target.value)}
                      className="mt-1.5 w-full bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1.5 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#F8F9FA]">
                      {batchSchedule}
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[#12161B] border border-white/10">
                  <div className="text-xs text-[#A8B0BC]">Program Format</div>
                  {isEditingPlaceholders ? (
                    <input
                      type="text"
                      value={courseDuration}
                      onChange={(e) => setCourseDuration(e.target.value)}
                      className="mt-1.5 w-full bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1.5 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#F8F9FA]">
                      {courseDuration}
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[#12161B] border border-white/10">
                  <div className="text-xs text-[#A8B0BC]">Fee Structure</div>
                  {isEditingPlaceholders ? (
                    <input
                      type="text"
                      value={courseFee}
                      onChange={(e) => setCourseFee(e.target.value)}
                      className="mt-1.5 w-full bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1.5 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#F8F9FA]">
                      {courseFee}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
