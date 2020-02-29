const dayShiftLogic = (fromDate, toDate) => {
  let totalDayShiftHours;
  const fromDateStartTime = fromDate.getHours();
  const toDateStartTime = toDate.getHours();
  const fromDateDay = fromDate.getDay();
  const toDateDay = toDate.getDay();
  const dayShiftStartTime = new Date('2017-10-18T06:00:00+11:00').getHours();
  const dayShiftEndTime = new Date('2017-10-18T20:00:00+11:00').getHours();

  if (fromDateStartTime >= dayShiftStartTime && toDateStartTime <= dayShiftEndTime) {
    if (fromDateDay === toDateDay) {
      totalDayShiftHours = (toDate - fromDate)/1000;
      totalDayShiftHours /= (60 * 60);
      if (totalDayShiftHours <= 14) {
        return totalDayShiftHours;
      }
    }
  }
  return 0;
};

module.exports = dayShiftLogic;