"use strict";
const person = {
    alive: true,
};
const musician = {
    plays: true,
};
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
