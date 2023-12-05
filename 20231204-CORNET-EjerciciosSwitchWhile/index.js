// const parImpar = (n) =>{
//     n = n%2
    
//     switch (n){
//         case 0 :
//             console.log("par")
//             break
//         default : 
//             console.log("Impar")
//             break
//     }
// }

// const translate = () => {
//     let word = prompt("Ingrese casa, perro, pelota, arbol o genio")

//     switch (word.toLowerCase()) {
//         case "casa" : alert("house")
//         break

//         case "perro" : alert("dog")
//         break

//         case "pelota" : alert("ball")
//         break

//         case "arbol" : alert("tree")
//         break

//         case "genio" : alert("genius")
//         break

//         default:
//             alert("ingrese una palabra correcta")
//             translate();
//             break
//     }
// }

// const rating = () => {
//     let word = prompt("Valore la pelicula como muy mala, mala, mediocre, buena o muy buena")

//     switch (word.toLowerCase()) {
//         case "muy mala" : alert("Lo lamento")
//         alert("Nos alegramos por tu visita")
//         break

//         case "mala" : alert("Lo lamento")
//         alert("Nos alegramos por tu visita")
//         break

//         case "mediocre" : alert("Podría ser peor")
//         alert("Nos alegramos por tu visita")
//         break

//         case "buena" : alert("Me alegro")
//         alert("Nos alegramos por tu visita")
//         break

//         case "muy buena": alert("Muchas gracias")
//         alert("Nos alegramos por tu visita")
//         break

//         default:
//             alert("ingrese una opcion correcta")
//             rating();
//             break
//     }
// }

// const sumatoria = () => {
//     let n = prompt("Ingrese un numero")
//     n = parseInt(n)
//     console.log(typeof n)
//     while (isNaN(n)){
//         n = prompt("Ingrese solamente numeros")
//     }
//     let acc = 0;
//     let aux = 0;
//     while (aux <= n){
//         acc += aux;
//         aux++;   
//     }
//     alert(acc);
// }

// const verify =(n) => {
//     while (isNaN(n) || n == 0){
//         n = prompt("Ingrese solamente numeros, recuerde también que 0 no es estrictamente un numero positivo ni negativo")
//     }
//     return n
// }

// const contadorPositivos = () =>{
//     let n = prompt("Ingrese numeros positivos, dejara de contar cuando ingrese un numero negativo")
//     n = verify(n);
//     let contador = 0;
//     while(n >= 0){
//         n = parseInt(n);
//         n = prompt("Ingrese numeros positivos, dejara de contar cuando ingrese un numero negativo")
//         n = verify(n);
//         contador++;
//     }
//     alert(`Ingresaste ${contador} numeros positivos`)
// }

// const fizzBuzz = (n) =>{
//     if(n % 3 == 0 && n % 5 == 0) {
//         return "fizzbuzz"
//     } else if(n%5 == 0){
//         return "buzz"
//     } else if (n%3 == 0){
//         return "fizz"
//     } else {
//         return `${n}`;
//     }
// }

// const printFizzBuzz = () =>{
//     let i = 1
//     while (i < 100){
//         let mensaje = fizzBuzz(i)
//         console.log(mensaje)
//         i++
//     }
// }

// printFizzBuzz();



// let name = prompt(`Buen día soy el mozo del bar, me llamo asi literalmente "el mozo del bar", ¿Como es tu nombre?`)
// let pedido = 0;
// let total = 0;
// let flag = 0;
// let propina = true;
// let totalPropina = 0;
// do {
//     flag = prompt(`${name}, decime en que puedo ayudarte? \n1)"Mostrame la carta" \n2)"Cuanto es hasta ahora?" \n3)¿Estas dejando propina?: ${propina ? `Si, pagarás: ${totalPropina}`: `No, pagarías: ${totalPropina}`} \n4)"Contame un chiste" \n5)"Quiero pagarte"`)

//     if (parseInt(flag) < 1 || parseInt(flag) > 5){
//         alert("No entiendo ¿Podrías repetirlo?")
//     }

//     while(flag == 1){
//         pedido = prompt("1)Café: $250\n2)Medialunas: $200c/u \n Ingresa otra opción para volver al menu principal...")
//         switch(pedido){
//             case "1" :
//                 total += 250;
//                 break
//             case "2" :
//                 total += 200;
//                 break
//             default:
//                 flag=0;
//         }
//     }

//     totalPropina = total*0.1

//     if (flag == 2) {
//         alert(`El total es ${total}`)
//     }

//     if (flag == 3){
//         propina = !propina;
//     }

//     if (flag == 4){
//         alert("Que le dijo un arbol a otro arbol...")
//         alert("Y vos que?")
//     }

//     if (flag == 5){
//         alert(`El total a pagar es: ${total}\nMas la propina es: ${totalPropina}\n ${propina ? `Como querías dejar propina el total es ${total + totalPropina}` : `Como no querías dejar propina (eso está mal por si no lo sabías) el total es ${total}`}`)
//     }

// } while (flag != 5)

// let pyramid = ""
// n = prompt("Ingrese un numero");
// n = parseInt(n);
// for(let i = 0; i < n; i++){
//     for (let j = -1; j < i; j++){
//         pyramid+="*"
//     }
//     pyramid+="\n"
// }

// for(let i = n; i > 0; i--){
//     for(let j = i-1; j>0; j--){
//         pyramid += "*"
//     }
//     pyramid+="\n"
// }

// alert(pyramid);


//Otra forma de resolver el ejercicio de las piramides

// let triangle = ""
// let reverseTriangle = ""
// let aux = n;

// for(let i = 0; i < n; i++){
//     for (let j = -1; j < i; j++){
//         triangle+="*"
//     }
//     triangle+="\n"
//     for(let k = aux-1; k>0; k--){
//         reverseTriangle += "*";
//     }
//     reverseTriangle+="\n"
//     aux--;
// }

// alert(triangle + reverseTriangle);

// let resultado = 1;

// for(let i = 1; i<=n; i++){
//     resultado *=i;
// }

// alert(resultado);


// //Ejercicio de Lucas
// let dibujo = "";
// let dibujo2 = "";
// let numeroADibujar = parseInt(
//   prompt("Ingrese una cantidad de escalones a dibujar")
// );

// for (let i = 0; i < numeroADibujar; i++) {
//   //filas
//   for (let j = -1; j < i; j++) {
//     //columnas de ateriscos
//     dibujo += "* ";
//     if (j < numeroADibujar && j > -1) {
//       dibujo2 = "* " + dibujo2 + " ";
//     }
//   }

//   if (i < numeroADibujar - 1) {
//     dibujo += "\n";
//   }

//   dibujo2 = "\n" + dibujo2;
// }

// alert(dibujo + dibujo2);

let escalones = prompt("numero escalones: ")
    let totalpasos = escalones *2-1
    //--------------------------
    for( let i=1;i<= totalpasos; i++){
        let linea =''
        for(let j=1;j<= escalones - ( i % escalones );j++){

            linea+="*";
        }
        console.log(linea)
    }