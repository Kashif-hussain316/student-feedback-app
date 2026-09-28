const test = require('node:test');
const assert = require('node:assert/strict');
const { validateFeedback } = require('../app.js');

test('accepts complete feedback', () => {
  assert.equal(validateFeedback('Aditya', 'DevOps', 'Useful practical sessions.'), '');
});

test('rejects missing required fields', () => {
  assert.equal(validateFeedback('', 'DevOps', 'Good'), 'Please complete all fields.');
  assert.equal(validateFeedback('Aditya', '', 'Good'), 'Please complete all fields.');
  assert.equal(validateFeedback('Aditya', 'DevOps', '  '), 'Please complete all fields.');
});