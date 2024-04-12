// HJ5 进制转换
// 接受一个十六进制的数，输出该数值的十进制表示。
// 输入： 0xAA
// 输出：170
function hexadecimal2Decimal(str: string): number {
    const hexaStr = str.slice(2);
    const hexaArr = hexaStr.split('');
    const hexaLength = hexaArr.length;
    const decimalNum = hexaArr.reduce((acc: number, cur: string, idx: number): number => {
        let curNum = Number(cur);
       
        if(isNaN(curNum)) {
            curNum =  cur.toLowerCase().charCodeAt(0) - 87;
        }
        const currentDigit: number = curNum * (16 ** (hexaLength - idx - 1))
        return acc + currentDigit;
    }, 0);
    return decimalNum;
}


const hexRes = hexadecimal2Decimal('0xAA')
console.log(hexRes)