//Membuat fungsi untuk merge dua array data siswa dan menghapus duplikat 

let baik = [
    { name: `Student 1`, email : `student1@mail.com` },
    { name: `Student 2`, email : `student2@mail.com` }
];

let nakal = [
    { name: `Student 1`, email : `student1@mail.com` },
    { name: `Student 3`, email : `student3@mail.com` }
];

// console.log{cek_duplicate(baik,nakal)};
console.log(baik,nakal);

//Fungsi controller untuk merge dua array object dan menghapus duplikat
function cek_duplicate (arr1, arr2) {
    
    let mergeData = [...arr1 , ...arr2 ];
    let anakUnik = [];

    for (const d of mergeData) {
        if (!anakUnik.some((v)=> v.name === d.name && v.email === d.email)) {
            anakUnik.push(d);
        }
    }
    return anakUnik;
}

let hasil = cek_duplicate(baik, nakal);
console.log(hasil);