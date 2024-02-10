var plusOne = function(arr) {
    let arrStr = "";
    for (let i of arr){
        arrStr += String(i);  
    };
    let num = BigInt(arrStr);
    num++
    let res = `${num}`;
    mul = [ ];
    for (let j = 0; j < res.length; j++) {
        mul.push(res[j]);
    };
    return mul;
};

//console.log(plusOne([1,2,3,4]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));