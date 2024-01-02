"use strict";
const person = {
    alive: true,
};
const musician = {
    plays: true,
};
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
const musicianWithPrototype = musician;
console.log(musicianWithPrototype.plays);
console.log(musicianWithPrototype.alive);
const guitarist = Object.create(musician, {
    strings: { value: 6 },
});
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);
