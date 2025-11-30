// app.js file content
console.log ("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a+b
}
// Just a console log for ourselves
console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = function(valueInDollar) {
    let euro = valueInDollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

const fromYenToPound = function(valueInYen) {
    let euro = valueInYen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};