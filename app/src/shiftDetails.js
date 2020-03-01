/* eslint-disable no-param-reassign */
const dayShiftLogic = require('./shiftHelpers/dayShiftLogic');
const nightShiftLogic = require('./shiftHelpers/nightShiftLogic');
const satShiftLogic = require('./shiftHelpers/satShiftLogic');
const sunShiftLogic = require('./shiftHelpers/sunShiftLogic');

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

  calculateSatShiftHours: input => {
    input.forEach(element => {
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      element.totalSatShiftHours = satShiftLogic(fromDate, toDate);
      if (element.totalSatShiftHours >= 1) {
        element.totalDayShiftHours = 0;
        element.totalNightShiftHours = 0;
      }
    });
    return input;
  },

  calculateSunShiftHours: input => {
    input.forEach(element => {
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      element.totalSunShiftHours = sunShiftLogic(fromDate, toDate);
      if (element.totalSunShiftHours >= 1) {
        element.totalDayShiftHours = 0;
        element.totalNightShiftHours = 0;
      }
    });
    return input;
  },
};

module.exports = shiftDetails;
