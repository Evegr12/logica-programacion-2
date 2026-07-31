let celsius = document.getElementById("celsius");
let convertir = document.getElementById("convertir");
let error = document.getElementById("error");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

convertir.addEventListener("click", convertirTemperatura);

function convertirTemperatura(){
    let dato = celsius.value;
    if (dato === "") {
        error.textContent = "Error: ingresa una temperatura";
        kelvin.textContent = "";
        fahrenheit.textContent = "";
        return;
    }

    let temperatura = Number(dato);
    let resultadoKelvin = temperatura + 273.15
    let resultadoFahrenheit = temperatura * 9 / 5 + 32

    error.textContent = "";
    kelvin.textContent = `Grados Kelvin: ${resultadoKelvin}`;
    fahrenheit.textContent = `Grados Fahrenheit: ${resultadoFahrenheit}`;

}