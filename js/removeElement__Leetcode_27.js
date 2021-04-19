/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 let removeElement = function(nums, val) {
    let len = nums.length;
    let left = 0;

    for(let right = 0 ; right < len; right++){
        if(nums[right] != val){
            nums[left] = nums[right];
            left++;
        }
    }

    return left;
};

removeElement([1,2,2,3,4,5] , 2)