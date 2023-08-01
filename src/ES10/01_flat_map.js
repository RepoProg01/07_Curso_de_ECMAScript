const numeros = [1,2,3,4,5];
console.log(numeros.flatMap(num =>num * 2));

// con matrices
const array = [1,1,2,3,4, [1,3,5,6, [7,8,9]]];
console.log(array.flat(Infinity).flatMap(num => num * 2));