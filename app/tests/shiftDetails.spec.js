/* eslint-disable no-undef */
const shiftDetails = require('../src/shiftDetails');

describe('Day shift', () => {
  it('should return the total number of day shift hours as 0 if start and end time fall on different days', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2018-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
      },
      {
        id: 2,
        from: '2017-11-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
      },
      {
        id: 3,
        from: '2017-10-17T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
      },
      {
        id: 5,
        from: '2017-10-26T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
      },
    ];
    const expectedTestDataWithDayShiftHours = [
      {
        id: 1,
        from: '2018-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 2,
        from: '2017-11-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 3,
        from: '2017-10-17T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 5,
        from: '2017-10-26T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
        totalDayShiftHours: 0,
      },
    ];
    const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
    expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
  });

  it('should return the total number of day shift hours as 0 if start and end time do not fall in the desired range', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2017-10-23T05:59:59+11:00',
        to: '2017-10-23T11:00:00+11:00',
      },
      {
        id: 2,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:00:01+11:00',
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
      },
    ];
    const expectedTestDataWithDayShiftHours = [
      {
        id: 1,
        from: '2017-10-23T05:59:59+11:00',
        to: '2017-10-23T11:00:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 2,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:00:01+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
        totalDayShiftHours: 0,
      },
    ];
    const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
    expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
  });

  it('should return the total number of day shift hours as 0 if the day shift extends beyond 14 hours', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2017-10-23T06:00:00+11:00',
        to: '2017-10-23T20:00:01+11:00',
      },
      {
        id: 2,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:00:10+11:00',
      },
      {
        id: 3,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:01:00+11:00',
      },
    ];
    const expectedTestDataWithDayShiftHours = [
      {
        id: 1,
        from: '2017-10-23T06:00:00+11:00',
        to: '2017-10-23T20:00:01+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 2,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:00:10+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 3,
        from: '2017-10-20T06:00:00+11:00',
        to: '2017-10-20T20:01:00+11:00',
        totalDayShiftHours: 0,
      },
    ];
    const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
    expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
  });

  it('should return the total number of day shift hours', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2017-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
      },
      {
        id: 2,
        from: '2017-10-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
      },
      {
        id: 6,
        from: '2017-10-17T19:00:00+11:00',
        to: '2017-10-17T19:30:00+11:00',
      },
      {
        id: 7,
        from: '2017-10-20T10:00:00+11:00',
        to: '2017-10-19T11:30:00+11:00',
      },
      {
        id: 8,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:00:00-11:00',
      },
      {
        id: 9,
        from: '2017-10-24T22:00:00+11:00',
        to: '2017-10-25T23:00:00+11:00',
      },
    ];
    const expectedTestDataWithDayShiftHours = [
      {
        id: 1,
        from: '2017-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
        totalDayShiftHours: 3,
      },
      {
        id: 2,
        from: '2017-10-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
        totalDayShiftHours: 2.75,
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 6,
        from: '2017-10-17T19:00:00+11:00',
        to: '2017-10-17T19:30:00+11:00',
        totalDayShiftHours: 0.5,
      },
      {
        id: 7,
        from: '2017-10-20T10:00:00+11:00',
        to: '2017-10-19T11:30:00+11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 8,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:00:00-11:00',
        totalDayShiftHours: 0,
      },
      {
        id: 9,
        from: '2017-10-24T22:00:00+11:00',
        to: '2017-10-25T23:00:00+11:00',
        totalDayShiftHours: 0,
      },
    ];
    const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
    expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
  });
});

describe('Night shift', () => {
  it('should return the total number of night shift hours', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2017-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
      },
      {
        id: 2,
        from: '2017-10-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
      },
      {
        id: 6,
        from: '2017-10-17T19:00:00+11:00',
        to: '2017-10-17T19:30:00+11:00',
      },
      {
        id: 7,
        from: '2017-10-20T10:00:00+11:00',
        to: '2017-10-19T11:30:00+11:00',
      },
      {
        id: 8,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:00:00-11:00',
      },
      {
        id: 9,
        from: '2017-10-24T22:00:00+11:00',
        to: '2017-10-25T23:00:00+11:00',
      },
    ];
    const expectedTestDataWithNightShiftHours = [
      {
        id: 1,
        from: '2017-10-23T08:00:00+11:00',
        to: '2017-10-23T11:00:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 2,
        from: '2017-10-20T09:00:00+11:00',
        to: '2017-10-20T11:45:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:30:00+11:00',
        totalNightShiftHours: 3.5,
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T06:00:00+11:00',
        totalNightShiftHours: 12,
      },
      {
        id: 5,
        from: '2017-10-21T14:00:00+11:00',
        to: '2017-10-21T22:00+11:00',
        totalNightShiftHours: 8,
      },
      {
        id: 6,
        from: '2017-10-17T19:00:00+11:00',
        to: '2017-10-17T19:30:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 7,
        from: '2017-10-20T10:00:00+11:00',
        to: '2017-10-19T11:30:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 8,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:00:00-11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 9,
        from: '2017-10-24T22:00:00+11:00',
        to: '2017-10-25T23:00:00+11:00',
        totalNightShiftHours: 0,
      },
    ];
    const actualTestDataWithNightShiftHours = shiftDetails.calculateNightShiftHours(inputTestData);
    expect(expectedTestDataWithNightShiftHours).toEqual(actualTestDataWithNightShiftHours);
  });

  it('should return the total number of night shift hours as 0 if start and end time do not fall in the desired range', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2017-10-23T06:00:01+11:00',
        to: '2017-10-23T11:00:00+11:00',
      },
      {
        id: 2,
        from: '2017-10-20T06:00:10+11:00',
        to: '2017-10-20T20:00:00+11:00',
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:59:59+11:00',
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:59:59+11:00',
      },
      {
        id: 5,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T05:59:59+11:00',
      },
    ];
    const expectedTestDataWithNightShiftHours = [
      {
        id: 1,
        from: '2017-10-23T06:00:01+11:00',
        to: '2017-10-23T11:00:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 2,
        from: '2017-10-20T06:00:10+11:00',
        to: '2017-10-20T20:00:00+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 3,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:59:59+11:00',
        totalNightShiftHours: 0,
      },
      {
        id: 4,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T21:59:59+11:00',
        totalNightShiftHours: 4,
      },
      {
        id: 5,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-19T05:59:59+11:00',
        totalNightShiftHours: 12,
      },
    ];
    const actualTestDataWithNightShiftHours = shiftDetails.calculateNightShiftHours(inputTestData);
    expect(expectedTestDataWithNightShiftHours).toEqual(actualTestDataWithNightShiftHours);
  });
});

describe('Saturday shift', () => {
  it('should return the total number of Saturday shift hours', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2020-02-29T06:00:00+11:00',
        to: '2020-02-29T10:00:00+11:00',
        totalDayShiftHours: 4,
        totalNightShiftHours: 0,
      },
    ];
    const expectedTestDataWithSatShiftHours = [
      {
        id: 1,
        from: '2020-02-29T06:00:00+11:00',
        to: '2020-02-29T10:00:00+11:00',
        totalDayShiftHours: 0,
        totalNightShiftHours: 0,
        totalSatShiftHours: 4,
      },
    ];
    const actualTestDataWithSatShiftHours = shiftDetails.calculateSatShiftHours(inputTestData);
    expect(expectedTestDataWithSatShiftHours).toEqual(actualTestDataWithSatShiftHours);
  });
});

describe('Sunday shift', () => {
  it('should return the total number of Sunday shift hours', () => {
    const inputTestData = [
      {
        id: 1,
        from: '2020-03-01T06:00:00+11:00',
        to: '2020-03-01T10:00:00+11:00',
        totalDayShiftHours: 4,
        totalNightShiftHours: 0,
      },
    ];
    const expectedTestDataWithSunShiftHours = [
      {
        id: 1,
        from: '2020-03-01T06:00:00+11:00',
        to: '2020-03-01T10:00:00+11:00',
        totalDayShiftHours: 0,
        totalNightShiftHours: 0,
        totalSunShiftHours: 4,
      },
    ];
    const actualTestDataWithSunShiftHours = shiftDetails.calculateSunShiftHours(inputTestData);
    expect(expectedTestDataWithSunShiftHours).toEqual(actualTestDataWithSunShiftHours);
  });
});
