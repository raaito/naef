import test from 'node:test';
import assert from 'node:assert/strict';
import { CORE_COMMITMENTS, REGIONAL_SCOPE } from './discover.ts';

test('CORE_COMMITMENTS contains exactly three foundational principles', () => {
  assert.equal(CORE_COMMITMENTS.length, 3);
  const titles = CORE_COMMITMENTS.map(c => c.title);
  assert.ok(titles.includes('Community-Led Agency'));
  assert.ok(titles.includes('Intersectional Impact'));
  assert.ok(titles.includes('Accountable Advocacy'));
});

test('REGIONAL_SCOPE contains verified regional metadata for NAEF', () => {
  assert.equal(REGIONAL_SCOPE.country, 'Nigeria');
  assert.equal(REGIONAL_SCOPE.region, 'West Africa');
  assert.ok(REGIONAL_SCOPE.focusAreas.length >= 3);
});
