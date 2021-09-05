/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
let rand10 = function() {
    let range , isAdd5;
    do{
        range = rand7();
    }while(range > 5);

    do{
        isAdd5 = rand7();
    }while(isAdd5 > 6);

    return isAdd5 > 3 ? range + 5 : range;
};