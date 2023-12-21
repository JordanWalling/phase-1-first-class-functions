function receivesAFunction(cb) {
  cb();
}

function greet() {
  console.log("Hello and welcome");
}

receivesAFunction(greet);
// returns Hello and Welcome

// RETURN A NAMED FUNCTION
function introduceName() {
  console.log("Hi, my name is Jordan.");
}

function programmingLanguage() {
  console.log("The programming language I am learning is JavaScript.");
}

function returnsANamedFunction() {
  function namedFunction() {
    introduceName();
    programmingLanguage();
  }
  return namedFunction;
}

const namedFunction = returnsANamedFunction();
namedFunction();
// Hi, my name is Jordan.
// The programming language I am learning is JavaScript.

function returnsAnAnonymousFunction() {
  return () => {
    introduceName();
    programmingLanguage();
  };
}
