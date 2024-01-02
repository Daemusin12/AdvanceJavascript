// global variable
let globalVariable: number = 0;

const parentFunction = () => {
    // local scope
    let localVaraible: number = 2;
    console.log(`localVaraible value is ${localVaraible}`)
    console.log(`globalVaraible value is ${globalVariable}`)

    const childFunction = () => {
        console.log(globalVariable += 5); // add a 5 to global variable
        console.log(localVaraible += 1); // add 1 to local variable
    }

    return childFunction;

}

const result = parentFunction(); //intialize result variable 
const result2 = parentFunction(); //intialize result2 variable 


result() // global variable = 5, result's local variable is 3 
result() // global variable = 10, result's local variable is 4

result2() // global variable = 15 result2's local variable is 3
