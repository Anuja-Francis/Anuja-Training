// const a = 5;
// const b = 10;
// console.log("Fifteen is " + (a + b) + " and \n not " + (2 * a + b) + ".");

// let
// let x=2;
// if ( x==2 ){
//     let x=3;
//     console.log(x);
// }
// console.log(x);

function varTest() {
    var x = 1;
    {
      var x = 2; 
      console.log(x); 
    }
    console.log(x);
}
varTest()

function letTest() {
    let x = 1;
    {
      let x = 2; 
      console.log(x); 
    }
    console.log(x); 
}
letTest()

// function test() {
//     var foo = 33;
//     if (foo) {
//       let foo = foo + 55; 
//     }
// }
// test();

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
}

console.log(number);

// destructuring
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [ , a, b, c] = result;
console.log(a, b, c); 

console.log(`string text line 1 \n string text line 2`);

const name = "John";
const greeting = `Hello, I am ${name}`;
console.log(greeting);