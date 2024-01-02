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

// Type assertion to include properties from the prototype
const musicianWithPrototype: Musician & Person = musician as Musician & Person;

console.log(musicianWithPrototype.plays); // true
console.log(musicianWithPrototype.alive); // true



