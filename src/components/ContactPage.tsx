import React, { useState } from 'react';
import {
  DEPARTMENT_CHANNELS,
  FIELD_BUREAUS,
  CONTACT_FAQS,
  BureauZone,
  ContactSubmissionInput,
  getDepartmentChannelById,
  filterBureausByZone,
  validateContactSubmission,
  generateInquiryReferenceId,
} from '../utils/contactPage.ts';
import {
  ChevronRight,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Copy,
  Check,
  AlertCircle,
  Heart,
  Users,
  Handshake,
  Building2,
} from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onPartnerClick: () => void;
  onOpenPolicy: (policy: 'privacy' | 'safeguarding' | 'conduct') => void;
}

const INITIAL_FORM_STATE: ContactSubmissionInput = {
  fullName: '',
  email: '',
  organization: '',
  departmentId: 'general',
  preferredBureauId: 'abuja-hq',
  subject: '',
  message: '',
  consentGiven: false,
};

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onDonateClick,
  onVolunteerClick,
  onPartnerClick,
  onOpenPolicy,
}) => {
  const [formData, setFormData] = useState<ContactSubmissionInput>(INITIAL_FORM_STATE);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactSubmissionInput, string>>>({});
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    departmentTitle: string;
    departmentEmail: string;
    senderEmail: string;
  } | null>(null);

  const [selectedZone, setSelectedZone] = useState<BureauZone>('all');
  const [copiedBureauId, setCopiedBureauId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(CONTACT_FAQS[0]?.id ?? null);

  const activeDepartment = getDepartmentChannelById(formData.departmentId);
  const visibleBureaus = filterBureausByZone(FIELD_BUREAUS, selectedZone);

  const handleFieldChange = <K extends keyof ContactSubmissionInput>(
    field: K,
    value: ContactSubmissionInput[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSelectDepartment = (deptId: string) => {
    handleFieldChange('departmentId', deptId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactSubmission(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    const refId = generateInquiryReferenceId(formData.departmentId);
    const dept = getDepartmentChannelById(formData.departmentId);

    setSubmittedRefId(refId);
    setSubmittedSummary({
      departmentTitle: dept.title,
      departmentEmail: dept.email,
      senderEmail: formData.email.trim(),
    });
    setFormErrors({});
  };

  const handleResetForm = (overrideDepartmentId?: string) => {
    setSubmittedRefId(null);
    setSubmittedSummary(null);
    setFormData({
      ...INITIAL_FORM_STATE,
      departmentId: overrideDepartmentId ?? formData.departmentId,
    });
  };

  const handleCopyAddress = (bureauId: string, address: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(address).catch(() => {});
    }
    setCopiedBureauId(bureauId);
    setTimeout(() => {
      setCopiedBureauId((current) => (current === bureauId ? null : current));
    }, 2500);
  };

  return (
    <div className="bg-[#FAF9F6] text-[#292929] pt-24 sm:pt-28 pb-20 overflow-hidden font-sans">
      {/* CHAPTER 1: Hero & Response Charter */}
      <section className="relative pt-8 pb-16 sm:pb-20 lg:pb-24 border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#292929]/60 font-sans mb-8">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#267F08] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#263B2A]/30" />
            <span className="text-[#263B2A] font-semibold">Contact Us</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-6">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Secretariat & Regional Field Bureaus</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12]">
              Connect With Our Secretariat & Field Desks.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#292929]/80 font-sans leading-relaxed max-w-3xl">
              Whether you represent a grassroots community association, an institutional funding partner, a media desk, or a safeguarding inquiry, reach the designated NAEF bureau directly below.
            </p>
          </div>

          {/* 3-Card Response Charter Summary */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#263B2A]/10 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#F97827] mb-2">
                <MapPin className="w-4 h-4" />
                <span>National Secretariat</span>
              </div>
              <p className="font-heading font-bold text-base text-[#263B2A]">
                Central Business District, Abuja
              </p>
              <p className="mt-1.5 text-xs text-[#292929]/75 leading-relaxed">
                Plot 14, Community Advocacy Way, Abuja, FCT · Mon–Fri, 08:30–16:30 WAT
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#263B2A]/10 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#267F08] mb-2">
                <Mail className="w-4 h-4" />
                <span>Direct Institutional Routing</span>
              </div>
              <p className="font-heading font-bold text-base text-[#263B2A]">
                info@naef-foundation.org
              </p>
              <p className="mt-1.5 text-xs text-[#292929]/75 leading-relaxed">
                5 dedicated departmental mailboxes with structured 24-hour to 3-day SLA acknowledgments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#263B2A]/10 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#263B2A] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#267F08]" />
                <span>Safeguarding & Ethics</span>
              </div>
              <p className="font-heading font-bold text-base text-[#263B2A]">
                Confidential Escalation Channel
              </p>
              <p className="mt-1.5 text-xs text-[#292929]/75 leading-relaxed">
                Protected whistleblower intake reviewed directly by NAEF’s independent Safeguarding Officers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: Departmental Routing & Direct Inquiry Form */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Department Channel Selector + Quick Action Shortcuts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                  <span>Step 1 · Select Routing Desk</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] tracking-tight">
                  Departmental Channels.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#292929]/75 leading-relaxed">
                  Choose the desk that aligns with your inquiry to automatically route your message and display current response timelines.
                </p>
              </div>

              <div className="space-y-3" role="radiogroup" aria-label="Select NAEF Department">
                {DEPARTMENT_CHANNELS.map((dept) => {
                  const isSelected = formData.departmentId === dept.id;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => handleSelectDepartment(dept.id)}
                      aria-pressed={isSelected}
                      className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#263B2A] text-white border-[#263B2A] shadow-md'
                          : 'bg-white text-[#292929] border-[#263B2A]/12 hover:border-[#267F08]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-heading font-bold text-sm sm:text-base">
                            {dept.title}
                          </div>
                          <div
                            className={`text-[11px] font-mono mt-0.5 ${
                              isSelected ? 'text-[#F97827]' : 'text-[#267F08]'
                            }`}
                          >
                            {dept.email}
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                            isSelected
                              ? 'bg-white/15 text-white'
                              : 'bg-[#F3F5F1] text-[#263B2A]'
                          }`}
                        >
                          {dept.sla}
                        </span>
                      </div>
                      <p
                        className={`mt-2.5 text-xs leading-relaxed ${
                          isSelected ? 'text-white/80' : 'text-[#292929]/75'
                        }`}
                      >
                        {dept.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Dedicated Action Modals Shortcut Card */}
              <div className="p-6 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#263B2A]">
                  Need an Immediate Action Flow?
                </div>
                <p className="text-xs text-[#292929]/75 leading-relaxed">
                  Skip general correspondence by launching our structured intake modals directly:
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={onDonateClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>Donate</span>
                  </button>
                  <button
                    type="button"
                    onClick={onVolunteerClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5 text-[#267F08]" />
                    <span>Volunteer</span>
                  </button>
                  <button
                    type="button"
                    onClick={onPartnerClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FAF9F6] text-[#263B2A] border border-[#263B2A]/15 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Handshake className="w-3.5 h-3.5 text-[#F97827]" />
                    <span>Partner Brief</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Validated Contact Form (7 cols) */}
            <div id="contact-inquiry-form" className="lg:col-span-7 lg:sticky lg:top-28 scroll-mt-28">
              <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#263B2A]/15 shadow-lg">
                {submittedRefId && submittedSummary ? (
                  <div className="py-6 space-y-6" role="status" aria-live="polite">
                    <div className="w-14 h-14 rounded-2xl bg-[#267F08]/10 text-[#267F08] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#267F08]">
                        Correspondence Logged
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] mt-1">
                        Your Inquiry Has Been Queued.
                      </h3>
                      <p className="mt-3 text-sm text-[#292929]/80 leading-relaxed">
                        Thank you for contacting Nana Advocacy and Empowerment Foundation. Your message has been routed to{' '}
                        <strong className="text-[#263B2A]">{submittedSummary.departmentTitle}</strong> (
                        <span className="font-mono text-xs">{submittedSummary.departmentEmail}</span>).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] uppercase font-bold tracking-wider text-[#292929]/60 block">
                          Inquiry Reference ID
                        </span>
                        <span
                          data-testid="contact-reference-id"
                          className="font-mono font-bold text-lg text-[#263B2A]"
                        >
                          {submittedRefId}
                        </span>
                      </div>
                      <div className="text-xs text-[#292929]/75">
                        Acknowledgment copy targeted to:{' '}
                        <strong className="text-[#263B2A]">{submittedSummary.senderEmail}</strong>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleResetForm()}
                        className="px-6 py-3 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                      <button
                        type="button"
                        onClick={onNavigateHome}
                        className="px-6 py-3 rounded-full bg-[#F3F5F1] hover:bg-[#263B2A]/10 text-[#263B2A] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Return to Homepage
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Active Routing Banner */}
                    <div className="p-4 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#267F08] block">
                          Step 2 · Routing Target
                        </span>
                        <span className="font-heading font-bold text-sm text-[#263B2A]">
                          {activeDepartment.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#263B2A]/80 bg-white px-3 py-1 rounded-full border border-[#263B2A]/10">
                        {activeDepartment.email}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-full-name"
                          className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                        >
                          Full Name <span className="text-[#F97827]">*</span>
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleFieldChange('fullName', e.target.value)}
                          placeholder="e.g., Ibrahim Danjuma"
                          aria-invalid={Boolean(formErrors.fullName)}
                          className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:ring-1 transition-all ${
                            formErrors.fullName
                              ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                              : 'border-[#263B2A]/15 focus:border-[#267F08] focus:ring-[#267F08]'
                          }`}
                        />
                        {formErrors.fullName && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{formErrors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                        >
                          Email Address <span className="text-[#F97827]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          placeholder="you@organization.org"
                          aria-invalid={Boolean(formErrors.email)}
                          className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:ring-1 transition-all ${
                            formErrors.email
                              ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                              : 'border-[#263B2A]/15 focus:border-[#267F08] focus:ring-[#267F08]'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{formErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-organization"
                          className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                        >
                          Organization / Community Group (Optional)
                        </label>
                        <input
                          id="contact-organization"
                          type="text"
                          value={formData.organization}
                          onChange={(e) => handleFieldChange('organization', e.target.value)}
                          placeholder="Association, NGO, or Agency"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#263B2A]/15 text-sm text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:border-[#267F08] focus:ring-1 focus:ring-[#267F08] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-bureau"
                          className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                        >
                          Preferred Office / Field Desk
                        </label>
                        <select
                          id="contact-bureau"
                          value={formData.preferredBureauId}
                          onChange={(e) => handleFieldChange('preferredBureauId', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#263B2A]/15 text-sm text-[#292929] focus:outline-none focus:border-[#267F08] focus:ring-1 focus:ring-[#267F08] transition-all"
                        >
                          {FIELD_BUREAUS.map((bureau) => (
                            <option key={bureau.id} value={bureau.id}>
                              {bureau.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                      >
                        Subject <span className="text-[#F97827]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleFieldChange('subject', e.target.value)}
                        placeholder="Concise summary of your inquiry"
                        aria-invalid={Boolean(formErrors.subject)}
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:ring-1 transition-all ${
                          formErrors.subject
                            ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                            : 'border-[#263B2A]/15 focus:border-[#267F08] focus:ring-[#267F08]'
                        }`}
                      />
                      {formErrors.subject && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.subject}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#263B2A] mb-1.5"
                      >
                        Message Details <span className="text-[#F97827]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleFieldChange('message', e.target.value)}
                        placeholder="Share relevant community context, timelines, or how our desk can assist..."
                        aria-invalid={Boolean(formErrors.message)}
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:ring-1 transition-all resize-y ${
                          formErrors.message
                            ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                            : 'border-[#263B2A]/15 focus:border-[#267F08] focus:ring-[#267F08]'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          id="contact-consent"
                          type="checkbox"
                          checked={formData.consentGiven}
                          onChange={(e) => handleFieldChange('consentGiven', e.target.checked)}
                          className="mt-1 w-4 h-4 rounded border-[#263B2A]/30 text-[#267F08] focus:ring-[#267F08]"
                        />
                        <span className="text-xs text-[#292929]/80 leading-relaxed">
                          I acknowledge that NAEF will process this correspondence strictly for institutional response purposes in line with its{' '}
                          <button
                            type="button"
                            onClick={() => onOpenPolicy('privacy')}
                            className="text-[#267F08] font-semibold underline hover:text-[#263B2A] cursor-pointer"
                          >
                            Privacy & Data Protection Policy
                          </button>
                          .
                        </span>
                      </label>
                      {formErrors.consentGiven && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.consentGiven}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#263B2A]/10">
                      <span className="text-[11px] text-[#292929]/60">
                        Expected SLA: <strong className="text-[#263B2A]">{activeDepartment.sla}</strong>
                      </span>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: Abuja HQ & Regional Field Bureaus Directory */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[#F3F5F1] border-y border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-2">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                <span>Geographic Footprint</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
                Abuja Secretariat & Regional Field Bureaus.
              </h2>
              <p className="mt-3 text-sm text-[#292929]/75 leading-relaxed">
                Regional field office street lines and extension numbers shown below are clearly designated institutional placeholders while community hub directories finalize annual updates.
              </p>
            </div>

            {/* Zone Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter bureaus by geopolitical zone">
              {(
                [
                  { id: 'all', label: 'All Bureaus' },
                  { id: 'FCT', label: 'Abuja (FCT)' },
                  { id: 'North-Central', label: 'North-Central' },
                  { id: 'North-West', label: 'North-West' },
                ] as { id: BureauZone; label: string }[]
              ).map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedZone(zone.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedZone === zone.id
                      ? 'bg-[#263B2A] text-white shadow-xs'
                      : 'bg-white text-[#292929] border border-[#263B2A]/15 hover:border-[#267F08]'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {visibleBureaus.map((bureau) => {
              const isCopied = copiedBureauId === bureau.id;
              return (
                <div
                  key={bureau.id}
                  className={`p-7 sm:p-8 rounded-3xl bg-white border transition-all flex flex-col justify-between ${
                    bureau.isHeadquarters
                      ? 'border-[#267F08]/40 shadow-md'
                      : 'border-[#263B2A]/10 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span
                          className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-2 ${
                            bureau.isHeadquarters
                              ? 'bg-[#267F08]/10 text-[#267F08]'
                              : 'bg-[#F97827]/10 text-[#F97827]'
                          }`}
                        >
                          {bureau.zone} · {bureau.roleLabel}
                        </span>
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#263B2A]">
                          {bureau.name}
                        </h3>
                      </div>
                      <Building2 className="w-5 h-5 text-[#263B2A]/40 shrink-0 mt-1" />
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-[#292929]/80 mt-4">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#F97827] shrink-0 mt-0.5" />
                        <span>{bureau.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#267F08] shrink-0" />
                        <span className="font-mono text-xs">{bureau.phonePlaceholder}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#263B2A]/60 shrink-0" />
                        <span>{bureau.operatingHours}</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#263B2A]/10">
                      <div className="text-[11px] font-semibold text-[#263B2A] mb-2">
                        Focal Program Pillars:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {bureau.focalPillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#263B2A]/10 text-[11px] text-[#292929]/80"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-[#292929]/70 italic">{bureau.visitingNote}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#263B2A]/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleCopyAddress(bureau.id, bureau.address)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263B2A] hover:text-[#267F08] transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#267F08]" />
                          <span className="text-[#267F08]">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${bureau.email}?subject=${encodeURIComponent(`Inquiry for ${bureau.name}`)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97827] hover:text-[#E46618] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Desk</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHAPTER 4: Confidential Safeguarding & Whistleblower Escalation */}
      <section className="py-20 sm:py-24 bg-[#263B2A] text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F97827] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Tolerance Safeguarding Charter</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Confidential Safeguarding & Whistleblower Escalation.
              </h2>
              <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-2xl">
                Community participants, minors, staff, and partners have protected access to independent safeguarding officers to report misconduct, harassment, or ethical breaches without fear of retaliation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  handleResetForm('safeguarding');
                  const el = document.getElementById('contact-inquiry-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Route to Safeguarding Desk
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('safeguarding')}
                className="w-full px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Read Safeguarding Policy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: Visitor Protocols & Verification FAQs */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-2">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Visitor & Verification Protocols</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Frequently Asked Contact Questions.
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {CONTACT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-[#263B2A]/12 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F3F5F1]/60 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-[#263B2A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#267F08] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#292929]/80 leading-relaxed border-t border-[#263B2A]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
