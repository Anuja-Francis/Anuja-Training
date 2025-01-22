async function greet() {
    return "Hello, World!";
}

async function sayHello() {
    const message = await greet();  
    console.log(message); 
}
sayHello();


const ar=[1,2,3];
const a=ar.map((x)=>x**2)
console.log(a)

const ar1=[1,2,3,[4,5,[6,7]]];
const b=ar1.flat(2);
console.log(b);

let sum = 5 + 3;
console.log(sum)

let fruits = ["apple","mango"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

for(let fruit of fruits){
    console.log(fruit)
}

const car = {
    model: "toyota"
}
console.log(car.model)

function cars(model){
    this.model=model
}
const carcons = new cars("bmw");
console.log(carcons.model)