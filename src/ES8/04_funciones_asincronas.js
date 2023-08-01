const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        // condicional ternario
        (true)
        ? setTimeout(()=>resolve("async"),1500) 
        : reject(new Error("error reject"));
    });
};

const asyncFunction =  async ()=>{
    const answer = await fnAsync();
    console.log(answer);
    console.log("Recibido con exito");
}

console.log("Before");
asyncFunction();
console.log("After");

// ----------------con funciones regulares-------------------
// function promesa(){
//     return new Promise( function tiempo(resolve, reject){
//         if(true){
//             setTimeout( function espera(){
//                 resolve("resuelta");
//             },3000);
//         }
//         else{
//             reject("rechazado");
//         }
//     } )
// }

// promesa()
//  .then( function terminado(ter){console.log(ter)})
//  .catch(function problema(prob){console.log(prob)});


// ----------------con funciones flecha-------------------
// const promesa = ()=>{
//     return new Promise((resolve, reject)=>{
//         if(true){
//             setTimeout(()=>{
//                 resolve("resuelto");
//             },3000);
//         }else{
//             reject("rechazado");
//         }
//     })
// }

// promesa()
//     .then(res => console.log(res))
//     .catch(pro => console.log(pro));

// ------------------con async await------------------------
// const promesa = ()=>{
//     return new Promise((resolve, reject)=>{
//         (true) 
//         ? setTimeout(()=> resolve("resuelto"),3000)
//         : reject("rechazado");
//     });
// };

// const asyncFn = async ()=>{
//     const res = await promesa();
//     console.log(res);
// }

// asyncFn();