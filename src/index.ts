//PRÁCTICA!!
//CALCULADORA DE OPERACIONES BASICAS

let numero_1: number;
let numero_2: number;

numero_1 = 30;
numero_2 = 15;

let suma = numero_1 + numero_2;
let resta = numero_1 - numero_2;
let multiplicacion = numero_1 * numero_2;
let division = numero_1 / numero_2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

console.clear();

// EJERCICIOS CLASE 25/04/22 (CON CECILIA)
// EJERCICIO CALCULO DE DESCUENTO

let precioInicial: number;
let descuento: number;
let precioFinal: number;

precioInicial = 450.5;
descuento = precioInicial * 0.1;
precioFinal = precioInicial - descuento;

// console.log ("El precio final es:" precioFinal);

// EJERCICIO "AUTOS DE CARRERA"
/*
//let tiempoFirstLap : number;
//let tiempoSecondLap : number;
//let tiempoThirdLap : number;
//let tiempoFourthLap : number;

// tiempoFirstLap = 10
// tiempoSecondLap = 20
// tiempoThirdLap = 5
// tiempoFourthLap = 5

let : tiempoFirstLap : number = prompt("Ingrese el tiempo de la primer vuelta (en segundos")
let : tiempoSecondLap : number = prompt("Ingrese el tiempo de la segunda vuelta (en segundos")
let : tiempoThirdLap : number = prompt("Ingrese el tiempo de la tercer vuelta (en segundos")
let : tiempoFourthLap : number = prompt("Ingrese el tiempo de la cuarta vuelta (en segundos")

let tiempoTotal : number = tiempoFirstLap + tiempoSecondLap + tiempoThirdLap + tiempoFourthLap
let tiempoPromedio : number = tiempoTotal / 4

console.log ("El tiempo total es de:"tiempoTotal "segundos");
console.log ("El tiempo promedio es de:"tiempoPromedio "segundos");
*/
// FIN DE CLASE 25/04/22

// INICIO CLASE 29/04/22 (CON MARCELO)

// EJERCICIO "VALIDAR ALTURA"
/*
const ALTURA_MINIMA: number = 1.3;

let alturaUsuario : number = Number (prompt ("Ingrese altura del usuario"));

if (alturaUsuario >= ALTURA_MINIMA) {
  console.log("Usted puede ingresar");
} else {
  console.log("Usted NO cumple con la altura mínima para ingresar, su altura es:" alturaUsuario);
}
*/
// EJERCICIO "LOGIN"
/*
let usuarioRegistrado: string = "Juan";
let claveRegistrada: string = "claveJuan";

//let nombreUsuario : string = prompt ("Ingrese su usuario:");
//let claveUsuario : string = prompt ("Ingrese su contraseña:");

if (nombreUsuario === usuarioRegistrado && claveUsuario === claveRegistrada) {
  console.log("USTED INGRESO CORRECTAMENTE");
} else {
  console.log("USUARIO Y/O CONTRASEÑA INCORRECTOS");
}
*/

// EJERCICO "DETERMINAR MEDALLA"

let posicionDeCarrera: number = Number(
  prompt("Ingrese la posición en la que terminó la carrera")
);

switch (posicionDeCarrera) {
  case 1:
    console.log("USTED GANO LA MEDALLA DE ORO");
    break;
  case 2:
    console.log("USTED GANO LA MEDALLA DE PLATA");
    break;
  case 3:
    console.log("USTED GANO LA MEDALLA DE BRONCE");
    break;
  default:
    console.log("USTED RECIBIRA UN CERTIFICADO DE PARTICIPACION");
    break;
}
