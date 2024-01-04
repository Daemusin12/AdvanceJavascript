interface Car {
    doors: number;
    seats: string;
    seatMaterial: string;  // Include both getter and setter in the interface
}

const car: Car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats
    },
    set seatMaterial(material) {
        this.seats = material
    }
}

//inheriting setter and getter
const luxuryCar = Object.create(car) as Car;

luxuryCar.seatMaterial = 'Leather';

console.log(luxuryCar)
console.log(luxuryCar.doors)
console.log(car)

//inheriting from the javascript objext
console.log(luxuryCar.valueOf())

//getting the keys of an object
console.log(Object.keys(luxuryCar))

// loop through each object key
Object.keys(luxuryCar).forEach(key => {
    console.log(key)
})

// For..in loop includes inherited props
for (let key in luxuryCar) {
    console.log(key)
}