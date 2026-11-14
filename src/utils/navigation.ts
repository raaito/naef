export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: {
    id: string;
    title: string;
    description: string;
    href: string;
    pillarNumber?: number;
  }[];
}

export const PROGRAM_PILLARS = [
  {
    id: 'peace-naija',
    pillarNumber: 1,
    title: 'Peace Naija Initiative',
    description: 'Conflict resolution, school peace clubs, youth peacebuilding and community reconciliation.',
    href: '#program-peace-naija',
  },
  {
    id: 'women-empowerment',
    pillarNumber: 2,
    title: "Women & Girls' Empowerment Center",
    description: 'Safe spaces, reproductive health, anti-FGM/early marriage advocacy, GBV referral & enterprise.',
    href: '#program-women-empowerment',
  },
  {
    id: 'civic-engagement',
    pillarNumber: 3,
    title: 'Civic Engagement Platform',
    description: 'Civic education, voter awareness, youth leadership and governance accountability.',
    href: '#program-civic-engagement',
  },
  {
    id: 'education-support',
    pillarNumber: 4,
    title: 'Education Support & Development Center',
    description: 'Scholarships, teacher capacity building, digital learning support and school strengthening.',
    href: '#program-education-support',
  },
  {
    id: 'climate-action',
    pillarNumber: 5,
    title: 'Climate & Environmental Action Platform',
    description: 'Environmental protection, green energy transition, climate-smart farming and sustainability.',
    href: '#program-climate-action',
  },
];

export const NAV_LINKS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { 
    id: 'programs', 
    label: 'Our Programs', 
    href: '#programs',
    hasDropdown: true,
    children: PROGRAM_PILLARS
  },
  { id: 'impact', label: 'Our Impact', href: '#impact' },
  { id: 'news', label: 'News & Resources', href: '#news' },
  { id: 'get-involved', label: 'Get Involved', href: '#get-involved' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function getPillarByNumber(number: number) {
  return PROGRAM_PILLARS.find(p => p.pillarNumber === number) || null;
}

export function formatPillarIndex(index: number): string {
  return String(index).padStart(2, '0');
}
