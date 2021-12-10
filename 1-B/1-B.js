const fs = require('fs');
const depthData = fs.readFileSync("../1-A/depth-data.txt", 'utf-8');
const stringArray = depthData.split('\n')

const depthArray = [];
for (let i = 0; i < stringArray.length; i ++) {
    depthArray.push(parseInt(stringArray[i], 10));
}

console.log(depthArray)