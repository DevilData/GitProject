/*
    400 % 365 = 35
    Year : 1
    35 % 30 = 5
    Month: 1
    Days 5
*/

let hari = 366;
let tahun = Math.floor(hari / 365);
let sisaHari = hari % 365;
let bulan = Math.floor(sisaHari / 30);
let tanggal = sisaHari % 30;

console.log(`${tahun} Tahun, ${bulan} Bulan, ${tanggal} Hari`);