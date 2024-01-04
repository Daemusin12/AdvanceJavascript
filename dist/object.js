"use strict";
function Animal(species) {
    this.species = species;
    this.eats = true;
}
Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`;
};
const Bear = new Animal("bear");
console.log(Bear.walks());
console.log(Object.getPrototypeOf(Bear));
console.log(Object.getPrototypeOf(Bear) === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);
