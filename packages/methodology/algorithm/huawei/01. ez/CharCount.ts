// 编写一个函数，计算字符串中含有的不同字符的个数。字符在 ASCII 码范围内( 0~127 ，包括 0 和 127 )，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
// 例如，对于字符串 abaca 而言，有 a、b、c 三种不同的字符，因此输出 3 。

function CharCount(str: string) {
    const storeMap = new Map()
    let count = 0;
    for(let i = 0; i < str.length; i++) {
       if(!storeMap.has(str[i])) {
        storeMap.set(str[i], 1);
        count++;
       }
       const previousCount = storeMap.get(str[i]);
       storeMap.set(str[i], previousCount + 1)
    }
    return count;
}

const counts = CharCount('aaabcdee')
console.log(`[Char count]: `, counts);