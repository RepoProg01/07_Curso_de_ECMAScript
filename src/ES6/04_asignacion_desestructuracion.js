// con arrays
let fruits = ['apples','bananas'];
let [a,b] = fruits;
console.log(b);

//  con objetos
let users = {
    name: "Luis", 
    apellido: "Padilla", 
    nacionalidad: "Mexicano"
};
let {name, apellido, nacionalidad} = users;

console.log(name, apellido);
// otra forma
let {name:n, apellido:c, nacionalidad:p} = users;
console.log(n,c);

