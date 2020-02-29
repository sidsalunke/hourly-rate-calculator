const shiftDetails = {
  calculateDayShiftHours: (input) => {
    input.forEach(function (element) {
      let totalDayShiftHours;
      const fromDate = new Date(element.from);
      const toDate = new Date(element.to);
      const fromDateStartTime = new Date(element.from).getHours();
      const toDateStartTime = new Date(element.to).getHours();
      const fromDateDay = new Date(element.from).getDay();
      const toDateDay = new Date(element.to).getDay();
      const dayShiftStartTime = new Date('2017-10-18T06:00:00+11:00').getHours();
      const dayShiftEndTime = new Date('2017-10-18T20:00:00+11:00').getHours();

    if (fromDateStartTime >= dayShiftStartTime && toDateStartTime <= dayShiftEndTime) {
        if (fromDateDay === toDateDay) {
          totalDayShiftHours = (toDate - fromDate)/1000;
          totalDayShiftHours /= (60 * 60);
          if (totalDayShiftHours <= 14) {
            element.totalDayShiftHours = totalDayShiftHours;
          } else {
            element.totalDayShiftHours = 0;
          }
        } else {
          element.totalDayShiftHours = 0;
        }
      } else {
        element.totalDayShiftHours = 0;
      }
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