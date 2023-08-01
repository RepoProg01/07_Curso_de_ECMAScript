
//----- array -----
const array = [["nombre","Luis"],["apellido", "Padilla"]];


// ----- de array a objeto -----
const objeto = Object.fromEntries(array);
// console.log(objeto);

// { nombre: 'Luis', apellido: 'Padilla' }


// -----de objeto a array -----
const array2 = Object.entries(objeto);
// console.log(array2);

// [ [ 'nombre', 'Luis' ], [ 'apellido', 'Padilla' ] ]

