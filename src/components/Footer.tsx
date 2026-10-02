import React, { useState } from 'react';
import { X } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/siteData';

interface FooterProps {
  phonePlaceholder: string;
  emailPlaceholder: string;
}

export const Footer: React.FC<FooterProps> = ({
  phonePlaceholder,
  emailPlaceholder,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'disclaimer' | null>(
    null
  );

  return (
    <footer className="bg-[#0B0D10] text-[#F8F9FA] pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-display text-xl font-extrabold tracking-tight text-[#F8F9FA]">
              RAJINDER ARORA &amp; ASSOCIATES
            </div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              Chartered Accountants · GST Research Foundation
            </div>
            <p className="text-sm font-semibold text-[#F8F9FA] pt-1">
              “Aiming GST Literacy for Nation Building.” · “Happy GST”
            </p>
            <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed max-w-sm">
              Corporate finance auditing, system assurance, indirect tax
              litigation advisory, and practical GST training led by CA Rajender
              Arora (FCA, LLB).
            </p>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8B0BC]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#gst-foundation"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  GST Foundation
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F8F9FA] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              SERVICES &amp; EXPERTISE
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8B0BC]">
              <li>GST SCN Management &amp; Appeals</li>
              <li>GSTAT Representation</li>
              <li>ITC Reconciliation &amp; Refunds</li>
              <li>Statutory, Retail &amp; CISA IT Audits</li>
              <li>Corporate Law &amp; Project Finance</li>
              <li>GST Research Foundation Courses</li>
            </ul>
          </div>

          {/* Office Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
              OFFICE LOCATIONS
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#A8B0BC]">
              <div>
                <strong className="text-[#F8F9FA] block">Shastri Nagar:</strong>
                {OFFICE_LOCATIONS.primary.addressLine1}{' '}
                {OFFICE_LOCATIONS.primary.addressLine2}{' '}
                {OFFICE_LOCATIONS.primary.cityPin}
              </div>
              <div>
                <strong className="text-[#F8F9FA] block">Moti Nagar:</strong>
                {OFFICE_LOCATIONS.secondary.addressLine1}{' '}
                {OFFICE_LOCATIONS.secondary.addressLine2}{' '}
                {OFFICE_LOCATIONS.secondary.cityPin}
              </div>
              <div className="pt-2 border-t border-white/10 text-xs font-mono-tabular space-y-1">
                <div>Phone: {phonePlaceholder}</div>
                <div>Email: {emailPlaceholder}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ICAI Professional Disclaimer */}
        <div className="py-6 border-b border-white/10 text-xs text-[#A8B0BC] leading-relaxed">
          <strong className="text-[#F8F9FA]">Professional Disclaimer: </strong>
          In accordance with the guidelines of the Institute of Chartered
          Accountants of India (ICAI), this website is provided solely for
          informational purposes regarding Rajinder Arora &amp; Associates and
          GST Research Foundation. Nothing herein constitutes solicitation,
          advertisement, or formal legal/tax opinion.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A8B0BC]">
          <div>
            &copy; {new Date().getFullYear()} Rajinder Arora &amp; Associates
            (Chartered Accountants). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#C8F542] transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLegalModal('disclaimer')}
              className="hover:text-[#C8F542] transition-colors whitespace-nowrap"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0B0D10]/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="max-w-xl w-full bg-[#12161B] border border-white/20 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-xl font-bold text-[#F8F9FA]">
                {legalModal === 'privacy'
                  ? 'Privacy Policy'
                  : 'Professional Disclaimer'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1.5 border border-white/20 text-[#F8F9FA] hover:border-[#C8F542]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {legalModal === 'privacy' ? (
              <div className="space-y-3 text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                <p>
                  Rajinder Arora &amp; Associates respects the confidentiality
                  of all corporate and individual inquiries submitted through
                  this website.
                </p>
                <p>
                  Information provided in the consultation intake form is used
                  exclusively for scheduling consultations and evaluating tax,
                  audit, or educational inquiries.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                <p>
                  The contents of this website are for informational and
                  educational purposes only and do not constitute formal
                  professional advice or solicitation under the Chartered
                  Accountants Act, 1949.
                </p>
                <p>
                  Viewing this website or submitting a consultation inquiry does
                  not establish a client relationship until a formal engagement
                  is executed.
                </p>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 bg-[#C8F542] text-[#0B0D10] font-display text-xs font-bold tracking-wide"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
