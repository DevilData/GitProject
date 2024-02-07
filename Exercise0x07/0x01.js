//Membuat fungsi untuk mengecek kesamaan dua object

let satu = {a: 2};
let dua = {a: 1};

let tiga = {a: "Hello"};
let empat =  {a: 1};

let  lima = {a: 1};
let enam = {a: 1};

function isEqual(a,b) {
    return Object.is(JSON.stringify(a), JSON.stringify(b));
}

console.log(isEqual(satu,dua));
console.log(isEqual(tiga,empat));
console.log(isEqual(lima,enam));