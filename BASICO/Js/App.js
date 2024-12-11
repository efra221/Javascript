// let nombre = prompt("Ingrese su nombre: ");
// alert("hola " + nombre);

// nombre = prompt("Ingrese su segundo nombre: ")
// alert("hola " + nombre)

// const pi = 3.1416;
// alert (pi)

// Imprimir mensajes en la consola
// console.log("Mensaje de depuración");
// console.error("Mensaje de error");
// console.warn("Mensaje de advertencia");

// Un ejemplo de función
// function saludar() {
//     alert("¡Hola a todos!");
// }
// saludar();

// function saludar(nombre) {
//     console.log("¡Hola, " + nombre + "!");
// }

// saludar("EFRA");  // Imprime "¡Hola, Ana!"

// function sumar(a, b) {
//     return a + b;
// }
// a = parseFloat(prompt("ingrese num1 "))
// b = parseFloat(prompt("ingrese num2 "))

// let resultado = sumar(a, b);
// alert(resultado);  // Imprime 8   

// function multiplicacion(a, b) {
//     return a * b;
// }
// a = parseFloat(prompt("ingrese num1 "))
// b = parseFloat(prompt("ingrese num2 "))

// let resultado2 = multiplicacion(a, b);
// alert(resultado2);  // Imprime 8   


// let saludo = function() {
//     console.log("Hola desde una función anónima");
// };

// saludo();  // Imprime "Hola desde una función anónima"

function cambiarDom() {
    const titulo1 = document.getElementById('titulo1')
    const parrafo1 = document.getElementById('parrafo1')
    const titulo2 = document.getElementById('titulo2')
    const parrafo2 = document.getElementById('parrafo2')
    console.log(parrafo1)

    titulo1.textContent = "nuevo titulo"
    parrafo1.innerHTML = "nuevo text del parrafo"
}

function otraFuncion() {
    const contenedor2 = document.getElementById("contenedor2")
    contenedor2.innerHTML = "<h1 id='titulo3'>titulo de inmersion innerHTML</h1> <p>La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.</p>"
}

function cambiarRuta() {
    const nombre = document.getElementById('cambiarnombre')
    const enlace = document.querySelector("a")
    enlace.setAttribute("href","https://www.vanguardia.com/")
    nombre.textContent= "vanguardia"
}

function otraFuncion() {
    const caja = document.querySelector('.miClase');
    caja.style.backgroundColor = 'blue';    
}

const contenedor = document.getElementById("contenedor")
function ocultar(){
    contenedor.classList.toggle("oculto");
}

function cambiar(){
    contenedor.classList.toggle("secundaria");
    contenedor.style.marginLeft = "400px"
}

function mover(){
    contenedor.style.marginLeft = "0px"
    contenedor.style.backgroundColor = "red"
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    document.body.appendChild(nuevoDiv);
}