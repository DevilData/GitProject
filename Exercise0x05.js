console.log("1. Min Max Avg");
//Write a function to get the lowest, highest, and average value in the array with and without sort function
//Assume that the input is an array of numbers.

function getMinMaxAvg(arr){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg = 0;
    for (let i=0;i<arr.length;i++){
        if(arr[i] < min) min = arr[i];
        else if(arr[i] > max) max = arr[i];
        
        sum += arr[i];
    }
    
    avg = sum/arr.length;
    return {min: min, max:max, avg: avg};
}

console.log("Without Sort Function");
const arraySatu = [12, 5, 23, 18, 4, 45, 32];
console.log(`Lowest: ${getMinMaxAvg(arraySatu).min}`);
console.log(`Highest: ${getMinMaxAvg(arraySatu).max}`);
console.log(`Average: ${getMinMaxAvg(arraySatu).avg}`);

console.log("With Sort Function");
function sortNumArr(a, b){return b-a;}
const arrayDua = [12, 5, 23, 18, 4, 45, 32];
arrayDua.sort(sortNumArr);
console.log(`Lowest: ${getMinMaxAvg(arrayDua).min}`);
console.log(`Highest: ${getMinMaxAvg(arrayDua).max}`);
console.log(`Sorted: ${arrayDua}`);

console.log("2. Array to String");
//Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and the last word by an 'and'
/* Sample Input: ["apple", "banana", "cherry", "date"]
   Sample Output: “apple,banana,cherry, and date”
*/

function  listToString(arr) {
    let str = ""
    for (let i = 0; i < arr.length - 1; i++)
    str += `${arr[i]}, `;
    str += `and ${arr[arr.length - 1]}.`;
    return str;
}

console.log(listToString(["apple","banana","cherry","date"]));


//Split String to Array
console.log("3. String to Array");
let strOne = "Hello World";
let resultOne = strOne.split(' '); //Result: ['Hello', 'World']
console.log(resultOne);

//Fuction Check Array Exist

function  checkArrayExist(arr, newElement) {
    let flag = false
    for (let i = 0; i < arr.length; i++) {
        if (newElement === arr[i]) {
            flag = true;
            break;
        }
    }
    if  (flag == false) {
        arr.push(newElement);
    }
    return arr;
}

console.log(checkArrayExist([1, 2, 3, 4], 12))