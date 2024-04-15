function myFunc() {
    // code out some logic
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

console.log(myFunc());  // returns 1
console.log(myFunc());  // returns 2
console.log(myFunc());  // returns 3

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne ', instanceOne());
console.log('instanceOne ', instanceOne());
console.log('instanceOne ', instanceOne());
console.log('instanceTwo ', instanceTwo());
console.log('instanceTwo ', instanceTwo());
console.log('instanceTwo ', instanceTwo());