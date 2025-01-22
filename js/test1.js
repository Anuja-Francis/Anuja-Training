let a=[1,2,3,4];
let b= a.filter(a=>a%2 ==0);
console.log(b)


let c="Hello";


// function setcookie(name){
//     document.cookie=`${name}`
// }
// setcookie("Anu");

let d={name: "Anu",age: 25};
let {name,age} =d;
console.log(name);
console.log(age);

class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log("sound");
    }
}
const ani= new Animal("dog");
ani.sound();

let aa=[...args];
let a1=[1,2,3]
let a2=[...a1,4,5]
