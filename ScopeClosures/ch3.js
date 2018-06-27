// You Don't Know JS: Scope & Closures: Chapter 3
// Example 1
function foo(a) {
  let b = 2;

  // some code

  function bar() {
  // insert more code here
  }

  // MOAR CODE!!!

  let c = 3;
}
bar(); // fails

console.log(a, b, c ); // all 3 fail
// Example 2:
function doSomething(a) {
  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}

let b;

doSomething(2);
// Better example:
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  let b;

  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

doSomething( 2 );

// Collision Aviodance Example:
function foo() {
  function bar(a) {
    i = 3;
    console.log(a + i);
  }

  for (let i=0; i<10; i++) {
    bar(i * 2); // infinite loop
  }
}

foo();

let MyReallyCoolLibrary = {
  awesome: 'stuff',
  doSomething: function() {
  // ...
  },
  doAnotherThing: function() {
  // ...
  }
};
// Functions as Scopes Example:
let a = 2;

function foo() { // insert this

  let a = 3;
  console.log(a);

} // and this
foo(); // this too

console.log(a);
// Better Example:
let a = 2;

(function foo(){ // insert this

  let a = 3;
  console.log( a );

})(); // and this

console.log( a );

// Anonymous vs. Named example;
setTimeout(function(){
  console.log('I waited 1 second!');
}, 1000);

// Named example
setTimeout(function timeoutHandler(){ // I have a name
  console.log('I waited 1 second!');
}, 1000);
// Invoking Function Expressions Immediately
let a = 2;

(function foo(){

  let a = 3;
  console.log(a);

})();

console.log(a);

// IIFE Example
let a = 2;

(function IIFE(){

  let a = 3;
  console.log(a);

})();

console.log(a);

//Another IIFE
let a = 2;

(function IIFE(global){

  let a = 3;
  console.log(a);
  console.log(global.a);

})(window);

console.log(a);

undefined = true; // setting a land mine for other code

(function IIFE(undefined){

  let a;
  if (a === undefined) {
    console.log('Undefined is safe here!');
  }

})();
// Another IIFE Variation
let a = 2;

(function IIFE(def){
  def(window);
})(function def(global){

  let a = 3;
  console.log(a);
  console.log(global.a);

});

//Blocks as Scopes
for (let i = 0; i< 10; i++) {
  console.log(i);
}
let foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}

// Try/Catch
try {
  undefined(); // illegal operation
}
catch (err) {
  console.log(err); // works
}

console.log(err); // ReferenceError: 'err' not found

// Let Example
let foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}

console.log(bar); // ReferenceError

// Explicit Block
let foo = true;

if (foo) {
  { // explicit block
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
  }
}

console.log(bar); // ReferenceError

//Hoisting
{
  console.log(bar); // ReferenceError!
  let bar = 2;
}

// Garbage Collection
function process(data) {
	// do something
}

let someReallyBigData = bigData};

process(someReallyBigData);

let btn = document.getElementById('my_button');

btn.addEventListener('click', function click(event){
	console.log('button clicked');
}, /*capturingPhase=*/false );

// Another Example
function process(data) {
	// do something
}

{
	let someReallyBigData = {bigData};

	process(someReallyBigData);
}

let btn = document.getElementById('my_button');

btn.addEventListener('click', function click(event){
	console.log('button clicked');
}, /*capturingPhase=*/false);

//Let loops
for (let i=0; i<10; i++) {
	console.log(i);
}

console.log(i); // ReferenceError

// Another example
{
	let j;
	for (j = 0; j < 10; j++) {
		let i = j; // re bound each iteration
		console.log(i);
	}
}
// Code to refactor
let foo = true, baz = 10;

if (foo) {
	let bar = 3;

	if (baz > bar) {
		console.log(baz);
	}

	// ...
}
// Refactor it now
let foo = true, baz = 10;

if (foo) {
	let bar = 3;

	// ...
}
// But, be careful of such changes when using block-scoped letiables:
if (baz > bar) {
	console.log(baz);
}
let foo = true, baz = 10;

if (foo) {
	let bar = 3;

	if (baz > bar) {
		console.log(baz);
	}
}

//Const Example
let foo = true;

if (foo) {
	let a = 2;
	const b = 3;

	a = 3; // okay
	b = 4; // error
}

console.log(a);
console.log(b); // ReferenceError!

