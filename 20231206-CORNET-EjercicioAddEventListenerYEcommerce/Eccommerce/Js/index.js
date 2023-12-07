let search = document.getElementById("searchbar");
let buttonSearch = document.getElementById("button-search")
let cardTitles = document.getElementsByClassName("product-title")
let cardProduct = document.getElementsByClassName("product")
let input = ""

console.log(cardTitles[0].innerText)

search.addEventListener("keyup", (e)=>{
    input = search.value;
    for(let i = 0; i<cardTitles.length; i++){
        let cardTitle = cardTitles[i].innerText.toLowerCase()
        if(cardTitle.includes(input)){
            cardProduct[i].style = "display: block"
        } else{
            cardProduct[i].style = "display: none"
        }
    }
})