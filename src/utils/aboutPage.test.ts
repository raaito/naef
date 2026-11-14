import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  FOUNDING_STORY, 
  CORE_VALUES, 
  TIMELINE_MILESTONES, 
  THEORY_OF_CHANGE, 
  LEADERSHIP_TEAM 
} from './aboutPage.ts';

test('FOUNDING_STORY contains valid editorial narrative and paragraphs', () => {
  assert.ok(FOUNDING_STORY.headline.length > 15);
  assert.ok(FOUNDING_STORY.summary.length > 50);
  assert.equal(FOUNDING_STORY.prose.length, 2);
});

test('CORE_VALUES contains all 7 handbook organizational values', () => {
  assert.equal(CORE_VALUES.length, 7);
  const titles = CORE_VALUES.map((v) => v.title);
  for (const expected of ['Integrity', 'Accountability', 'Inclusion', 'Service', 'Collaboration', 'Impact', 'Transparency']) {
    assert.ok(titles.includes(expected), `Missing Core Value: ${expected}`);
  }
  for (const val of CORE_VALUES) {
    assert.ok(val.title.length >= 6);
    assert.ok(val.statement.length > 10);
    assert.ok(val.description.length > 20);
  }
});

test('TIMELINE_MILESTONES spans key chronological phases', () => {
  assert.ok(TIMELINE_MILESTONES.length >= 4);
  assert.equal(TIMELINE_MILESTONES[0].year, '2021');
});

test('THEORY_OF_CHANGE defines the 4-phase transformation roadmap', () => {
  assert.equal(THEORY_OF_CHANGE.length, 4);
  assert.equal(THEORY_OF_CHANGE[0].stepNumber, '01');
  assert.equal(THEORY_OF_CHANGE[3].stepNumber, '04');
});

test('LEADERSHIP_TEAM covers all 6 handbook governance tiers with identifiable placeholders', () => {
  assert.equal(LEADERSHIP_TEAM.length, 6);
  const trustees = LEADERSHIP_TEAM.filter((m) => m.group === 'trustee');
  const executives = LEADERSHIP_TEAM.filter((m) => m.group === 'executive');
  const field = LEADERSHIP_TEAM.filter((m) => m.group === 'field');
  assert.equal(trustees.length, 2);
  assert.equal(executives.length, 2);
  assert.equal(field.length, 2);
  for (const member of LEADERSHIP_TEAM) {
    assert.ok(member.name.includes('[') && member.name.includes(']')); // verified placeholder format
    assert.ok(member.tierNumber.length === 2);
    assert.ok(member.tierTitle.length > 0);
  }
});
