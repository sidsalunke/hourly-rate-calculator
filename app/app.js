const fs = require('fs');
const shiftDetails = require('./src/shiftDetails');
const rateCalculator = require('./src/rateCalculator');

const inputFile = fs.readFileSync('./data/input.json');
const data = JSON.parse(inputFile);

let blah = shiftDetails.calculateDayShiftHours(data);
blah = shiftDetails.calculateNightShiftHours(blah);
blah = shiftDetails.calculateSatShiftHours(blah);
blah = shiftDetails.calculateSunShiftHours(blah);
blah = rateCalculator.calculateRate(blah);

function finished() {
  console.log('done');
}

fs.writeFile('./expected.json', JSON.stringify(blah, null, 2), finished);
