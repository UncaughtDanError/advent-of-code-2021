
// Note to self:  This code is not DRY and is pretty sloppy.  It was late at night and I'm trying to get caught up in the game. Consider refactoring.
////////////////////////////////////////////////////
const fs = require('fs');
const reportData = fs.readFileSync("./3-B/report-data.txt", 'utf-8');
const reportArray = reportData.split('\n');

// inputs: array of binanary numbers as strings
// outputs: product of oxygen generator rating and CO2 scrubber rating
const lifeSupportProduct = (report) => {
    // initialize potentialIndices to an array of integers that matches the indicies of the input array
    let potentialIndices = [];
    for (let i = 0; i < report.length; i++) {
        potentialIndices.push(i);
    }
    
    //---find the O2 value---///
    // iterate over the length of a single binary string
    for (let i = 0; i < report[0].length; i++) {
        if (potentialIndices.length === 1) break;
        // initialize zeros to []
        let zeros = [];
        // initialize ones to []
        let ones = [];
        // initialize zerosCount to 0
        let zerosCount = 0;
        // initialize onesCount
        let onesCount = 0;
        // for each string in potentialIndices
        for (let j = 0; j < potentialIndices.length; j++) {
            //if the ith character of the jth element is a 0
            if (report[potentialIndices[j]][i] === '0') {
                // increment the zerosCount
                zerosCount++;
                // push the current index to the zeros array
                zeros.push(potentialIndices[j]);
            }
            // else
            else {
                // increment the onesCount
                onesCount++;
                // push the current index to the zeros array
                ones.push(potentialIndices[j]);
            }
        }
        // if there are more zeros, reassign potentialIndices to zeros
        if (zerosCount > onesCount) potentialIndices = zeros;
        // else reassign potentialIndices to ones
        else potentialIndices = ones;
    }
    // assign O2 to potentialIndices[0]
    let O2 = report[potentialIndices[0]];

    potentialIndices = [];
    for (let i = 0; i < report.length; i++) {
        potentialIndices.push(i);
    }
    
    //---find the CO2 value---///
    // iterate over the length of a single binary string
    for (let i = 0; i < report[0].length; i++) {
        if (potentialIndices.length === 1) break;
        // initialize zeros to []
        let zeros = [];
        // initialize ones to []
        let ones = [];
        // initialize zerosCount to 0
        let zerosCount = 0;
        // initialize onesCount
        let onesCount = 0;
        // for each string in potentialIndices
        for (let j = 0; j < potentialIndices.length; j++) {
            //if the ith character of the jth element is a 0
            if (report[potentialIndices[j]][i] === '0') {
                // increment the zerosCount
                zerosCount++;
                // push the current index to the zeros array
                zeros.push(potentialIndices[j]);
            }
            // else
            else {
                // increment the onesCount
                onesCount++;
                // push the current index to the zeros array
                ones.push(potentialIndices[j]);
            }
        }
        // if there are more ones, reassign potentialIndices to ones
        console.log(onesCount)
        console.log(zerosCount)
        if (onesCount < zerosCount) potentialIndices = ones;
        // else reassign potentialIndices to zeros
        else potentialIndices = zeros;
        console.log(potentialIndices)
    }
    // assign CO2 to potentialIndices[0]
    let CO2 = report[potentialIndices[0]];

    // convert values into decimal numbers
    O2 = parseInt(O2, 2);
    CO2 = parseInt(CO2, 2);

    // return the product
    return CO2 * O2;
}

let exampleReport = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

console.log(lifeSupportProduct(reportArray));