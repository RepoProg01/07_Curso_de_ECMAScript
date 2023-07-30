
// --------------ejemplo 1----------------
const mainFunction = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("resuelto");
        }else{
            reject("rechazada");
        };
    });
};

mainFunction()
    .then(response =>console.log(response))
    .catch(err => console.log(err));

// ---------------ejemplo 2---------------
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

// -----ejecucion sincrona---------
// const getDatos = () => {
//     return datos;
// }
// ------ejecucion sincrona con tiempo de espera----
// const getDatos = () => {
//     setTimeout(()=>{
//         return datos;
//     },1500);
// };
// console.log(getDatos());

// ---------ejecucion con promesa-------------
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
