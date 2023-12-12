let joke = document.querySelector("h2");
let button = document.getElementById("button");
button.addEventListener("click", ()=>{
   fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => response.json()) //convertir a JSON
  .then((json) => {
    console.log(json.value);
    joke.innerText = json.value;
  })
  .catch((error) => console.log("Ocurrió un error: " + error));
})
