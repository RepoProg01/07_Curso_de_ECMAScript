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

