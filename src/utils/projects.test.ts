import test from 'node:test';
import assert from 'node:assert/strict';
import { FEATURED_PROJECTS } from './projects.ts';
import { STORIES_OF_CHANGE } from './stories.ts';

test('FEATURED_PROJECTS contains verified projects across pillars', () => {
  assert.ok(FEATURED_PROJECTS.length >= 3);
  for (const project of FEATURED_PROJECTS) {
    assert.ok(project.name.length > 5);
    assert.ok(project.location.includes('Nigeria'));
    assert.ok(project.image.startsWith('/assets/images/'));
    assert.ok(project.milestones.length >= 3);
  }
});

test('STORIES_OF_CHANGE contains human stories with verified consent', () => {
  assert.ok(STORIES_OF_CHANGE.length >= 2);
  for (const story of STORIES_OF_CHANGE) {
    assert.equal(story.consentVerified, true);
    assert.ok(story.portraitImage.startsWith('/assets/images/'));
    assert.ok(story.approvedQuote.length > 20);
    assert.ok(story.outcome.length > 10);
  }
});
