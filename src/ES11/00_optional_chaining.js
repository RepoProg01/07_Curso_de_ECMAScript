const objeto = {
    luis: {
        country: "MX"
    },
    maria:{
        country: "AL"
    }
}

// console.log(objeto.luis.country);

// console.log(objeto?.juan?.country);
console.log(objeto?.juan?.country || "No se encontro en la base de datos");