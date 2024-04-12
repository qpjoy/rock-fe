// https://blog.csdn.net/m0_60354608/article/details/123964767
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function Frog(n: number): number {
    if(n === 0 || n === 1) {
        return n;
    }
    if(n === 2) {
        return 2;
    }
    return Frog(n - 1) + Frog(n - 2)
}
const steps = Frog(4);
console.log(`[Frog steps]: `, steps);


function FrogJump(n: number): number {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let a = 2, b = 1;
    for(let i = 2; i < n; i++) {
        a = a + b;
        b = a - b;
    }
    return a;
}
const frogSteps = FrogJump(3);
console.log(`[Frog steps]: `, frogSteps);