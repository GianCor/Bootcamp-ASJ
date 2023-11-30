function ParImpar(n){
    if (n % 2 === 0) {
        console.log("Par");
      } else {
        console.log("Impar");
      }
}

function ParImparTernario(n){
    const resultado = n % 2 === 0 ? "Par" : "Impar";
    return console.log(resultado)
}
//Esta es otra forma de obtener el resultado

function Promedio(arr, estado){
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let mensaje ="";
        let acc = 0;

        if (arr[i].notas.length == 0){
            return console.error("No hay notas cargadas en el alumno");
        } //agregue una comprobación para evitar dividir por 0

        for(let n = 0; n < arr[i].notas.length; n++){
            acc+=arr[i].notas[n];
        } //se recorre el array de notas y se acumulan

        if (acc / arr[i].notas.length >= 6){
            mensaje = "aprobado";
        } else {
            mensaje = "desaprobado";
        }  //se asigna el estado del alumno

        let alumno = {
            nombreCompleto : arr[i].nombre + " " + arr[i].apellido,
            promedio : acc / arr[i].notas.length,
            estado: mensaje
        } //nuevo objeto alumno

        if (alumno.estado == estado){
            newArr.push(alumno)   
        }
        acc = 0;
    }
    return newArr
}