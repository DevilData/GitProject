var percentageLetter = function(words, x) {
    let result = 0;
    for (let i = 0; i < words.length; i++) {  
            if (words[i] === x)
        result++;
    }
    let percentageLetter = result/words.length*100;
    return Math.floor(percentageLetter);
};
console.log(percentageLetter("abcbcdaaaacbc", "a"));