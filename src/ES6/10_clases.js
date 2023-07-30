// declarar clase
class User{
    // constructor
    constructor(name, apellido){
        this.name = name;
        this.apellido = apellido;
        this.ocupacion = "No esta definida todavia tu ocupacion";
    };
    //metodo
    greetings(){
        return  `Hello ${this.name} tu ocupacion es: ${this.ocupacion}`;
    }
};
// instancia de clase
const user1 = new User("Luis", "Padilla");
const user2 = new User("Alejandro", "Diaz");
user1.ocupacion = "frontend developer";
user2.ocupacion = "backend developer";

console.log(user1.greetings());
console.log(user2.greetings());