let selectedValue = document.getElementById("number");
let addBtn = document.getElementById("add");
let boxColor = document.querySelectorAll(".box-color");
let price = document.getElementById("price")
let error = document.getElementById("product-error")
let productImage = document.getElementById("product-image")
let selectedColor = null;
let elements = selectedValue.value;

let itemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];

let item = {
  color: null,
  num: null,
  price: null,
  imgSrc: null
};

selectedValue.addEventListener("change", ()=>{
    elements = selectedValue.value;
    console.log(elements)
})

boxColor.forEach(box => {
  box.addEventListener("click", () => {
    boxColor.forEach(otherBox => {
      otherBox.classList.remove("selected");
    });
    box.classList.add("selected");
    selectedColor = window.getComputedStyle(box).getPropertyValue("background-color");
    console.log(selectedColor);
    item.color = selectedColor;
  });
});

addBtn.addEventListener("click", (e)=>{
    item.color = selectedColor;
    item.num = elements;
    item.price = price.textContent;
    item.imgSrc = productImage.src
    if(item.color == null || item.color == null || item.price == null){
        error.textContent = "Todos los campos deben ser seleccionados"
        e.preventDefault()
    } else {
    itemsArray.push(item);
    localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
    }
})

const storedItem = JSON.parse(localStorage.getItem("selectedItem"));

console.log(`localstorage: ${storedItem.imgSrc}`);