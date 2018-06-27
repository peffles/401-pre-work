// You Don't Know JS: Scope & Closures: Chapter 5
// Example 1 closure
// Not quite an example of closure 
function foo() {
  let a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}

foo();
// little better example of the mysterious closure
function foo() {
  let a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

let baz = foo();

baz();
// Seeing the "truth", this is an exaple of something you would see on a website
function wait(message) {

  setTimeout(function timer(){
    console.log(message);
  }, 1000);

}

wait('Closure!');
// Loops and closures
// working code
for (let i = 1; i <= 5; i++) {
  (function(){
    let j = i;
    setTimeout( function timer(){
      console.log(j);
    }, j * 1000 );
  })();
}
// some people prefer to write it this way as well

for (let i = 1; i <= 5; i++) {
  (function(j){
    setTimeout( function timer(){
      console.log(j);
    }, j * 1000 );
  })(i);
}
// Modules

let foo = (function CoolModule() {
  let something = 'cool';
  let another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// Modules with the returned oject as an API

let foo = (function CoolModule(id) {
  function change() {
    // modifying the public API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  let publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})('foo module');

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE 