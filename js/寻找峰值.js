/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function(nums) {
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[mid + 1]) {
            // 下降
            right = mid;
        } else {
            // 上升
            left = mid + 1;
        }
    }
    return left;
};