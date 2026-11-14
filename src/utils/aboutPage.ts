export interface AboutMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  statement: string;
  description: string;
}

export interface TheoryOfChangeStep {
  stepNumber: string;
  title: string;
  concept: string;
  details: string;
}

export interface LeadershipMember {
  id: string;
  tierNumber: string;
  tierTitle: string;
  name: string;
  role: string;
  group: 'trustee' | 'executive' | 'field';
  bio: string;
  focusArea: string;
}

export const FOUNDING_STORY = {
  kicker: 'Our Genesis & Purpose',
  headline: 'Advocacy Starts With You. Built on Integrity and Impact.',
  summary:
    'Nana Advocacy and Empowerment Foundation (NAEF) is a non-governmental, non-profit, and volunteer-driven organization committed to advancing social justice, gender equality, education, civic participation, environmental sustainability, and community empowerment.',
  prose: [
    'NAEF operates through five structured program pillars designed to address critical development challenges affecting vulnerable populations, especially women, girls, youth, and underserved communities across Nigeria.',
    'Guided by seven core values—Integrity, Accountability, Inclusion, Service, Collaboration, Impact, and Transparency—the foundation works through grassroots engagement, capacity building, advocacy campaigns, and transparent partnerships.',
  ],
};

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'integrity',
    number: '01',
    title: 'Integrity',
    statement: 'Truthful, ethical conduct in every interaction.',
    description:
      'We act honestly and professionally across every community engagement, avoiding conflicts of interest and protecting NAEF’s moral and institutional integrity.',
  },
  {
    id: 'accountability',
    number: '02',
    title: 'Accountability',
    statement: 'Responsible stewardship to communities and partners.',
    description:
      'Every member takes ownership of their actions, maintains accurate records, and adheres strictly to financial, safeguarding, and approval hierarchies.',
  },
  {
    id: 'inclusion',
    number: '03',
    title: 'Inclusion',
    statement: 'Dignity and equal opportunity without discrimination.',
    description:
      'We uphold zero tolerance for discrimination or bias on the basis of gender, ethnicity, religion, disability, age, social status, or cultural background.',
  },
  {
    id: 'service',
    number: '04',
    title: 'Service',
    statement: 'Volunteer-driven commitment to vulnerable populations.',
    description:
      'Advocacy starts with service—placing the safety, dignity, and empowerment of women, girls, youth, and underserved communities first.',
  },
  {
    id: 'collaboration',
    number: '05',
    title: 'Collaboration',
    statement: 'Teamwork across communities, CSOs, and public institutions.',
    description:
      'We build lasting progress alongside traditional leaders, schools, NGOs, government agencies, donors, and private sector partners.',
  },
  {
    id: 'impact',
    number: '06',
    title: 'Impact',
    statement: 'Evidence-led change that endures on the ground.',
    description:
      'Through continuous Monitoring, Evaluation & Learning (MEL), we ensure every project delivers measurable, durable outcomes for grassroots households.',
  },
  {
    id: 'transparency',
    number: '07',
    title: 'Transparency',
    statement: 'Open reporting across every fund and decision.',
    description:
      'We enforce strict documentation of all funds, open financial reporting to stakeholders, and zero tolerance for corruption or resource misuse.',
  },
];

export const TIMELINE_MILESTONES: AboutMilestone[] = [
  {
    year: '2021',
    title: 'Inception & Community Dialogues',
    description:
      'Initial grassroots listening circles convened with community leaders in North-Central Nigeria to identify systemic barriers to peace and education.',
  },
  {
    year: '2022',
    title: 'Incorporation & First Learning Hubs',
    description:
      'Formal registration as an Incorporated Trustees NGO in Nigeria, followed by the deployment of the first pilot learning sanctuaries in rural settlements.',
  },
  {
    year: '2024',
    title: 'Formalization of the 5 Strategic Pillars',
    description:
      'Consolidation of field activities into five distinct impact pillars: Peace Naija, Women & Girls, Civic Engagement, Education Support, and Climate Action.',
  },
  {
    year: '2026',
    title: 'Regional Footprint & Open MEL Accountability',
    description:
      'Scaling community peace hubs, Safe Space Centers, teacher capacity training, green energy advocacy, and climate-smart farming across 85+ settlements with structured MEL auditing.',
  },
];

export const THEORY_OF_CHANGE: TheoryOfChangeStep[] = [
  {
    stepNumber: '01',
    title: 'Listen & Map',
    concept: 'Participatory Community Diagnosis',
    details:
      'Conducting customary town halls and gender-inclusive focus circles to surface root causes of disputes, dropouts, and resource depletion.',
  },
  {
    stepNumber: '02',
    title: 'Equip & Co-Build',
    concept: 'Grassroots Capacity Building',
    details:
      'Training local mediation conciliators, deploying learning kits, mentoring female entrepreneurs, and establishing seedling nurseries.',
  },
  {
    stepNumber: '03',
    title: 'Sustain & Transfer',
    concept: 'Community Stewardship',
    details:
      'Transitioning day-to-day management of peace centers and sanctuaries to trained community management committees.',
  },
  {
    stepNumber: '04',
    title: 'Advocate & Scale',
    concept: 'Institutional Policy Impact',
    details:
      'Synthesizing grassroots field evidence to inform regional governance, ministerial policy reforms, and multi-state peace pacts.',
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'tier-board-trustees',
    tierNumber: '01',
    tierTitle: 'Board of Trustees',
    name: '[Board Chair & Trustees Placeholder]',
    role: 'Highest Authority',
    group: 'trustee',
    bio: 'Provides fiduciary oversight, constitutional guardianship, policy approval, and institutional accountability across all NAEF operations.',
    focusArea: 'Governance & Fiduciary Oversight',
  },
  {
    id: 'tier-advisory-council',
    tierNumber: '02',
    tierTitle: 'Advisory Council',
    name: '[Advisory Council Placeholder]',
    role: 'Strategic Guidance',
    group: 'trustee',
    bio: 'Offers independent expertise in human rights, child safeguarding, education reform, peace mediation, and climate resilience.',
    focusArea: 'Strategic Guidance & Policy Review',
  },
  {
    id: 'tier-executive-team',
    tierNumber: '03',
    tierTitle: 'Executive Management Team',
    name: '[Executive Director & Management Placeholder]',
    role: 'Operations Leadership',
    group: 'executive',
    bio: 'Leads day-to-day organizational management, financial transparency, partnership approvals, and policy compliance across all offices.',
    focusArea: 'Operations & Stakeholder Accountability',
  },
  {
    id: 'tier-program-directors',
    tierNumber: '04',
    tierTitle: 'Program Directors',
    name: '[Program Directors Placeholder]',
    role: 'Pillar Oversight',
    group: 'executive',
    bio: 'Directs strategy, curriculum standards, and MEL learning integration across NAEF’s five Centers and Platforms.',
    focusArea: 'Five Pillars & MEL Oversight',
  },
  {
    id: 'tier-state-coordinators',
    tierNumber: '05',
    tierTitle: 'State Coordinators',
    name: '[State Coordinators Placeholder]',
    role: 'Field Implementation',
    group: 'field',
    bio: 'Coordinates grassroots interventions, traditional ruler engagements, and Safeguarding & PSEA compliance across focal Nigerian states.',
    focusArea: 'State-Level Field Delivery',
  },
  {
    id: 'tier-volunteers',
    tierNumber: '06',
    tierTitle: 'Volunteers',
    name: '[Community Volunteers Network]',
    role: 'Community-Level Execution',
    group: 'field',
    bio: 'Merit-recruited, oriented, and certified community champions executing peace clubs, safe spaces, literacy hubs, and climate campaigns.',
    focusArea: 'Grassroots Execution & Mobilization',
  },
];
