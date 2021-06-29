/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        //只要不为0就往前挪
        if (nums[j] != 0) {
            //i指向的值和j指向的值交换
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            i++;
        }
    }
};

let nums = [0,1,0,3,12];

moveZeroes(nums);

console.log(nums);

console.log('1')