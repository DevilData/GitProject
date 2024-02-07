//Membuat fungsi factorial dengan recursion
// Input: 5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 20

let a = 5;
function factorial(n) {
    if (n == 0){
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}
console.log(`${a}! = ${factorial(a)}`);
