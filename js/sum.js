/** It is due to "Hoisting" **/
/** Difference between var,let and const **/

console.log(funcDec());

const funcDef = function () {
    return "function definition";
}

function funcDec () {
    return "function declaration";
}

