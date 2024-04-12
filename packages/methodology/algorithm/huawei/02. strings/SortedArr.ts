// @ts-nocheck
// HJ101
class SortedArr {
    constructor() {}
    static sort(str?: string) {
        const sArr = str.split('\n');
        const sortedNum = sArr[0];
        const numstr = sArr[1];
        const type = sArr[2];

        const nums = numstr.split(' ');
        console.log(`[Nums]: `, nums);
        for(let i=0; i<nums.length; i++) {
            for(let j=0; j<=i; j++) {
                console.log(`[Bubble Sort]: `, i, j, nums[j], nums[j+1])
                if(Number(nums[j]) > Number(nums[j+1])) {
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                }
            }
        }
        return type == '0' ? nums : nums.reverse();
    }
}

export default SortedArr;

const sortedRes = SortedArr.sort(`8
1 2 4 9 3 55 64 25
1`);
console.log(sortedRes)