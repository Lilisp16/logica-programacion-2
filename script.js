function convertir(){
    let numInput = document.getElementById("input").value.trim();
    let celsius = Number(numInput);
    let error = document.getElementById("isNAN");
    let resultado  = document.getElementById("resultado");

    if(numInput === "" || isNaN(celsius)) {
        error.textContent = "Ingrese un dato válido";
        resultado.textContent = "";
        return;
    }

    error.textContent = ""; 
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 9/5 + 32;
    resultado.innerHTML = `Grados Kelvin: ${kelvin.toFixed(2)}<br>Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}

let boton = document.getElementById("btn");
boton.addEventListener("click", convertir);