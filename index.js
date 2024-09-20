// array methods
let arr = [1,2,3,4,5]
console.log(arr.length);
// 5
console.log(arr.join(","));
// 1,2,3,4,5
console.log(arr.slice(3));
// [4,5]
console.log(arr.indexOf(3));
// 2
console.log(arr.push(7));
// count : 6
arr.splice(4,0,7)
console.log(arr);
// [1,2,3,4,7,5,7]
console.log(Object.keys(arr));
