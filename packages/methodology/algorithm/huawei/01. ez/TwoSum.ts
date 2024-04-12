// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 
// 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
function TwoSum(nums: number[], target: number) {
    const sumMap = new Map<string, number>();

    for(let i=0; i < nums.length; i++) {
        const toSum: string = target - nums[i] + '';
        if(sumMap.has(toSum)) {
            return [sumMap.get(toSum), i]
        }
        sumMap.set(nums[i] + '', i);
    }

    return []
}

const sumRes = TwoSum([3,2,4], 6);
console.log(`[Tow sum]: `, sumRes);

