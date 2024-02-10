function isPalindrome(x){
    let str = String(x);
    let strLow = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseStr = strLow.split('').reverse().join('');
    if (strLow === reverseStr) {
        return true
    } else{
        return false
    }
    
}

console.log(isPalindrome("Madam!"));