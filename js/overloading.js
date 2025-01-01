class Greeter {
    greet(...args) {
      if (args.length == 0) {
        console.log("Hello, World!");
      } else if (args.length == 1) {
        console.log(`Hello, ${args[0]}!`);
      } else if (args.length == 2) {
        console.log(`Hello, ${args[0]}! How are you, ${args[1]}?`);
      } else {
        console.log("Too many arguments!");
      }
    }
}
  
const greeter = new Greeter();
greeter.greet(); 
greeter.greet("Alice"); 
greeter.greet("Alice", "Bob"); 
greeter.greet("Alice", "Bob", "Charlie");  
  