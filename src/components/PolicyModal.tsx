import React, { useEffect } from 'react';
import { X, Shield, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  policyType: 'privacy' | 'safeguarding' | 'conduct' | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !policyType) return null;

  const contentMap = {
    privacy: {
      title: 'Confidentiality & Data Protection Policy',
      kicker: 'Handbook Section 9.7 · Governance',
      summary:
        'Nana Advocacy and Empowerment Foundation (NAEF) protects all confidential information obtained through its operations, safeguarding the personal data of beneficiaries, donors, volunteers, and partners in line with Nigeria Data Protection Regulation (NDPR) and international NGO standards.',
      sections: [
        'Protected Records: Strict protection covers beneficiary records, personal data, internal reports, financial information, donor information, and official organizational documents.',
        'Use & Non-Disclosure: Confidential records are never disclosed without authorization unless required by law or urgent safeguarding obligations, and personal data is never sold or traded.',
        'Informed Consent: Written informed consent is mandatory prior to collecting personal information, photographs, videos, or testimonials—including parental or guardian consent before engaging with minors.',
      ],
    },
    safeguarding: {
      title: 'Safeguarding & Beneficiary Protection Policy',
      kicker: 'Handbook Section 6 & 9.6 · Zero Tolerance',
      summary:
        'NAEF enforces a strict zero-tolerance policy against all forms of abuse, exploitation, neglect, harassment, and misconduct across every program center, field activity, and online engagement.',
      sections: [
        'Child & Minor Protection: All members must prioritize beneficiary safety, maintain strict professional boundaries, follow child protection standards, and secure parental or guardian consent before engaging minors.',
        'Zero Exploitation or Abuse: Sexual exploitation, abuse, harassment, or inappropriate relationships with beneficiaries are strictly prohibited across all staff, trustees, volunteers, interns, consultants, and partners.',
        'Confidential Reporting & Non-Retaliation: Every safeguarding concern must be reported immediately through confidential channels; investigations are fair and retaliation against good-faith reporters is strictly prohibited.',
      ],
    },
    conduct: {
      title: 'Organizational Code of Conduct — "Advocacy Starts With You"',
      kicker: 'Handbook Sections 7, 9, 12 & 13',
      summary:
        'Applying to the Board of Trustees, Advisory Council, Executive Management Team, Staff, State Coordinators, Program Leads, Volunteers, Interns, Consultants, and Partners, this Code upholds NAEF’s seven Core Values: Integrity, Accountability, Inclusion, Service, Collaboration, Impact, and Transparency.',
      sections: [
        'Anti-Corruption, Bribery & Conflicts of Interest: NAEF strictly prohibits bribes, fraud, extortion, kickbacks, falsification of records, or misuse of funds/branding; actual or potential conflicts of interest must be declared and recused.',
        'Inclusion, Dignity & Media Integrity: Zero tolerance toward discrimination or harassment based on gender, ethnicity, religion, disability, age, or status; only authorized personnel may issue official statements or fundraise under NAEF’s name and logo.',
        'Discipline & Complaints Mechanism: Verified breaches carry structured sanctions—verbal warning, written warning, suspension, removal from duties, termination of engagement, and referral to relevant authorities where necessary.',
      ],
    },
  };

  const current = contentMap[policyType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close policy dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-2">
          <Shield className="w-4 h-4 text-[#267F08]" />
          <span>{current.kicker}</span>
        </div>

        <h3 id="policy-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight">
          {current.title}
        </h3>

        <div className="mt-4 p-4 rounded-xl bg-[#F3F5F1] text-xs sm:text-sm text-[#263B2A] leading-relaxed font-sans">
          {current.summary}
        </div>

        <div className="mt-6 space-y-3 pt-4 border-t border-[#263B2A]/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
            Core Principles
          </h4>
          {current.sections.map((sec, i) => (
            <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]/80 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
              <span>{sec}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#263B2A] text-white rounded-full text-xs font-semibold hover:bg-[#1A281D] transition-colors font-sans"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
