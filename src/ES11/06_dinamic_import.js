const response = document.querySelector(".response");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async ()=>{
    const modulo = await import("./06_module.js");
    console.log(modulo);
    const text = modulo.moduleFn();
    response.innerHTML = text;
});
