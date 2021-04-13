let arr = [1,2,3,5,6,7,8,9];

let num_1 = 40000;

function permute(temArr,testArr){
    let permuteArr=[];
    let arr = testArr;
    function innerPermute(temArr){
        for(let i=0,len=arr.length; i<len; i++) {
            if(temArr.length == len - 1) {
                if(temArr.indexOf(arr[i]) < 0) {
                    permuteArr.push(temArr.concat(arr[i]));
                }
                continue;
            }
            if(temArr.indexOf(arr[i]) < 0) {
                innerPermute(temArr.concat(arr[i]));
            }
        }
    }
    innerPermute(temArr);
    return permuteArr;     
}

let res = permute([] , arr);

let matchArr = [];

for (const item of res) {
    let arr1 = item.slice(0,4);
    let arr2 = item.slice(4);

    let numA = parseInt(arr1.join(''));
    let numB = parseInt(arr2.join(''));

    if(num_1 + numA - numB == 33333){
        matchArr.push([num_1 + numA , numB]);
    }
}

for (const iterator of matchArr) {
    console.log(iterator)
}
