//Membuat fungsi intersection dua object

function intersectObjects(obj1, obj2) {
    var hasil = {};
    for (var property in obj1) {
        if (property in obj2 && obj1[property] === obj2[property]) {
         hasil[property] = obj1[property];
        };
    };
    return hasil;
};

let satu = {a: 1, b: 2};
let dua = {a: 1, c: 3};
let tiga = {a: 1, b: 2, c: 3};
let empat = {a: 4, b: 2, c: 3};
console.log(intersectObjects(satu,dua));
console.log(intersectObjects(tiga,dua));
console.log(intersectObjects(tiga,empat));