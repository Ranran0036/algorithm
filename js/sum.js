let starter = 0.01;//初始值

let sum = 0;//总数

for (let days = 1; days <= 31; days++) {
    sum += starter

    starter *= 2;
}

const toChineseNum = (num) => {
    const keys = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖']
    const count = ['','拾','佰','仟']
    let str ='';
    let nums = parseInt(num).toString().split('').reverse();
    nums.map(function (a, index) {
        str = (keys[a]+ ( a==0?'': count[index>3 ? index-4 : index]))+(index=='4'?'万':'')+str 
    })
    return str.replace(/(零(?=零))|(零$)|(零(?=万))/g,'')
}

console.log(`31天给的总数 ：${toChineseNum(sum)}`);