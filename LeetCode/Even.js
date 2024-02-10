var mostFrequentEven = function(nums) {
    let res = 0;
    let lastRes = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[2] % 2 === 0)
        res++;
        break;
    }
    return res;
};

console.log(mostFrequentEven([0,1,2,2,4,4,1]));