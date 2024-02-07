//Membuat fungsi yang dapat menukar Value menjadi Property dan sebaliknya

let data = [{name: `David`, age: 20}];

//Output : [{David: `name`, 20: `age`}];

function swap(arr){
    let newArr = [];
    for (let i=0;i<arr.length;i++){
        let tempObj = {};
        Object.entries(arr[i]).forEach(([key,value]) => {
            tempObj[value] = key;
        });
        newArr.push(tempObj);
    }
    return newArr;
}

console.log(swap(data));