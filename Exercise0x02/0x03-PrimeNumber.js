//Code untuk cek angka prima atau bukan

let num = 20;

if  (num > 1) {
    for(i=2; i<num; i++) {
        if (num % i == 0) {
            console.log("Angka "+num+" adalah bilangan tidak Prima");
            break;
        } else if (i == (num-1)) {
            console.log("Angka "+num+" adalah bilangan Prima");
        }
    }
};
