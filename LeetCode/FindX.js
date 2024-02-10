var findWordsContaining = function(words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {  
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x)
        result.push(i);
        }
    }
        let unique = [];
        for (i = 0; i < result.length; i++) {
            if (unique.indexOf(result[i]) === -1) {
                unique.push(result[i]);
            }
        }
        return unique;
}
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//       }
//     }
//     // Only change code above this line
//     return product;
//   }
  
//   multiplyAll(["abc","bcd","aaaa","cbc"]);