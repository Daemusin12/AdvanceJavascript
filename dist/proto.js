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
