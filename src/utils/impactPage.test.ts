import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  HEADLINE_METRICS, 
  STATE_FOOTPRINTS, 
  MEAL_TIERS, 
  TRANSPARENCY_REPORTS,
  filterFootprintsByPillar,
  getMetricById,
  getTotalCommunitiesCount
} from './impactPage.ts';

test('HEADLINE_METRICS contains exactly 6 verified impact metrics with documentation sources', () => {
  assert.equal(HEADLINE_METRICS.length, 6);
  for (const metric of HEADLINE_METRICS) {
    assert.ok(metric.id.length > 0);
    assert.ok(metric.metricNumber.length > 0);
    assert.ok(metric.label.length > 0);
    assert.ok(metric.verificationSource.length > 0);
    assert.ok(metric.shortDescription.length > 0);
  }
});

test('STATE_FOOTPRINTS includes 5 focal Nigerian states with active pillars and LGAs', () => {
  assert.equal(STATE_FOOTPRINTS.length, 5);
  const stateNames = STATE_FOOTPRINTS.map(s => s.state);
  assert.ok(stateNames.some(s => s.includes('Plateau')));
  assert.ok(stateNames.some(s => s.includes('Kaduna')));
  assert.ok(stateNames.some(s => s.includes('Nasarawa')));
  assert.ok(stateNames.some(s => s.includes('Benue')));
  assert.ok(stateNames.some(s => s.includes('Abuja')));

  for (const footprint of STATE_FOOTPRINTS) {
    assert.ok(footprint.focalLGAs.length > 0);
    assert.ok(footprint.communitiesCount > 0);
    assert.ok(footprint.highlightMilestone.length > 0);
  }
});

test('filterFootprintsByPillar filters states correctly', () => {
  const peaceStates = filterFootprintsByPillar('Peace Naija');
  assert.ok(peaceStates.length >= 2);
  assert.ok(peaceStates.every(s => s.activePillars.some(p => p.includes('Peace Naija'))));

  const allStates = filterFootprintsByPillar('all');
  assert.equal(allStates.length, 5);
});

test('MEAL_TIERS defines exactly 4 rigorous verification stages', () => {
  assert.equal(MEAL_TIERS.length, 4);
  assert.equal(MEAL_TIERS[0].phase, 'Stage 01');
  assert.equal(MEAL_TIERS[3].phase, 'Stage 04');
  for (const tier of MEAL_TIERS) {
    assert.ok(tier.deliverables.length >= 2);
  }
});

test('TRANSPARENCY_REPORTS contains downloadable compliance and impact reviews', () => {
  assert.ok(TRANSPARENCY_REPORTS.length >= 4);
  for (const report of TRANSPARENCY_REPORTS) {
    assert.equal(report.fileFormat, 'PDF');
    assert.ok(report.fileSize.endsWith('MB'));
    assert.ok(report.auditorStatus.length > 0);
  }
});

test('getMetricById retrieves target metric or null', () => {
  const metric = getMetricById('people-reached');
  assert.ok(metric !== null);
  assert.equal(metric?.metricNumber, '120,000');

  const nonexistent = getMetricById('unknown-metric');
  assert.equal(nonexistent, null);
});

test('getTotalCommunitiesCount aggregates total footprint communities accurately', () => {
  const total = getTotalCommunitiesCount();
  assert.ok(total >= 85);
});
