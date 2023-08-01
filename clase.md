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

### Finally

```javascript
getDatos()
    .then(datos =>console.log(datos))
    .catch(err => console.log(err));
    .finally(()=>console.log("finalizo"));
```
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
## 0perador exponencial

```javascript
const data = 3 ** 4;
console.log(data);
// 81
```
## array includes

```javascript
let array = [1,3,5,7,9,2,4,6,8,9,3];
console.log(array.includes(5));
// true

let personas = ['Luis','Juan','Pedro','Maria'];
console.log(personas.includes('Pedro'));
// true
```
## Object.entries

Transforma un Objeto con llave valor a una array de arrays
### Ejemplo:

```javascript
const countries = {
    MX: "mexico",
    CO: "colombia",
    CL: "chile",
    PE: "peru"
};

console.log(Object.entries(countries));
// [
//     [ 'MX', 'mexico' ],
//     [ 'CO', 'colombia' ],
//     [ 'CL', 'chile' ],
//     [ 'PE', 'peru' ]
//   ]
```

## Object.values
Regreza un array con solo los valores del objeto
```javascript
const countries = {
    MX: "mexico",
    CO: "colombia",
    CL: "chile",
    PE: "peru"
};

console.log(Object.values(countries));

// [ 'mexico', 'colombia', 'chile', 'peru' ]
```

## padStart y padEnd

padStart(#pos, "#") y padEnd(#pos, "#") 

Agrega caracteres o simbolos al principio o al final del string el primer parametro indica el numero de caracteres total contando el string, y el segundo valor el caracter que se quiere agregar Ejemplo:

```javascript
const palabra = "hello";

let left = palabra.padStart(6,"#");
let leftRight = left.padEnd(7,"#");

console.log(`${leftRight}`);

//  #hello#
```

En este ejemplo el string "hello" contiene 5 caracteres, como se le quiere agregar el simbolo "#" al principio entonces el primer valor sera 6 y el segundo sera "#" separado por una coma,

De la misma forma para el lado derecho, solo que cambia el primer valor a 7 ya que ahora tiene 6 caracteres porque agregamos el "#" al principio

## Trailing comma

El término “trailing commas o “trailing commas en inglés” se refiere a la posibilidad de agregar una coma adicional después del último elemento en una lista, array o conjunto de parámetros de función en JavaScript.

Anteriormente, esta coma adicional causaba un error de sintaxis en algunos navegadores antiguos de Internet Explorer, por lo que se consideraba una mala práctica de codificación. Sin embargo, en la versión ES2017 (ES8) de JavaScript, se introdujo una nueva sintaxis que permite las “trailing commas” sin errores de sintaxis, lo que hace que sea más fácil y seguro mantener y actualizar el código.

La sintaxis de “trailing commas” en JavaScript se ve así:
```javascript
const array = [23,45,65,78,43,12,3,56, , , , , ];

console.log(array);
console.log(array.length);
// [ 23, 45, 65, 78, 43, 12, 3, 56, <4 empty items> ]
//12
```

## async await

### Funcion asincrona:
Una función asincrona lo que hace es aislar todo el flujo que contiene para que no intervenga en el flujo externo de la función, o sea nuestra aplicación completa. En otras palabras simula ser un HILO el cual en otros lenguajes de programación el usar hilos podemos ejecutar varios procesos simultaneos sin detener nuestro programa.

Por ejemplo: Tengo una aplicación en la que mis clientes manipulan y consultan datos continuamente y mi aplicación quiere hacer una descarga de un archivo pesado, si lo asemos sin asincronismo o sin usasr un “HILO” lo que pasará es que mientras ses descarga el archivo nuestro programa se congelara hasta que se termine de descargar el archivo. PERO si usamos funciones asincronas o HILOS lo que podremos hacer es que podremos decargar el archivo en segundo plano y nuestros clientes podran seguir usando el sistema sin problemas

### async-await 
Es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada “async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”, solamente existe dentro de una función "async", que hace que JavaScript espere hasta que la función promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del siguiente código.
```javascript
const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        // condicional ternario
        (true)
        ? setTimeout(()=>resolve("async"),1500) 
        : reject(new Error("error reject"));
    });
};

const  asyncFunction = async ()=>{
    const answer = await fnAsync();
    console.log(answer);
    console.log("Recibido con exito");
}

console.log("Before");
asyncFunction();
console.log("After");

// Before
// After
// async
// Recibido con exito
```

## regex
### Expresión regular:
* /(\d{4})-(\d{2})-(\d{2})/

* \d{4} -> busca un string con exactamente 4 dígitos de longitud
* luego viene un guión -
* \d{2} -> busca un string con exactamente 2 dígitos de longitud
* luego viene otro guión -
* y se repite el \d{2}

Entonces la expresión regular hará match con strings que tengan 4 dígitos - 2 dígitos - 2 dígitos
### Con un formato correcto :

```javascript
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-01-01");
console.log(matchers);

// [
//     '2023-01-01',
//     '2023',
//     '01',
//     '01',
//     index: 0,
//     input: '2023-01-01',
//     groups: undefined
//   ]

```

### Con un formato incorrecto :

```javascript
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("202-010-01");
console.log(matchers);

// null
```
## Spread
### Como se diferencia el Rest Operator del Spread Operator?

* La sintaxis spread “expande” un array en sus elementos, mientras que 

* la sintaxis rest recopila varios elementos y los “condensa” en un solo elemento.

* Rest tiene dos aplicaciones, como Rest property (en asignación desestructurada) y como Rest parameters.

* El ejemplo del profesor muestra el uso de Rest Property, es decir, una asignación desestructurada aplicada en un objeto.

* Los rest parameters permiten a una función aceptar una cantidad indefinida de argumentos (aunque esto no suele ser una buena práctica).

```javascript
const user = {
    name: "Luis",
    apellido: "Padilla",
    country: "Mexico"
}

const {name, ...values} = user;

console.log(name);
console.log(values);

// Luis
// { apellido: 'Padilla', country: 'Mexico' }

```

## Genetators con async await


```javascript
async function* generator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const gen = generator();
gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));

// 1
// 2
// 3
```
### Usando un for con un array de argumento

```javascript
async function* asyncFc(array){
    for(let item of array){
        yield await item;
    }
}

const prueba = asyncFc([1,2,3]);

prueba.next().then(data => console.log(data.value));
prueba.next().then(data => console.log(data.value));
prueba.next().then(data => console.log(data.value));
// 1
// 2
// 3
```

## Flat

### Flat
El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos.

```javascript
const array = [1,1,2,3,4, [1,3,5,6, [7,8,9]]];

console.log(array.flat(3));

// [
//     1, 1, 2, 3, 4,
//     1, 3, 5, 6, 7,
//     8, 9
// ]
```
Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.

```javascript
console.log(array.flat(Infinity));
```

## Flat-map
Permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada elemento del nuevo array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.flatMap(num =>num * 2)); 

// [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
```
Este método no se podría utilizar para array que tengan más de un nivel de profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.
```javascript
const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

numbers.flat(Infinity).map(num => num * 2)

// [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
```
## trim() trimStart() trimEnd()
fsEl metodo trim() quita los espacios de izquierda y derecha a la vez
```javascript
//------String con espacios en la izquierda y en la derecha-----
const string = "     hello     ";
console.log(string);
//      hello       //

//-------------------------trimStart()--------------------------
//----String quitando espacios en la izquierda----
const stringLeft = string.trimStart();
console.log(stringLeft);
//hello       //

//--------------------------trimEnd()---------------------------
//----String quitando espacios en la derecha----
const stringRight = string.trimEnd();
console.log(stringRight);
//      hello//

//---------------------------trimt()------------------------------
//----String quitando espacios en la izquierda y en la derecha----
const stringRL = string.trim();
console.log(stringRL);
//hello//
```

## try catch

### En este ejemplo ya que si existe la funcion hello() el try no tendra ningun problema 

```javascript
function hello(){
    console.log("Hola como estas?");
}

try{
    hello();
}
catch(error){
    console.log(error);
}

// Hola como estas?
```
### En este ejemplo no existe la funcion asi que el catch entrara y mostrara el error

```javascript
try{
    desconocida();
}
catch(error){
    console.log(error);
}

// ReferenceError: hello is not defined
//  at file:///home/ECMAScript/src/ES10/03_try_catch.js:6:5
//  at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
//  at async Loader.import (internal/modules/esm/loader.js:182:24)
//  at async Object.loadESM (internal/process/esm_loader.js:68:5)

```
### En este siguiente ejemplo podemos personalizar el error

```javascript
try {
    funcion1();
}
catch {
    console.log("Se ha generado un error");
}

// Se ha generado un error
```
##  Object.fromEntries()  y  Object.entries()

### Object.fromEntries() convierte un array de arrays a un objeto

```javascript
const array = [["nombre","Luis"],["apellido", "Padilla"]];

const objeto = Object.fromEntries(array);
console.log(objeto);

// { nombre: 'Luis', apellido: 'Padilla' }
```

### Object.entries() convierte un objeto a un array

```javascript
const objeto = { nombre: 'Luis', apellido: 'Padilla' };

const array = Object.entries(objeto);
console.log(array);

// [ [ 'nombre', 'Luis' ], [ 'apellido', 'Padilla' ] ]
```

## Optional chaining

### Es una forma de evitar errores solicitando propiedades de forma opcional utilizando el símbolo => ? , sirve cuando no estamos seguros de que los valores estén completos.

### Ejemplos:

### Aqui regrezara la informacion ya que si se encuentra en el objeto.

```javascript
const objeto = {
    luis: {
        country: "MX"
    },
    maria:{
        country: "AL"
    }
}

// console.log(objeto.luis.country);

console.log(objeto.juan.country);
```
### Si la informacion buscada no se encuentra en el objeto mostrara un error ya que no existe dentro de ese objeto ejemplo:

```javascript
const objeto = {
    luis: {
        country: "MX"
    },
    maria:{
        country: "AL"
    }
}

console.log(objeto?.juan?.country);

// TypeError: Cannot read properties of undefined (reading 'country')
    at file:///home/linux/clases_platzi/07_Curso_de_ECMAScript/src/ES11/00_optional_chaining.js:12:25
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
    at async DefaultModuleLoader.import (node:internal/modules/esm/loader:228:24)
    at async loadESM (node:internal/process/esm_loader:40:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)
```
### Usando optional chaining ? 
### Aunque no se encuentre la informacion no dara error solo retornara undefined y no detendra el programa

```javascript
console.log(objeto?.juan?.country);
// undefined
```
### Si se quiere un mensaje personalizado podemos hacerlo de la siguiente manera
```javascript
console.log(objeto?.juan?.country || "No se encontro en la base de datos");

// No se encontro en la base de datos
```

## BigInt()
### Esta funcion la utilizamos con el manejo de cifras muy grandes

```javascript
const bigNumber = 95231075692831569257842916279348;
console.log(bigNumber);
// 9.523107569283156e+31

const bigNumber2 = 95231075692831569257842916279348n;
console.log(bigNumber2);
// 95231075692831569257842916279348n

console.log(BigInt(bigNumber));
// 95231075692831560462259355385856n
```
## nullish

### Diferencia entre el operador OR y el Nullish coalescing
El operador OR (||) evalúa un valor falsey. 
Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea null o undefined. 
Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.

Ejemplo:
```javascript
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0
```

## Promise.allSettled()

### El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada

```javascript
const promise1 = new Promise((resolve, reject)=>{
    reject("Rechazado");
});

const promise2 = new Promise((resolve, reject)=>{
    resolve("Resuelta promesa 2");
});

const promise3 = new Promise((resolve, reject)=>{
    resolve("Resuelta promesa 3")
});

Promise.allSettled([promise1, promise2, promise3])
    .then(data => console.log(data))
    .catch(err => console.log(err));

// [
//   { status: 'rejected', reason: 'Rechazado' },
//   { status: 'fulfilled', value: 'Resuelta promesa 2' },
//   { status: 'fulfilled', value: 'Resuelta promesa 3' }
// ]
```
## globalThis

```javascript
console.log(window);  // nabegador
console.log(global);  // node
console.log(self)     //webworker
console.log(globalThis)
```
## matchAll

### matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular. El iterable contiene una propiedad denominada index con el índice del string donde la búsqueda coincide.

```javascript
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Grape, Orange, Strawberry, Pear, Watermelon';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}

// [
//   'Apple',
//   'Apple',
//   index: 0,
//   input: 'Apple, Banana, Grape, Orange, Strawberry, Pear, Watermelon',
//   groups: undefined
// ]
```
## dinamic Import

La expresión import() para manejar dinámicamente en JavaScript. Esto permite cargar los módulos solo cuando el usuario los necesite, lo que hace que la página web sea más rápida al descargar menos recursos.

### html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinamic Import</title>
    <style>
        .response{
            font-size: 20px;
            font-weight: 700;
            color: blue;
        }
    </style>
</head>
<body>
    <button id="btn">Click</button>
    <p class="response"></p>
    <script type="module" src="./06_dinamic_import.js"></script>
</body>
</html>
```
### dinamic import
```javascript
const response = document.querySelector(".response");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async ()=>{
    const modulo = await import("./06_module.js");
    console.log(modulo);
    const text = modulo.moduleFn();
    response.innerHTML = text;
});

```
### modulo
```javascript
export function moduleFn(){
    return "Respuesta del modulo";
}
```
