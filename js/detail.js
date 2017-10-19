window.onload = function() {
    // constants
    const availableQuantities = [];
    for (let i = 1; i <= 10; i++) {
        availableQuantities.push(i);
    }
    const overlayColNum = 3;

    // current number of items to add to cart
    let purchaseNum = 1;
    // current number of items in the cart
    let cartCount = 0;
    // show quantity selection
    let showQuantitySelection = false;
    // show falvor selection
    let showFlavorSelection = false;

    // register onclick events for adding items to cart
    const cartBtns = document.getElementsByClassName("cart-btn");
    for (let i = 0; i < cartBtns.length; i++) {
        cartBtns[i].onclick = addToCart;
    }

    // register onclick events for quantity selection
    const quantityBtns = document.getElementsByClassName("pack-quantity-btn");
    for (let i = 0; i < quantityBtns.length; i++) {
        quantityBtns[i].onclick = selectQuantity;
    }

    // register onclick events for flavor selection
    const flavorBtns = document.getElementsByClassName("add-flavor-btn");
    for (let i = 0; i < flavorBtns.length; i++) {
        flavorBtns[i].onclick = selectFlavor;
    }

    render();

    function addToCart() {
        cartCount += purchaseNum;
        purchaseNum = 1;
        render();
    }

    function selectQuantity() {
        showQuantitySelection = true;
        render();
    }

    function selectFlavor() {
        showFlavorSelection = true;
        render();
    }

    function createOverlay(title, items, colNum, isSparse) {
        const overlayElem = document.createElement("div");
        overlayElem.classList.add("overlay");
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("overlay-row");
        if (isSparse) {
            titleContainer.classList.add("overlay-row-shrt");
        }
        const titleElem = document.createElement("h5");
        const titleText = document.createTextNode(title);
        titleElem.appendChild(titleText);
        titleContainer.appendChild(titleElem);
        overlayElem.appendChild(titleContainer);
        for (let i = 0; i < items.length; i += colNum) {
            const rowElem = document.createElement("div");
            rowElem.classList.add("overlay-row");
            if (isSparse) {
                rowElem.classList.add("overlay-row-shrt");
            }
            for (let j = i; j < i + colNum && j < items.length; j++) {
                const btnElem = document.createElement("button");
                btnElem.classList.add("overlay-btn")
                if (isSparse) {
                    btnElem.classList.add("overlay-btn-sm");
                }
                btnElem.classList.add(isSparse ? "btn-secondary" : "btn-tertiary");
                btnElem.innerHTML = items[j].name;
                rowElem.appendChild(btnElem);
            }
            overlayElem.appendChild(rowElem);
        }
        document.body.appendChild(overlayElem);
    }

    function render() {

        if (showQuantitySelection) {
            quantities = [];
            for (let i = 0; i < availableQuantities.length; i++) {
                quantities.push({
                    name: availableQuantities[i].toString(),
                });
            }
            createOverlay("Quantity", quantities, overlayColNum, true);
        }

        if (showFlavorSelection) {
            flavors = [];
            for (const k in Roll) {
                if (Roll.hasOwnProperty(k)) {
                    const roll = Roll[k];
                    let name = roll.name;
                    if (!!roll.isGlutenFree) {
                        name += " (Gluten-Free)";
                    }
                    if (!!roll.isVegan) {
                        name += " (Vegan)";
                    }
                    flavors.push({
                        name: name,
                    });
                }
            }
            createOverlay("Flavor", flavors, overlayColNum, false);
        }

        // update shopping cart
        const cartElems = document.getElementsByClassName("cart-num-container");
        if (cartCount == 0 && cartElems.length > 0) {
            cartElems[0].remove();
        }
        if (cartCount > 0) {
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
    }
    
};
