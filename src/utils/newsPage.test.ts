import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  ALL_HUB_ARTICLES, 
  RESOURCE_TOOLKITS, 
  filterArticles, 
  filterResources, 
  getFeaturedArticle 
} from './newsPage.ts';

test('ALL_HUB_ARTICLES contains at least 6 rich editorial publications across categories', () => {
  assert.ok(ALL_HUB_ARTICLES.length >= 6);
  for (const article of ALL_HUB_ARTICLES) {
    assert.ok(article.id.length > 0);
    assert.ok(article.headline.length > 0);
    assert.ok(article.excerpt.length > 0);
    assert.ok(article.fullBody.length >= 2);
    assert.ok(article.readTime.includes('min read'));
    assert.ok(article.author.length > 0);
  }
});

test('RESOURCE_TOOLKITS contains at least 5 downloadable toolkits and manuals with metadata', () => {
  assert.ok(RESOURCE_TOOLKITS.length >= 5);
  for (const toolkit of RESOURCE_TOOLKITS) {
    assert.equal(toolkit.fileFormat, 'PDF');
    assert.ok(toolkit.pages > 15);
    assert.ok(toolkit.fileSize.endsWith('MB'));
    assert.ok(toolkit.targetAudience.length > 0);
    assert.ok(toolkit.summary.length > 0);
  }
});

test('filterArticles filters accurately by category and search keyword', () => {
  const policyArticles = filterArticles(ALL_HUB_ARTICLES, 'Policy Briefs', '');
  assert.ok(policyArticles.length >= 1);
  assert.ok(policyArticles.every(a => a.category === 'Policy Briefs'));

  const peaceSearch = filterArticles(ALL_HUB_ARTICLES, 'all', 'mediation');
  assert.ok(peaceSearch.length >= 1);
  assert.ok(peaceSearch.some(a => a.headline.toLowerCase().includes('mediation') || a.excerpt.toLowerCase().includes('mediation')));

  const noMatches = filterArticles(ALL_HUB_ARTICLES, 'all', 'nonexistentquery123');
  assert.equal(noMatches.length, 0);
});

test('filterResources filters accurately by pillar and search keyword', () => {
  const peaceToolkits = filterResources(RESOURCE_TOOLKITS, 'Peace Naija', '');
  assert.ok(peaceToolkits.length >= 1);
  assert.ok(peaceToolkits.every(t => t.pillar.includes('Peace Naija')));

  const searchManuals = filterResources(RESOURCE_TOOLKITS, 'all', 'bookkeeping');
  assert.ok(searchManuals.length >= 1);
  assert.ok(searchManuals.some(t => t.summary.includes('bookkeeping')));
});

test('getFeaturedArticle returns the flagged featured article', () => {
  const featured = getFeaturedArticle(ALL_HUB_ARTICLES);
  assert.ok(featured !== null);
  assert.equal(featured.isFeatured, true);
  assert.equal(featured.id, 'youth-peace-summit-2026');
});
