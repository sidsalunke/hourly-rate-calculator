const sunShiftLogic = (fromDate, toDate) => {
  let totalSunShiftHours;
  const fromDateDay = fromDate.getDay();

  // getDay() returns 0 if it's Sunday
  if (fromDateDay === 0) {
    totalSunShiftHours = (toDate - fromDate) / 1000;
    totalSunShiftHours /= 60 * 60;
    return Math.round((totalSunShiftHours + Number.EPSILON) * 100) / 100; // Round to at most 2 decimal places (only if necessary)
  }
  return 0;
};

module.exports = sunShiftLogic;
