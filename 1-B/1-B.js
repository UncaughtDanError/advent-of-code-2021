const fs = require('fs');
const depthData = fs.readFileSync("./1-B/depth-data.txt", 'utf-8');
const stringArray = depthData.split('\n')

const depthArray = [];
for (let i = 0; i < stringArray.length; i ++) {
    depthArray.push(parseInt(stringArray[i], 10));
}

const countIncreasingWindows = (array) => {
    // initialize a previous variable to  the first sliding window
    let previous = array[0] + array[1] + array[2];
    // initialize a count variable to 0
    let count = 0;
    // iterate over the array from the 3rd element to the 2nd to last element
    for (let i = 2; i < array.length - 1; i++) {
        // calculate the current sliding window
        let current = array[i - 1] + array[i] + array[i + 1];
        // if current is greater than previous increment count
        if (current > previous) count++;
        // set previous equal to current
        previous = current;
    }
    // return count
    return count;
}

const myArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

console.log(countIncreasingWindows(depthArray));