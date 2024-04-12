// @ts-nocheck
// HJ33
class IP2Int {
    static transfer(ip: string) {
        const ipArr = ip.split('.');
        return ipArr.reduce((acc, cur, idx) => {
            const curNum = Number(cur) * 2**(8 * (3-idx));
            return acc + curNum
        }, 0);
    }

    // '10.0.3.100' to '00001010 00000000 00000011'
    static decimalIP2Binary(numStr: string) {
        const numArr = numStr.split('.');

        return numArr.reduce((acc, cur) => {
            let curNum = Number(cur);
            let maxN = 0;
            const maxLen:number = 8;
            let binaryStr = '00000000';
            while(curNum>0) {
                maxN = Math.floor(Math.log2(curNum));
                binaryStr = binaryStr.substring(0, maxLen-maxN-1) + '1' + binaryStr.substring(maxLen-maxN, maxLen);
                curNum = curNum - 2**maxN;
            }
            console.log(`[Acc Binary]: `, acc, binaryStr)
            return acc + binaryStr+ '-';
        }, '');
    }
}

export default IP2Int;

const ip2Int = IP2Int.transfer('10.0.3.193')
console.log(`[IP 2 INT]: `, ip2Int);

const palagraph = IP2Int.decimalIP2Binary('10.0.3.193');
console.log(palagraph);