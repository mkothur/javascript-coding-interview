// Callback hell refers to the situation where callbacks are 
// nested within other callbacks several levels deep, 
// potentially making it difficult to understand and maintain the code.

// To explain callback hell, let’s try to implement a simple and 
// trivial scenario of a beef cooking process.

// To cook beef, there are multiple steps taken one after another, namely:

    // Get beef
    const getBeef = (user, nextStep) => {
        console.log(`Retrieving beef from ${user}`);
        nextStep('raw beef');
    }
    // Slice beef
    const sliceBeef = (rawBeef, nextStep) => {
        console.log(`Slicings ${rawBeef}`);
        nextStep('sliced beef');
    }
    // Cook beef
    const cookBeef = (slicedBeef, nextStep) => {
        console.log(`Cooking ${slicedBeef}`);
        nextStep('cooked beef');
    }
    // Serve beef
    const serveBeef = (cookedBeef, nextStep) => {
        console.log(`Putting ${cookedBeef} on the plate`);
        nextStep('Beef on plate');
    }

    // E.g. sliceBeef() would lead to nextStep("sliced beef") , 
    // "sliced beef" represents the result of the sliceBeef() step

    // With the 4 functions above, let’s chain them up so that one function is executed after another. 
    // Let’s do it one by one so that we can visualise how the callback hell is being formed.

    getBeef('John', (rawBeef) => {
        sliceBeef(rawBeef, (slicedBeef) => {
            cookBeef(slicedBeef, (cookedBeef) => {
                serveBeef(cookedBeef, (servedBeef) => {
                    console.log(servedBeef)
                })
            })
        })
    })
