import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  PILLARS_DEEP_DIVE, 
  CROSS_PILLAR_SYNERGIES, 
  DELIVERY_PRINCIPLES 
} from './programsPage.ts';

test('PILLARS_DEEP_DIVE contains all 5 official NAEF pillars with complete data', () => {
  assert.equal(PILLARS_DEEP_DIVE.length, 5);
  const expectedPillarIds = [
    'peace-naija',
    'women-and-girls',
    'civic-engagement',
    'education-support',
    'climate-and-environment',
  ];

  PILLARS_DEEP_DIVE.forEach((p, idx) => {
    assert.equal(p.id, expectedPillarIds[idx]);
    assert.equal(p.number, `0${idx + 1}`);
    assert.ok(p.title.length > 5);
    assert.ok(p.tagline.length > 10);
    assert.ok(p.leadParagraph.length > 50);
    assert.ok(p.strategicFocus.length >= 4);
    assert.ok(p.interventions.length >= 3);
    assert.ok(p.keyOutcomes.length >= 3);
    assert.ok(p.image.startsWith('/assets/images/'));
    assert.ok(p.quote.quoteText.length > 20);
    assert.ok(p.quote.speaker.length > 2);
  });
});

test('CROSS_PILLAR_SYNERGIES documents intersectional reinforcement', () => {
  assert.ok(CROSS_PILLAR_SYNERGIES.length >= 3);
  for (const item of CROSS_PILLAR_SYNERGIES) {
    assert.ok(item.pillarPair.includes('+'));
    assert.ok(item.title.length > 5);
    assert.ok(item.description.length > 20);
  }
});

test('DELIVERY_PRINCIPLES defines 4-step community delivery methodology', () => {
  assert.equal(DELIVERY_PRINCIPLES.length, 4);
  assert.equal(DELIVERY_PRINCIPLES[0].step, '01');
  assert.equal(DELIVERY_PRINCIPLES[3].step, '04');
  for (const principle of DELIVERY_PRINCIPLES) {
    assert.ok(principle.title.length > 5);
    assert.ok(principle.details.length > 20);
  }
});
