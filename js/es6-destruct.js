let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10,20,30,40,50];
console.log(rest);


// Array destructuring
const foo = ["one","two"];
const [red,green] = foo;
console.log(red);
console.log(green);


const fo = ["one","two"];
const [yellow,orange,blue] = fo;
console.log(yellow);
console.log(blue);


const user = {
    id : 41,
    isverified: true,
}
const{id, isverified} = user;
console.log(id);
console.log(isverified);