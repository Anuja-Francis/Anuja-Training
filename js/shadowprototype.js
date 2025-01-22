const person = {
    name: 'John',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
};

const employee = Object.create(person);
// employee.greet(); 
employee.name = 'Alice'; 
employee.job = 'Developer';

employee.greet(); 
console.log(employee.job);  
console.log(Object.getPrototypeOf(employee).name);