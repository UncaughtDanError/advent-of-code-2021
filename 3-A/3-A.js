    const fs = require('fs');
const reportData = fs.readFileSync("./3-A/report-data.txt", 'utf-8');
const reportArray = reportData.split('\n')


const productGammaEpsilon = (report) => {
    // find the length of each string
    let digits = report[0].length;
    // create an object to store counts for zeros and ones in each string position
    const counts = {};
    for (let i = 0; i < digits; i++) {
        counts[i] = {zeros: 0, ones: 0};
    }

    // iterate over the array
    for (let i = 0; i < report.length; i++) {
        // iterate over the string
        for (let j = 0; j < digits; j++) {
            // if the character is a zero, increment the zero count
            if (report[i][j] === '0') counts[j]['zeros']++;
            // else if the character is a one, increment the one count
            else if (report[i][j] === '1') counts[j]['ones']++;
        }
    }

    // get gamma and epsilon from object
    let gamma = '';
    let epsilon = ''
    for (let key in counts) {
        if (counts[key]['zeros'] > counts[key]['ones']) {
            gamma += '0';
            epsilon += '1';
        }
        else {
            gamma += '1';
            epsilon += '0';
        }
    }

    // convert epsilon and gamma to base 10
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);
    // return product of epsilon and gamma
    return gamma * epsilon;
}

let exampleReport = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

console.log(productGammaEpsilon(reportArray));