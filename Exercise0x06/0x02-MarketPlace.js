class Produk {
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }
}

class Transaksi {
    constructor(total) {
        this.total = total;
        this.produks = [];
    }

    tambahProduk(produk){
        this.produks.push(produk);
    }

    hitungTotal(){
        let jumlah = 0;
        for (let i=0;i<this.produks.length;i++){
            jumlah += this.produks[i].harga;
        }
        return jumlah;
    }
}

const produk1 = new Produk("Sepatu",50000);
const produk2 = new Produk("Tas",30000);

const transaksiku = new Transaksi(0);
transaksiku.tambahProduk(produk1);
console.log(transaksiku.hitungTotal()); // output: 50000

transaksiku.tambahProduk(produk2);
console.log(transaksiku.hitungTotal()); // output: 80000
