import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  FIELD_BUREAUS,
  DEPARTMENT_CHANNELS,
  CONTACT_FAQS,
  getDepartmentChannelById,
  filterBureausByZone,
  validateContactSubmission,
  generateInquiryReferenceId,
  ContactSubmissionInput,
} from './contactPage.ts';

function buildValidSubmission(overrides: Partial<ContactSubmissionInput> = {}): ContactSubmissionInput {
  return {
    fullName: 'Amina Bello',
    email: 'amina.bello@example.org',
    organization: 'Kaduna Civic Coalition',
    departmentId: 'partnerships',
    preferredBureauId: 'abuja-hq',
    subject: '2026 Civic Engagement Workshop Proposal',
    message: 'We would like to coordinate a regional town hall series with your Abuja secretariat.',
    consentGiven: true,
    ...overrides,
  };
}

describe('Contact Page Domain Logic', () => {
  it('provides institutional bureaus including Abuja HQ and regional placeholder desks', () => {
    assert.ok(FIELD_BUREAUS.length >= 4);
    const hq = FIELD_BUREAUS.find((b) => b.isHeadquarters);
    assert.ok(hq);
    assert.equal(hq.zone, 'FCT');
    assert.ok(hq.address.includes('Abuja'));
  });

  it('provides departmental channels and FAQ guidance', () => {
    assert.ok(DEPARTMENT_CHANNELS.length >= 5);
    assert.ok(CONTACT_FAQS.length >= 4);
    const media = getDepartmentChannelById('media');
    assert.equal(media.email, 'media@naef-foundation.org');
    const fallback = getDepartmentChannelById('unknown-dept');
    assert.equal(fallback.id, 'general');
  });

  it('filters field bureaus cleanly by zone', () => {
    const all = filterBureausByZone(FIELD_BUREAUS, 'all');
    assert.equal(all.length, FIELD_BUREAUS.length);

    const northCentral = filterBureausByZone(FIELD_BUREAUS, 'North-Central');
    assert.ok(northCentral.length >= 2);
    assert.ok(northCentral.every((b) => b.zone === 'North-Central'));

    const fct = filterBureausByZone(FIELD_BUREAUS, 'FCT');
    assert.equal(fct.length, 1);
    assert.equal(fct[0].id, 'abuja-hq');
  });

  it('accepts a valid contact submission without errors', () => {
    const result = validateContactSubmission(buildValidSubmission());
    assert.equal(result.isValid, true);
    assert.deepEqual(result.errors, {});
  });

  it('rejects empty names, invalid emails, short messages, and missing consent', () => {
    const result = validateContactSubmission(
      buildValidSubmission({
        fullName: 'A',
        email: 'not-an-email',
        subject: 'Hi',
        message: 'Too short',
        consentGiven: false,
      })
    );

    assert.equal(result.isValid, false);
    assert.ok(result.errors.fullName);
    assert.ok(result.errors.email);
    assert.ok(result.errors.subject);
    assert.ok(result.errors.message);
    assert.ok(result.errors.consentGiven);
  });

  it('generates deterministic formatted inquiry reference IDs when seeded', () => {
    assert.equal(generateInquiryReferenceId('partnerships', 4281), 'NAEF-PRT-5281');
    assert.equal(generateInquiryReferenceId('safeguarding', 100), 'NAEF-SGF-1100');
    assert.match(generateInquiryReferenceId('media'), /^NAEF-MED-\d{4}$/);
  });
});
