const shiftDetails = require('../src/shiftDetails');

// test('should return the total number of hours for each shift', () => {
//   const inputTestData = [
//     {
//       "id": 1,
//       "from": "2017-10-23T08:00:00+11:00",
//       "to": "2017-10-23T11:00:00+11:00"
//     },
//     {
//       "id": 2,
//       "from": "2017-10-20T09:00:00+11:00",
//       "to": "2017-10-20T11:45:00+11:00"
//     },
//     {
//       "id": 3,
//       "from": "2017-10-18T18:00:00+11:00",
//       "to": "2017-10-18T21:30:00+11:00"
//     },
//     {
//       "id": 4,
//       "from": "2017-10-18T18:00:00+11:00",
//       "to": "2017-10-19T06:00:00+11:00"
//     },
//     {
//       "id": 5,
//       "from": "2017-10-21T14:00:00+11:00",
//       "to": "2017-10-21T22:00+11:00"
//     },
//     {
//       "id": 6,
//       "from": "2017-10-17T19:00:00+11:00",
//       "to": "2017-10-17T19:30:00+11:00"
//     },
//     {
//       "id": 7,
//       "from": "2017-10-20T10:00:00+11:00",
//       "to": "2017-10-19T11:30:00+11:00"
//     },
//     {
//       "id": 8,
//       "from": "2017-10-18T18:00:00+11:00",
//       "to": "2017-10-18T19:00:00-11:00"
//     },
//     {
//       "id": 9,
//       "from": "2017-10-24T22:00:00+11:00",
//       "to": "2017-10-25T23:00:00+11:00"
//     }
//   ];
//   const expectedTestDataWithShiftHours = [{
//     "id": 1,
//     "from": "2017-10-23T08:00:00+11:00",
//     "to": "2017-10-23T11:00:00+11:00",
//     "total": 3
//   }, {
//     "id": 2,
//     "from": "2017-10-20T09:00:00+11:00",
//     "to": "2017-10-20T11:45:00+11:00",
//     "total": 2.75
//   }, {
//     "id": 3,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T21:30:00+11:00",
//     "total": 3.5
//   }, {
//     "id": 4,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-19T06:00:00+11:00",
//     "total": 12
//   }, {
//     "id": 5,
//     "from": "2017-10-21T14:00:00+11:00",
//     "to": "2017-10-21T22:00+11:00",
//     "total": 8
//   }, {
//     "id": 6,
//     "from": "2017-10-17T19:00:00+11:00",
//     "to": "2017-10-17T19:30:00+11:00",
//     "total": 0.5
//   }, {
//     "id": 7,
//     "from": "2017-10-20T10:00:00+11:00",
//     "to": "2017-10-19T11:30:00+11:00",
//     "total": -22.5
//   }, {
//     "id": 8,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T19:00:00-11:00",
//     "total": 23
//   }, {
//     "id": 9,
//     "from": "2017-10-24T22:00:00+11:00",
//     "to": "2017-10-25T23:00:00+11:00",
//     "total": 25
//   }];
//   const actualTestDataWithShiftHours = shiftDetails.calculateShiftHours(inputTestData);
//   expect(expectedTestDataWithShiftHours).toEqual(actualTestDataWithShiftHours);
// });

test('should return the total number of day shift hours as 0 if start and end time fall on different days', () => {
  const inputTestData = [
    {
      "id": 1,
      "from": "2018-10-23T08:00:00+11:00",
      "to": "2017-10-23T11:00:00+11:00"
    },
    {
      "id": 2,
      "from": "2017-11-20T09:00:00+11:00",
      "to": "2017-10-20T11:45:00+11:00"
    },
    {
      "id": 3,
      "from": "2017-10-17T18:00:00+11:00",
      "to": "2017-10-18T21:30:00+11:00"
    },
    {
      "id": 4,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-19T06:00:00+11:00"
    },
    {
      "id": 5,
      "from": "2017-10-26T14:00:00+11:00",
      "to": "2017-10-21T22:00+11:00"
    }
  ];
  const expectedTestDataWithDayShiftHours = [{
    "id": 1,
    "from": "2018-10-23T08:00:00+11:00",
    "to": "2017-10-23T11:00:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 2,
    "from": "2017-11-20T09:00:00+11:00",
    "to": "2017-10-20T11:45:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 3,
    "from": "2017-10-17T18:00:00+11:00",
    "to": "2017-10-18T21:30:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 4,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-19T06:00:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 5,
    "from": "2017-10-26T14:00:00+11:00",
    "to": "2017-10-21T22:00+11:00",
    "totalDayShiftHours": 0
  }];
  const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
  expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
});

test('should return the total number of day shift hours as 0 if start and end time do not fall in the desired range', () => {
  const inputTestData = [
    {
      "id": 1,
      "from": "2017-10-23T05:59:59+11:00",
      "to": "2017-10-23T11:00:00+11:00"
    },
    {
      "id": 2,
      "from": "2017-10-20T06:00:00+11:00",
      "to": "2017-10-20T20:00:01+11:00"
    },
    {
      "id": 3,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-18T21:30:00+11:00"
    },
    {
      "id": 4,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-19T06:00:00+11:00"
    },
    {
      "id": 5,
      "from": "2017-10-21T14:00:00+11:00",
      "to": "2017-10-21T22:00+11:00"
    }
  ];
  const expectedTestDataWithDayShiftHours = [{
    "id": 1,
    "from": "2017-10-23T05:59:59+11:00",
    "to": "2017-10-23T11:00:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 2,
    "from": "2017-10-20T06:00:00+11:00",
    "to": "2017-10-20T20:00:01+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 3,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-18T21:30:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 4,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-19T06:00:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 5,
    "from": "2017-10-21T14:00:00+11:00",
    "to": "2017-10-21T22:00+11:00",
    "totalDayShiftHours": 0
  }];
  const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
  expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
});

test('should return the total number of day shift hours as 0 if the day shift extends beyond 14 hours', () => {
  const inputTestData = [
    {
      "id": 1,
      "from": "2017-10-23T06:00:00+11:00",
      "to": "2017-10-23T20:00:01+11:00"
    },
    {
      "id": 2,
      "from": "2017-10-20T06:00:00+11:00",
      "to": "2017-10-20T20:00:10+11:00"
    },
    {
      "id": 3,
      "from": "2017-10-20T06:00:00+11:00",
      "to": "2017-10-20T20:01:00+11:00"
    }
  ];
  const expectedTestDataWithDayShiftHours = [{
    "id": 1,
    "from": "2017-10-23T06:00:00+11:00",
    "to": "2017-10-23T20:00:01+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 2,
    "from": "2017-10-20T06:00:00+11:00",
    "to": "2017-10-20T20:00:10+11:00",
    "totalDayShiftHours": 0
  },
  {
    "id": 3,
    "from": "2017-10-20T06:00:00+11:00",
    "to": "2017-10-20T20:01:00+11:00",
    "totalDayShiftHours": 0
  }];
  const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
  expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
});

test('should return the total number of day shift hours', () => {
  const inputTestData = [
    {
      "id": 1,
      "from": "2017-10-23T08:00:00+11:00",
      "to": "2017-10-23T11:00:00+11:00"
    },
    {
      "id": 2,
      "from": "2017-10-20T09:00:00+11:00",
      "to": "2017-10-20T11:45:00+11:00"
    },
    {
      "id": 3,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-18T21:30:00+11:00"
    },
    {
      "id": 4,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-19T06:00:00+11:00"
    },
    {
      "id": 5,
      "from": "2017-10-21T14:00:00+11:00",
      "to": "2017-10-21T22:00+11:00"
    },
    {
      "id": 6,
      "from": "2017-10-17T19:00:00+11:00",
      "to": "2017-10-17T19:30:00+11:00"
    },
    {
      "id": 7,
      "from": "2017-10-20T10:00:00+11:00",
      "to": "2017-10-19T11:30:00+11:00"
    },
    {
      "id": 8,
      "from": "2017-10-18T18:00:00+11:00",
      "to": "2017-10-18T19:00:00-11:00"
    },
    {
      "id": 9,
      "from": "2017-10-24T22:00:00+11:00",
      "to": "2017-10-25T23:00:00+11:00"
    }
  ];
  const expectedTestDataWithDayShiftHours = [{
    "id": 1,
    "from": "2017-10-23T08:00:00+11:00",
    "to": "2017-10-23T11:00:00+11:00",
    "totalDayShiftHours": 3
  }, {
    "id": 2,
    "from": "2017-10-20T09:00:00+11:00",
    "to": "2017-10-20T11:45:00+11:00",
    "totalDayShiftHours": 2.75
  }, {
    "id": 3,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-18T21:30:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 4,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-19T06:00:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 5,
    "from": "2017-10-21T14:00:00+11:00",
    "to": "2017-10-21T22:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 6,
    "from": "2017-10-17T19:00:00+11:00",
    "to": "2017-10-17T19:30:00+11:00",
    "totalDayShiftHours": 0.5
  }, {
    "id": 7,
    "from": "2017-10-20T10:00:00+11:00",
    "to": "2017-10-19T11:30:00+11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 8,
    "from": "2017-10-18T18:00:00+11:00",
    "to": "2017-10-18T19:00:00-11:00",
    "totalDayShiftHours": 0
  }, {
    "id": 9,
    "from": "2017-10-24T22:00:00+11:00",
    "to": "2017-10-25T23:00:00+11:00",
    "totalDayShiftHours": 0
  }];
  const actualTestDataWithDayShiftHours = shiftDetails.calculateDayShiftHours(inputTestData);
  expect(expectedTestDataWithDayShiftHours).toEqual(actualTestDataWithDayShiftHours);
});

// test('should return "isValid: true" if total number of hours for each shift is more than or equal to an hour', () => {
//   const inputTestDataForValidShiftHours = [{
//     "id": 1,
//     "from": "2017-10-23T08:00:00+11:00",
//     "to": "2017-10-23T11:00:00+11:00",
//     "total": 3
//   }, {
//     "id": 2,
//     "from": "2017-10-20T09:00:00+11:00",
//     "to": "2017-10-20T11:45:00+11:00",
//     "total": 2.75
//   }, {
//     "id": 3,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T21:30:00+11:00",
//     "total": 3.5
//   }, {
//     "id": 4,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-19T06:00:00+11:00",
//     "total": 12
//   }, {
//     "id": 5,
//     "from": "2017-10-21T14:00:00+11:00",
//     "to": "2017-10-21T22:00+11:00",
//     "total": 8
//   }, {
//     "id": 6,
//     "from": "2017-10-17T19:00:00+11:00",
//     "to": "2017-10-17T19:30:00+11:00",
//     "total": 0.5
//   }, {
//     "id": 7,
//     "from": "2017-10-20T10:00:00+11:00",
//     "to": "2017-10-19T11:30:00+11:00",
//     "total": -22.5
//   }, {
//     "id": 8,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T19:00:00-11:00",
//     "total": 23
//   }];
//   const expectedTestDataWithValidShiftHours = [{
//     "id": 1,
//     "from": "2017-10-23T08:00:00+11:00",
//     "to": "2017-10-23T11:00:00+11:00",
//     "isValid": true,
//     "total": 3
//   }, {
//     "id": 2,
//     "from": "2017-10-20T09:00:00+11:00",
//     "to": "2017-10-20T11:45:00+11:00",
//     "isValid": true,
//     "total": 2.75
//   }, {
//     "id": 3,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T21:30:00+11:00",
//     "isValid": true,
//     "total": 3.5
//   }, {
//     "id": 4,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-19T06:00:00+11:00",
//     "isValid": true,
//     "total": 12
//   }, {
//     "id": 5,
//     "from": "2017-10-21T14:00:00+11:00",
//     "to": "2017-10-21T22:00+11:00",
//     "isValid": true,
//     "total": 8
//   }, {
//     "id": 6,
//     "from": "2017-10-17T19:00:00+11:00",
//     "to": "2017-10-17T19:30:00+11:00",
//     "isValid": false,
//     "total": 0.5
//   }, {
//     "id": 7,
//     "from": "2017-10-20T10:00:00+11:00",
//     "to": "2017-10-19T11:30:00+11:00",
//     "isValid": false,
//     "total": -22.5
//   }, {
//     "id": 8,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T19:00:00-11:00",
//     "isValid": true,
//     "total": 23
//   }];
//   const actualTestDataWithValidShiftHours = shiftDetails.checkIfShiftIsValid(inputTestDataForValidShiftHours);
//   expect(expectedTestDataWithValidShiftHours).toEqual(actualTestDataWithValidShiftHours);
// });

// test('should return "isValid: true" if total number of hours for each shift is less than or equal to 24 hours', () => {
//   const inputTestDataForValidShiftHours = [{
//     "id": 1,
//     "from": "2017-10-23T08:00:00+11:00",
//     "to": "2017-10-23T11:00:00+11:00",
//     "total": 3
//   }, {
//     "id": 2,
//     "from": "2017-10-20T09:00:00+11:00",
//     "to": "2017-10-20T11:45:00+11:00",
//     "total": 2.75
//   }, {
//     "id": 3,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T21:30:00+11:00",
//     "total": 3.5
//   }, {
//     "id": 4,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-19T06:00:00+11:00",
//     "total": 12
//   }, {
//     "id": 5,
//     "from": "2017-10-21T14:00:00+11:00",
//     "to": "2017-10-21T22:00+11:00",
//     "total": 8
//   }, {
//     "id": 6,
//     "from": "2017-10-17T19:00:00+11:00",
//     "to": "2017-10-17T19:30:00+11:00",
//     "total": 0.5
//   }, {
//     "id": 7,
//     "from": "2017-10-20T10:00:00+11:00",
//     "to": "2017-10-19T11:30:00+11:00",
//     "total": -22.5
//   }, {
//     "id": 8,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T19:00:00-11:00",
//     "total": 23
//   }, {
//     "id": 9,
//     "from": "2017-10-24T22:00:00+11:00",
//     "to": "2017-10-25T23:00:00+11:00",
//     "total": 25
//   }];
//   const expectedTestDataWithValidShiftHours = [{
//     "id": 1,
//     "from": "2017-10-23T08:00:00+11:00",
//     "to": "2017-10-23T11:00:00+11:00",
//     "isValid": true,
//     "total": 3
//   }, {
//     "id": 2,
//     "from": "2017-10-20T09:00:00+11:00",
//     "to": "2017-10-20T11:45:00+11:00",
//     "isValid": true,
//     "total": 2.75
//   }, {
//     "id": 3,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T21:30:00+11:00",
//     "isValid": true,
//     "total": 3.5
//   }, {
//     "id": 4,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-19T06:00:00+11:00",
//     "isValid": true,
//     "total": 12
//   }, {
//     "id": 5,
//     "from": "2017-10-21T14:00:00+11:00",
//     "to": "2017-10-21T22:00+11:00",
//     "isValid": true,
//     "total": 8
//   }, {
//     "id": 6,
//     "from": "2017-10-17T19:00:00+11:00",
//     "to": "2017-10-17T19:30:00+11:00",
//     "isValid": false,
//     "total": 0.5
//   }, {
//     "id": 7,
//     "from": "2017-10-20T10:00:00+11:00",
//     "to": "2017-10-19T11:30:00+11:00",
//     "isValid": false,
//     "total": -22.5
//   }, {
//     "id": 8,
//     "from": "2017-10-18T18:00:00+11:00",
//     "to": "2017-10-18T19:00:00-11:00",
//     "isValid": true,
//     "total": 23
//   }, {
//     "id": 9,
//     "from": "2017-10-24T22:00:00+11:00",
//     "to": "2017-10-25T23:00:00+11:00",
//     "isValid": false,
//     "total": 25
//   }];
//   const actualTestDataWithValidShiftHours = shiftDetails.checkIfShiftIsValid(inputTestDataForValidShiftHours);
//   expect(expectedTestDataWithValidShiftHours).toEqual(actualTestDataWithValidShiftHours);
// });
