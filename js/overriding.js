class Animal {
    speak() {
      console.log("The animal makes a sound");
    }
}
  
class Dog extends Animal {
    speak() {
      console.log("The dog barks");
    }
}
  
class Cat extends Animal {
    speak() {
      console.log("The cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();
  
dog.speak(); 
cat.speak();  