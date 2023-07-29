// Declarar variable
var lastname;
// Asignar valor a variable
lastname = "Padilla";
// Reasignar valor a variable
lastname = "Diaz";

// usando let
// Declarar variable y Asignando variable
let fruit = "apple";
// Reasignar valor a variable
fruit = "kiwi";

// usando const
// Declarar variable y Asignando variable
const animal = "dog";
// Reasignar valor a variable
// animal = "cat";

// funcion anonima 
const fruits = ()=>{
    if(true){
        var fruit1 = "apple";
        let fruit2 = "kiwi";
        const fruit3 = "banana";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();