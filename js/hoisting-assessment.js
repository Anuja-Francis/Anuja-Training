a = 10;
console.log(a);
var a;


const arr=[1,2,3,5,6];
console.log(arr.slice(2,4));
arr.splice(3,0,4)
console.log(arr);
console.log(arr.find(element => element>3));
console.log(arr.findIndex(element => element>3));
arr.fill(0,2,4);
console.log(arr);
const str="hello world!";
console.log(str.startsWith("hello"));
console.log(str.endsWith("world!"));
console.log(Number.isNaN(NaN));
const obj1 = {a:10, b:20};
const obj2 = {b:25, c:30};
const obj = console.log(Object.assign({},obj1,obj2));
// console.log(reverse("hello"))

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;