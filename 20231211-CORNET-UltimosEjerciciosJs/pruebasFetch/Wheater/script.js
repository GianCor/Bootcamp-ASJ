const btnEnviar = document.getElementById("enviar")
const ciudad = document.getElementById("ciudad")
const temperatura = document.getElementById("temperatura")
const wicon = document.getElementById("wicon")
const descripcion = document.getElementById("descripcion")

// function cargarCiudad(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es`)
//     .then((response) => response.json()) //convertir a JSON
//     .then((json) => {
//         console.log(json);
//         document.querySelector(".container").style.visibility = "visible"
//         document.querySelector("#ciudad").textContent = json.name
//         document.querySelector("#temperatura").innerHTML = `${json.main.temp}<sup>°C</sup>`
//         wicon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
//         descripcion.innerText = json.weather[0].description
//     })
//     .catch((error) => console.log("Ocurrió un error: " + error));
// }

async function cargarCiudad(ciudad){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es`)
    const json = await response.json();
    console.log(json);
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = json.name
    temperatura.innerHTML = `${json.main.temp}<sup>°C</sup>`
    wicon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
    descripcion.innerText = json.weather[0].description
}


btnEnviar.addEventListener("click", ()=>{
    let input = document.getElementById("input").value;
    cargarCiudad(input)
})

