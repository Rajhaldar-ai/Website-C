import React, { useRef } from 'react';
import { Upload, X, ExternalLink } from 'lucide-react';
import { FOUNDER_PROFILE } from '../data/siteData';

interface FounderProps {
  founderPortraitUrl: string | null;
  onUploadFounderPortrait: (url: string | null) => void;
}

export const Founder: React.FC<FounderProps> = ({
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
      aria-label="Founder Profile"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Clean Header */}
        <div className="mb-12 pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              FOUNDER &amp; SENIOR COUNSEL
            </div>
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F8F9FA]">
              {FOUNDER_PROFILE.name}
            </h2>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-bold text-[#C8F542]">
            {FOUNDER_PROFILE.credentialsHeader}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Clean Portrait Frame / Placeholder (4 cols) */}
          <div className="lg:col-span-4 bg-[#0B0D10] border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[380px]">
            <div className="flex items-center justify-between text-xs font-mono-tabular text-[#A8B0BC] border-b border-white/10 pb-4">
              <span>FOUNDER PORTRAIT</span>
              <span className="text-[#C8F542]">FCA, LLB</span>
            </div>

            {founderPortraitUrl ? (
              <div className="relative my-6 w-full aspect-[3/4] overflow-hidden border border-white/15">
                <img
                  src={founderPortraitUrl}
                  alt="CA Rajender Arora - Approved Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => onUploadFounderPortrait(null)}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-[#0B0D10]/90 text-xs text-[#F8F9FA] hover:text-[#C8F542] border border-white/20 flex items-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            ) : (
              <div className="my-auto py-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 border border-[#C8F542]/50 flex items-center justify-center font-display text-xl font-bold text-[#C8F542]">
                  CA
                </div>
                <div className="space-y-1">
                  <div className="font-display text-lg font-bold text-[#F8F9FA]">
                    CA Rajender Arora
                  </div>
                  <div className="text-xs text-[#A8B0BC]">
                    Approved Portrait Placeholder
                  </div>
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
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs font-medium text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Approved Portrait</span>
                </button>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A8B0BC]">
              <span>20+ Years Practice</span>
              <span>New Delhi</span>
            </div>
          </div>

          {/* RIGHT: Clear Biography, Designations & Appointments (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Clean Unboxed Designations */}
            <div className="pb-6 border-b border-white/10">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-3">
                CREDENTIALS &amp; PROFESSIONAL ROLES
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-semibold text-[#F8F9FA]">
                {FOUNDER_PROFILE.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span>{role}</span>
                    {idx < FOUNDER_PROFILE.roles.length - 1 && (
                      <span aria-hidden="true" className="text-[#C8F542]">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4 text-base sm:text-lg text-[#A8B0BC] leading-relaxed">
              {FOUNDER_PROFILE.biography.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'text-[#F8F9FA] font-medium' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Institutional Appointments */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-4">
                INSTITUTIONAL LEADERSHIP &amp; BAR APPOINTMENTS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FOUNDER_PROFILE.verifiedAppointments.map((item) => (
                  <div
                    key={`${item.role}-${item.entity}`}
                    className="p-5 bg-[#0B0D10] border border-white/10"
                  >
                    <div className="text-xs font-mono-tabular text-[#A8B0BC]">
                      {item.period}
                    </div>
                    <div className="font-display text-lg font-bold text-[#F8F9FA] mt-1">
                      {item.role}
                    </div>
                    <div className="text-xs sm:text-sm text-[#C8F542] mt-1">
                      {item.entity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Profile Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
              <a
                href="https://in.linkedin.com/in/carajenderarora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F8F9FA] hover:text-[#C8F542] transition-colors whitespace-nowrap"
              >
                <span>LinkedIn Professional Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span aria-hidden="true" className="text-white/20">
                ·
              </span>
              <a
                href="https://taxguru.in/author/gstrajender/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F8F9FA] hover:text-[#C8F542] transition-colors whitespace-nowrap"
              >
                <span>TaxGuru Author Archive (59+ Articles)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
