// con arrays
let store1 = ['apples','bananas'];

let store2 = ['grapes','lemon'];

let store3 = [...store1, ...store2];
console.log(store3);

// con objetos
let user = {
    name: "Luis",
    apellido: "Padilla"
};

let country = {
    nacionalidad: "Mexicano"
};

let person = {...user, country};
console.log(person);

