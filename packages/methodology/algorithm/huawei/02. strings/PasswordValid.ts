// @ts-nocheck
// 密码要求:
// 1.长度超过8位
// 2.包括大小写字母.数字.其它符号,以上四种至少三种
// 3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）

function PasswordValid(str: string) {
    if(str.length <= 8) {
        return false
    }
    const temp = {
        lowercase: 0,
        uppercase: 0,
        num: 0,
        symbol: 0
    }
    const strSet = new Set();
    for(let i = 0; i < str.length - 1; i++) {
        const cur = str[i];
        const charCode = cur.charCodeAt(0);
        // [a-zA-Z]
        if(charCode >= 97 && charCode <= 122) {
            temp.lowercase++
        }else if(charCode >= 65 && charCode <= 90) {
            temp.uppercase++
        }else if(charCode >= 48 && charCode <= 57) {
            temp.num++
        }else if(
            (charCode >= 33 && charCode <= 47) ||
            (charCode >= 58 && charCode <= 64) ||
            (charCode >= 91 && charCode <= 96) ||
            (charCode >= 123 && charCode <= 126)
        ) {
            temp.symbol++
        }
        if(i < str.length - 3) {
            const subStr = str.substring(i, i+3);
            if(strSet.has(subStr)) return false;
            strSet.add(subStr);
        }
    }
    let count = 0;
    for(const i in temp) {
        if(temp[i] > 0) count++
    }
    if(count <= 2) return false
    return true
}

const isValid = PasswordValid('021$bc9000');
console.log(`[Password Valid]: `, isValid)