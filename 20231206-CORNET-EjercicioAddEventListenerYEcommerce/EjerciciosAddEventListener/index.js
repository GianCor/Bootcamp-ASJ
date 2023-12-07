let input = document.getElementById("input-text")
let output = document.getElementById("output-text")

// input.addEventListener("keydown", (boton)=>{
//     const caracterTecla = boton.key;
//     const teclasEspeciales = [
//         'Alt', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Backspace', 'CapsLock',
//         'Control', 'Delete', 'End', 'Enter', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
//         'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Home', 'Insert', 'PageDown', 'PageUp',
//         'Shift', 'Tab', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'Meta'
//     ];
//     switch (caracterTecla) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//         case "A":
//         case "E":
//         case "I":
//         case "O":
//         case "U":
//             output.innerText += "-";
//             break;
//         case "Backspace":
//             output.innerText = output.innerText.slice(0, -1);
//             break;
//         default:
//             if(!teclasEspeciales.includes(caracterTecla)){
//                 output.innerText+=caracterTecla;
//             }
//             if(caracterTecla === " "){
//                 output.innerHTML+="&nbsp"
//             }
//             break;
//     }
// })


//Ejercicio de caracteres pero con input.value
input.addEventListener("keyup", (boton) =>{
    let arr = input.value.split('')
    let vocalArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newArr = arr.map((character) => {
        if (vocalArr.includes(character)) {
          return "-";
        }else{
            return character
        }
      });    
    let string = newArr.join('')
    console.log(string)
    output.innerText = string
})