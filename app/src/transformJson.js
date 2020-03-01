const shiftDetails = require('./shiftDetails');
const rateCalculator = require('./rateCalculator');

const transformJson = {
  transform: input => {
    let tempJson = input;

    tempJson = shiftDetails.calculateDayShiftHours(tempJson);
    tempJson = shiftDetails.calculateNightShiftHours(tempJson);
    tempJson = shiftDetails.calculateSatShiftHours(tempJson);
    tempJson = shiftDetails.calculateSunShiftHours(tempJson);
    tempJson = rateCalculator.calculateRate(tempJson);

    return tempJson;
  },
};

module.exports = transformJson;
