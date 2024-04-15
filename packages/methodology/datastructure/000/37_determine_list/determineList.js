let list1 = [1,2,3,4,5];
let list2 = list1;
list1.push(6,7,8);
list1 = [10, 20, 30];
// list1.slice();
// list1.concat([]);
// [...list1];
console.log(list2, list1);

// passing by value
const myNum = 10;
const myString = 'hello world';
const myString2 = myString;