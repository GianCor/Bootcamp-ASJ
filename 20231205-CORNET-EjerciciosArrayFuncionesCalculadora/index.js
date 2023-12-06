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

let outputOperation = document.getElementById("display-operation");
let outputEquals = document.getElementById("display-result");
let currentInput = "";
let currentOperator = null;
let storedValue = null;

const numBtns = document.querySelectorAll(".num-btn");
const calcBtns = document.querySelectorAll(".calc-btn")
numBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput == '0') {
            currentInput = button.value;
        } else {
            currentInput += button.value;
        }
        outputOperation.innerText = ""
        outputOperation.innerText += currentInput;
    });
});

const calcular = () => {
    let currentValue = parseFloat(currentInput);
    switch (currentOperator) {
        case "+":
            storedValue += currentValue;
            break;
        case "-":
            storedValue -= currentValue;
            break;
        case "*":
            storedValue *= currentValue;
            break;
        case "/":
            storedValue /= currentValue;
            break;
        default:
            storedValue = currentValue;
            break;
    }
    outputEquals.innerText = storedValue;
    currentInput = "0";
    outputOperation.innerText = currentInput;
}

const resolveOperator = (operator) => {
    if (storedValue === null) {
        storedValue = parseFloat(currentInput);
        currentInput = "0";
        currentOperator = operator;
    } else {
        calcular();
        currentOperator = operator;
    }
}


document.getElementById("plus").addEventListener("click", () => resolveOperator("+"));
document.getElementById("minus").addEventListener("click", () => resolveOperator("-"));
document.getElementById("multiplied").addEventListener("click", () => resolveOperator("*"));
document.getElementById("divided").addEventListener("click", () => resolveOperator("/"));
document.getElementById("dark-mode").addEventListener("click", () => darkmode())


document.getElementById("equals").addEventListener("click", () => {
    calcular();
    currentOperator = null;
});

document.getElementById("clear").addEventListener("click", () => {
    currentInput = "0";
    storedValue = null;
    currentOperator = null;
    outputOperation.innerText = currentInput;
    outputEquals.innerText = "0";
});

let flagDarkMode = false;
let darkmode = () =>{
    if(flagDarkMode == false){
        let btns = document.querySelectorAll(".btn");
        let display = document.getElementById("display");
        let calculator = document.getElementById("calculadora")
        btns.forEach((button) => {
            button.classList.add("bg-dark");
            button.classList.add("text-white");
        });
        display.classList.add("bg-dark")
        display.classList.add("text-white")
        calculator.classList.add("bg-black")
        flagDarkMode = true;
    } else {
        let btns = document.querySelectorAll(".btn");
        let display = document.getElementById("display");
        let calculator = document.getElementById("calculadora")
        btns.forEach((button) => {
            button.classList.remove("bg-dark");
            button.classList.remove("text-white");
        });
        display.classList.remove("bg-dark")
        display.classList.remove("text-white")
        calculator.classList.remove("bg-black")
        flagDarkMode=false
    }

}