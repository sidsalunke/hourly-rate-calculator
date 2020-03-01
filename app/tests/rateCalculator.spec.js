/* eslint-disable no-undef */
const rateCalculator = require('../src/rateCalculator');

test('should calculate the correct rate', () => {
  const inputTestData = [
    {
      id: 1,
      from: '2017-10-23T08:00:00+11:00',
      to: '2017-10-23T11:00:00+11:00',
      totalDayShiftHours: 3,
      totalNightShiftHours: 0,
      totalSatShiftHours: 0,
      totalSunShiftHours: 0,
    },
    {
      id: 2,
      from: '2017-10-20T09:00:00+11:00',
      to: '2017-10-20T11:45:00+11:00',
      totalDayShiftHours: 2.75,
      totalNightShiftHours: 0,
      totalSatShiftHours: 0,
      totalSunShiftHours: 0,
    },
    {
      id: 3,
      from: '2017-10-18T18:00:00+11:00',
      to: '2017-10-18T21:30:00+11:00',
      totalDayShiftHours: 0,
      totalNightShiftHours: 3.5,
      totalSatShiftHours: 0,
      totalSunShiftHours: 0,
    },
    {
      id: 4,
      from: '2017-10-18T18:00:00+11:00',
      to: '2017-10-19T06:00:00+11:00',
      totalDayShiftHours: 0,
      totalNightShiftHours: 12,
      totalSatShiftHours: 0,
      totalSunShiftHours: 0,
    },
    {
      id: 5,
      from: '2017-10-21T14:00:00+11:00',
      to: '2017-10-21T22:00+11:00',
      totalDayShiftHours: 0,
      totalNightShiftHours: 0,
      totalSatShiftHours: 8,
      totalSunShiftHours: 0,
    },
    {
      id: 6,
      from: '2017-10-20T14:00:00+11:00',
      to: '2017-10-21T22:00+11:00',
      totalDayShiftHours: 0,
      totalNightShiftHours: 0,
      totalSatShiftHours: 0,
      totalSunShiftHours: 0,
    },
  ];
  const expectedTestDataWithTotalRate = [
    {
      id: 1,
      from: '2017-10-23T08:00:00+11:00',
      to: '2017-10-23T11:00:00+11:00',
      isValid: true,
      total: 114,
    },
    {
      id: 2,
      from: '2017-10-20T09:00:00+11:00',
      to: '2017-10-20T11:45:00+11:00',
      isValid: true,
      total: 104.5,
    },
    {
      id: 3,
      from: '2017-10-18T18:00:00+11:00',
      to: '2017-10-18T21:30:00+11:00',
      isValid: true,
      total: 150.25,
    },
    {
      id: 4,
      from: '2017-10-18T18:00:00+11:00',
      to: '2017-10-19T06:00:00+11:00',
      isValid: true,
      total: 515.16,
    },
    {
      id: 5,
      from: '2017-10-21T14:00:00+11:00',
      to: '2017-10-21T22:00+11:00',
      isValid: true,
      total: 367.28,
    },
    {
      id: 6,
      from: '2017-10-20T14:00:00+11:00',
      to: '2017-10-21T22:00+11:00',
      isValid: false,
      total: 0,
    },
  ];
  const actualTestDataWithTotalRate = rateCalculator.calculateRate(inputTestData);
  expect(expectedTestDataWithTotalRate).toEqual(actualTestDataWithTotalRate);
});
