/* eslint-disable no-param-reassign */
const rateCalculator = {
  deleteUnnecessaryProperties: element => {
    delete element.totalDayShiftHours;
    delete element.totalNightShiftHours;
    delete element.totalSatShiftHours;
    delete element.totalSunShiftHours;
  },

  calculateRate: input => {
    input.forEach(element => {
      if (element.totalDayShiftHours >= 1) {
        element.isValid = true;
        element.total = element.totalDayShiftHours * 38;
        rateCalculator.deleteUnnecessaryProperties(element);
      } else if (element.totalNightShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalNightShiftHours * 42.93).toFixed(2); // Correctly rounding to 2 decimals
        rateCalculator.deleteUnnecessaryProperties(element);
      } else if (element.totalSatShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalSatShiftHours * 45.91).toFixed(2); // Correctly rounding to 2 decimals
        rateCalculator.deleteUnnecessaryProperties(element);
      } else if (element.totalSunShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalSunShiftHours * 60.85).toFixed(2); // Correctly rounding to 2 decimals
        rateCalculator.deleteUnnecessaryProperties(element);
      } else {
        element.isValid = false;
        element.total = 0;
        rateCalculator.deleteUnnecessaryProperties(element);
      }
    });
    return input;
  },
};

module.exports = rateCalculator;
