// con arrays
let fruits = ['apples','bananas'];
let [a,b] = fruits;
console.log(b);

// con objetos
let user = {name: "Luis", apellido: "Padilla", nacionalidad: "Mexicano"};
let {name, apellido, nacionalidad} = user;
console.log(name, apellido);
// otra forma
let {name:n, apellido:c, nacionalidad:p} = user;
console.log(n,c);