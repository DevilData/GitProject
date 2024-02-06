//Make triangle from array but delete first element every row
/* Ex:
01
02 03
04 05 06
*/

function segitaSiku(height) {
    let pengitung = 1
    for(let i = 1; i <= height; i++) {
        let baris = ""
        for(let j = 1; j <= i; j++){
            baris += pengitung + " "
            pengitung++
        }
        console.log(baris);
    }
}

segitaSiku(4)

/*
Expected Output:
1
2  3
3  4  5
4  5  6  7
*/

// Fizz Buzz
/*
Looping by Input
 IF number  is divisible by 3, print "Fizz"
 ELSE IF number is divisible by 5, print "Buzz"
 ELSE IF number is divisible by 3 and 5, print "Fizz Buzz"
 Print the remaining numbers as they are.
*/

function fizzBuzz(input) {
    for (let i = 1; i <= input; i++) {
        // console.log(i);
        if  (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20);


// Remove odd number

function removeOddNumber(array) {
    let newArray = [];
    for (let i of array){
        if (i % 2 === 0) {
            newArray.push(i);
            console.log(newArray);
        }
    }
    return newArray;
}

console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]));