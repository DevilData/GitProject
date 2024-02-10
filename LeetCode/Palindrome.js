function isPalindrome(x){
    let str = String(x);
    let reverseStr = str.split('').reverse().join('');
    if (str === reverseStr) {
        return true
    } else{
        return false
    }
    
}