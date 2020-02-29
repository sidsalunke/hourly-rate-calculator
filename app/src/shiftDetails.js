const dayShiftLogic = require('./shiftHelpers/dayShiftLogic');
const shiftDetails = {

  calculateDayShiftHours: (input) => {
    input.forEach(function (element) {
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      element.totalDayShiftHours = dayShiftLogic(fromDate, toDate);
    });
    return input;
  },

  checkIfShiftIsValid: (input) => {
    input.forEach(function (element) {
      if (element.total >= 1 && element.total <= 24) {
        element.isValid = true;
      } else {
        element.isValid = false;
      }
    });
    return input;
  }
};

module.exports = shiftDetails;