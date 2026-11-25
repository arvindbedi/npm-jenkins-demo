'use strict';

const { add, multiply, isEven } = require('./math');

console.log('npm-jenkins-demo is running');
console.log('22 + 3 =', add(22, 3));
console.log('41 * 5 =', multiply(41, 5));
console.log('Is 11 even?', isEven(11));
