//Make triangle from array but delete first element every row
/* Ex:
01
02 03
04 05 06
*/

function segitaSiku(height) {
    let pengitung = 1
    for(let i = 1; i <= height; i++) {
        let baris = ""
        for(let j = 1; j <= i; j++){
            baris += pengitung + " "
            pengitung++
        }
        console.log(baris);
    }
}

segitaSiku(4)

/*
Expected Output:
1
2  3
3  4  5
4  5  6  7
*/

