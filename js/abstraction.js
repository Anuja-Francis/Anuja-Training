class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
}

const myCar = new Vehicle("Toyota", "Corolla");
myCar.start();  
