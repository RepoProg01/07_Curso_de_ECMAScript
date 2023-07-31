const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        // condicional ternario
        (true)
        ? setTimeout(()=>resolve("async"),1500) 
        : reject(new Error("error reject"));
    });
};

const  asyncFunction =  ()=>{
    const answer =  fnAsync();
    console.log(answer);
    console.log("Recibido con exito");
}

console.log("Before");
asyncFunction();
console.log("After");