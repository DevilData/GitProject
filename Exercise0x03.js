//Code Untuk Membuat list Perkalian
console.log("1.Code Perkalian 9 dengan N")

let num1 = 9

for (let i=1; i <=10; i++){
    let hasil = num1 * i
    console.log(`${num1} x ${i} = ${hasil}`)

}

//Code Palindrome
console.log("\n2.Checker Palindrome")

// function isPalindrome(str){
//     let reverseStr = str.split('').reverse().join('')
    
//     if (str === reverseStr) {
//         return true
//     } else{
//         return false
//     }
// }

// let sampleStr = "madam"
// if (isPalindrome(sampleStr)) {
//     console.log(`"${sampleStr}" adalah palindrome`)
// }else{
//     console.log(`"${sampleStr}" bukan palindrome`)
// }

//Care Kedua
let name = "aries";
let resName = "";

for (let i = name.length-1; i >= 0; i--){
    resName = resName + name[i]
}

console.log(resName)

//Centimeter to Kilometer Converter
console.log("\n3.Converter Centimeter ke Kilometer")

let cm = 100000
let km =  cm / 100000
    console.log(`${cm} Centimeter samadengan  ${km} Kilometer`)

//Number to Currency
console.log("\n4.Currency Formatter")
let  number = 1000



//Remove search str
console.log("\n5 .Remove Search String")

let str = `Hello World, this is a test for remove search string function`
let  searchStr = `ell`
if (str.includes(searchStr)){
    let result = str.replace(searchStr,"");
    console.log(result);
}else{
    console.log("String tidak ditemukan")
}

//Factorial Number