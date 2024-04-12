// @ts-nocheck
class Sort {
    static combineTable(str: string) {
        const strArr = str.split('\n');
        strArr.shift();
        const combinedTable = strArr.reduce((acc, cur) => {
            const curArr = cur.split(' ');
            // console.log(`[key val]: `, curArr);
            
            const [key, val] = curArr;
            // if(typeof key === 'undefined') return acc;
            
            if(key === '') return acc;

            if(!acc[key]) {
                acc[key] = Number(val);
                return acc;
            }
            acc[key] += Number(val);
            return acc;
        }, {});
        // for(const table in combinedTable) {
        //     console.log(`${table} ${combinedTable[table]}`)
        // }
        return combinedTable;
    }

    // https://www.nowcoder.com/practice/5af18ba2eb45443aa91a11e848aa6723
    static sortString(str: string) {
        const strArr = str.split('\n');
        strArr.shift();
        strArr.reduce((acc, cur) => {
            for(let i = 0; i < acc.length; i++) {
                // if(acc[i] > cur) {

                // }
            }
        }, []);
    }
}

export default Sort

const sortRes = Sort.combineTable(`4
0 1
0 2
1 2
3 4
`)
console.log(sortRes);

