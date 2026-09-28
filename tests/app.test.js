const test = require('node:test');
const assert = require('node:assert/strict');
const { validateFeedback } = require('../app.js');

const validCases = [
  ['ordinary feedback', 'Aditya', 'DevOps', 'Useful practical sessions.'],
  ['surrounding whitespace', '  Aditya  ', ' DevOps ', ' Helpful. '],
  ['Unicode text', 'आदित्य', 'डेटा साइंस', 'बहुत उपयोगी'],
  ['single-character fields', 'A', 'B', 'C'],
  ['multiline feedback', 'Aditya', 'DevOps', 'First line\nSecond line'],
];

for (const [label, name, course, feedback] of validCases) {
  test(`accepts ${label}`, () => {
    assert.equal(validateFeedback(name, course, feedback), '');
  });
}

const invalidCases = [
  ['empty name', '', 'DevOps', 'Good'],
  ['empty course', 'Aditya', '', 'Good'],
  ['empty feedback', 'Aditya', 'DevOps', ''],
  ['spaces-only name', '   ', 'DevOps', 'Good'],
  ['spaces-only course', 'Aditya', ' \t ', 'Good'],
  ['spaces-only feedback', 'Aditya', 'DevOps', '  \n '],
  ['all fields empty', '', '', ''],
];

for (const [label, name, course, feedback] of invalidCases) {
  test(`rejects ${label}`, () => {
    assert.equal(validateFeedback(name, course, feedback), 'Please complete all fields.');
  });
}
