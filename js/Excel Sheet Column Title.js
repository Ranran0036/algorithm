/**
 * @param {number} columnNumber
 * @return {string}
 */
let convertToTitle = function(columnNumber) {
    const MAPPING = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let ret = '';

    while(columnNumber > 26){
        if(columnNumber%26 == 0){
            ret = 'Z' + ret;
            columnNumber = parseInt(columnNumber / 26) - 1;
            continue;
        }

        ret = MAPPING[(columnNumber%26 - 1)] + ret;

        columnNumber = parseInt(columnNumber / 26);
    }

    ret = MAPPING[columnNumber - 1] + ret;

    return ret;
};

console.log(convertToTitle(52))