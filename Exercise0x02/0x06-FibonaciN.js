//Membuat Fibonaci Number N
// Input 15
// Output 610

let n = 15;
if  (n <= 2) {
    console.log(n);
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib[n]);
};