export interface BeneficiaryStory {
  id: string;
  name: string;
  age: number;
  location: string;
  program: string;
  programNumber: number;
  role: string;
  headline: string;
  approvedQuote: string;
  fullStory: string;
  outcome: string;
  portraitImage: string;
  portraitAlt: string;
  consentVerified: boolean;
}

export const STORIES_OF_CHANGE: BeneficiaryStory[] = [
  {
    id: 'amina-literacy-advocate',
    name: 'Amina B.',
    age: 24,
    location: 'Plateau State, Nigeria',
    program: 'Education Support & Development Center',
    programNumber: 4,
    role: 'Scholarship Graduate & Community Literacy Tutor',
    headline: 'Education gave me the confidence to step forward and teach 60 girls in my village.',
    approvedQuote:
      'Growing up, few families thought investing in a girl’s secondary education was viable. When NAEF awarded me an educational scholarship and mentor, it didn’t just change my life—it showed my entire community that educating a daughter transforms everyone.',
    fullStory:
      'Amina completed her secondary education with distinction under NAEF’s educational mentorship program. Rather than leaving her village, she established a free weekend reading sanctuary in her family compound. Today, over 60 young girls gather every Saturday to learn foundational literacy and STEM basics, supported with donated textbooks and study guides from NAEF.',
    outcome: 'Founded weekend literacy circle reaching 60+ out-of-school girls.',
    portraitImage: '/assets/images/naef_story_portrait_1794321505938.jpg',
    portraitAlt: 'Portrait of Amina B. holding study textbooks with a warm proud smile',
    consentVerified: true,
  },
  {
    id: 'mallam-danladi-dialogue',
    name: 'Mallam Danladi S.',
    age: 68,
    location: 'Kaduna State, Nigeria',
    program: 'Peace Naija Initiative',
    programNumber: 1,
    role: 'Traditional Elder & Peace Facilitator',
    headline: 'When we bring youth and elders to sit on the same mat, old grievances dissolve into shared purpose.',
    approvedQuote:
      'For decades, misunderstandings between farming families and pastoralists led to bitter tensions. Through the Peace Naija reconciliation circles, we learned to hear one another’s pain before offering solutions. We are rebuilding our brotherhood.',
    fullStory:
      'Mallam Danladi has lived in his ancestral community for nearly seven decades. Following mediation training with the Peace Naija team, he co-founded the Joint Elders & Youth Peace Council. By establishing a mutual water-sharing timetable and conflict resolution protocol, his village has celebrated two consecutive years with zero inter-communal clashes.',
    outcome: 'Co-brokered historic water and grazing accord across 8 neighboring settlements.',
    portraitImage: '/assets/images/naef_story_elder_1794321506368.jpg',
    portraitAlt: 'Portrait of Mallam Danladi S. seated peacefully in traditional attire',
    consentVerified: true,
  },
];
