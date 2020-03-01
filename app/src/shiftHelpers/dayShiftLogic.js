const dayShiftLogic = (fromDate, toDate) => {
  let totalDayShiftHours;
  const fromDateStartTime = fromDate.getHours();
  const toDateStartTime = toDate.getHours();
  const fromDateDay = fromDate.getDay();
  const toDateDay = toDate.getDay();
  const dayShiftStartTime = new Date('2017-10-18T06:00:00+11:00').getHours(); // Day shift starts from 06:00:00
  const dayShiftEndTime = new Date('2017-10-18T20:00:00+11:00').getHours(); // Day shift ends at 20:00:00

  if (fromDateStartTime >= dayShiftStartTime && toDateStartTime <= dayShiftEndTime) {
    if (fromDateDay === toDateDay) {
      totalDayShiftHours = (toDate - fromDate) / 1000;
      totalDayShiftHours /= 60 * 60;
      // Day shift cannot be more than 14 hours. If it's more than 14 hours it'll be counted in the night shift section
      if (totalDayShiftHours <= 14) {
        return Math.round((totalDayShiftHours + Number.EPSILON) * 100) / 100; // Round to at most 2 decimal places (only if necessary)
      }
    }
  }
  return 0;
};

module.exports = dayShiftLogic;
