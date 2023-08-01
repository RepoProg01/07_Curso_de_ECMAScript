// -----------------Generator con async await-------------------
// async function* generator(){
//     yield await Promise.resolve(1);
//     yield await Promise.resolve(2);
//     yield await Promise.resolve(3);
// }
// const gen = generator();
// gen.next().then(response => console.log(response.value));
// gen.next().then(response => console.log(response.value));
// gen.next().then(response => console.log(response.value));

// -------------------Usando un for--------------------
async function* asyncFc(array){
    for(let item of array){
        yield await item;
    }
}

const prueba = asyncFc([1,2,3]);

prueba.next().then(data => console.log(data.value));
prueba.next().then(data => console.log(data.value));
prueba.next().then(data => console.log(data.value));