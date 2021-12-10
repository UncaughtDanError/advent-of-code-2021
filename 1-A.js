const fs = require('fs');
const depthData = fs.readFileSync("./depth-data.txt", 'utf-8');
const stringArray = depthData.split('\n')

const depthArray = [];
for (let i = 0; i < stringArray.length; i ++) {
    depthArray.push(parseInt(stringArray[i], 10));
}

const countIncreases = (array) => {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) count++;
    }
    return count;
}

const myArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

console.log(countIncreases(depthArray));