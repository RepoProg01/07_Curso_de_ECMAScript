// rest operator
let values = [2,4,6,8,1,3,5,7];

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0][0]);
};

sum(5,values);

// con objetos
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
