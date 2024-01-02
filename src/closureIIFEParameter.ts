const credits = ((num: number) => {
    let credits: number = num
    console.log(`initial credits value: ${credits}`);

    return () => {
        credits -= 1;
        if (credits > 0) {
            console.log(`playing game, ${credits} credits(s) remaining`)
        } else {
            console.log('Not enough credits')
        }
    }
})(3);

credits()
credits()
credits()
credits()