const FIST = 0;
const CLOTH = 1;
const SHEAR = 2;

let compareEngine = function(state1 , state2){
    let result = '';

    let diff = state1 - state2;

    if(diff == 0){
        result = '平';
    }

    if(diff == -1 || diff == 2){
        result = '负';
    }

    if(diff == 1 || diff == -2){
        result = '胜';
    }

    return result;
}

let userState = FIST; 

let computerStates = [FIST , CLOTH , SHEAR];

let Stat = {
    '负' : 0,
    '胜' : 0,
    '平' : 0
}

let i = 0;
while(i <= 10){
    let random = parseInt(Math.random() * 3);

    let res = compareEngine(userState , computerStates[random]);

    Stat[res] += 1;

    i++;
}

console.log(Stat);