import test from 'node:test';
import assert from 'node:assert/strict';
import { RECENT_ARTICLES } from './news.ts';

test('RECENT_ARTICLES contains exactly 3 restrained editorial articles as specified', () => {
  assert.equal(RECENT_ARTICLES.length, 3);
  for (const article of RECENT_ARTICLES) {
    assert.ok(article.headline.length > 10);
    assert.ok(article.category.length > 3);
    assert.ok(article.date.includes('2026'));
    assert.ok(article.image.startsWith('/src/assets/images/'));
    assert.ok(article.excerpt.length > 20);
    assert.ok(article.fullBody.length > 50);
  }
});
