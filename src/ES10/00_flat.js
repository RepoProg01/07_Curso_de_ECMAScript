const array = [1,1,2,3,4, [1,3,5,6, [7,8,9]]];

// console.log(array.flat(3));
console.log(array.flat(Infinity).map(num => num * 2));


