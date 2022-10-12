const name = "Susan";
const height = 35;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
console.log(message);

//This function do nothing
function doNothing() {}

// This function do something, it says Hello!
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
//Let's write a function to say hello to Guadalupe
function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe!");
}



//another function
function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }



//Hello to Samip
function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

// function with argument and parameter
function doSomeThing(thing) {
    console.log(thing);
}
doSomeThing("anything"); // passing the argument 'anything' into our function

// Try out the above function with different arguments
doSomeThing("do me a fever please!");
doSomeThing("Wow! I can assign different strings in this argument while the function is the same");