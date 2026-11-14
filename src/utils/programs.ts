export interface ProgramPillarDetail {
  id: string;
  pillarNumber: number;
  title: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  objectives: string[];
  keyFocusAreas: string[];
  fieldQuote: {
    text: string;
    speaker: string;
    role: string;
  };
}

export const PROGRAM_DETAILS: ProgramPillarDetail[] = [
  {
    id: 'peace-naija',
    pillarNumber: 1,
    title: 'Peace Naija Initiative',
    shortName: 'Peace Naija',
    tagline: 'Promoting peaceful coexistence, conflict prevention, and community stability',
    description:
      'Operating through the Peace Naija Center, this initiative engages youth, traditional leaders, women groups, and vulnerable communities in conflict resolution, secondary school peace clubs, youth against violence campaigns, and inter-community reconciliation.',
    image: '/assets/images/naef_peace_naija_1794320113056.jpg',
    imageAlt: 'Grassroots community peace dialogue and mediation circle in Nigeria',
    objectives: [
      'Facilitate conflict resolution, mediation, and inter-community reconciliation forums.',
      'Establish Peace Clubs in secondary schools and deliver peace education.',
      'Lead youth peacebuilding initiatives and Youth Against Violence campaigns.',
    ],
    keyFocusAreas: ['Conflict Mediation', 'Peace Education in Schools', 'Youth Peacebuilding', 'Reconciliation Forums'],
    fieldQuote: {
      text: 'True peace cannot be declared from afar; it is built conversation by conversation under the village tree.',
      speaker: 'Community Elder & Mediation Facilitator',
      role: 'Peace Naija Dialogue Participant',
    },
  },
  {
    id: 'women-empowerment',
    pillarNumber: 2,
    title: "Women and Girls' Empowerment Center",
    shortName: 'Women & Girls',
    tagline: 'Advancing protection, empowerment, education, health, and rights of women and girls',
    description:
      "The Women and Girls' Empowerment Center operates Safe Space Centers, 'End Early Marriage' and anti-FGM advocacy, menstrual hygiene dignity pad distribution, reproductive health outreach, GBV referral support, and small business training—including for IDPs and vulnerable households.",
    image: '/assets/images/naef_women_center_1794320112976.jpg',
    imageAlt: 'Young Nigerian women engaged in leadership pathways workshop',
    objectives: [
      'Campaign against Female Genital Mutilation (FGM), early child marriage, and harmful practices alongside community and religious leaders.',
      'Deliver reproductive health education, menstrual hygiene pad distribution, and GBV awareness & referral support systems.',
      'Expand girl-child scholarships, Safe Space Centers, financial literacy, and small business entrepreneurship training.',
    ],
    keyFocusAreas: ['Gender Equality & Rights', 'Reproductive Health & Dignity', 'Anti-FGM & Early Marriage', 'Economic Empowerment'],
    fieldQuote: {
      text: 'When you equip a young woman with leadership tools, you elevate her family and transform the entire community.',
      speaker: 'Program Coordinator',
      role: 'Leadership Pathways Center',
    },
  },
  {
    id: 'civic-engagement',
    pillarNumber: 3,
    title: 'Civic Engagement Platform',
    shortName: 'Civic Engagement',
    tagline: 'Strengthening democratic participation, accountability, and civic responsibility',
    description:
      'The Civic Engagement Platform mobilizes youth, women, and community stakeholders through civic education workshops, voter and election awareness drives, youth political participation and leadership training, and community accountability forums.',
    image: '/assets/images/naef_discover_community_1794319715730.jpg',
    imageAlt: 'Community members holding notebooks and participating in civic accountability meeting',
    objectives: [
      'Conduct grassroots civic education workshops and non-partisan election & voter awareness drives.',
      'Advance youth political participation and youth leadership training across communities.',
      'Host community accountability forums strengthening citizen voice and transparent public governance.',
    ],
    keyFocusAreas: ['Civic Education', 'Youth Political Participation', 'Governance Accountability', 'Voter Awareness'],
    fieldQuote: {
      text: 'Accountability starts when citizens realize that governance belongs to all of us.',
      speaker: 'Civic Mobilizer',
      role: 'Civic Accountability Circle',
    },
  },
  {
    id: 'education-support',
    pillarNumber: 4,
    title: 'Education Support and Development Center',
    shortName: 'Education Support',
    tagline: 'Improving access to quality education, teacher capacity, and learning outcomes',
    description:
      'Combining student support (scholarships, learning materials, mentorship, after-school coaching) with Teacher Training & Capacity Building, digital learning support, and community-school strengthening to reduce dropout rates across rural settlements.',
    image: '/assets/images/naef_education_support_1794320113228.jpg',
    imageAlt: 'Young Nigerian students and teacher engaged with textbooks and learning guides',
    objectives: [
      'Provide scholarships, learning materials, mentorship, and after-school support for vulnerable students.',
      'Deliver Teacher Training & Capacity Building on modern teaching methods, classroom management, digital tools, and inclusive education.',
      'Strengthen school learning environments through education advocacy and community-school partnerships.',
    ],
    keyFocusAreas: ['Student Scholarships', 'Teacher Capacity Building', 'Digital Learning Support', 'School Strengthening'],
    fieldQuote: {
      text: 'Every child who receives an educational lifeline gains the power to author a completely different future.',
      speaker: 'Education Mentor',
      role: 'Community Learning Support',
    },
  },
  {
    id: 'climate-action',
    pillarNumber: 5,
    title: 'Climate and Environmental Action Platform',
    shortName: 'Climate Action',
    tagline: 'Advancing environmental sustainability, green energy transition, and climate-smart agriculture',
    description:
      'Expanded to unite waste management, school climate clubs, and tree planting with Green Energy Transition (solar, clean cooking, energy efficiency) and Sustainable Agriculture (climate-smart & organic farming for smallholder food security).',
    image: '/assets/images/naef_climate_action_1794320114656.jpg',
    imageAlt: 'Volunteers and community members planting indigenous seedlings in Nigeria',
    objectives: [
      'Lead environmental clean-ups, recycling and waste reduction programs, and climate change clubs in schools.',
      'Champion Green Energy Transition through renewable solar, clean cooking solutions, energy efficiency, and low-carbon outreach.',
      'Train smallholder farmers in climate-smart farming, organic agriculture, and community food security resilience.',
    ],
    keyFocusAreas: ['Environmental Protection', 'Climate Education', 'Green Energy Transition', 'Sustainable Agriculture'],
    fieldQuote: {
      text: 'Healing the land is inseparable from empowering the people who call it home.',
      speaker: 'Environmental Team Lead',
      role: 'Reforest Community Project',
    },
  },
];
