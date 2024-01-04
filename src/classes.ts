//ES6 classes inheritance

class Vehicle {
    wheels: number;
    motorized: boolean;

    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready(): string {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }

    wheelie(): string {
        return "On one wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike)
console.log(myBike.wheels)
console.log(myBike.ready())
console.log(myBike.wheelie())

const myTruck = new Vehicle();
console.log(myTruck)
console.log(myTruck.ready())