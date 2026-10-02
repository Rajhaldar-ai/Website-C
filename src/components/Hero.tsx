import React, { useRef } from 'react';
import { ArrowUpRight, ArrowDownRight, Upload, X } from 'lucide-react';
import { GENERATED_IMAGES } from '../data/siteData';

interface HeroProps {
  founderPortraitUrl: string | null;
  onUploadFounderPortrait: (url: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({
  founderPortraitUrl,
  onUploadFounderPortrait,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onUploadFounderPortrait(objectUrl);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-20 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Clean Top Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 text-xs sm:text-sm text-[#A8B0BC]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[#C8F542] font-semibold tracking-wide">
              20+ YEARS OF PROFESSIONAL EXPERIENCE
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F8F9FA]">Chartered Accountants</span>
            <span aria-hidden="true">·</span>
            <span>GST Research Foundation</span>
          </div>
          <div className="flex items-center gap-2">
            <span>New Delhi</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C8F542] font-medium">“Happy GST”</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 py-12 lg:py-16 items-center">
          {/* LEFT: Clear Headline, Supporting Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#C8F542]">
                RAJINDER ARORA &amp; ASSOCIATES · FCA, LLB
              </div>

              <h1 className="font-display text-4xl sm:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.06] text-[#F8F9FA]">
                AIMING GST LITERACY{' '}
                <span className="block text-[#C8F542]">
                  FOR NATION BUILDING.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#A8B0BC] max-w-2xl leading-relaxed">
                Rajinder Arora &amp; Associates combines GST advisory, tax
                litigation, auditing, corporate finance, corporate law and
                professional GST education under one expert-led practice.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
              >
                <span>BOOK A CORPORATE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#expertise"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/20 text-[#F8F9FA] font-display text-sm font-semibold tracking-wide hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap group"
              >
                <span>EXPLORE OUR EXPERTISE</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Clean Unboxed Key Facts */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#A8B0BC]">
              <div>
                <span className="text-[#F8F9FA] font-semibold">Founder:</span>{' '}
                CA Rajender Arora (FCA, LLB)
              </div>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <div>
                <span className="text-[#F8F9FA] font-semibold">Offices:</span>{' '}
                Shastri Nagar &amp; Moti Nagar, New Delhi
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Architectural & Portrait Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#12161B] border border-white/15 overflow-hidden">
              {/* Architectural Visual Header */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                <img
                  src={GENERATED_IMAGES.boardroom}
                  alt="Modern corporate legal and tax advisory boardroom in New Delhi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161B] via-[#12161B]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                      PRINCIPAL COUNSEL &amp; FOUNDER
                    </div>
                    <div className="font-display text-xl font-bold text-[#F8F9FA]">
                      CA RAJENDER ARORA
                    </div>
                  </div>
                  <span className="font-mono-tabular text-sm font-bold text-[#F8F9FA]">
                    FCA, LLB
                  </span>
                </div>
              </div>

              {/* Portrait Placeholder / Upload Slot */}
              <div className="p-6 sm:p-8 space-y-5">
                {founderPortraitUrl ? (
                  <div className="relative w-full aspect-[4/3] bg-[#0B0D10] border border-white/15 overflow-hidden">
                    <img
                      src={founderPortraitUrl}
                      alt="CA Rajender Arora - Approved Portrait"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => onUploadFounderPortrait(null)}
                      title="Remove portrait"
                      className="absolute top-3 right-3 p-1.5 bg-[#0B0D10]/90 text-[#F8F9FA] hover:text-[#C8F542] border border-white/20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="p-5 bg-[#0B0D10] border border-white/10 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono-tabular text-[#C8F542]">
                        FOUNDER PORTRAIT PLACEHOLDER
                      </div>
                      <p className="text-xs text-[#A8B0BC]">
                        Reserved for an approved photograph of CA Rajender Arora.
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/20 text-xs font-medium text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap shrink-0"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Photo</span>
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-3.5 bg-[#0B0D10] border border-white/10">
                    <div className="text-[#A8B0BC]">Educational Platform</div>
                    <div className="text-[#F8F9FA] font-semibold mt-1">
                      President, GST Research Foundation
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#0B0D10] border border-white/10">
                    <div className="text-[#A8B0BC]">Bar Leadership</div>
                    <div className="text-[#F8F9FA] font-semibold mt-1">
                      Vice-President, STBA Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Pillar Summary Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              01 · TAX LITIGATION
            </div>
            <div className="text-sm font-semibold text-[#F8F9FA] mt-1">
              GST SCN Replies &amp; GSTAT Appeals
            </div>
          </div>
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              02 · AUDITING &amp; ASSURANCE
            </div>
            <div className="text-sm font-semibold text-[#F8F9FA] mt-1">
              Statutory, Retail &amp; CISA IT Audits
            </div>
          </div>
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              03 · CORPORATE ADVISORY
            </div>
            <div className="text-sm font-semibold text-[#F8F9FA] mt-1">
              Company Law &amp; Project Financing
            </div>
          </div>
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              04 · GST EDUCATION
            </div>
            <div className="text-sm font-semibold text-[#F8F9FA] mt-1">
              Practical GST Courses &amp; Case Studies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
