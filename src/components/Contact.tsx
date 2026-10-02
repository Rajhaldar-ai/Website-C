import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Edit3,
  Check,
  Paperclip,
  CheckCircle2,
  MapPin,
  Clock,
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/siteData';

interface ContactProps {
  preselectedService: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  whatsappPlaceholder: string;
  onUpdateContactPlaceholders: (
    phone: string,
    email: string,
    whatsapp: string
  ) => void;
}

export const Contact: React.FC<ContactProps> = ({
  preselectedService,
  phonePlaceholder,
  emailPlaceholder,
  whatsappPlaceholder,
  onUpdateContactPlaceholders,
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState(
    preselectedService || 'GST SCN Management & Appeals'
  );
  const [noticeInfo, setNoticeInfo] = useState('');
  const [message, setMessage] = useState('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    name: string;
    service: string;
    timestamp: string;
  } | null>(null);

  const [isEditingContactInfo, setIsEditingContactInfo] = useState(false);
  const [localPhone, setLocalPhone] = useState(phonePlaceholder);
  const [localEmail, setLocalEmail] = useState(emailPlaceholder);
  const [localWhatsapp, setLocalWhatsapp] = useState(whatsappPlaceholder);

  useEffect(() => {
    if (preselectedService) {
      setServiceRequired(preselectedService);
    }
  }, [preselectedService]);

  const handleSaveContactInfo = () => {
    onUpdateContactPlaceholders(localPhone, localEmail, localWhatsapp);
    setIsEditingContactInfo(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg(
        'Please complete Name, Email, Phone, and Message fields.'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const refCode = `RAA-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      referenceId: refCode,
      name: name.trim(),
      service: serviceRequired,
      timestamp: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0B0D10] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Clear Headline & Office Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                CONTACT &amp; CONSULTATION
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-[#F8F9FA]">
                LET&apos;S DISCUSS{' '}
                <span className="block text-[#A8B0BC]">YOUR NEXT TAX</span>
                <span className="block text-[#C8F542]">
                  OR CORPORATE CHALLENGE.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
                Connect with Rajinder Arora &amp; Associates for professional
                GST, litigation, auditing, corporate finance and advisory
                support.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                OFFICE LOCATIONS · NEW DELHI
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-5 bg-[#12161B] border border-white/15 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-[#C8F542]">
                    <span>{OFFICE_LOCATIONS.primary.label}</span>
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-display text-lg font-bold text-[#F8F9FA]">
                    {OFFICE_LOCATIONS.primary.name}
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                    {OFFICE_LOCATIONS.primary.addressLine1}{' '}
                    {OFFICE_LOCATIONS.primary.addressLine2}{' '}
                    <span className="text-[#F8F9FA] font-medium">
                      {OFFICE_LOCATIONS.primary.cityPin}
                    </span>
                  </address>
                </div>

                <div className="p-5 bg-[#12161B] border border-white/15 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-[#C8F542]">
                    <span>{OFFICE_LOCATIONS.secondary.label}</span>
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-display text-lg font-bold text-[#F8F9FA]">
                    {OFFICE_LOCATIONS.secondary.name}
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                    {OFFICE_LOCATIONS.secondary.addressLine1}{' '}
                    {OFFICE_LOCATIONS.secondary.addressLine2}{' '}
                    <span className="text-[#F8F9FA] font-medium">
                      {OFFICE_LOCATIONS.secondary.cityPin}
                    </span>
                  </address>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 bg-[#12161B] border border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#A8B0BC]">
                  <Clock className="w-4 h-4 text-[#C8F542]" />
                  <span>Working Hours</span>
                </div>
                <span className="text-[#F8F9FA] font-semibold">
                  {OFFICE_LOCATIONS.workingHours}
                </span>
              </div>
            </div>

            {/* Direct Contact Placeholders */}
            <div className="p-5 bg-[#12161B] border border-white/15 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <span className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                  DIRECT CONTACT DETAILS
                </span>
                <button
                  type="button"
                  onClick={() =>
                    isEditingContactInfo
                      ? handleSaveContactInfo()
                      : setIsEditingContactInfo(true)
                  }
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/20 text-xs font-medium text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap"
                >
                  {isEditingContactInfo ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C8F542]" />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[#A8B0BC]">Phone:</span>
                  {isEditingContactInfo ? (
                    <input
                      type="text"
                      value={localPhone}
                      onChange={(e) => setLocalPhone(e.target.value)}
                      className="bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <span className="font-mono-tabular text-[#F8F9FA]">
                      {phonePlaceholder}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[#A8B0BC]">Email:</span>
                  {isEditingContactInfo ? (
                    <input
                      type="text"
                      value={localEmail}
                      onChange={(e) => setLocalEmail(e.target.value)}
                      className="bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <span className="font-mono-tabular text-[#F8F9FA]">
                      {emailPlaceholder}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[#A8B0BC]">WhatsApp:</span>
                  {isEditingContactInfo ? (
                    <input
                      type="text"
                      value={localWhatsapp}
                      onChange={(e) => setLocalWhatsapp(e.target.value)}
                      className="bg-[#0B0D10] border border-[#C8F542] px-2.5 py-1 text-xs text-[#F8F9FA] focus:outline-none"
                    />
                  ) : (
                    <span className="font-mono-tabular text-[#F8F9FA]">
                      {whatsappPlaceholder}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#12161B] border border-white/15 p-6 sm:p-10 lg:p-12">
            <div className="pb-6 mb-8 border-b border-white/10">
              <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold">
                CONSULTATION INTAKE FORM
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F9FA] mt-1">
                Book a Corporate Consultation
              </h3>
            </div>

            {submittedData ? (
              <div className="p-8 bg-[#0B0D10] border border-[#C8F542] space-y-6">
                <div className="flex items-center gap-3 text-[#C8F542]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="font-mono-tabular text-xs font-bold">
                    CONSULTATION REQUEST LOGGED · REF {submittedData.referenceId}
                  </span>
                </div>

                <h4 className="font-display text-2xl font-bold text-[#F8F9FA]">
                  Thank you, {submittedData.name}. Your inquiry has been
                  prepared.
                </h4>

                <div className="p-4 bg-[#12161B] border border-white/10 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A8B0BC]">Service Selected:</span>
                    <span className="text-[#F8F9FA] font-medium">
                      {submittedData.service}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8B0BC]">Submitted:</span>
                    <span className="text-[#F8F9FA]">
                      {submittedData.timestamp}
                    </span>
                  </div>
                  {attachedFileName && (
                    <div className="flex justify-between">
                      <span className="text-[#A8B0BC]">Referenced File:</span>
                      <span className="text-[#C8F542]">{attachedFileName}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setName('');
                    setOrganization('');
                    setEmail('');
                    setPhone('');
                    setNoticeInfo('');
                    setMessage('');
                    setAttachedFileName(null);
                  }}
                  className="px-6 py-3 border border-white/25 text-xs font-semibold text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {errorMsg && (
                  <div
                    role="alert"
                    className="p-4 bg-[#0B0D10] border border-[#C8F542] text-xs font-medium text-[#C8F542]"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Business / Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company or Firm Name"
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] focus:border-[#C8F542] focus:outline-none transition-colors"
                    >
                      <option value="GST SCN Management & Appeals">
                        GST SCN Management &amp; Appeals
                      </option>
                      <option value="GSTAT Representation">
                        GSTAT Representation
                      </option>
                      <option value="ITC Optimization & Refund Filing">
                        ITC Optimization &amp; Refund Filing
                      </option>
                      <option value="Search, Seizure & Transit Detention Defense">
                        Search, Seizure &amp; Transit Detention Defense
                      </option>
                      <option value="Statutory, Risk Assurance & Retail Audits">
                        Statutory, Risk Assurance &amp; Retail Audits
                      </option>
                      <option value="IT / CISA Auditing">
                        IT / CISA Auditing
                      </option>
                      <option value="Corporate Law Advisory & Project Financing">
                        Corporate Law Advisory &amp; Project Financing
                      </option>
                      <option value="GST Research Foundation Training">
                        GST Research Foundation Training
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notice"
                      className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                    >
                      Notice / Case Information
                    </label>
                    <input
                      id="contact-notice"
                      type="text"
                      value={noticeInfo}
                      onChange={(e) => setNoticeInfo(e.target.value)}
                      placeholder="e.g., Show Cause Notice / Appeal / Audit FY"
                      className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#F8F9FA] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your tax matter, audit requirement, corporate advisory need, or GST training inquiry..."
                    className="w-full bg-[#0B0D10] border border-white/20 px-4 py-3 text-sm text-[#F8F9FA] placeholder:text-[#A8B0BC]/50 focus:border-[#C8F542] focus:outline-none transition-colors"
                  />
                </div>

                {/* Optional Document Reference */}
                <div className="p-4 bg-[#0B0D10] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-[#F8F9FA] flex items-center gap-2">
                      <Paperclip className="w-3.5 h-3.5 text-[#C8F542]" />
                      <span>Optional Document Reference</span>
                    </div>
                    <p className="text-xs text-[#A8B0BC]">
                      References your file name locally for consultation intake.
                    </p>
                  </div>

                  <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-white/20 text-xs font-medium text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap shrink-0">
                    <span>
                      {attachedFileName ? attachedFileName : 'Select File'}
                    </span>
                    <input
                      type="file"
                      onChange={(e) =>
                        setAttachedFileName(e.target.files?.[0]?.name || null)
                      }
                      className="hidden"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C8F542] text-[#0B0D10] font-display text-xs sm:text-sm font-bold tracking-wide hover:bg-[#d6ff59] transition-colors whitespace-nowrap group"
                >
                  <span>BOOK A CORPORATE CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
