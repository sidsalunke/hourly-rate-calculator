const sunShiftLogic = (fromDate, toDate) => {
  let totalSunShiftHours;
  const fromDateDay = fromDate.getDay();

  if (fromDateDay === 0) {
    totalSunShiftHours = (toDate - fromDate) / 1000;
    totalSunShiftHours /= 60 * 60;
    return Math.round((totalSunShiftHours + Number.EPSILON) * 100) / 100;
  }
  return 0;
};

module.exports = sunShiftLogic;
