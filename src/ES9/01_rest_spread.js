const user = {
    name: "Luis",
    apellido: "Padilla",
    country: "Mexico"
}

const {name, ...values} = user;

console.log(name);
console.log(values);