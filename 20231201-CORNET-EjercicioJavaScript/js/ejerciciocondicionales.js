const ejercicio1 = () => {
    let a = "a";
    let b = "b";
    return console.log((typeof(a) === typeof(b)) ? true : false );
}

const ejercicio2 = () => {
    let a = "a";
    let b = "b";
    return console.log((typeof(a) !== typeof(b)) ? true : false )
}

const ejercicio3 = () => {
    let a = 1;
    let b = "b";
    return console.log((typeof(a) === typeof(b)) ? true : false )
}

ejercicio3();