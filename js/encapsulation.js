function Person(name) {
    let fname = name;
  
    this.getName = function() {
      return fname;
    };
  
    this.setName = function(newName) {
      if (newName) fname = newName;
    };
}
  
const person = new Person("John");
console.log(person.getName());
  
person.setName("Anu");
console.log(person.getName());
  