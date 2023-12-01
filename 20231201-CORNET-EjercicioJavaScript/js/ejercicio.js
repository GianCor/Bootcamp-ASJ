let ejercicio1 = ()=>{
    alert("Bienvenido Usuario");

    let nombre = prompt("Cual es tu nombre?");

    alert("Hola " + nombre);

    let edad = prompt("Cual es tu edad?");

    let mensaje = nombre + " tiene " + edad + " años";

    console.log(mensaje);

    alert(mensaje);
}

let ejercicio2 = () =>{
    let nombre = "Gianluca", edad = 23, cumpleaños = "7 de abril", ciudad = "Parana", ocupacion = "desarrollar", pasatiempos = "tocar la guitarra y leer";

    console.log(`Me llamo ${nombre}, tengo ${edad}, cumplo años el ${cumpleaños} y vivo en ${ciudad}. Me dedico a ${ocupacion} y me gusta ${pasatiempos}`)
}

let ejercicio3 = () => {
    let mensaje = prompt("Decime algo")
    console.log(mensaje.length)
}

let ejercicio4 = () => {
    edad = prompt("Decime tu edad");
    resultado = parseInt(edad) * 365;
    alert(`Sabias que tenes ${resultado} días de edad?`)
}

let ejercicio5 = () => {
    let num1 = prompt("Meteme un numero");
    let num2 = prompt("Meteme otro numero");
    let resultado = parseInt(num1) + parseInt(num2);
    alert(`El resultado de la suma de los dos numeros es: ${resultado}`)
}

let ejercicio6 = () => {
    let edad = prompt("A ver tu edad?");
    let edadMaxima = prompt("Cuanto crees que vas a vivr?")
    let snack = 2;
    let precioSnack = 100;
    let resultado = (parseInt(edadMaxima) - parseInt(edad))*365*snack;
    alert(`Necesitaras ${resultado} snacks para que te alcancen hasta los ${edadMaxima} años`)
    alert(`Ah y vas a gastar como ${resultado*precioSnack} mangos para que te alcance`)
}

let ejercicio7 = () =>{
    let dias = 20;
    let presupuesto = 300000;
    let comida = dias * 3;
    alert(`Podes gastar ${presupuesto / comida} por comida solamente para que te alcance los ${dias} de viaje`)
}

let ejercicio8 = () =>{
    let nombre = "Gabriela";
    let profesion = "programadora"
    alert(`${nombre} es ${profesion}`)
}

let ejercicio9 = () =>{
    let precio = prompt("Cuanto sale")
    let cantidad = prompt("Cuanto llevas?")
    alert(`El total es: ${parseInt(precio) * parseInt(cantidad)}`)
}

ejercicio9();