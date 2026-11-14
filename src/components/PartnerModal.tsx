import React, { useState, useEffect } from 'react';
import { X, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('foundation');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-hidden border border-[#263B2A]/15 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close partner modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-wider uppercase font-sans mb-1.5">
              <Handshake className="w-4 h-4 text-[#F97827]" />
              <span>Institutional & CSR Partnerships</span>
            </div>

            <h3 id="partner-modal-title" className="font-heading font-extrabold text-2xl text-[#263B2A]">
              Partner With NAEF
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
              NAEF collaborates with government agencies, NGOs and CSOs, donor organizations, and private sector partners. All partnerships are strictly mission-aligned, transparent, and formally approved under our governance charter.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-[#292929]/80 mb-1 font-sans">
                  Organization / Entity Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. West Africa Impact Alliance"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-[#263B2A]/20 rounded-xl px-3.5 py-2.5 text-[#292929] focus:outline-none focus:border-[#267F08]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292929]/80 mb-1 font-sans">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Emeka Obi"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-[#263B2A]/20 rounded-xl px-3.5 py-2.5 text-[#292929] focus:outline-none focus:border-[#267F08]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292929]/80 mb-1 font-sans">
                  Institutional Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. partnerships@organization.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-[#263B2A]/20 rounded-xl px-3.5 py-2.5 text-[#292929] focus:outline-none focus:border-[#267F08]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292929]/80 mb-1 font-sans">
                  Partnership Category
                </label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-[#263B2A]/20 rounded-xl px-3.5 py-2.5 text-[#292929] focus:outline-none focus:border-[#267F08]"
                >
                  <option value="foundation">Philanthropic Grant or Foundation</option>
                  <option value="csr">Corporate Social Responsibility (CSR)</option>
                  <option value="academic">Academic & Action Research</option>
                  <option value="government">Government or Multilateral Agency</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <span>Submit Partnership Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#267F08]/15 text-[#267F08] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-heading font-bold text-xl text-[#263B2A]">
              Inquiry Submitted
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#292929]/75 max-w-sm mx-auto">
              Thank you, {contactName}. The NAEF Strategic Partnerships desk will review {orgName}'s inquiry and follow up at {email}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#263B2A] text-white rounded-full text-xs font-semibold hover:bg-[#1A281D] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
