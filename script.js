const escalaSeleccionada = document.getElementById('escala');
const temperatura = document.getElementById('temperatura');
const botonConvertir = document.getElementById('boton-convertir');
const resultado = document.getElementById('resultado')



function redondear(valor){
    return Math.round(valor*100)/100;
}

function CaF (temperatura){
    return redondear((temperatura * 9/5) + 32);
}

function CaK (temperatura){
    return redondear(temperatura + 273.15);
}

function FaC (temperatura){
    return redondear((temperatura - 32) * 5/9);
}

function FaK (temperatura){
    return redondear (CaK(FaC(temperatura)));
}

function KaC (temperatura){
    return redondear(temperatura - 273.15);
}

function KaF (temperatura){
    return redondear (CaF(KaC(temperatura)));
}

botonConvertir.addEventListener('click', function(){
    const escala = escalaSeleccionada.value;
    const temperaturaValor = Number(temperatura.value);
    let resultado1;
    let resultado2;
    let etiqueta1;
    let etiqueta2;
    if (escala == 'C'){
        resultado1 = CaF(temperaturaValor); etiqueta1 = 'Fahrenheit';
        resultado2 = CaK(temperaturaValor); etiqueta2 = 'Kelvin';
    }else if (escala == 'F'){
        resultado1 = FaC(temperaturaValor); etiqueta1 = 'Celsius';
        resultado2 = FaK(temperaturaValor); etiqueta2 = 'Kelvin';
    }else if (escala == 'K'){
        resultado1 = KaC(temperaturaValor); etiqueta1 = 'Celsius';
        resultado2 = KaF(temperaturaValor); etiqueta2 = 'Fahrenheit';
    }
    resultado.innerHTML = `
    <ul>
        <li>${etiqueta1}: ${resultado1}</li>
        <li>${etiqueta2}: ${resultado2}</li>
    </ul>
    `;
})


