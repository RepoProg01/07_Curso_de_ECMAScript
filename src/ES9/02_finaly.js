const mainFunction = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("resuelto");
        }else{
            reject("rechazada");
        };
    });
};

mainFunction()
    .then(response =>console.log(response))
    .catch(err => console.log(err))
    .finally(()=>console.log("finalizo"));