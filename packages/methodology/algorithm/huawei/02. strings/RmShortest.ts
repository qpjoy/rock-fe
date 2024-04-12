// @ts-nocheck
// HJ23
// 实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。
// 数据范围：输入的字符串长度满足 
// 保证输入的字符串中仅出现小写字母

function RmShortest(str): string {
    const tempStore = {};
    const numArr = [];
    for(let i = 0; i < str.length; i++) {
        const character = str[i];
        let charNum =  tempStore[character]?.['num'];
        console.log(`[Char Num]: `, charNum);
        if(!tempStore[character]) {
            tempStore[character] = {
                num: 1,
                index: []
            };
            tempStore[character]['index'].push(i);
        }else {
            tempStore[character]['num'] = ++charNum;
            tempStore[character]['index'].push(i);
        }
    }
    console.log(`[Temp store]: `, tempStore);
    // let minNum = 0;
    const minAlpha = Object.keys(tempStore).map((alpha) => {
        return {
            key: alpha,
            num: tempStore[alpha]['num'],
            index: tempStore[alpha]['index'],
        }
    }).reduce((acc, cur) => {
        console.log(acc, cur)
        if(!acc.alpha?.length) {
            return {
                num: cur.num,
                alpha: [cur.key]
            }
        }
        if(acc.num > cur.num) {
            return {
                num: cur.num,
                alpha: [cur.key]
            }
        }else if(acc.num === cur.num) {
            return {
                num: acc.num,
                alpha: [...acc.alpha, cur.key]
            }
        }else {
            return acc;
        }
    }, {alpha: [], num: 0});
    // const minNum = tempStore[minAlpha]['num'];
    console.log(`[Min alpha]: `, minAlpha)
    const reStr = str.split('').filter(alpha => minAlpha.alpha.indexOf(alpha) < 0).join('');
    return reStr;
}

const reShortest = RmShortest('aaccdfddd');
console.log(`[Re Shortest]: `, reShortest);