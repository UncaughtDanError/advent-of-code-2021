const fs = require('fs');
const courseData = fs.readFileSync("./2-A/planned-course.txt", 'utf-8');
const courseArray = courseData.split('\n')

// iterate through the courseData and convert to an array of arrays
const course = [];
for (let i = 0; i < courseArray.length; i++) {
    let directionArray = courseArray[i].split(' ');
    // convert the number from strings to ints
    directionArray[1] = parseInt(directionArray[1], 10);
    course.push(directionArray);
}

exampleCourse = [['forward', 5], ['down',  5], ['forward', 8], ['up', 3], ['down', 8], ['forward', 2]];

const findCoordinates = (course) => {
    coordinates = [0, 0]  // [position, depth]
    //iterate over the course array
    for (let i = 0; i < course.length; i++) {
        let direction = course[i][0];
        let distance = course[i][1];
        if (direction === 'up') coordinates[1] = coordinates[1] - distance;
        else if (direction === 'down') coordinates[1] = coordinates[1] + distance;
        else if (direction === 'forward') coordinates[0] = coordinates[0] + distance;
    }
    position = coordinates[0];
    depth = coordinates[1];
    return position * depth;
}

console.log(findCoordinates(course))