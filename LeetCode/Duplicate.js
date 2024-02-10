function  checkArrayExist(arr) {
    let flag = false;
    let newKey = arr.replace(/ /g, "")
    let newArray = " ";
    for (let i = 0; i < newKey.length; i++) {
        for (let j = 0; j < newKey.length; j++) {
        if (newArray[i] === newKey[j]) {
            flag = true;
            break;
        }
        if  (flag == false) {
            newA += char[j];

         }

    }
    }
    return newArray;
}

console.log(checkArrayExist("the quick brown fox jumps over the lazy dog"))