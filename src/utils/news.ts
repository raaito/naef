export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  headline: string;
  excerpt: string;
  fullBody: string;
  image: string;
  imageAlt: string;
  readTime: string;
  author: string;
}

export const RECENT_ARTICLES: NewsArticle[] = [
  {
    id: 'youth-peace-summit-2026',
    category: 'Peace & Governance',
    date: 'October 24, 2026',
    headline: 'NAEF Concludes 2026 National Youth Peace & Mediation Summit',
    excerpt:
      'Over 200 grassroots youth delegates gathered to ratify a joint resolution on communal dispute prevention, early-warning dialogues, and local peacebuilding.',
    fullBody:
      'The 2026 National Youth Peace Summit brought together community leaders, traditional rulers, and youth ambassadors across 18 states. Participants engaged in intensive simulation workshops on restorative justice, digital misinformation counter-messaging, and intercommunal mediation. The resulting Abuja Youth Peace Declaration establishes 12 regional monitoring committees to support peaceful community relations.',
    image: '/src/assets/images/naef_peace_naija_1794320113056.jpg',
    imageAlt: 'Youth delegates and community elders in collaborative mediation session',
    readTime: '4 min read',
    author: 'NAEF Communications Bureau',
  },
  {
    id: 'community-learning-hub-opens',
    category: 'Education Support',
    date: 'September 18, 2026',
    headline: 'New Community Learning Sanctuary Opens to Support 400 Out-of-School Children',
    excerpt:
      'Equipped with donated learning kits, solar lighting, and dedicated volunteer tutors, the new center expands foundational literacy in rural settlements.',
    fullBody:
      'In partnership with local village education committees, NAEF officially commissioned the Mangu Community Learning Sanctuary. The solar-powered facility offers free after-school foundational numeracy and reading clubs, a lending library of 1,200 textbooks, and weekend digital literacy hours for adolescent girls.',
    image: '/src/assets/images/naef_education_support_1794320113228.jpg',
    imageAlt: 'Young students in bright learning sanctuary with textbooks',
    readTime: '3 min read',
    author: 'Education Support Desk',
  },
  {
    id: 'women-agroforestry-resilience',
    category: 'Climate & Sustainability',
    date: 'August 30, 2026',
    headline: 'Empowering Rural Women Collectives with Climate-Resilient Agroforestry',
    excerpt:
      'Farming cooperatives plant 15,000 indigenous saplings to restore degraded watersheds while generating sustainable income for rural households.',
    fullBody:
      'As part of the Climate and Environmental Action Platform, NAEF provided 120 smallholder women farmers with drought-tolerant indigenous fruit saplings, organic compost preparation tools, and rainwater harvesting infrastructure. The initiative preserves vital biodiversity while bolstering household economic resilience.',
    image: '/src/assets/images/naef_climate_action_1794320114656.jpg',
    imageAlt: 'Volunteers and women farmers planting indigenous seedlings in fertile soil',
    readTime: '5 min read',
    author: 'Environmental Action Bureau',
  },
];
