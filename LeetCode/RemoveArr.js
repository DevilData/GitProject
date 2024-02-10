var removeElement = function(nums, val) {
    let zero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) zero++
        else {
            let res = nums[i];
            nums[i] = 0;
            return nums[i-zero] = res;
            
        };
    };
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))