var decodeMessage = function(key, message) {
    let flag = false;
    let newKey = key.replace(/ /g, "")
    let newArray = [ ];
    for (let i = 0; i < newKey.length; i++) {
        for (let j = 0; j < newKey.length; j++) {
        if (newArray[i] === newKey[j]) {
            flag = true;
            break;
        }
        if  (flag == false) {
            newArray.push(newKey[j]);

         }

    }
    }
    return newKey
    return newArray
    // return newArray;
    let result = "";
    let char = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (message[i] === " ") {
                result = result+' ';
                break
                }
            else if (message[i] === newArray[j]) {
            result += char[j];
            }

        }
    }
    return result;    
};

// let key = "thequickbrownfoxjumpsoverthelazydog"
// let message = "vkbs bs t suepuv"

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")); // Output: "Over the lazy dog jumps over the quick brown fox."