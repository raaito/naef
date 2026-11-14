import test from 'node:test';
import assert from 'node:assert/strict';
import { IMPACT_INDICATORS, formatImpactNumber, calculateAnimatedValue } from './impact.ts';

test('IMPACT_INDICATORS contains all 4 requested indicators', () => {
  assert.equal(IMPACT_INDICATORS.length, 4);
  const labels = IMPACT_INDICATORS.map(i => i.label);
  assert.ok(labels.includes('People Reached'));
  assert.ok(labels.includes('Communities Supported'));
  assert.ok(labels.includes('Projects Completed'));
  assert.ok(labels.includes('Volunteers Engaged'));
});

test('formatImpactNumber formats numbers with comma separators', () => {
  assert.equal(formatImpactNumber(12500), '12,500');
  assert.equal(formatImpactNumber(48), '48');
  assert.equal(formatImpactNumber(850), '850');
});

test('calculateAnimatedValue smoothly eases progress from 0 to target', () => {
  assert.equal(calculateAnimatedValue(0, 1000), 0);
  assert.equal(calculateAnimatedValue(1, 1000), 1000);
  const mid = calculateAnimatedValue(0.5, 1000);
  assert.ok(mid > 500, 'Ease-out curve should be front-loaded');
  assert.ok(mid < 1000);
});
