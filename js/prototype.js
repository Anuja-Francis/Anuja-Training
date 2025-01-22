const person = {
    name: 'John',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  const employee = Object.create(person);
  employee.job = 'Developer';

  const objName = {};
  
  employee.greet();
  employee.greet.call(objName);
  console.log(employee.job); 
  
  import {a} from "./module.js";
  console.log(a);