function* sum(a,b){
    yield sum = a+b;
}

const sumgenerator = sum(10,20);
console.log(sumgenerator.next().value);