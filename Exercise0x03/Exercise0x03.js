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

//Write Code to format number as currency IDR
console.log("\n4.Formatter Nominal sebagai Uang Indonesia")
/*

loop dari belakang
    index dari 1, <-- start
    ketemu per 3 angka, tambahkan titik
*/

let angkaStr = String(100000)
let counter = 1
let angkaReverse = ""
let angkaIDR = ""

for (let i = angkaStr.length-1; i >= 0;  i--){
    if(counter % 3 === 0 && counter != angkaStr.length) {
        angkaReverse += '.'+angkaStr[i]
    } else {
        angkaReverse += angkaStr[i]
    }
    counter++
}

for (let j = angkaReverse.length - 1; j >= 0; j--){
    angkaIDR = angkaIDR + angkaReverse[j]
}

console.log("Nominal dalam Rupiah : ", angkaIDR);

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

//Write code auto capitalize first letter each word in a string
console.log("\n6.Auto Capitalize First Letter Each Word In A Sentence")
let sentence = "this is a test for autocapitalize function";
let words = sentence.split(' ');
let capWords = words.map((word)=> {
    return word.charAt(0).toUpperCase()+word.slice(1)
}); 
console.log(capWords.join(' '));


//Code pembalik kalimat di string
console.log("\n7.Palindrome Checker")

let kata = "hello";
let resKata = "";

for (let i = kata.length-1; i >= 0; i--){
    resKata = resKata + kata[i]
}

console.log(resKata)