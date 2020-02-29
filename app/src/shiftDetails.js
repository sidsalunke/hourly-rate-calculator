/* eslint-disable no-param-reassign */
const dayShiftLogic = require('./shiftHelpers/dayShiftLogic');
const nightShiftLogic = require('./shiftHelpers/nightShiftLogic');

const shiftDetails = {
  calculateDayShiftHours: input => {
    input.forEach(element => {
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      element.totalDayShiftHours = dayShiftLogic(fromDate, toDate);
    });
    return input;
  },

  calculateNightShiftHours: input => {
    input.forEach(element => {
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      element.totalNightShiftHours = nightShiftLogic(fromDate, toDate);
    });
    return input;
  },

  checkIfShiftIsValid: input => {
    input.forEach(element => {
      if (
        (element.totalDayShiftHours >= 1 && element.totalDayShiftHours <= 24) ||
        (element.totalNightShiftHours >= 1 && element.totalNightShiftHours <= 24)
      ) {
        element.isValid = true;
      } else {
        element.isValid = false;
      }
    });
    return input;
  },
};

module.exports = shiftDetails;
