const satShiftLogic = (fromDate, toDate) => {
  let totalSatShiftHours;
  const fromDateDay = fromDate.getDay();

  // getDay() returns 6 if it's Saturday
  if (fromDateDay === 6) {
    totalSatShiftHours = (toDate - fromDate) / 1000;
    totalSatShiftHours /= 60 * 60;
    return Math.round((totalSatShiftHours + Number.EPSILON) * 100) / 100; // Round to at most 2 decimal places (only if necessary)
  }
  return 0;
};

module.exports = satShiftLogic;
