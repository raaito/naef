export type BureauZone = 'all' | 'FCT' | 'North-Central' | 'North-West';

export interface FieldBureau {
  id: string;
  name: string;
  roleLabel: string;
  zone: Exclude<BureauZone, 'all'>;
  state: string;
  address: string;
  phonePlaceholder: string;
  email: string;
  operatingHours: string;
  focalPillars: string[];
  visitingNote: string;
  isHeadquarters?: boolean;
}

export interface DepartmentChannel {
  id: string;
  title: string;
  email: string;
  sla: string;
  description: string;
  recommendedFor: string;
  badgeColor: 'green' | 'orange' | 'forest';
}

export interface ContactFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ContactSubmissionInput {
  fullName: string;
  email: string;
  organization: string;
  departmentId: string;
  preferredBureauId: string;
  subject: string;
  message: string;
  consentGiven: boolean;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactSubmissionInput, string>>;
}

export const DEPARTMENT_CHANNELS: DepartmentChannel[] = [
  {
    id: 'general',
    title: 'General & Program Inquiries',
    email: 'info@naef-foundation.org',
    sla: 'Response within 2 business days',
    description:
      'Community referrals, grassroots program questions, scholarship information, and local stakeholder correspondence.',
    recommendedFor: 'Community members, educators & local associations',
    badgeColor: 'green',
  },
  {
    id: 'partnerships',
    title: 'Institutional Partnerships & Grants',
    email: 'partnerships@naef-foundation.org',
    sla: 'Response within 2–3 business days',
    description:
      'Co-funding proposals, multilateral agency coordination, CSR frameworks, and technical implementation Memoranda of Understanding.',
    recommendedFor: 'Donors, foundations, UN agencies & corporate partners',
    badgeColor: 'orange',
  },
  {
    id: 'media',
    title: 'Media & Communications Bureau',
    email: 'media@naef-foundation.org',
    sla: 'Press response within 24 hours',
    description:
      'Official statements, field visit accreditation for journalists, documentary permissions, and policy brief citations.',
    recommendedFor: 'Journalists, researchers & documentary producers',
    badgeColor: 'forest',
  },
  {
    id: 'volunteer',
    title: 'Volunteer & Youth Corps Desk',
    email: 'volunteer@naef-foundation.org',
    sla: 'Response within 3 business days',
    description:
      'Field facilitator onboarding, NYSC community service placements, pro-bono legal or technical mentorship.',
    recommendedFor: 'Youth facilitators, mentors & technical specialists',
    badgeColor: 'green',
  },
  {
    id: 'safeguarding',
    title: 'Confidential Safeguarding & Ethics',
    email: 'safeguarding@naef-foundation.org',
    sla: 'Priority review within 24 hours',
    description:
      'Independent whistleblower escalation, beneficiary protection concerns, and Code of Conduct compliance inquiries.',
    recommendedFor: 'Beneficiaries, staff, partners & community monitors',
    badgeColor: 'orange',
  },
];

export const FIELD_BUREAUS: FieldBureau[] = [
  {
    id: 'abuja-hq',
    name: 'Abuja National Headquarters',
    roleLabel: 'National Secretariat & Policy Hub',
    zone: 'FCT',
    state: 'Federal Capital Territory (Abuja)',
    address: 'Plot 14, Community Advocacy Way, Central Business District, Abuja, FCT, Nigeria',
    phonePlaceholder: '+234 (0) 901 NAEF NGO',
    email: 'info@naef-foundation.org',
    operatingHours: 'Mon – Fri · 08:30 – 16:30 WAT',
    focalPillars: ['Civic Engagement Platform', 'Institutional Governance', 'National Advocacy'],
    visitingNote: 'Prior appointment recommended for donor briefings and document verification.',
    isHeadquarters: true,
  },
  {
    id: 'plateau-desk',
    name: 'Plateau State Peace & Mediation Desk',
    roleLabel: 'Regional Field Office (Placeholder Address)',
    zone: 'North-Central',
    state: 'Plateau State (Jos)',
    address: 'Suite 04, Peace Circle Annex, Rayfield Road, Jos, Plateau State (Regional Placeholder)',
    phonePlaceholder: '+234 (0) 901 NAEF EXT-201',
    email: 'info@naef-foundation.org',
    operatingHours: 'Mon – Fri · 09:00 – 16:00 WAT',
    focalPillars: ['Peace Naija Initiative', 'Civic Engagement Platform'],
    visitingNote: 'Houses community dialogue facilitators and traditional council liaison officers.',
  },
  {
    id: 'kaduna-bureau',
    name: 'Kaduna Women & Climate Field Bureau',
    roleLabel: 'Regional Field Office (Placeholder Address)',
    zone: 'North-West',
    state: 'Kaduna State',
    address: 'No. 18, Women Resilience Hub Lane, Barnawa, Kaduna State (Regional Placeholder)',
    phonePlaceholder: '+234 (0) 901 NAEF EXT-304',
    email: 'info@naef-foundation.org',
    operatingHours: 'Mon – Fri · 09:00 – 16:00 WAT',
    focalPillars: ["Women & Girls' Empowerment Center", 'Climate & Environmental Action Platform'],
    visitingNote: 'Coordinates cooperative vocational hubs and agroforestry nursery partners.',
  },
  {
    id: 'nasarawa-desk',
    name: 'Nasarawa & Benue Education Support Desk',
    roleLabel: 'Regional Field Office (Placeholder Address)',
    zone: 'North-Central',
    state: 'Nasarawa State (Lafia / Keffi Corridor)',
    address: 'Plot 09, Learning Access Boulevard, Lafia, Nasarawa State (Regional Placeholder)',
    phonePlaceholder: '+234 (0) 901 NAEF EXT-402',
    email: 'info@naef-foundation.org',
    operatingHours: 'Mon – Fri · 09:00 – 16:00 WAT',
    focalPillars: ['Education Support & Development Center', 'Peace Naija Initiative'],
    visitingNote: 'Supports rural school mentorship circles and literacy hub distribution.',
  },
];

export const CONTACT_FAQS: ContactFaq[] = [
  {
    id: 'faq-verification',
    question: 'How does NAEF evaluate and verify institutional partnerships?',
    answer:
      'NAEF collaborates with government agencies, NGOs and CSOs, donor organizations, and private sector partners. Per Section 10 of our Organizational Handbook, all partnerships must be mission-aligned, transparent, and formally approved through our Partnerships & Grants desk (partnerships@naef-foundation.org).',
  },
  {
    id: 'faq-visit',
    question: 'Can community groups or external researchers visit NAEF field offices without an appointment?',
    answer:
      'Community members seeking local referrals or safeguarding guidance are welcomed during operating hours at our regional desks. Institutional delegations, media crews, and external researchers are asked to schedule at least 72 hours ahead in accordance with our Communication & Media Policy.',
  },
  {
    id: 'faq-safeguarding',
    question: 'How are confidential safeguarding or misconduct complaints handled?',
    answer:
      'Under NAEF’s Safeguarding Policy and Discipline & Complaints Mechanism, all complaints are treated confidentially and investigated fairly with strict prohibition of retaliation against good-faith reporters. Verified violations carry disciplinary sanctions up to termination and referral to authorities.',
  },
  {
    id: 'faq-grants',
    question: 'Does NAEF accept unsolicited funding applications from individuals?',
    answer:
      'NAEF delivers direct educational scholarships, dignity kits, vocational training, and community programs strictly through verified community center enrollments and open announcements published via authorized NAEF channels rather than ad-hoc individual email requests.',
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getDepartmentChannelById(id: string): DepartmentChannel {
  return DEPARTMENT_CHANNELS.find((dept) => dept.id === id) || DEPARTMENT_CHANNELS[0];
}

export function filterBureausByZone(bureaus: FieldBureau[], zone: BureauZone): FieldBureau[] {
  if (zone === 'all') {
    return bureaus;
  }
  return bureaus.filter((bureau) => bureau.zone === zone);
}

export function validateContactSubmission(input: ContactSubmissionInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactSubmissionInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!input.email || !EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = 'Please provide a valid email address for our reply.';
  }

  if (!input.departmentId || !DEPARTMENT_CHANNELS.some((d) => d.id === input.departmentId)) {
    errors.departmentId = 'Please select a valid routing department.';
  }

  if (!input.subject || input.subject.trim().length < 4) {
    errors.subject = 'Please provide a concise inquiry subject (at least 4 characters).';
  }

  if (!input.message || input.message.trim().length < 15) {
    errors.message = 'Please share a brief overview of your inquiry (at least 15 characters).';
  }

  if (!input.consentGiven) {
    errors.consentGiven = 'Please acknowledge our data handling notice before submitting.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateInquiryReferenceId(departmentId: string, seedNumber?: number): string {
  const prefixMap: Record<string, string> = {
    general: 'GEN',
    partnerships: 'PRT',
    media: 'MED',
    volunteer: 'VOL',
    safeguarding: 'SGF',
  };
  const code = prefixMap[departmentId] || 'GEN';
  const numericSeed =
    typeof seedNumber === 'number' && Number.isFinite(seedNumber)
      ? Math.abs(Math.floor(seedNumber)) % 9000 + 1000
      : Math.floor(1000 + Math.random() * 9000);

  return `NAEF-${code}-${numericSeed}`;
}
