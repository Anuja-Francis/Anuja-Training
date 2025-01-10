const a = {name: "Anu", age: 25, student: false};
console.log(a.name, a.age, a.student);
a.age = 24;
console.log(a.age);
console.log(typeof(a.name),typeof(a.age),typeof(a.student));

num();
function num(){
    // const num1 = parseInt(prompt("Enter num1:"));
    // const num2 = parseInt(prompt("Enter num2:"));
    const num1 = 30;
    const num2 = 20;
    if (num1 > num2){
        console.log(`${num1}`);
    }else{
        console.log(`${num2}`);
    }
}

check();
function check(){
    const no1 = 0;
    if (no1 > 0){
        console.log(`${no1} is positive number.`);
    }else if(no1 < 0){
        console.log(`${no1} is negative number.`);
    }else{
        console.log(`${no1} is equal to zero.`);
    }
}

year();
function year(){
    const year = 2025;
    if(year % 400 == 0){
        console.log(`${year} is a leap year.`);
    }
    else if(year % 100 == 0){
        console.log(`${year} is a leap year.`);
    }
    else if(year % 4 == 0){
        console.log(`${year} is a leap year.`);
    }else{
        console.log(`${year} is not a leap year.`);
    }
}

numbers();
function numbers(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

even();
function even(){
    console.log("Even numbers:");
    for(let i=1; i<=10; i++){
        if(i%2 ==0)
            console.log(i);
    }
}

factorial();
function factorial(){
    let fact = 1;
    let n = 5;
    while(n>0){
        fact = fact*n;
        n--;
    }
    console.log(`Factorial = ${fact}`);
}

reverse();
function reverse(){
    const str = "hello";
    console.log(str.split('').reverse().join(''));
}

sum();
function sum(){
    const ar= [1,2,3,4];
    let sum =0;
    let n = ar.length;
    for(let i=0;i<n; i++){
        sum = sum+ar[i];
    }
    console.log(`sum=${sum}`);
}

function prime() {
    const n = 10;

    if (n <= 1) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("Prime number");
}

prime();
function prime() {
    const n = 5;

    if (n <= 1) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("Prime number");
}


const ar1 = [456, 1, 9999, 37, 43];
maxormin();
function maxormin() {
    let n = ar1.length;
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < n; i++) {
        if (ar1[i] < min) {
            min = ar1[i];
        }
        if (ar1[i] > max) {
            max = ar1[i];
        }
    }

    console.log(`Minimum number in array is ${min}`);
    console.log(`Maximum number in array is ${max}`);
}


const ab = [1, 2, 2, 3, 4, 4, 5];
// console.log(new Set(ab))

console.log(duplicate(ab));

// function duplicate(ab){
//     return [...new Set(ab)];
// }

function duplicate(ab) {
    return ab.filter((value, index, self) => self.indexOf(value) == index);
}


const abc = [2,3,76,54,57];
oddnum();
function oddnum(){
    // let n = abc.length;
    // console.log(abc);
    // let sum = 0;
    // for(let i=0; i<n; i++){
    //     if(!(abc[i]%2 == 0)){
    //         sum=sum+abc[i];
    //         // console.log(`Odd numbers are: ${abc[i]}`);
    //     }
    // }
    // console.log(`sum of odd numbers = ${sum}`)

    console.log(abc.filter(num => num % 2 !== 0) .reduce((sum, num) => sum + num, 0));
}