const { sum, fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound } = require('./app.js');
//First test
test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.5 * 1.07);
});
test("One dollar should be converted to yen correctly", function() {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});
test("One yen should be converted to british pounds correctly", function() {
    const expected = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBeCloseTo(expected);
});