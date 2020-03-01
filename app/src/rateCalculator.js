/* eslint-disable no-param-reassign */
const rateCalculator = {
  calculateRate: input => {
    input.forEach(element => {
      if (element.totalDayShiftHours >= 1) {
        element.isValid = true;
        element.total = element.totalDayShiftHours * 38;
        delete element.totalDayShiftHours;
        delete element.totalNightShiftHours;
        delete element.totalSatShiftHours;
        delete element.totalSunShiftHours;
      } else if (element.totalNightShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalNightShiftHours * 42.93).toFixed(2);
        delete element.totalDayShiftHours;
        delete element.totalNightShiftHours;
        delete element.totalSatShiftHours;
        delete element.totalSunShiftHours;
      } else if (element.totalSatShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalSatShiftHours * 45.91).toFixed(2);
        delete element.totalDayShiftHours;
        delete element.totalNightShiftHours;
        delete element.totalSatShiftHours;
        delete element.totalSunShiftHours;
      } else if (element.totalSunShiftHours >= 1) {
        element.isValid = true;
        element.total = +(element.totalSunShiftHours * 60.85).toFixed(2);
        delete element.totalDayShiftHours;
        delete element.totalNightShiftHours;
        delete element.totalSatShiftHours;
        delete element.totalSunShiftHours;
      } else {
        element.isValid = false;
        element.total = 0;
        delete element.totalDayShiftHours;
        delete element.totalNightShiftHours;
        delete element.totalSatShiftHours;
        delete element.totalSunShiftHours;
      }
    });
    return input;
  },
};

module.exports = rateCalculator;
