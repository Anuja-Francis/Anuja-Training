function* sum(a,b){
    yield a;
    yield a+b;
}

const sumgenerator = sum(10,20);
console.log(sumgenerator.next());
console.log(sumgenerator.next().value);
console.log(sumgenerator.next().value);