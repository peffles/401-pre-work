// You Don't Know JS: Scope & Closures: Chapter 4
// Example 1

a = 2;

let a;

console.log(a); // undefined

// Hoisting

foo(); // 1

let foo;

function foo() {
  console.log(1);
}

foo = function() {
  console.log(2);
};
// better example of hoisting with duplicate declarations
foo(); // 3

function foo() {
  console.log(1);
}

let foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}