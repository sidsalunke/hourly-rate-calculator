const nightShiftLogic = (fromDate, toDate) => {
  let totalNightShiftHours;
  const toDateStartTime = toDate.getHours();
  const nightShiftStartTime = new Date('2017-10-18T20:00:00+11:00').getHours(); // Night shift starts from 20:00:00
  const nightShiftEndTime = new Date('2017-10-18T06:00:00+11:00').getHours(); // Night shift ends at 06:00:00

  if (toDateStartTime > nightShiftStartTime || toDateStartTime <= nightShiftEndTime) {
    totalNightShiftHours = (toDate - fromDate) / 1000;
    totalNightShiftHours /= 60 * 60;
    // Shift cannot be more than 24 hours
    if (totalNightShiftHours <= 24) {
      return Math.round((totalNightShiftHours + Number.EPSILON) * 100) / 100; // Round to at most 2 decimal places (only if necessary)
    }
  }
  return 0;
};

module.exports = nightShiftLogic;
