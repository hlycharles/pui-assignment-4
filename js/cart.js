window.onload = function() {

    render();

    function removeCartItem(index) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.items.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        render();
    }

    function createItemCountHeader(count) {
        const headerElem = document.createElement("h4");
        headerElem.innerHTML = `Items: ${count}`;
        return headerElem;
    }

    function createItemHeader(item) {
        const headerElem = document.createElement("div");
        headerElem.classList.add("item-header");
        const packElem = document.createElement("h3");
        packElem.classList.add("pack-type");
        packElem.innerHTML = item.pack.display;
        const purchaseElem = document.createElement("div");
        purchaseElem.classList.add("purchase-info");
        const quantityElem = document.createElement("h5");
        quantityElem.classList.add("quantity");
        quantityElem.innerHTML = `Quantity: ${item.quantity}`;
        const priceElem = document.createElement("h5");
        priceElem.classList.add("unit-price");
        priceElem.innerHTML = `\$ ${item.pack.price} / ${item.pack.unit}`;
        purchaseElem.appendChild(quantityElem);
        purchaseElem.appendChild(priceElem);
        headerElem.appendChild(packElem);
        headerElem.appendChild(purchaseElem);
        return headerElem;
    }

    function createItemContent(item, index) {
        const contentElem = document.createElement("div");
        contentElem.classList.add("item-content");
        const flavorContainer = document.createElement("div");
        flavorContainer.classList.add("item-flavor");
        for (let i = 0; i < item.flavors.length; i++) {
            const flavor = item.flavors[i];
            const flavorElem = document.createElement("h5");
            flavorElem.classList.add("flavor");
            flavorElem.innerHTML = flavor.name;
            flavorContainer.appendChild(flavorElem);
        }
        const opContainer = document.createElement("div");
        opContainer.classList.add("item-op");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("item-remove-btn");
        removeBtn.onclick = () => removeCartItem(index);
        const imgElem = document.createElement("img");
        imgElem.setAttribute("src", "./img/close-btn.png");
        const textElem = document.createElement("h5");
        textElem.classList.add("weight-normal");
        textElem.innerHTML = "Remove";
        removeBtn.appendChild(imgElem);
        removeBtn.appendChild(textElem);
        opContainer.appendChild(removeBtn);
        contentElem.appendChild(flavorContainer);
        contentElem.appendChild(opContainer);
        return contentElem;
    }

    function createItemContainer(item, index) {
        const containerElem = document.createElement("div");
        containerElem.classList.add("item-container");
        containerElem.appendChild(createItemHeader(item));
        containerElem.appendChild(createItemContent(item, index));
        return containerElem;
    }

    function createPriceRow(item, index, price) {
        const rowElem = document.createElement("div");
        rowElem.classList.add("price-row");
        const opElem = document.createElement("h5");
        opElem.classList.add("weight-normal");
        opElem.innerHTML = index === 0 ? "" : "+";
        const priceElem = document.createElement("h5");
        priceElem.classList.add("weight-normal");
        priceElem.innerHTML = `\$ ${item.pack.price} x ${item.quantity} = \$ ${price}`;
        rowElem.appendChild(opElem);
        rowElem.appendChild(priceElem);
        return rowElem;
    }

    function render() {

        updateCartIcon();

        // render items in the cart
        const itemsContainer = document.getElementsByClassName("cart-info-left")[0];
        while (itemsContainer.firstChild != null) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }
        const priceContainer = document.getElementsByClassName("price-container")[0];
        while (priceContainer.firstChild != null) {
            priceContainer.removeChild(priceContainer.firstChild);
        }
        const storedStr = localStorage.getItem("cart");
        const cart = storedStr == null ? {items: []} : JSON.parse(storedStr);
        let totalPrice = 0;
        itemsContainer.appendChild(createItemCountHeader(cart.items.length));
        for (let i = 0; i < cart.items.length; i++) {
            itemsContainer.appendChild(createItemContainer(cart.items[i], i));
            const price = cart.items[i].pack.price * cart.items[i].quantity;
            totalPrice += price;
            priceContainer.appendChild(createPriceRow(cart.items[i], i, price));
        }

        // render total price
        const totalAmount = document.getElementsByClassName("total-amount");
        for (let i = 0; i < totalAmount.length; i++) {
            totalAmount[i].innerHTML = `\$ ${totalPrice}`;
        }
    }
};
