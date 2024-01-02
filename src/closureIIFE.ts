// IIFE (Immediately Invoked Function Expression)

const privateCounter = (() => {
    let count: number = 0;
    console.log(`initial value: ${count}`)
    return (): void => { 
        count += 1; 
        console.log(count) 
    }
})();

privateCounter();
privateCounter();
privateCounter();