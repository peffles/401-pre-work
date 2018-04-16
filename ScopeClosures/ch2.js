// You Don't Know JS: Scope & Closures: Chapter 2
// Example 1:
function foo(a) {

  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

// Example 2:
function foo(str, a) {
  eval(str); // cheated
  console.log(a, b);
}

var b = 2;

foo('var b = 3;', 1);

// Example 3:
function foo(str) {
  'use strict';
  eval(str);
  console.log(a); // ReferenceError: a is not defined
}
foo('var a = 2');
// With Keyword Example 1:
var obj = {
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

var o1 = {
	a: 3
};

var o2 = {
	b: 3
};

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2