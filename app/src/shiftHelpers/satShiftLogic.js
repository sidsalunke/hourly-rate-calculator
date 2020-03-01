const satShiftLogic = (fromDate, toDate) => {
  let totalSatShiftHours;
  const fromDateDay = fromDate.getDay();

  if (fromDateDay === 6) {
    totalSatShiftHours = (toDate - fromDate) / 1000;
    totalSatShiftHours /= 60 * 60;
    return Math.round((totalSatShiftHours + Number.EPSILON) * 100) / 100;
  }
  return 0;
};

module.exports = satShiftLogic;
