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

## let & const
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

> `${variable}`
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

//  Manzana Pera
```
DESESTRUCTURACIÓN DE OBJETOS
```javascript
let user = { username: 'Julian', age:28 };
let { usuario:a , edad:b } = user;
console.log (a, b);

// Julian 28
```
### Otro ejemplo
```javascript
// con arrays
let fruits = ['apples','bananas'];
let [a,b] = fruits;
console.log(b);
//  bananas

// con objetos
let user = {name: "Luis", apellido: "Padilla", nacionalidad: "Mexicano"};
let {name, apellido, nacionalidad} = user;
console.log(name, apellido);
//  Luis Padilla

// otra forma
let {name:n, apellido:c, nacionalidad:p} = user;
console.log(n,c);
//  Luis Padilla
```
## Spread operator y Rest operator
### Spread operator
Spread operator | Operador de Propagación
El operador de Propagación, nos va a permitir trabajar con una lógica que podamos propagar a otros elementos sin necesidad de volverla a escribir.
Es un operador que ayuda a crear nuevas variables utilizando elementos de otras variables, y/o elementos nuevos.

### Con objetos
```javascript
let user = {
    name: "Luis",
    apellido: "Padilla"
};

let country = {
    nacionalidad: "Mexicano"
};

let person = {...user, country};
console.log(person);

// {
//   name: 'Luis',
//   apellido: 'Padilla',
//   country: { nacionalidad: 'Mexicano' }
// }

```

### Nota:
Al usar spread operator para objetos. Cuando existe el mismo parametro en dos objetos distintos y hacemos uso de esta funcion es posible perder propiedades del primer o segundo objeto entonces presten mucha atencion a en que parte del objeto estan haciendo la destructuracion.
Ejemplo:
```javascript
const person1 = {
	name: 'Oscar',
	age: 32
}

const person2 = {
	name: 'Emilano',
	job: 'Developer',
	...person1
}
console.log(person2) 
// Output { name: 'Oscar', age: 32, job: 'Developer' }
 
// Esto gracias a que la destructuracion ocurre despues de la declaracion de propiedades y esto reemplaza props con el mismo nombre.

const person3 = {
	...person1,
	name: 'Emiliano'
}
console.log(person3) 
// Output { name: 'Emiliano', age: 32 } 

// ya que la asignacion de la propiedad "name" ocurre despues de que el spread op asignara la prop del mismo nombre anteriormente
```

### Con arrays
```javascript
let store1 = ['apples','bananas'];
let store2 = ['grapes','lemon'];

let store3 = [...store1, ...store2];
console.log(store3);

// [ 'apples', 'bananas', 'grapes', 'lemon' ]
```
## Rest operator

### Con arrays
```javascript
let values = [2,4,6,8,1,3,5,7];

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0][0]);
};

sum(5,values);

//  [ [
//    2, 4, 6, 8,
//    1, 3, 5, 7
//  ] ]

// 7
```
### Con Objetos

```javascript
let info = {
    name: "Luis",
    apellido: "Padilla"
};

function mostrar(depto, ...info){
    console.log(depto);
    console.log(info);
    console.log(depto + " " + info[0]["name"]);
};

mostrar("Frontend",info);

//  Frontend
//  [ { name: 'Luis', apellido: 'Padilla' } ]
//  Frontend Luis
```
### Nota:
> ### El Rest operator regresa el array o el objeto dentro de un array.

Es importante que si deseas hacer uso del rest operator en los parámetros de una función, lo establezcas como el último en la lista de parámetros, si no te arrojara el siguiente error:

SyntaxError no detectado: el parámetro Rest debe ser el último parámetro formal
### Tomar en cuenta
* Una diferencia importante de ambos parámetros, como dice la documentación, es que el spread syntax (…), lo que hace es desestructurar elementos de un objeto o array.

* Sin embargo lo que hace la rest syntax (… pero usada como parámetro en una función), es “empaquetar” o “condensar” los valores enviados como un elemento, sea array u objeto.

* Spread syntax: desestructura -> deconstruye
* Rest syntax: empaqueta -> construye

## Object Literals
Los objetos literales permiten crear objetos a partir de variables sin tener que reperit los nombres de las variables en la creación del objeto.
Por ejemplo, antes de ES6, para crear un objeto a partir de variables se utilzaba la siguiente sintaxis

```javascript
function newUser(user, age, country){
    return { 
        user: user, 
        age: age, 
        country: country 
    } 
}
```
### Simplificada
Con los literales se puede obviar la repetición de nombres y simplificar el código:
```javascript
function newUser(user, age, country){ 
    return { 
        user, 
        age, 
        country, 
    } 
}
```
## Promesas

Las promesas en Javascript se representan a través de un OBJECT, y cada promesa estará en un estado concreto: PENDIENTE, ACEPTADA o RECHAZADA. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:

Método	y Descripción

> ### .then(resolve)	
> * Ejecuta la función callback resolve cuando la promesa se cumple.

> ### .catch(reject)	
>* Ejecuta la función callback reject cuando la promesa se rechaza.

> ### .then(resolve,reject)	
>* Método equivalente a las dos anteriores en el mismo .then().

> ### .finally(end)	
>* Ejecuta la función callback end tanto si se cumple como si se rechaza.

Ejemplos:

### Array de objetos que utilizaremos para los siguientes ejemplos
```javascript
const datos = [{
    id: 1,
    title: "spiderman",
    year: 2017
},{
    id: 2,
    title: "Advengers",
    year: 2019
},{
    id: 3,
    title: "ironman",
    year: 2008
}];

const getDatos = () => {
    return datos;
}
```
Con una funcion regular como la siguiente obtendremos el array de objetos sin ningun problema

```javascript
const getDatos = () => {
    return datos;
}
console.log(getDatos());
```
Pero que tal si el <b>array datos</b> tardara cierto tiempo en llegar a la funcion, ya sea que se este obteniendo de un API u otro lugar de almacenamiento remoto, para simular esto usaremos un <b>setTimeout()</b> de javascript que nos permite poner un tiempo de espera para ejecutar una o varias lineas de codigo. Ejemplo:
```javascript
const getDatos = () => {
    setTimeout(()=>{
        return datos;
    },1500);
};
console.log(getDatos());
```
 En este caso obtendremos un UNDEFINED ya que al ejecutar la funcion geDatos() sale de la funcion antes de que el return que tiene un tiempo de espera de 1.5 segundos regrese a la funcion, entonces ahi se utiliza una promesa Ejemplo:
```javascript
const getDatos = ()=>{
    return new Promise((resolve, reject)=>{
        if(datos.length === 0){
            reject("No existen datos");
        }
        setTimeout(()=>{
            resolve(datos);
        },1500)
    })
}

getDatos()
    .then(datos =>console.log(datos))
    .catch(err => console.log(err));
```
En este caso no se imprimira el resultado con un console.log() ya que solo retornara que es un OBJETO TIPO PROMESA

En su lugar se con el nombre de su funcion y sus metodos ya mencionados

Esta funcion se ejecutara asincrona, en un hilo independiente del procesador y los demas procesos continuaran normalmente, cuando se cumpla el tiempo de espera se ejecutara ese return y el resolve se mandara al metodo de la promesa .then(), si por alguna razon algun error se presentara se mandaria con el reject al .catch() 

## Usando async await
```javascript
function getDatos(){
    return new Promise((resolve, reject)=>{
        if(datos.length === 0){
            reject("Array vacio");
        }
        setTimeout(()=>{
            resolve(datos);
        },1500);
    })
}

async function print(){
    console.log(await getDatos());
}
  
print();
```
## Clases

### Clase:
Es una plantilla. Una definición genérica de algo que tiene atributos (datos/variables) y métodos (acciones/funciones) y desde la cual se pueden crear objetos.
### Objetos:
Un elemento real que fue creada con base en una clase (plantilla) y que hereda (contiene) sus atributos y métodos.


### Constructor: 
Es un método que contiene una serie de instrucciones que se encargan de inicializar un objeto cuando es instanciado a partir de esa clase. Básicamente, asigna los valores de los atributos que le enviemos a ese objeto nuevo. Es una función que se ejecuta automáticamente.
### Getter y Setter: 
Son funciones sencillas de entender: obtener el valor de un atributo o establecerlo. Se crean de esta manera por un concepto de la POO denominado encapsulamiento, que consiste, entre otras cosas, en limitar el acceso a las clases para tener mayor control sobre ellas.
### This: 
Con este objeto de contexto hacemos referencia al propio objeto que se está instanciando y no a la clase.

```javascript
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
        return  `Hello ${this.name} tu ocupacion es: ${this.ocupacion}`
    };
    //getter
        get getAge(){
        return this.age;
    };
    //setter
    set setAge(ageVal){
        this.age = ageVal;
    };
};
// instancias de clase
const user1 = new User("Luis", "Padilla");
const user2 = new User("Alejandro", "Diaz");
user1.ocupacion = "frontend developer";
user2.ocupacion = "backend developer";

console.log(user1.greetings());
console.log(user2.greetings());
```
## Modules

* Existen dos tipos de exports/imports
* Default se usa cuando solo devuelves un elemento y no quieres restringir el nombre.
* Export const restringe el nombre y ademas te permite devolver multiples funciones o constantes
* Poner las extensiones como buena practica

### llaves { }
* El motivo de poner <b>la funcion</b> entre { } en el import es el siguiente.
En el codigo del modulo se pueden exportar una o varias funciones.
Si se escribe

> ### export default nom_funcion;

Su manera de llamarlo desde otro archivo es sin llaves.

> ### import nom_funcion from "./modulo.js";
Sin embargo, si solo se pone:

> ### export {nom_funcion};

Si se exporta una (o varias) funciones sin el default entonces habrá que llamarlo con llaves

> ### import {nom_funcion} from "./modulo.js";

### Ejemplo de modulo:
### Archivo main.js
```javascript
import hello from "./modulo.js";

hello();
```
### Archivo module.js
```javascript
const hello = ()=>console.log("hello");
export default hello;
```
Para que funcionen los modulos se tiene que agregar una linea al final del archivo package.json

### package.json
```javascript
"type": "module"
```
## Generators
Generator nos va a permitir tener una función, de tipo especial, que nos va ar retornar una serie de valores segun el algoritmo dado, recordando este recurso.

* ¿Qué es un generador?
Un generador es una función que puede detenerse a la mitad y luego continuar desde donde se detuvo. En resumen, un generador parece ser una función pero se comporta como un iterador.

* Casos donde los generadores son útiles.
Los generadores son útiles cuando se trata de secuencias infinitas, ejecución diferida, cómputos masivos, operaciones asincrónicas, etc.

* ¿Cómo crear un generador?
Se crea un generador agregando un asterisco (*) a la palabra clave de la función. Una función generadora puede tener una o más expresiones de rendimiento. Se utiliza una expresión de rendimiento para pausar el generador y proporciona un valor a la persona que llama. La expresión de rendimiento se utiliza para producir una secuencia de valores.

```javascript
function* iterate(array){
    for(let value of array){
        yield value;
    }
}
        
const it = iterate(["Luis", "David", "Ana", "Jose"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Luis
// David
// Ana
// Jose
```
## Funcion para crear numeros de serie
```javascript
function serial(){
    let count = 1;
    const array = [];
    while(count <= 10){
        const num = Math.random().toString(36).substring(5).toUpperCase();
        if(num.length > 7 && !array.includes(num)){
            count++;
            array.push(num);
        }
    }

    for(let item of array){
    console.log(item);
    }
}

serial();

// 0I7N3FIL
// G3CYVSWW
// E9B39LU7
// 8V3PXYMK
// APBHSEM8
// YCQMOGC5
// AD9ZFJMW
// MIC742OP
// SI9MH0Z8
// 2WSNCJM9
```
## Serial con una funcion generadora
```javascript
function* getId() {
    const array = [];
    while(true){
        const num = Math.random().toString(36).substring(5).toUpperCase();
        if(num.length > 7 && !array.includes(num)){
            array.push(num);
            yield num;
        }
    }
};

const id = getId();
id.next().value;
id.next().value;
id.next().value;
id.next().value;

// BNZG7IVE
// HRIZ8H4D
// 44F1QO5Q
// ATRQPR6S
```
## set add
SET - Un Set es una colección de elementos sin un orden en particular, en donde cada elemento puede aparecer una sola vez. Es una estructura muy similar a los arrays, pero con la particularidad de que cada elemento que posee es único.

En JS los sets ya están implementados mediante la clase Set, por lo tanto, si queremos crear un nuevo set debemos instanciarlo utilizando la palabra reservada new Set()
```javascript
var array = [1,1,1,2,3,4,4,5,5,3]
var set1  = new Set(array)
console.log(array)   // [ 1,1,1,2,3,4,4,5,5,3 ]
console.log(set1)   // Set { 1, 2, 3, 4, 5 }
```

### Metodos de set
Metodos utiles de Set:

* add
* has
* delete
* size
```javascript
const set = new Set();
set.add('item 1');                  	
// Set ['item 1']

set.add('item 2').add('item 3'); 
// Set ['item 1','item 2','item 3']

set.has('item 2'); 
// true

set.delete('item 1');             
// Set ['item 2','item 3', 1] 
                   
set.size();                        
// 2
```
