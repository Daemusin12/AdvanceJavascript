//new method to set prototype 

// Object literals

interface Person {
    alive: boolean;
}

interface Musician {
    plays: boolean;
}

const person: Person = {
    alive: true,
};

const musician: Musician = {
    plays: true,
};

// Set the prototype of musician to person
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));



