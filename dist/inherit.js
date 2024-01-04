"use strict";
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
};
const luxuryCar = Object.create(car);
luxuryCar.seatMaterial = 'Leather';
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);
console.log(luxuryCar.valueOf());
console.log(Object.keys(luxuryCar));
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});
for (let key in luxuryCar) {
    console.log(key);
}
