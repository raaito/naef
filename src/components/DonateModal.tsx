import React, { useState, useEffect } from 'react';
import { X, Heart, Shield, Check, ArrowRight } from 'lucide-react';
import { PROGRAM_PILLARS } from '../utils/navigation.ts';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPillar, setSelectedPillar] = useState('all');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [submitted, setSubmitted] = useState(false);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-hidden border border-[#263B2A]/15 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close donate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-wider uppercase font-sans mb-1.5">
              <Heart className="w-4 h-4 text-[#F97827] fill-current" />
              <span>Support Our Mission</span>
            </div>

            <h3 id="donate-modal-title" className="font-heading font-extrabold text-2xl text-[#263B2A]">
              Empower Grassroots Communities
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
              Your support powers sustainable programs across peace, gender equality, civic participation, education, and climate action.
            </p>

            {/* Frequency Selector */}
            <div className="mt-6 flex items-center p-1 bg-[#F3F5F1] rounded-xl border border-[#263B2A]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`flex-1 py-2 text-center rounded-lg transition-all ${
                  frequency === 'once' ? 'bg-white text-[#263B2A] shadow-xs' : 'text-[#292929]/70 hover:text-[#263B2A]'
                }`}
              >
                One-time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2 text-center rounded-lg transition-all ${
                  frequency === 'monthly' ? 'bg-white text-[#263B2A] shadow-xs' : 'text-[#292929]/70 hover:text-[#263B2A]'
                }`}
              >
                Monthly Support
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[25, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                    selectedAmount === amt
                      ? 'bg-[#263B2A] text-white border-[#263B2A]'
                      : 'bg-white border-[#263B2A]/15 text-[#292929] hover:border-[#267F08]'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Designation / Pillar */}
            <div className="mt-4">
              <label htmlFor="pillar-select" className="block text-xs font-semibold text-[#292929]/80 mb-1.5 font-sans">
                Direct my contribution to:
              </label>
              <select
                id="pillar-select"
                value={selectedPillar}
                onChange={(e) => setSelectedPillar(e.target.value)}
                className="w-full text-xs sm:text-sm bg-white border border-[#263B2A]/20 rounded-xl px-3.5 py-2.5 text-[#292929] focus:outline-none focus:border-[#267F08]"
              >
                <option value="all">Where Most Needed (All 5 Pillars)</option>
                {PROGRAM_PILLARS.map((p) => (
                  <option key={p.id} value={p.id}>
                    Pillar 0{p.pillarNumber}: {p.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Action */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <span>Proceed with ${selectedAmount === 'custom' ? (customAmount || 50) : selectedAmount} {frequency === 'monthly' ? '/ Month' : ''}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#292929]/60">
              <Shield className="w-3.5 h-3.5 text-[#267F08]" />
              <span>Secure placeholder donation processing · Verified NGO standard</span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#267F08]/15 text-[#267F08] flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-heading font-bold text-xl text-[#263B2A]">
              Thank You for Supporting NAEF
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#292929]/75 max-w-sm mx-auto">
              This interactive demonstration illustrates the donation workflow. Once the official payment gateway is configured, this will process authentic gifts.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#263B2A] text-white rounded-full text-xs font-semibold hover:bg-[#1A281D] transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
