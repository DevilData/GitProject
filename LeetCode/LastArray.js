// /**
//  * @param {string} s
//  * @return {number}
//  */
// function lengthOfLastWorld(s) {
//     let arr = s.split(' ');
//     let lastWorld = arr[arr.length - 1];
//     // return lastWorld.length;
//     return `The last word is "${lastWorld}" with length ${lastWorld.length}`;
// };

// // Testing the function
// let strOne = "Hello World";
// console.log(lengthOfLastWorld(strOne)); //Should print out 5 because there

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWorld(x) {
    let arr = x.split(' ');
    console.log(arr)
    let lastWorld = arr[arr.length - 1];
    return lastWorld.length;
};
let s = "   fly me   to   the moon  "
console.log(lengthOfLastWorld(s));