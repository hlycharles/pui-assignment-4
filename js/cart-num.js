// update shopping cart icon based on current cart status
function updateCartIcon() {
    const cartElems = document.getElementsByClassName("cart-num-container");
    // remove any number currently shown
    for (let i = 0; i < cartElems.length; i++) {
        cartElems[i].remove();
    }
    const storedStr = localStorage.getItem("cart");
    const cartCount = storedStr == null ? 0 : JSON.parse(storedStr).items.length;
    if (cartCount > 0) {
        // show item count only if there is any item in cart
        if (cartElems.length == 0) {
            const cartNumContainer = document.createElement("div");
            cartNumContainer.classList.add("cart-num-container");

            const cartNumElem = document.createElement("p");
            cartNumElem.classList.add("cart-num");
            
            cartNumContainer.appendChild(cartNumElem);
            document.getElementsByClassName("cart-container")[0].appendChild(cartNumContainer);
        }
        document.getElementsByClassName("cart-num")[0].innerHTML = cartCount.toString();
    }
};
