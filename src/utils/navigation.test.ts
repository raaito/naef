import test from 'node:test';
import assert from 'node:assert/strict';
import { NAV_LINKS, PROGRAM_PILLARS, getPillarByNumber, formatPillarIndex } from './navigation.ts';

test('NAV_LINKS contains 7 primary navigation items matching NAEF requirements', () => {
  assert.equal(NAV_LINKS.length, 7);
  const labels = NAV_LINKS.map(item => item.label);
  assert.ok(labels.includes('Home'));
  assert.ok(labels.includes('About Us'));
  assert.ok(labels.includes('Our Programs'));
  assert.ok(labels.includes('Our Impact'));
  assert.ok(labels.includes('News & Resources'));
  assert.ok(labels.includes('Get Involved'));
  assert.ok(labels.includes('Contact'));
});

test('PROGRAM_PILLARS contains exactly the 5 organizational pillars', () => {
  assert.equal(PROGRAM_PILLARS.length, 5);
  const pillarTitles = PROGRAM_PILLARS.map(p => p.title);
  assert.ok(pillarTitles.some(t => t.includes('Peace Naija')));
  assert.ok(pillarTitles.some(t => t.includes("Women & Girls' Empowerment")));
  assert.ok(pillarTitles.some(t => t.includes('Civic Engagement')));
  assert.ok(pillarTitles.some(t => t.includes('Education Support')));
  assert.ok(pillarTitles.some(t => t.includes('Climate & Environmental')));
});

test('getPillarByNumber returns correct pillar or null', () => {
  const p1 = getPillarByNumber(1);
  assert.ok(p1 !== null);
  assert.equal(p1?.title, 'Peace Naija Initiative');

  const p99 = getPillarByNumber(99);
  assert.equal(p99, null);
});

test('formatPillarIndex pads single digit indices with leading zero', () => {
  assert.equal(formatPillarIndex(1), '01');
  assert.equal(formatPillarIndex(5), '05');
  assert.equal(formatPillarIndex(10), '10');
});
