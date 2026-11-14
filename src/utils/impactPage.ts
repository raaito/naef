export interface ImpactMetric {
  id: string;
  metricNumber: string;
  metricSuffix: string;
  label: string;
  category: 'people' | 'peace' | 'education' | 'climate';
  verificationSource: string;
  shortDescription: string;
  pillarId: string;
}

export interface StateFootprint {
  state: string;
  zone: string;
  activePillars: string[];
  focalLGAs: string[];
  communitiesCount: number;
  highlightMilestone: string;
  leadCoordinator: string;
}

export interface MealTier {
  phase: string;
  title: string;
  leadResponsible: string;
  methodology: string;
  deliverables: string[];
}

export interface TransparencyReport {
  id: string;
  title: string;
  year: string;
  category: 'Annual Audit' | 'MEL Evaluation' | 'Safeguarding' | 'Financial Statement';
  fileFormat: string;
  fileSize: string;
  auditorStatus: string;
}

export const HEADLINE_METRICS: ImpactMetric[] = [
  {
    id: 'people-reached',
    metricNumber: '120,000',
    metricSuffix: '+',
    label: 'Direct Community Beneficiaries',
    category: 'people',
    verificationSource: 'Quarterly MEL Participant Registers & Field Logs',
    shortDescription: 'Documented individuals who participated in NAEF educational, agricultural, mediation, or economic programs.',
    pillarId: 'cross-cutting',
  },
  {
    id: 'communities-supported',
    metricNumber: '85',
    metricSuffix: '+',
    label: 'Grassroots Communities Supported',
    category: 'people',
    verificationSource: 'Ward & Customary Council Memoranda of Understanding',
    shortDescription: 'Rural settlements, peri-urban wards, and displaced agrarian communities receiving active long-term accompaniment.',
    pillarId: 'cross-cutting',
  },
  {
    id: 'disputes-mediated',
    metricNumber: '42',
    metricSuffix: '+',
    label: 'Peace Agreements Mediated',
    category: 'peace',
    verificationSource: 'Customary Arbitration Registers (Plateau & Kaduna States)',
    shortDescription: 'High-risk farmer-herder, boundary, and inter-communal disputes resolved without litigation or bloodshed.',
    pillarId: 'peace-naija',
  },
  {
    id: 'women-empowered',
    metricNumber: '3,400',
    metricSuffix: '+',
    label: 'Women & Girls Enrolled in Circles',
    category: 'people',
    verificationSource: 'Empowerment Center Attendance & VSLA Ledgers',
    shortDescription: 'Adolescent girls in life skills circles and rural women operating community savings cooperatives.',
    pillarId: 'women-and-girls',
  },
  {
    id: 'scholarships-awarded',
    metricNumber: '950',
    metricSuffix: '+',
    label: 'Bridge-to-School Scholarships',
    category: 'education',
    verificationSource: 'School Cluster Termly Enrollment & Receipt Audit',
    shortDescription: 'Vulnerable orphans, girl-child scholars, and conflict-affected children supported with school fees, books, and meals.',
    pillarId: 'education-support',
  },
  {
    id: 'trees-planted',
    metricNumber: '15,000',
    metricSuffix: '+',
    label: 'Indigenous Trees Nurtured',
    category: 'climate',
    verificationSource: 'Participatory Nursery GIS Log & Community Riverbank Audits',
    shortDescription: 'Drought-tolerant saplings planted along degraded waterways to regenerate watersheds and protect grazing corridors.',
    pillarId: 'climate-and-environment',
  },
];

export const STATE_FOOTPRINTS: StateFootprint[] = [
  {
    state: 'Plateau State',
    zone: 'North Central',
    activePillars: ['Peace Naija Initiative', 'Civic Engagement Platform', 'Climate & Environmental Action'],
    focalLGAs: ['Barkin Ladi', 'Riyom', 'Bassa', 'Jos South'],
    communitiesCount: 26,
    highlightMilestone: '14 neutral community mediation verandas established under traditional councils.',
    leadCoordinator: 'Mallam Danladi S. (Field Lead)',
  },
  {
    state: 'Kaduna State',
    zone: 'North West',
    activePillars: ["Women and Girls' Empowerment Center", 'Climate & Environmental Action', 'Peace Naija Initiative'],
    focalLGAs: ['Kagarko', 'Chikun', 'Kauru', 'Zaria'],
    communitiesCount: 22,
    highlightMilestone: '18 women-led village savings cooperatives and agroforestry sapling nurseries active.',
    leadCoordinator: 'Hajiya Maryam K. (Program Lead)',
  },
  {
    state: 'Nasarawa State',
    zone: 'North Central',
    activePillars: ['Education Support and Development Center', 'Civic Engagement Platform'],
    focalLGAs: ['Karu', 'Keffi', 'Doma', 'Awe'],
    communitiesCount: 15,
    highlightMilestone: '3 solar-powered community learning sanctuaries commissioned with 1,200 books each.',
    leadCoordinator: 'Grace N. (Education Focal Point)',
  },
  {
    state: 'Benue State',
    zone: 'North Central',
    activePillars: ['Peace Naija Initiative', "Women and Girls' Empowerment Center"],
    focalLGAs: ['Guma', 'Makurdi', 'Gwer West'],
    communitiesCount: 14,
    highlightMilestone: 'Joint agrarian-pastoralist water point reconciliation compact signed in 6 wards.',
    leadCoordinator: 'Terver A. (Community Conciliator)',
  },
  {
    state: 'Federal Capital Territory (Abuja)',
    zone: 'Central',
    activePillars: ['Civic Engagement Platform', 'Education Support and Development Center'],
    focalLGAs: ['Bwari Area Council', 'Kuje Area Council', 'Gwagwalada'],
    communitiesCount: 10,
    highlightMilestone: 'Open Budget citizen clinics tracking primary healthcare allocation delivery.',
    leadCoordinator: 'Emmanuel O. (Civic Lead)',
  },
];

export const MEAL_TIERS: MealTier[] = [
  {
    phase: 'Stage 01',
    title: 'Baseline Needs & Customary Census',
    leadResponsible: 'Community Mobilization Team',
    methodology:
      'Rigorous pre-intervention household surveys, customary elder consultations, and vulnerability indexing conducted in local languages before project roll-out.',
    deliverables: ['Disaggregated baseline ledger', 'Customary council consent protocol', 'Vulnerability ranking roster'],
  },
  {
    phase: 'Stage 02',
    title: 'Real-Time Field Verification & Tracking',
    leadResponsible: 'MEL Field Monitors',
    methodology:
      'Fortnightly unannounced visits to learning sanctuaries, tree nurseries, and mediation desks using standard verification questionnaires and visual documentation.',
    deliverables: ['Bi-weekly milestone log', 'Beneficiary feedback register', 'Early warning anomaly alert'],
  },
  {
    phase: 'Stage 03',
    title: 'Participatory Community Verification Town Halls',
    leadResponsible: 'Independent Review Panel',
    methodology:
      'Open communal gatherings where project budgets, delivered materials, and operational outcomes are publicly reviewed with village elders, women leads, and youth.',
    deliverables: ['Public transparency scoreboard', 'Signed communal audit endorsement', 'Corrective action plan'],
  },
  {
    phase: 'Stage 04',
    title: 'Annual Open Data & Safeguarding Audit',
    leadResponsible: 'Board MEL Committee & External Auditor',
    methodology:
      'Consolidation of program indicators, external financial audit verification, and safeguarding compliance review published for public download.',
    deliverables: ['Annual Audited Financial Statements', 'Institutional MEL Digest', 'Safeguarding compliance certificate'],
  },
];

export const TRANSPARENCY_REPORTS: TransparencyReport[] = [
  {
    id: 'report-2025-annual',
    title: 'NAEF 2025 Annual Impact & Operational Review',
    year: '2025',
    category: 'Annual Audit',
    fileFormat: 'PDF',
    fileSize: '4.8 MB',
    auditorStatus: 'Independent MEL Audit Verified',
  },
  {
    id: 'report-2025-financial',
    title: '2025 Financial Statement & Resource Accountability Audit',
    year: '2025',
    category: 'Financial Statement',
    fileFormat: 'PDF',
    fileSize: '2.4 MB',
    auditorStatus: 'Audited & Statutory Compliance Certified',
  },
  {
    id: 'report-2024-peace-meal',
    title: 'Peace Naija 3-Year Mediation Impact Assessment',
    year: '2024',
    category: 'MEL Evaluation',
    fileFormat: 'PDF',
    fileSize: '3.6 MB',
    auditorStatus: 'External Independent Evaluation',
  },
  {
    id: 'report-safeguarding-2025',
    title: 'Child Safeguarding, PSEA & Beneficiary Protection Audit',
    year: '2025',
    category: 'Safeguarding',
    fileFormat: 'PDF',
    fileSize: '1.9 MB',
    auditorStatus: 'Zero-Tolerance Policy Review Complete',
  },
];

export function filterFootprintsByPillar(pillarKeyword: string): StateFootprint[] {
  if (!pillarKeyword || pillarKeyword === 'all') return STATE_FOOTPRINTS;
  return STATE_FOOTPRINTS.filter((footprint) =>
    footprint.activePillars.some((p) => p.toLowerCase().includes(pillarKeyword.toLowerCase()))
  );
}

export function getMetricById(id: string): ImpactMetric | null {
  return HEADLINE_METRICS.find((m) => m.id === id) || null;
}

export function getTotalCommunitiesCount(): number {
  return STATE_FOOTPRINTS.reduce((acc, curr) => acc + curr.communitiesCount, 0);
}
