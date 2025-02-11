/* eslint-disable no-undef */
const transformJson = require('../src/transformJson');

describe('Transformer', () => {
  it('should transform the Json as expected', () => {
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
    const expectedTestData = [
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
        from: '2017-10-17T19:00:00+11:00',
        to: '2017-10-17T19:30:00+11:00',
        isValid: false,
        total: 0,
      },
      {
        id: 7,
        from: '2017-10-20T10:00:00+11:00',
        to: '2017-10-19T11:30:00+11:00',
        isValid: false,
        total: 0,
      },
      {
        id: 8,
        from: '2017-10-18T18:00:00+11:00',
        to: '2017-10-18T19:00:00-11:00',
        isValid: false,
        total: 0,
      },
      {
        id: 9,
        from: '2017-10-24T22:00:00+11:00',
        to: '2017-10-25T23:00:00+11:00',
        isValid: false,
        total: 0,
      },
    ];
    const actualTestResponse = transformJson.transform(inputTestData);
    expect(expectedTestData).toEqual(actualTestResponse);
  });
});
