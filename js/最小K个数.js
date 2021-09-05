/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
let smallestK = function(arr, k) {
    arr.sort((a , b)=>{
        return a - b
    });

    arr.splice(k , arr.length - k);

    return arr;
};