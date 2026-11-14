export interface HubArticle {
  id: string;
  category: 'Field Dispatches' | 'Policy Briefs' | 'Research & Reports' | 'Press Releases';
  pillar: string;
  pillarId: 'peace-naija' | 'women-and-girls' | 'civic-engagement' | 'education-support' | 'climate-and-environment' | 'institutional';
  date: string;
  headline: string;
  excerpt: string;
  fullBody: string[];
  image: string;
  imageAlt: string;
  readTime: string;
  author: string;
  isFeatured?: boolean;
}

export interface ResourceToolkit {
  id: string;
  title: string;
  category: 'Field Manual' | 'Policy Brief' | 'Operations Guide' | 'Research Paper';
  pillar: string;
  fileFormat: string;
  fileSize: string;
  pages: number;
  targetAudience: string;
  summary: string;
}

export const ALL_HUB_ARTICLES: HubArticle[] = [
  {
    id: 'youth-peace-summit-2026',
    category: 'Field Dispatches',
    pillar: 'Peace Naija Initiative',
    pillarId: 'peace-naija',
    date: 'October 24, 2026',
    headline: 'NAEF Concludes 2026 National Youth Peace & Mediation Summit in Abuja',
    excerpt:
      'Over 200 grassroots youth delegates and customary leaders gathered to ratify a joint resolution on communal dispute prevention, early-warning dialogue desks, and digital rumor mitigation.',
    fullBody: [
      'The 2026 National Youth Peace Summit brought together community leaders, traditional rulers, and youth ambassadors across 18 states to address escalating intercommunal friction.',
      'Participants engaged in intensive simulation workshops on restorative justice, nonviolent communication, digital misinformation counter-messaging, and intercommunal mediation under the guidance of customary elders.',
      'The resulting Abuja Youth Peace Declaration establishes 12 regional monitoring committees to support peaceful community relations and early dispute de-escalation across focal North Central flashpoints.',
    ],
    image: '/assets/images/naef_peace_naija_1794320113056.jpg',
    imageAlt: 'Youth delegates and community elders in collaborative mediation session',
    readTime: '4 min read',
    author: 'NAEF Communications Bureau',
    isFeatured: true,
  },
  {
    id: 'community-learning-hub-opens',
    category: 'Field Dispatches',
    pillar: 'Education Support and Development Center',
    pillarId: 'education-support',
    date: 'September 18, 2026',
    headline: 'New Solar Community Learning Sanctuary Opens to Support 400 Children',
    excerpt:
      'Equipped with donated learning kits, solar lighting, and dedicated volunteer tutors, the new center expands foundational literacy and numeracy in agrarian rural settlements.',
    fullBody: [
      'In partnership with local village education committees, NAEF officially commissioned the Mangu Community Learning Sanctuary in Plateau State.',
      'The solar-powered facility offers free after-school foundational numeracy and reading clubs, a lending library of 1,200 textbooks, and weekend digital literacy hours for adolescent girls.',
      'Local teachers and volunteer university graduates have committed to rotating shifts to ensure remedial support is accessible to children whose education was disrupted by displacement.',
    ],
    image: '/assets/images/naef_education_support_1794320113228.jpg',
    imageAlt: 'Young students in bright learning sanctuary with textbooks',
    readTime: '3 min read',
    author: 'Education Support Desk',
  },
  {
    id: 'women-agroforestry-resilience',
    category: 'Field Dispatches',
    pillar: 'Climate and Environmental Action Platform',
    pillarId: 'climate-and-environment',
    date: 'August 30, 2026',
    headline: 'Empowering Rural Women Collectives with Climate-Resilient Agroforestry',
    excerpt:
      'Farming cooperatives plant 15,000 indigenous saplings to restore degraded watersheds while generating sustainable income for rural households in Kaduna State.',
    fullBody: [
      'As part of the Climate and Environmental Action Platform, NAEF provided 120 smallholder women farmers with drought-tolerant indigenous fruit saplings, organic compost preparation tools, and rainwater harvesting infrastructure.',
      'The initiative preserves vital riverbank biodiversity while establishing cooperative nursery businesses that sell fruit harvests at regional farmers markets.',
      'By linking agroforestry directly to household economic independence, local women have become the foremost environmental custodians of their customary watershed corridors.',
    ],
    image: '/assets/images/naef_climate_action_1794320114656.jpg',
    imageAlt: 'Volunteers and women farmers planting indigenous seedlings in fertile soil',
    readTime: '5 min read',
    author: 'Environmental Action Bureau',
  },
  {
    id: 'budget-literacy-open-clinics',
    category: 'Policy Briefs',
    pillar: 'Civic Engagement Platform',
    pillarId: 'civic-engagement',
    date: 'July 14, 2026',
    headline: 'Bridging Grassroots Citizens and Local Government: Lessons from Ward Budget Tracking',
    excerpt:
      'A policy review analyzing how translation of municipal capital expenditures into local dialects empowers rural communities to audit primary health and borehole delivery.',
    fullBody: [
      'Fiscal decentralization in Nigeria often suffers from an information asymmetry between local government councils and rural ward residents.',
      'NAEF’s Open Budget Community Clinics demonstrate that when fiscal line items are broken down into plain language and presented in town halls, citizen project verification rises by over 70%.',
      'This policy brief outlines institutional recommendations for local government secretariats seeking to adopt participatory public expenditure tracking frameworks.',
    ],
    image: '/assets/images/naef_discover_community_1794319715730.jpg',
    imageAlt: 'NAEF civic engagement workshop with youth and women in community center',
    readTime: '6 min read',
    author: 'Civic Policy Research Unit',
  },
  {
    id: 'girls-safe-spaces-evaluation',
    category: 'Research & Reports',
    pillar: "Women and Girls' Empowerment Center",
    pillarId: 'women-and-girls',
    date: 'June 22, 2026',
    headline: 'Multi-Tier Impact Evaluation of Girls’ Leadership Circles in Rural Northern Nigeria',
    excerpt:
      'Two-year longitudinal assessment documenting the correlation between safe-space life skills mentorship and secondary school retention rates among adolescent girls.',
    fullBody: [
      'Over a 24-month monitoring cycle across 28 rural school clusters, participating adolescent girls in NAEF’s Girls’ Leadership Circles demonstrated a 94% retention rate into senior secondary school.',
      'The research highlights the critical role of combined rights literacy, menstrual hygiene kit provision, and customary elder sensitization in reducing early marriages.',
      'The findings provide actionable data for state ministries of education and donor agencies designing gender-transformative community interventions.',
    ],
    image: '/assets/images/naef_women_center_1794320112976.jpg',
    imageAlt: 'Women leaders gathered in empowerment center for cooperative business training',
    readTime: '8 min read',
    author: 'MEL Department & External Research Fellows',
  },
  {
    id: 'safeguarding-annual-statement-2026',
    category: 'Press Releases',
    pillar: 'Institutional Governance',
    pillarId: 'institutional',
    date: 'May 08, 2026',
    headline: 'NAEF Reaffirms Zero-Tolerance Safeguarding Charter and Publishes 2026 Accountability Log',
    excerpt:
      'Official statement detailing community whistleblower protection mechanisms, staff vetting protocols, and mandatory annual safeguarding training across all regional offices.',
    fullBody: [
      'The Board of Trustees and Executive Leadership of NAEF have published the organization’s 2026 Institutional Safeguarding & Protection from Sexual Exploitation and Abuse (PSEA) compliance review.',
      'The public statement reaffirms strict mandatory background checks for all field staff, independent confidential reporting verandas for community members, and annual external auditing.',
      'All NAEF project sites adhere to strict child safeguarding protocols, ensuring every community sanctuary remains a safe and dignified space.',
    ],
    image: '/assets/images/naef_about_hero_1794323159180.jpg',
    imageAlt: 'NAEF community field representatives and leaders',
    readTime: '3 min read',
    author: 'Board Secretariat & Legal Oversight Unit',
  },
];

export const RESOURCE_TOOLKITS: ResourceToolkit[] = [
  {
    id: 'toolkit-customary-mediation',
    title: 'Customary Community Mediation & Dialogue Facilitator Handbook',
    category: 'Field Manual',
    pillar: 'Peace Naija Initiative',
    fileFormat: 'PDF',
    fileSize: '3.4 MB',
    pages: 44,
    targetAudience: 'Traditional elders, youth leaders, religious conciliators',
    summary:
      'A practical step-by-step facilitation curriculum for conducting consensus-driven dispute resolution under customary authority without litigation.',
  },
  {
    id: 'toolkit-vsla-operations',
    title: 'Village Savings and Loans Association (VSLA) Governance & Record-Keeping Guide',
    category: 'Operations Guide',
    pillar: "Women and Girls' Empowerment Center",
    fileFormat: 'PDF',
    fileSize: '2.8 MB',
    pages: 36,
    targetAudience: 'Women cooperative treasurers, community organizers',
    summary:
      'Comprehensive bookkeeping templates, passbook procedures, and micro-loan disbursement rules tailored for low-literacy grassroots cooperatives.',
  },
  {
    id: 'toolkit-budget-tracking',
    title: 'Citizen Budget Tracking & Healthcare Project Monitoring Playbook',
    category: 'Operations Guide',
    pillar: 'Civic Engagement Platform',
    fileFormat: 'PDF',
    fileSize: '2.1 MB',
    pages: 28,
    targetAudience: 'Community development associations, civic fellows, journalists',
    summary:
      'Methodologies for obtaining local government fiscal appropriations, conducting on-site physical facility inspections, and filing constructive verification queries.',
  },
  {
    id: 'toolkit-tree-nursery-agroforestry',
    title: 'Participatory Indigenous Tree Nursery & Watershed Restoration Protocol',
    category: 'Field Manual',
    pillar: 'Climate and Environmental Action Platform',
    fileFormat: 'PDF',
    fileSize: '4.2 MB',
    pages: 52,
    targetAudience: 'Smallholder farmers, environmental educators, youth climate clubs',
    summary:
      'Technical guidance on sourcing indigenous seeds, building drought-resilient riverbank sapling beds, and managing communal organic composting facilities.',
  },
  {
    id: 'toolkit-safeguarding-psea',
    title: 'Community Child Safeguarding & PSEA Operating Standard for Field Personnel',
    category: 'Policy Brief',
    pillar: 'Institutional Governance',
    fileFormat: 'PDF',
    fileSize: '1.7 MB',
    pages: 24,
    targetAudience: 'Field facilitators, partner NGOs, volunteer tutors',
    summary:
      'Mandatory behavioral codes of conduct, incident reporting verandas, and victim accompaniment protocols for all NAEF community personnel.',
  },
];

export function filterArticles(
  articles: HubArticle[],
  categoryFilter: string,
  searchQuery: string
): HubArticle[] {
  return articles.filter((article) => {
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    const matchesQuery =
      searchQuery.trim() === '' ||
      article.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.pillar.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });
}

export function filterResources(
  resources: ResourceToolkit[],
  pillarFilter: string,
  searchQuery: string
): ResourceToolkit[] {
  return resources.filter((res) => {
    const matchesPillar = pillarFilter === 'all' || res.pillar.toLowerCase().includes(pillarFilter.toLowerCase());
    const matchesQuery =
      searchQuery.trim() === '' ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesQuery;
  });
}

export function getFeaturedArticle(articles: HubArticle[]): HubArticle {
  return articles.find((a) => a.isFeatured) || articles[0];
}
