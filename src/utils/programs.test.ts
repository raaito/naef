import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { PROGRAM_DETAILS } from './programs.ts';

test('PROGRAM_DETAILS contains all 5 required NAEF pillars', () => {
  assert.equal(PROGRAM_DETAILS.length, 5);
  const titles = PROGRAM_DETAILS.map(p => p.title);
  assert.ok(titles.some(t => t.includes('Peace Naija')));
  assert.ok(titles.some(t => t.includes("Women and Girls' Empowerment")));
  assert.ok(titles.some(t => t.includes('Civic Engagement')));
  assert.ok(titles.some(t => t.includes('Education Support and Development')));
  assert.ok(titles.some(t => t.includes('Climate and Environmental Action')));
});

test('Each pillar contains at least 3 distinct objectives and verified image asset', () => {
  for (const pillar of PROGRAM_DETAILS) {
    assert.ok(pillar.objectives.length >= 3, `Pillar ${pillar.title} must have >= 3 objectives`);
    assert.ok(pillar.image.startsWith('/assets/images/'), `Pillar ${pillar.title} must have public asset image`);
    assert.ok(fs.existsSync(path.join(process.cwd(), 'public', pillar.image)), `Image file missing for ${pillar.title}: ${pillar.image}`);
    assert.ok(pillar.keyFocusAreas.length > 0, `Pillar ${pillar.title} must have keyFocusAreas`);
    assert.ok(pillar.fieldQuote.text.length > 10, `Pillar ${pillar.title} must have field quote`);
  }
});
