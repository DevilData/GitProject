let TanggalAwal = new Date("2022-01-20");
let TanggalAkhir = new Date("2022-02-22");

let TanggalBagus = TanggalAkhir.getDate(); - TanggalAwal.getDate() 

console.log(`Tanggal Awal: ${TanggalAwal}`)
console.log(`Tanggal Akhir: ${TanggalAkhir}`)
console.log(`Perbedaan Hari: ${TanggalBagus} Hari`);