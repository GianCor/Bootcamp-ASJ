let itemsArray = JSON.parse(localStorage.getItem("itemsArray"));
console.log(itemsArray)

const checkoutProductsContainer = document.querySelector(".checkout-products");

let intTotal = 0;

itemsArray.forEach(storedItem => {
    const checkoutProductElement = document.createElement("div");
    checkoutProductElement.classList.add("checkout-products-element");
    const checkoutProductColorContainer = document.createElement("div");
    checkoutProductColorContainer.style = "display: flex; align-items: center"

    const image = document.createElement("img");
    image.classList.add("checkout-image");
    image.src = storedItem.imgSrc;

    const productName = document.createElement("h5");
    productName.textContent = "Zapatilla";

    const boxColor = document.createElement("div");
    const pColor = document.createElement("h5");
    pColor.innerText = "Color: ";
    boxColor.classList.add("box-color");
    boxColor.style = "margin-left: 10px";
    boxColor.style.backgroundColor = storedItem.color;

    const price = document.createElement("h5");
    price.textContent = `${storedItem.price}`;

    const quantity = document.createElement("h6");
    quantity.textContent = `Cantidad: ${storedItem.num}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("white-button");
    deleteButton.addEventListener("click", function() {
        checkoutProductsContainer.removeChild(checkoutProductElement);

        const indexToRemove = itemsArray.indexOf(storedItem);
        itemsArray.splice(indexToRemove, 1);
        localStorage.setItem("itemsArray", JSON.stringify(itemsArray));

        intTotal -= parseInt(storedItem.price.replace(/\D/g, '')) * parseInt(storedItem.num);
        total.innerText = `$${intTotal}`;
    });
    intTotal += parseInt(storedItem.price.replace(/\D/g, '')) * parseInt(storedItem.num);

    checkoutProductElement.appendChild(image);
    checkoutProductElement.appendChild(productName);
    checkoutProductElement.appendChild(checkoutProductColorContainer)
    checkoutProductColorContainer.appendChild(pColor);
    checkoutProductColorContainer.appendChild(boxColor);
    checkoutProductElement.appendChild(price);
    checkoutProductElement.appendChild(quantity);
    checkoutProductElement.appendChild(deleteButton);

    checkoutProductsContainer.appendChild(checkoutProductElement);
});

total.innerText = `$${intTotal}`;

const buyButton = document.getElementById("buy")
const error = document.getElementById("error-cart")
const summary = document.getElementById("checkout-summary")

buyButton.addEventListener("click", (e) => {
    if (!itemsArray || itemsArray.length === 0) {
        e.preventDefault();
        error.textContent = "Debe agregar algo al carrito";
    } else {
        e.preventDefault();
            error.textContent = "Gracias por su compra";
            setTimeout(() => {
                summary.submit();
                localStorage.clear();
            }, 2000);
    }
})

if(itemsArray.length == 0){
    summary.style.display = "none"
}

