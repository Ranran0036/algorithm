/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let count = 0;
    let result = 0;

    for(const num of nums){
        if(count == 0){
            result = num;
            count++;
        }else{
            if(result == num){
                count++;
            }else{
                count--;
            }
        }
    }

    count = 0;

    for(const num of nums){
        if(num == result){
            count++;
        }else{
            count--
        }
    }

    if(count <= 0){
        return -1
    }else{
        return result;
    }
};