// You Don't Know JS: Scope & Closures: Chapter 1
'use strict';

console.log(a);
let a = 2;
function foo(a) {
  console.log(a);
}

foo(2);
// QUIZ
// function foo(a) {
//   var b = a;
//   return a + b;
// }

// var c = foo(2);
// Question 1: Identify all the LHS look-ups.
// Answer 1A: c =, 1B: b =, 1C: a = 2.
// Question 2: Identify all the RHS look-ups.
// Answer 2A: = a, 1B: foo(a), 1C: +b, 1D: a +