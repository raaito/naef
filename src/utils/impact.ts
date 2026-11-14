export interface ImpactIndicator {
  id: string;
  targetValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  description: string;
  pillarContext: string;
}

export const IMPACT_INDICATORS: ImpactIndicator[] = [
  {
    id: 'people-reached',
    targetValue: 120000,
    suffix: '+',
    label: 'People Reached',
    sublabel: 'Direct community beneficiaries',
    description: 'Beneficiaries across civic education workshops, youth peace circles, and women & girls’ empowerment centers.',
    pillarContext: 'Across All 5 Pillars',
  },
  {
    id: 'communities-supported',
    targetValue: 85,
    suffix: '+',
    label: 'Communities Supported',
    sublabel: 'Grassroots settlements',
    description: 'Local government areas and village clusters actively hosting sustainable community programs.',
    pillarContext: 'Grassroots Footprint',
  },
  {
    id: 'projects-completed',
    targetValue: 130,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'Targeted initiatives',
    description: 'Community-led interventions delivered across peace mediation, literacy, and environmental stewardship.',
    pillarContext: 'Field Interventions',
  },
  {
    id: 'volunteers-engaged',
    targetValue: 850,
    suffix: '+',
    label: 'Volunteers Engaged',
    sublabel: 'Local change-makers',
    description: 'Active youth ambassadors, women mentors, and grassroots organizers leading field activities.',
    pillarContext: 'Community Champions',
  },
];

export function formatImpactNumber(val: number): string {
  return new Intl.NumberFormat('en-US').format(Math.floor(val));
}

export function calculateAnimatedValue(progress: number, target: number): number {
  const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
  return Math.min(Math.floor(eased * target), target);
}
