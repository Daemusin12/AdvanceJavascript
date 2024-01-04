interface Animal {
    species: string;
    eats: boolean;
}

function Animal(this: Animal, species: string) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`;
}

const Bear = new (Animal as any)("bear");
console.log(Bear.walks())
console.log(Object.getPrototypeOf(Bear));
console.log(Object.getPrototypeOf(Bear) === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);