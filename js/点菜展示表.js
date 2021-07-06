/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
let displayTable = function(orders) {
    let nameSet = new Set();
    let foodCnt = new Map();

    for(const order of orders){
        nameSet.add(order[2]);
        const id = parseInt(order[1]);
        const map = foodCnt.get(id) || new Map();
        map.set(order[2] ,( map.get(order[2]) || 0 ) + 1)

        foodCnt.set(id , map);
    }

    // 提取餐品名称，并按字母顺序排列
    const n = nameSet.size;
    const names = [];
    for (const name of nameSet) {
        names.push(name);
    }
    names.sort();

    // 提取桌号，并按餐桌桌号升序排列
    const m = foodCnt.size;
    const ids = [];
    for (const id of foodCnt.keys()) {
        ids.push(id);
    }
    ids.sort((a, b) => a - b);

    const table = [];
    const header = [];
    header.push("Table");
    for (const name of names) {
        header.push(name);
    }
    table.push(header);
    for (let i = 0; i < m; ++i) {
        const id = ids[i];
        const cnt = foodCnt.get(id);
        const row = [];
        row.push(id.toString());
        for (let j = 0; j < n; ++j) {
            row.push((cnt.get(names[j]) || 0).toString());
        }
        table.push(row);
    }
    return table;
};

console.log(displayTable([["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]));