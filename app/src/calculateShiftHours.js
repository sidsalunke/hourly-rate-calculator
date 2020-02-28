const calculateShiftHours = (input) => {

  input.forEach(function (element) {
    const fromDate = new Date(element.from);
    const toDate = new Date(element.to);
    let totalShiftHours = (toDate - fromDate)/1000;
    totalShiftHours /= (60 * 60);
    element.total = totalShiftHours;
  });

  return input;

}

module.exports = calculateShiftHours;