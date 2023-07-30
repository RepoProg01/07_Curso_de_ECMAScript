let default1 = {
    name: "Mr. Michi",
    food: "Pescado"
};

let default2 = {
    age: 12,
    color: "Blanco"
};

function solution(json1 = default1, json2 = default2) {
    let json3 = {...json1, ...json2};
    return json3;
}

console.log(solution({name: "fido", food: "meat"}));
