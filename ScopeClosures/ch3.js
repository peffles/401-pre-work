// You Don't Know JS: Scope & Closures: Chapter 3
// Example 1
function foo(a) {
  var b = 2;

  // some code

  function bar() {
  // insert more code here
  }

  // MOAR CODE!!!

  var c = 3;
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

var b;

doSomething(2);
// Better example:
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;

  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

doSomething( 2 );

// Collision Aviodance Example:
function foo() {
  function bar(a) {
    i = 3; // changing the 'i' in the enclosing scope's for-loop
    console.log(a + i);
  }

  for (var i=0; i<10; i++) {
    bar(i * 2); // infinite loop
  }
}

foo();

var MyReallyCoolLibrary = {
  awesome: 'stuff',
  doSomething: function() {
  // ...
  },
  doAnotherThing: function() {
  // ...
  }
};
// Functions as Scopes Example:
var a = 2;

function foo() { // insert this

  var a = 3;
  console.log(a);

} // and this
foo(); // and this

console.log(a);
// Better Example:
var a = 2;

(function foo(){ // insert this

  var a = 3;
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
var a = 2;

(function foo(){

  var a = 3;
  console.log(a);

})();

console.log(a);

// IIFE Example
var a = 2;

(function IIFE(){

  var a = 3;
  console.log(a);

})();

console.log(a);

//Another IIFE
var a = 2;

(function IIFE(global){

  var a = 3;
  console.log(a);
  console.log(global.a);

})(window);

console.log(a);

undefined = true; // setting a land mine for other code

(function IIFE(undefined){

  var a;
  if (a === undefined) {
    console.log('Undefined is safe here!');
  }

})();
// Another IIFE Variation
var a = 2;

(function IIFE(def){
  def(window);
})(function def(global){

  var a = 3;
  console.log(a);
  console.log(global.a);

});

//Blocks as Scopes
for (var i=0; i<10; i++) {
  console.log(i);
}
var foo = true;

if (foo) {
  var bar = foo * 2;
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
var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}

console.log(bar); // ReferenceError

// Explicit Block
var foo = true;

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

var someReallyBigData = {...};

process(someReallyBigData);

var btn = document.getElementById('my_button');

btn.addEventListener('click', function click(evt){
	console.log('button clicked');
}, /*capturingPhase=*/false );

// Another Example
function process(data) {
	// do something
}

// anything declared inside this block can go away after
{
	let someReallyBigData = {...};

	process(someReallyBigData);
}

var btn = document.getElementById('my_button');

btn.addEventListener('click', function click(evt){
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
	for (j=0; j<10; j++) {
		let i = j; // re bound for each iteration
		console.log(i);
	}
}
//Code to refactor
var foo = true, baz = 10;

if (foo) {
	var bar = 3;

	if (baz > bar) {
		console.log(baz);
	}

	// ...
}
// Refactor it now
var foo = true, baz = 10;

if (foo) {
	var bar = 3;

	// ...
}
// But, be careful of such changes when using block-scoped variables:
if (baz > bar) {
	console.log(baz);
}
var foo = true, baz = 10;

if (foo) {
	let bar = 3;

	if (baz > bar) { // <-- don't forget 'bar' when moving!
		console.log( baz );
	}
}

//Const Example
var foo = true;

if (foo) {
	var a = 2;
	const b = 3; // block-scoped to the containing 'if'

	a = 3; // fine
	b = 4; // error
}

console.log( a );
console.log( b ); // ReferenceError!

