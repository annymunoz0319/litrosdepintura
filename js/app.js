const COBERTURA = 12

function calcularLitros() {
let alto = Number(document.getElementById("alto").value)
let ancho = Number (document.getElementById("ancho").value)
let manos = Number (document.getElementById("manos").value)
let resultado = document.getElementById( "resultado")
let litros = (alto * ancho * manos) / COBERTURA

let mensaje = "Necesitas comprar: " + litros + " Litros de pintura"

resultado.innerHTML = mensaje
} 