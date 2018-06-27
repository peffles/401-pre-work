// You Don't Know JS: Scope & Closures: Chapter 2


function foo(a) {

  let b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

// Example 2:
function foo(str, a) {
  eval(str);
  console.log(a, b);
}

let b = 2;

foo('let b = 3;', 1);

// Example 3:
function foo(str) {
  'use strict';
  eval(str);
  console.log(a); // ReferenceError: a is not defined
}
foo('let a = 2');
// With Keyword Example 1:
let obj = {
	a: 1,
	b: 2,
	c: 3
};

// long way
obj.a = 2;
obj.b = 3;
obj.c = 4;

// short way
with (obj) {
	a = 3;
	b = 4;
	c = 5;
}
// with Keyword Example 2:
function foo(obj) {
	with (obj) {
		a = 2;
	}
}

let o1 = {
	a: 3
};

let o2 = {
	b: 3
};

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a);
console.log(a); // Should equal 2
