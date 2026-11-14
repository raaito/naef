export interface FeaturedProject {
  id: string;
  name: string;
  program: string;
  programNumber: number;
  location: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullNarrative: string;
  milestones: string[];
  fieldStat: {
    value: string;
    label: string;
  };
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'kaduna-peace-hub',
    name: 'Kaduna Grassroots Peace & Mediation Hub',
    program: 'Peace Naija Initiative',
    programNumber: 1,
    location: 'Kaduna State, Nigeria',
    image: '/assets/images/naef_project_peacehub_1794321505991.jpg',
    imageAlt: 'Community members and elders gathered at the Jos peace and mediation center',
    shortDescription:
      'A community-managed conflict resolution sanctuary providing neutral dialogue space, early-warning mediation, and reconciliation circles for inter-communal harmony.',
    fullNarrative:
      'Established in direct partnership with local council chiefs and youth associations, the Kaduna Peace Hub hosts bi-weekly mediation circles, restorative dispute sessions, and peace education clinics. Over 18 months, the center has successfully mediated 42 local boundary and resource disputes without escalation.',
    milestones: [
      'Constructed participatory shaded community veranda for transparent open dialogue.',
      'Trained 35 local dispute conciliators certified in restorative mediation.',
      'Established active youth early-warning communication group across 12 settlements.',
    ],
    fieldStat: {
      value: '42+',
      label: 'Disputes Mediated Peacefully',
    },
  },
  {
    id: 'enugu-girls-leadership',
    name: "Enugu Young Women's Enterprise & Leadership Academy",
    program: "Women & Girls' Empowerment Center",
    programNumber: 2,
    location: 'Enugu State, Nigeria',
    image: '/assets/images/naef_women_center_1794320112976.jpg',
    imageAlt: 'Young women working through leadership curriculum and enterprise planning',
    shortDescription:
      'An intensive 6-month mentorship and business skills incubator equipping young women with financial autonomy, leadership voice, and cooperative seed funding.',
    fullNarrative:
      "This initiative addresses economic exclusion by training young women in sustainable agro-processing, digital accounting, and civic rights. Graduates form micro-savings cooperatives that reinvest earnings directly into girls' school fees and community health funds.",
    milestones: [
      'Graduated 180 young women across three inaugural cohorts.',
      'Facilitated the launch of 24 women-owned collective enterprises.',
      'Achieved a 94% retention rate for girls remaining in secondary education.',
    ],
    fieldStat: {
      value: '180',
      label: 'Graduates Leading Enterprises',
    },
  },
  {
    id: 'benue-agro-reforest',
    name: 'Benue Agro-Ecological Reforestation Reserve',
    program: 'Climate & Environmental Action Platform',
    programNumber: 5,
    location: 'Benue State, Nigeria',
    image: '/assets/images/naef_climate_action_1794320114656.jpg',
    imageAlt: 'Volunteers planting indigenous saplings on fertile hillside soil',
    shortDescription:
      'A community-driven tree planting and soil conservation project restoring deforested riverbanks and introducing drought-tolerant agroforestry to smallholder farmers.',
    fullNarrative:
      'In response to erratic rainfall and riverbank erosion, NAEF partnered with farming families to reforest critical corridors with indigenous Iroko and fruit trees, training farmers on natural bio-fertilizers and organic rainwater catchment.',
    milestones: [
      'Planted 15,000 indigenous saplings across 45 hectares of degraded soil.',
      'Equipped 210 farming households with organic water-retention practices.',
      'Established 6 school greening clubs with student-tended tree nurseries.',
    ],
    fieldStat: {
      value: '15,000',
      label: 'Trees Planted & Monitored',
    },
  },
];
