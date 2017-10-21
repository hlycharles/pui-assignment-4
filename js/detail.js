window.onload = function() {
    // constants
    const availableQuantities = [];
    for (let i = 1; i <= 10; i++) {
        availableQuantities.push(i);
    }
    const overlayColNum = 3;
    const maxFlavorNum = 3;

    // current pack choice
    let currentPack = Pack["individual-pack"];
    // current list of flavors
    let flavors = [Roll.Blackberry];
    // index of current purchase quantity
    let currentQuantity = 0;
    // show quantity selection
    let showQuantitySelection = false;
    // show falvor selection
    let showFlavorSelection = false;

    // register onclick events for quantity selection
    const quantityBtns = document.getElementsByClassName("pack-quantity-btn");
    for (let i = 0; i < quantityBtns.length; i++) {
        quantityBtns[i].onclick = selectQuantity;
    }

    // register onclick events for pack buttons
    const packBtns = document.getElementsByClassName("pack-btn");
    for (let i = 0; i < packBtns.length; i++) {
        const btn = packBtns[i];
        btn.onclick = () => {
            currentPack = Pack[btn.id];
            if (btn.id === Pack["individual-pack"].name) {
                flavors = [Roll.Blackberry];
            }
            currentQuantity = 0;
            render();
        };
    }

    // register onclick events for add to cart buttons
    const cartBtns = document.getElementsByClassName("cart-btn");
    for (let i = 0; i < cartBtns.length; i++) {
        cartBtns[i].onclick = addToCart;
    }

    render();

    function selectQuantity() {
        showQuantitySelection = true;
        render();
    }

    function selectFlavor() {
        showFlavorSelection = true;
        render();
    }

    function changeQuantity(quantity) {
        currentQuantity = quantity;
        showQuantitySelection = false;
        render();
    }

    function addFlavor(flavor) {
        if (flavors.length < maxFlavorNum) {
            flavors.push(flavor);
        }
        showFlavorSelection = false;
        render();
    }

    function addToCart() {
        const storedStr = localStorage.getItem("cart");
        currentCart = storedStr == null ? {items: []} : JSON.parse(storedStr);
        currentCart.items.push({
            pack: currentPack,
            quantity: availableQuantities[currentQuantity],
            flavors: flavors,
        });
        localStorage.setItem("cart", JSON.stringify(currentCart));
        showBanner("Your order is successfully added to cart");
        render();
    }

    function createOverlay(title, items, selectedIndex, colNum, isSparse) {
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
                if (j === selectedIndex) {
                    btnElem.classList.add("overlay-btn-selected");
                }
                if (isSparse) {
                    btnElem.classList.add("overlay-btn-sm");
                }
                btnElem.classList.add(isSparse ? "btn-secondary" : "btn-tertiary");
                btnElem.innerHTML = items[j].name;
                btnElem.onclick = items[j].action;
                rowElem.appendChild(btnElem);
            }
            overlayElem.appendChild(rowElem);
        }
        document.body.appendChild(overlayElem);
    }

    function createPicRow(pics, sizeClass) {
        const rowElem = document.createElement("div");
        rowElem.classList.add("pack-pic-row");
        for (let i = 0; i < pics.length; i++) {
            const imgElem = document.createElement("img");
            imgElem.classList.add(`pic-${sizeClass}`);
            imgElem.setAttribute("src", `./img/${pics[i]}`);
            rowElem.appendChild(imgElem);
        }
        return rowElem;
    }

    function createFlavorRow(flavor, removable, index) {
        const rowElem = document.createElement("div");
        rowElem.classList.add("pack-flavor-row");
        const flavorElem = document.createElement("h4");
        flavorElem.classList.add("pack-detail-content");
        flavorElem.innerHTML = flavor;
        rowElem.appendChild(flavorElem);
        if (removable) {
            const btnElem = document.createElement("button");
            btnElem.classList.add("remove-btn");
            btnElem.onclick = () => {
                flavors.splice(index, 1);
                render();
            };
            const btnImg = document.createElement("img");
            btnImg.setAttribute("src", "./img/close-btn.png");
            btnElem.appendChild(btnImg);
            rowElem.appendChild(btnElem);
        }
        return rowElem;
    }

    function createAddFlavorButton() {
        const btnElem = document.createElement("button");
        btnElem.classList.add("action-btn-sqr");
        btnElem.classList.add("add-flavor-btn");
        btnElem.onclick = selectFlavor;
        const imgElem = document.createElement("img");
        imgElem.setAttribute("src", "./img/add-btn.png");
        btnElem.appendChild(imgElem);
        return btnElem;
    }

    function render() {

        updateCartIcon();

        // pack buttons
        const packBtns = document.getElementsByClassName("pack-btn");
        for (let i = 0; i < packBtns.length; i++) {
            const btn = packBtns[i];
            btn.classList.remove("action-btn-no-border");
            btn.classList.remove("action-btn-gray");
            if (btn.id === currentPack.name) {
                btn.classList.add("action-btn-no-border");
            } else {
                btn.classList.add("action-btn-gray");
            }
        }

        // pack quantity button
        const quantityBtns = document.getElementsByClassName("pack-quantity-btn");
        for (let i = 0; i < quantityBtns.length; i++) {
            quantityBtns[i].innerHTML = availableQuantities[currentQuantity].toString();
        }

        // flavors
        const flavorContainer = document.getElementsByClassName("pack-flavor-container")[0];
        while (flavorContainer.firstChild != null) {
            flavorContainer.removeChild(flavorContainer.firstChild);
        }
        for (let i = 0; i < flavors.length; i++) {
            flavorContainer.appendChild(createFlavorRow(flavors[i].name, i > 0, i));
        }
        if (currentPack.name !== Pack["individual-pack"].name && flavors.length < maxFlavorNum) {
            flavorContainer.appendChild(createAddFlavorButton());
        }

        // flavor pictures
        const packContainer = document.getElementsByClassName("pack-pic-container")[0];
        while (packContainer.firstChild != null) {
            packContainer.removeChild(packContainer.firstChild);
        }
        if (currentPack.name === Pack["individual-pack"].name) {
            packContainer.appendChild(createPicRow([flavors[0].img], "lg"));
        } else if (currentPack.name === Pack["6-pack"].name) {
            const colNum = 2;
            const rowNum = 3;
            for (let i = 0; i < rowNum; i++) {
                const pics = [];
                for (let j = 0; j < colNum; j++) {
                    if (flavors.length === 1) {
                        pics.push(flavors[0].img);
                    } else if (flavors.length === 2) {
                        pics.push(flavors[j].img);
                    } else if (flavors.length === 3) {
                        pics.push(flavors[i].img);
                    }
                }
                packContainer.appendChild(createPicRow(pics, "md"));
            }
        } else if (currentPack.name === Pack["12-pack"].name) {
            const colNum = 3;
            const rowNum = 4;
            for (let i = 0; i < rowNum; i++) {
                const pics = [];
                for (let j = 0; j < colNum; j++) {
                    if (flavors.length === 1) {
                        pics.push(flavors[0].img);
                    } else if (flavors.length === 2) {
                        pics.push(flavors[Math.floor(i / 2)].img);
                    } else if (flavors.length === 3) {
                        pics.push(flavors[j].img);
                    }
                }
                packContainer.appendChild(createPicRow(pics, "sm"));
            }
        }

        if (showQuantitySelection) {
            quantities = [];
            for (let i = 0; i < availableQuantities.length; i++) {
                quantities.push({
                    name: availableQuantities[i].toString(),
                    action: () => changeQuantity(i),
                });
            }
            createOverlay("Quantity", quantities, currentQuantity, overlayColNum, true);
        } else if (showFlavorSelection) {
            const choices = [];
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
                    choices.push({
                        name: name,
                        action: () => addFlavor(roll),
                    });
                }
            }
            createOverlay("Flavor", choices, -1, overlayColNum, false);
        } else {
            const overlays = document.getElementsByClassName("overlay");
            for (let i = 0; i < overlays.length; i++) {
                overlays[i].remove();
            }
        }

        // total price
        const totals = document.getElementsByClassName("total");
        for (let i = 0; i < totals.length; i++) {
            const quantity = availableQuantities[currentQuantity];
            const totalPrice = currentPack.price * quantity;
            totals[i].innerHTML = `\$ ${currentPack.price} x ${quantity} = \$ ${totalPrice}`;
        }
    }
    
};
