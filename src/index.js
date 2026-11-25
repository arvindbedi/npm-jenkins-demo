'use strict';

const { add, multiply, isEven } = require('./math');

console.log('npm-jenkins-demo is running');
console.log('2 + 3 =', add(2, 3));
console.log('4 * 5 =', multiply(4, 5));
console.log('Is 10 even?', isEven(10));
