const promise1 = new Promise((resolve, reject)=>reject('Reject 1'));
const promise2 = new Promise((resolve, reject)=>resolve('Resolve 2'));
const promise3 = new Promise((resolve, reject)=>resolve('Resolve 3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));