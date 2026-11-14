export interface InstitutionalPillar {
  title: string;
  lead: string;
  focus: string;
}

export const CORE_COMMITMENTS: InstitutionalPillar[] = [
  {
    title: 'Community-Led Agency',
    lead: 'Solutions rooted in lived experience',
    focus: 'Facilitating local ownership and self-determination rather than external prescription.',
  },
  {
    title: 'Intersectional Impact',
    lead: 'Integrated empowerment models',
    focus: 'Bridging peacebuilding, gender equity, civic voice, education, and climate action.',
  },
  {
    title: 'Accountable Advocacy',
    lead: 'Bridging grassroots to governance',
    focus: 'Translating everyday community realities into institutional dialogue and policy change.',
  },
];

export const REGIONAL_SCOPE = {
  region: 'West Africa',
  country: 'Nigeria',
  coordinates: '9.0820° N, 8.6753° E',
  focusAreas: ['Grassroots Communities', 'Youth Coalitions', "Women's Collectives"],
};
