## ECMAScript  
## (European Computer Manufacturer Association)
### Historia 
* 1950 inicio de las computadoras
* 1969 Se creo la res ARPANET
* 1970-1990 Se explora ALPANET
* 1990 Tim Berners Lee dio pauta al internet y se conocio el termino World Wide Web ( forma de acceder a archivos, documentos, enlaces al alcance de todos).

+ 1993 Nacimiento de un navegador 
    + Universitarios pioneros escribieron un software simple que inicio una revolucion.
    Marc Andreessen le dio vida a una gran empresa
    Netscape tenia un navegador que podias acceder a internet (HTML simple, enlaces, algunas fotografias).

### Browsers wars Microsoft en 1995 lanzo internet explorer, es la guerra nacieron tecnologias como CSS, conceptos como la empresa motzilla y JS
* JS Aparecio el 4 de Diciembre de 1995 disenado por Netscape Communications. Fundacion Motzilla.
* Su primer nombre fue Mocha
* Despues LiveScript
* Finalmente JavaScript
### Microsoft no se podia quedar atras y lanzo JScript y por eso tenemos ECMAScript 1997 permitio un estandar (serie de reglas que van a tener los programas de programacion)
+ Evolucion de ECMAScript :
    + ES1 Jun 1997
    + ES2 Jun 1998
    + ES3 Dec 1999
    + ES5 Dec 2009
    + ES5.1 Jun 2011
    + ES6 ES2015
    + ES7 ES2016
    + ES8 ES2017
    + ES9 ES2018
    + ES10 ES2019
    + ES11 ES2020
    + ESNEXT

## TC39: 
Es un grupo de hackers, academicos y/o personas afines a la tecnologia que se encargan de las actualizaciones, bajo el mando de ECMA.
ESNext es un nombre que siempre indica la próxima versión de javascript y esto consta de los siguientes pasos:

* Stage0: Strawperson (borrador, cualquier persona puede tener una idea para implementar en el estandar)

* Stage1: Proposal (propuesta formal)

* Stage2: Draft (borrador, como va a funcionar la implementacion el impacto entre otros)

* Stage3: Candidate (se elige el candidato, vamos a tener una propuesta que va ayudar a mejorar el lenguaje.)

* Stage4: Finished (va a ser desplegada en la version normalmente en JUNIO)



## ES6 (2015)
A partir de esta versión se hace referencia a “El gran cambio”

### let & const
Nuevas palabras reservadas para guardar variables. Antes solo existía var.
### Usando var:
* Declarar, asignar y reasignar
```javascript
// Declarar variable
var lastname;
// Asignar valor a variable
lastname = "Padilla";
// Reasignar valor a variable
lastname = "Diaz";
```
### Usando let:
```javascript
// usando let
// Declarar variable y Asignando variable
let fruit = "apple";
// Reasignar valor a variable
fruit = "kiwi";
```
####  Esto es posible ya que estamos usando var o let.
#### Si en cambio usamos const :

```javascript
// usando const
// Declarar variable y Asignando variable
const animal = "dog";
// Reasignar valor a variable
animal = "cat";
```
#### En este caso me dara un error ya que con const no se puede reasignar ya que es una constante.

Ahora el scoope es diferente entre estas variables ejemplo:
```javascript
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
```
En este ejemplo nos dara error desde la variable fruit2 ya que 
* var se comportara global
* let y const solo estan definidas dentro del bloque if y solo ahi existen.

## Arrow functions
```javascript
// funcion regular
function square(num){
    return num * num;
};
// arrow function con return
const square = (num) => {
    return num * num;
}
// arrow function con return implicito
const square = num=>num * num;
```

## Template literals

En ES6 también se implementaron los template strings o comillas francesas con las cuales podemos interpolar valores más fácil y más clara, para el ejemplo haremos 2 variables 1 con el string de hello y la otra con world lo hacemos así

> `${...}`
```javascript
let hello = "hello";
let world = "world";

// concatenando de forma tradicional
console.log(hello + " " + world);
// template literals
console.log(`${hello} ${world}`);
```
## Parametros por defecto
Parametros por defecto es cuando en los parametros estan definidos ciertos vslores que se tomaran si no recibe ningun argumento ejemplo:
```javascript
function suma(num1=25,num2=10){
    return num1+num2;
}
// dandole argumentos  // 10
console.log(suma(5,5));
// sin darle argumentos  // 35
console.log(suma());
```

## Asignación de Desestructuración
la Desestructuración permite desarmar objetos y asignarle a cada elemento una variable distinta
ejemplo:

Asignación de Desestructuración
la Desestructuración permite desarmar objetos y asignarle a cada elemento una variable distinta
ejemplo:

DESESTRUCTURACIÓN DE ARRAYS
```javascript
let frutas = ['Manzana', 'Pera'];
let [roja, verde] = frutas;
console.log(roja, verde);
```
DESESTRUCTURACIÓN DE OBJETOS
```javascript
let user = { username: 'Julian', age:28 };
let { usuario , edad } = user;
console.log (usuario, edad);

```
### Otro ejemplo
```javascript
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
```