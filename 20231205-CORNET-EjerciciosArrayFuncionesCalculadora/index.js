// let name = prompt(`Buen día soy el mozo del bar, me llamo asi literalmente "el mozo del bar", ¿Como es tu nombre?`)
// let pedido = 0;
// let total = 0;
// let flag = 0;
// let propina = true;
// let totalPropina = 0;

// const menuPrincipal = () =>{
//     let flag = prompt(`${name}, decime en que puedo ayudarte? \n1)"Mostrame la carta" \n2)"Cuanto es hasta ahora?" \n3)¿Estas dejando propina?: ${propina ? `Si, pagarás: ${totalPropina}`: `No, pagarías: ${totalPropina}`} \n4)"Contame un chiste" \n5)"Quiero pagarte"`)

//     return flag;
// }

// const comprobacion = (flag) =>{
//     if ((parseInt(flag) < 1 || parseInt(flag) > 5) || isNaN(flag)){
//         alert("No entiendo ¿Podrías repetirlo?")
//     }
// }

// const verTotal = (flag) =>{
//     if (flag == 2) {
//         alert(`El total es ${total}`)
//     }
// }

// const verPropina = (flag, propina) =>{
//     if (flag == 3){
//         return !propina;
//     }
// }

// const verChiste = (flag) =>{
//     if (flag == 4){
//         alert("Que le dijo un arbol a otro arbol...")
//         alert("Y vos que?")
//     }
// }

// const pagar = (flag, total, totalPropina, propina) =>{
//     if (flag == 5){
//         alert(`El total a pagar es: ${total}\nMas la propina es: ${totalPropina}\n ${propina ? `Como querías dejar propina el total es ${total + totalPropina}` : `Como no querías dejar propina (eso está mal por si no lo sabías) el total es ${total}`}`)
//     }
// }

// do {
//     flag = menuPrincipal(name);
//     comprobacion(flag);
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
//     propina = verPropina(flag, propina);
//     verTotal(flag);
//     verChiste(flag);
//     pagar(flag, total, totalPropina, propina)
// }
// while (flag != 5)

// let fibonacci = () =>{
//     let n = prompt("Ingrese un numero");
//     let arr = [0, 1]
//     for (let i = 1; i<=n; i++){
//         let newNum = arr[i] + arr[i-1]
//         arr.push(newNum);
//     }
//     let mensaje = arr.reduce((acc, num) => {
//         acc += ` ${num.toString()}`;
//         return acc;
//     });
//     alert(mensaje)
// }

// fibonacci();

// let btnSend = document.getElementById("send");
// let h1Name = document.getElementById("h1-name")
// let h2Surname = document.getElementById("h2-surname")

// btnSend.addEventListener("click", ()=>{
//     h1Name.innerText = document.getElementById("name").value
//     h2Surname.innerText = document.getElementById("surname").value
//     h2Surname.style.color = "red"
// })

let btns = document.getElementsByClassName("calc-btn");
let numBtns = document.getElementsByClassName("num-btn")
let outputOperation = document.getElementById("display-operation")
let outputEquals = document.getElementById("display-result")
let equals = document.getElementById("equals")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiplied = document.getElementById("multiplied")
let divided = document.getElementById("divided")

let result = 0;
let operand = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (button) => {
        let btnValue = button.target.value; 
        if (outputOperation.innerText == "0") {
            outputOperation.innerText = ""; 
        }
        outputOperation.innerText += btnValue;
    });
}

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", (button) => {
        let btnValue = button.target.value;
        operand += btnValue;
    });
}

console.log(result)

let flag = 0;

plus.addEventListener("click", () => {
    if (operand !== '') {
        result += parseInt(operand);
        flag=1;
    }
    operand = "";
});

minus.addEventListener("click", () => {
    if (operand !== '') {
        result -= parseInt(operand);
        flag=2;
    }
    operand = "";
});

divided.addEventListener("click", () => {
    if (operand !== '') {
        result = result / parseInt(operand);
        flag=3;
    }
    operand = "";
});

multiplied.addEventListener("click", () => {
    if (operand !== '') {
        result = result * parseInt(operand);
        flag=4;
    }
    operand = "";
});



equals.addEventListener("click", () => {
    if (operand !== '') {
        const num = parseInt(operand);
        switch (flag) {
            case 1:
                result += num;
                break;
            case 2:
                result -= num;
                break;
            case 3:
                if (num !== 0) {
                    result /= num;
                } else {
                    outputEquals.innerText = "Error: División por cero";
                    return;
                }
                break;
            case 4:
                result *= num;
                break;
            default:
                break;
        }
    }

    operand = '';
    outputEquals.innerText = result;
});


