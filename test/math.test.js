'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add, multiply, isEven } = require('../src/math');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('multiply multiplies two numbers', () => {
  assert.strictEqual(multiply(4, 5), 20);
});

test('isEven detects even and odd numbers', () => {
  assert.strictEqual(isEven(10), true);
  assert.strictEqual(isEven(7), false);
});
