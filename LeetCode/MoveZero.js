/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zero++
        else {
            let res = nums[i];
            console.log(res);
            nums[i] = 0;
            console.log(nums);
            nums[i-zero] = res;
            console.log(nums[i-zero]);
            console.log(res);
        }
    };
    // for (let k = 0; k < zero; k++) {
    //         nums.push(0);
    // }; 
    //return nums;
};
// Test
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0]