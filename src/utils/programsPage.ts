export interface KeyIntervention {
  title: string;
  description: string;
  communityBeneficiary: string;
}

export interface PillarDeepDive {
  id: string;
  number: string;
  title: string;
  tagline: string;
  leadParagraph: string;
  strategicFocus: string[];
  interventions: KeyIntervention[];
  keyOutcomes: string[];
  image: string;
  imageAlt: string;
  quote: {
    quoteText: string;
    speaker: string;
    context: string;
  };
  accentColor: string;
}

export interface CrossPillarSynergy {
  pillarPair: string;
  title: string;
  description: string;
}

export interface DeliveryPrinciple {
  step: string;
  title: string;
  details: string;
}

export const PILLARS_DEEP_DIVE: PillarDeepDive[] = [
  {
    id: 'peace-naija',
    number: '01',
    title: 'Peace Naija Initiative',
    tagline: 'Peaceful Coexistence, Conflict Prevention & Community Stability',
    leadParagraph:
      'Operated through NAEF’s Peace Naija Center, this initiative promotes peaceful coexistence, conflict prevention, and community stability. By engaging youth, traditional leaders, women groups, and vulnerable communities, we transform communal friction through mediation, school peace clubs, and inter-community reconciliation forums.',
    strategicFocus: [
      'Conflict resolution and community mediation',
      'Peace education and peace clubs in secondary schools',
      'Youth peacebuilding & Youth Against Violence campaigns',
      'Inter-community reconciliation & dialogue sessions',
    ],
    interventions: [
      {
        title: 'Community Dialogue & Reconciliation Forums',
        description:
          'Facilitating neutral dialogue sessions and inter-community reconciliation verandas where traditional leaders, women groups, and youth heads resolve grievances peacefully.',
        communityBeneficiary: 'Traditional leaders, women groups & vulnerable communities',
      },
      {
        title: 'Peace Clubs in Secondary Schools',
        description:
          'Establishing school-based Peace Clubs teaching nonviolent communication, restorative peer mediation, and inclusive conflict resolution.',
        communityBeneficiary: 'Secondary school students and educators',
      },
      {
        title: 'Youth Against Violence & Early-Warning Networks',
        description:
          'Mobilizing youth peacebuilders through Youth Against Violence campaigns and rapid-response community dialogue alerts.',
        communityBeneficiary: 'Youth coalitions and local ward stakeholders',
      },
    ],
    keyOutcomes: [
      'Reduced violence and over 42+ complex inter-communal disputes mediated peacefully',
      '12 regional youth peace committees active in early-warning peacebuilding',
      'Stronger inter-community relationships and improved social cohesion',
    ],
    image: '/assets/images/naef_peace_naija_1794320113056.jpg',
    imageAlt: 'Grassroots community peace dialogue and mediation circle in Nigeria',
    quote: {
      quoteText:
        'Peace cannot be declared by government pronouncements alone. It is patiently built under the neem tree when former adversaries sit down and listen to one another.',
      speaker: 'Mallam Danladi S.',
      context: 'Peace Naija Facilitator & Customary Elder, Plateau State',
    },
    accentColor: '#267F08',
  },
  {
    id: 'women-and-girls',
    number: '02',
    title: "Women and Girls' Empowerment Center",
    tagline: 'Protection, Health, Education, Rights & Economic Dignity',
    leadParagraph:
      "The Women and Girls' Empowerment Center promotes the protection, empowerment, education, health, and rights of women and girls—including GBV survivors, out-of-school girls, internally displaced persons (IDPs), and rural marginalized households. We combine Safe Space Centers, anti-FGM and 'End Early Marriage' advocacy, menstrual hygiene dignity kits, and economic enterprise training.",
    strategicFocus: [
      'Gender equality, leadership inclusion & GBV referral support',
      'Reproductive health outreach & menstrual hygiene pad distribution',
      'Prevention of FGM & "End Early Marriage" community advocacy',
      'Girl-child scholarships, skills acquisition & financial literacy',
    ],
    interventions: [
      {
        title: 'Safe Space Centers & Menstrual Dignity Program',
        description:
          'Community Safe Space Centers offering adolescent girls mentorship, reproductive health awareness, GBV referral support, and free or subsidized menstrual pad distribution.',
        communityBeneficiary: 'Out-of-school girls, GBV survivors & IDPs',
      },
      {
        title: '"End Early Marriage" & Anti-FGM Community Advocacy',
        description:
          'Partnering with traditional and religious leaders to end Female Genital Mutilation (FGM), sensitize families against early child marriage, and strengthen girl-child protection.',
        communityBeneficiary: 'Adolescent girls, families, community & religious leaders',
      },
      {
        title: 'Women Economic Independence & Financial Literacy',
        description:
          'Delivering skills acquisition, small business entrepreneurship training, leadership coaching, and cooperative savings groups for sustainable household income.',
        communityBeneficiary: 'Rural women and vulnerable, marginalized households',
      },
    ],
    keyOutcomes: [
      'Reduced early child marriage cases and increased school retention of girls',
      'Over 3,400+ women and girls reached with reproductive rights, dignity kits, and safe spaces',
      'Empowered women achieving economic independence across 28 community cooperatives',
    ],
    image: '/assets/images/naef_women_center_1794320112976.jpg',
    imageAlt: 'Women leaders gathered in empowerment center for cooperative business training',
    quote: {
      quoteText:
        'When you teach a woman her rights and put economic tools in her hands, she does not just feed her children—she stands up in the village council and reshapes our collective future.',
      speaker: 'Hajiya Maryam K.',
      context: 'Women’s Cooperative Convener, Kaduna State',
    },
    accentColor: '#F97827',
  },
  {
    id: 'civic-engagement',
    number: '03',
    title: 'Civic Engagement Platform',
    tagline: 'Democratic Participation, Governance Accountability & Civic Responsibility',
    leadParagraph:
      'The Civic Engagement Platform strengthens democratic participation, public accountability, and responsible citizenship among youth, women, and community stakeholders. We run civic education workshops, non-partisan election and voter awareness drives, youth leadership training, and community accountability forums.',
    strategicFocus: [
      'Civic education workshops and democratic literacy',
      'Youth political participation and leadership training',
      'Governance accountability and public project tracking',
      'Non-partisan voter and election awareness campaigns',
    ],
    interventions: [
      {
        title: 'Community Accountability & Open Budget Forums',
        description:
          'Convening structured community accountability forums and translating municipal fiscal allocations so citizens track primary health and school infrastructure delivery.',
        communityBeneficiary: 'Community stakeholders, elders & local associations',
      },
      {
        title: 'Election & Voter Awareness Drives',
        description:
          'Conducting grassroots voter education and peaceful civic participation campaigns encouraging informed registration and issue-based engagement.',
        communityBeneficiary: 'First-time youth voters, women & rural wards',
      },
      {
        title: 'Youth Political Participation & Leadership Training',
        description:
          'Equipping emerging youth leaders with policy advocacy, governance monitoring, and citizen-engagement tools to collaborate constructively with duty-bearers.',
        communityBeneficiary: 'Youth organizers, students & emerging civic leaders',
      },
    ],
    keyOutcomes: [
      '19 stalled rural borehole and health post projects audited and reactivated by authorities',
      'Over 8,000 citizens reached through civic education and accountability forums',
      'More informed citizens and documented increases in youth civic and voter participation',
    ],
    image: '/assets/images/naef_discover_community_1794319715730.jpg',
    imageAlt: 'NAEF civic engagement workshop with youth and women in community center',
    quote: {
      quoteText:
        'We used to believe that governance was something done far away in the state capital. Now we know how to ask questions respectfully, verify public funds, and see our clinics repaired.',
      speaker: 'Emmanuel O.',
      context: 'Civic Accountability Fellow, Plateau State',
    },
    accentColor: '#263B2A',
  },
  {
    id: 'education-support',
    number: '04',
    title: 'Education Support and Development Center',
    tagline: 'Student Access, Teacher Capacity Building & Digital Learning',
    leadParagraph:
      'The Education Support and Development Center improves access to quality education and strengthens grassroots learning outcomes. Alongside student scholarships, learning materials, mentorship, and after-school support, NAEF delivers dedicated Teacher Training & Capacity Building, digital learning support, and community-school development initiatives.',
    strategicFocus: [
      'Student academic support, scholarships & after-school clubs',
      'Teacher capacity building & modern pedagogical workshops',
      'School system strengthening & community-school engagement',
      'Digital learning support & inclusive education practices',
    ],
    interventions: [
      {
        title: 'Student Scholarships, Materials & After-School Support',
        description:
          'Providing scholarships for vulnerable students, textbooks, learning kits, structured mentorship, and after-school academic coaching in safe learning hubs.',
        communityBeneficiary: 'Vulnerable students, orphans & low-income families',
      },
      {
        title: 'Teacher Training & Capacity Building Program',
        description:
          'Hands-on teacher professional development workshops covering modern teaching methods, classroom management skills, digital teaching tools, and inclusive education practices.',
        communityBeneficiary: 'Primary and secondary school teachers in rural clusters',
      },
      {
        title: 'School Development & Digital Learning Support',
        description:
          'Partnering with school committees on education advocacy campaigns, solar-powered learning sanctuaries, and community-school environment improvements.',
        communityBeneficiary: 'Rural schools, parents & community-school boards',
      },
    ],
    keyOutcomes: [
      'Over 950+ vulnerable students supported with scholarships and learning materials',
      'Improved teaching quality and inclusive classroom practices across partner schools',
      'Reduced dropout rates and 84% literacy comprehension pass rate in remedial cohorts',
    ],
    image: '/assets/images/naef_education_support_1794320113228.jpg',
    imageAlt: 'Young students in bright learning sanctuary with textbooks',
    quote: {
      quoteText:
        'When NAEF opened the solar study room in our village, my children no longer had to study by kerosene lamp smoke. Their school scores leaped, and their smiles returned.',
      speaker: 'Grace N.',
      context: 'Parent & School Committee Member, Nasarawa State',
    },
    accentColor: '#267F08',
  },
  {
    id: 'climate-and-environment',
    number: '05',
    title: 'Climate and Environmental Action Platform',
    tagline: 'Environmental Protection, Green Energy Transition & Sustainable Agriculture',
    leadParagraph:
      'Expanded to confront climate volatility and food insecurity together, the Climate and Environmental Action Platform combines waste management, recycling, and school climate clubs with Green Energy Transition (renewable solar and clean cooking advocacy) and Sustainable Agriculture (climate-smart and organic farming support for smallholder farmers).',
    strategicFocus: [
      'Environmental protection, recycling & anti-pollution advocacy',
      'Climate change education & school climate clubs',
      'Green Energy Transition: solar, clean cooking & low-carbon living',
      'Sustainable Agriculture: climate-smart & organic farming',
    ],
    interventions: [
      {
        title: 'Environmental Protection & School Climate Clubs',
        description:
          'Coordinating community tree planting campaigns, clean-up drives, recycling and waste reduction programs, and climate change clubs in partner schools.',
        communityBeneficiary: 'Youth, schools & local community sanitation groups',
      },
      {
        title: 'Green Energy Transition & Clean Cooking Outreach',
        description:
          'Advocating renewable energy adoption (solar lighting and clean cooking solutions), community energy efficiency education, and low-carbon household practices.',
        communityBeneficiary: 'Rural women, households & peri-urban settlements',
      },
      {
        title: 'Sustainable Agriculture & Food Security Workshops',
        description:
          'Training smallholder farmers on climate-smart agriculture, organic farming awareness, soil conservation, and drought-resilient watershed restoration.',
        communityBeneficiary: 'Smallholder farmers, rural women collectives & vulnerable households',
      },
    ],
    keyOutcomes: [
      '15,000+ indigenous trees planted and nurtured across degraded riverbanks',
      '120 rural women smallholder farmers adopting climate-smart and organic practices',
      'Increased clean energy adoption, reduced environmental degradation, and stronger food security',
    ],
    image: '/assets/images/naef_climate_action_1794320114656.jpg',
    imageAlt: 'Volunteers and women farmers planting indigenous seedlings in fertile soil',
    quote: {
      quoteText:
        'Restoring our soil is not just about planting trees—it is about restoring peace. When our land produces food and water is abundant, conflicts between herders and farmers quiet down.',
      speaker: 'Bala Ibrahim',
      context: 'Agroforestry Cooperative Lead, Kaduna State',
    },
    accentColor: '#F97827',
  },
];

export const CROSS_PILLAR_SYNERGIES: CrossPillarSynergy[] = [
  {
    pillarPair: 'Peace Naija + Climate Action',
    title: 'Ecological Conflict Resolution',
    description:
      'By jointly managing restored water points and grazing tree corridors, customary pastoralists and farmers eliminate the resource scarcity that triggers communal clashes.',
  },
  {
    pillarPair: 'Women’s Center + Education Support',
    title: 'Multi-Generational Literacy',
    description:
      'Educated and economically self-reliant mothers reinvest their earnings into keeping their daughters in secondary school and protecting them from early marriage.',
  },
  {
    pillarPair: 'Civic Engagement + Peace Naija',
    title: 'Accountable Local Security',
    description:
      'Communities trained in civic monitoring work collaboratively with municipal authorities and traditional rulers to enforce early-warning nonviolent agreements.',
  },
];

export const DELIVERY_PRINCIPLES: DeliveryPrinciple[] = [
  {
    step: '01',
    title: 'Customary Community Protocol',
    details:
      'We enter communities with deep respect for customary leadership, seeking formal audience with traditional councils and elders before any activity begins.',
  },
  {
    step: '02',
    title: 'Co-Design Over Prescription',
    details:
      'We never arrive with pre-packaged blueprints. Interventions are shaped alongside local beneficiaries in participatory town halls in their local dialect.',
  },
  {
    step: '03',
    title: 'Role-Based Local Deployment',
    details:
      'Program facilitators, tutors, and mediation conciliators undergo mandatory orientation and are deployed on merit from within host communities.',
  },
  {
    step: '04',
    title: 'Monitoring, Evaluation & Learning (MEL)',
    details:
      'Every program is tracked through data-driven monitoring, continuous evaluation, stakeholder impact reporting, and systematic learning integration.',
  },
];
