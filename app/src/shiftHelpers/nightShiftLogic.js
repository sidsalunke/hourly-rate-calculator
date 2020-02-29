const nightShiftLogic = (fromDate, toDate) => {
  let totalNightShiftHours;
  const toDateStartTime = toDate.getHours();
  const nightShiftStartTime = new Date('2017-10-18T20:00:00+11:00').getHours();
  const nightShiftEndTime = new Date('2017-10-18T06:00:00+11:00').getHours();

  if (toDateStartTime > nightShiftStartTime || toDateStartTime <= nightShiftEndTime) {
      totalNightShiftHours = (toDate - fromDate)/1000;
      totalNightShiftHours /= (60 * 60);
      if (totalNightShiftHours <= 24) {
        return Math.round((totalNightShiftHours + Number.EPSILON) * 100) / 100
      }
  }
  return 0;
};

module.exports = nightShiftLogic;