/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let result = [];
    result.push(celsius + 273.15);
    result.push((celsius * 1.80) + 32.00 );
    return result;
};

lengh