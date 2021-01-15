// const date = require('./date');

test('hello world', () => {
  expect(sum(1,2)).toBe(3);
});

test("Unix timestamps convert to locale strings.", () => {
  var kTestTimestamp = 1610684094792;
  var kExpectedLocaleString = "1/14/2021, 8:14:54 PM";

  // expect(date.ConvertTimestampToLocaleString(kTestTimestamp))
  //     .toBe(kExpectedLocaleString);
});

test("Unix timestamps convert to locale date strings.", () => {
  var kTestTimestamp = 1610684094792;
  var kExpectedLocaleDateString = "1/14/2021";

  // expect(date.ConvertTimestampToLocaleDateString(kTestTimestamp))
  //     .toBe(kExpectedLocaleString);
});
