const names = ["Anu","Amala","Ann","Manu"];
console.log(names.length);

console.log(names.map((names)=>names.length));

// Rest parameters
function sum(...myArgs){
    let sum = 0;
    for(const args of myArgs){
        sum = sum + args;
    }
    return sum;
}
console.log(sum(2,3,4));
console.log(sum(1,2,3,4,5));


function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");