let suma = 0;

const n1 = document.getElementById("n1-suma");
const n2 = document.getElementById("n2-suma");
const boton_suma = document.getElementById("boton-suma");

const resultado_suma = document.getElementById("resultado-suma");

boton_suma.addEventListener("click", () => {
    suma = parseFloat(n1.value) + parseFloat(n2.value); 
    resultado_suma.innerHTML = `Resultado: ${suma}`;
});
