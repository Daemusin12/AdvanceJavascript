"use strict";
let globalVariable = 0;
const parentFunction = () => {
    let localVaraible = 2;
    console.log(`localVaraible value is ${localVaraible}`);
    console.log(`globalVaraible value is ${globalVariable}`);
    const childFunction = () => {
        console.log(globalVariable += 5);
        console.log(localVaraible += 1);
    };
    return childFunction;
};
const result = parentFunction();
const result2 = parentFunction();
result();
result();
result2();
