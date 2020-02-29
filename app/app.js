const fs = require('fs');
const shiftDetails = require('./src/shiftDetails');

const inputFile = fs.readFileSync('./data/input.json');
const data = JSON.parse(inputFile);

let blah = shiftDetails.calculateDayShiftHours(data);
blah = shiftDetails.calculateNightShiftHours(blah);
blah = shiftDetails.checkIfShiftIsValid(blah);

function finished() {
  console.log('done');
}

fs.writeFile('./expected.json', JSON.stringify(blah, null, 2), finished);
