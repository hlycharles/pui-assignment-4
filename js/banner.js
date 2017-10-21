function removeBanner(banner) {
    return () => {
        banner.remove();
    };
}

function showBanner(text) {
    const banner = document.createElement("div");
    banner.classList.add("banner");
    const textElem = document.createElement("h5");
    textElem.classList.add("weight-normal");
    textElem.innerHTML = text;
    banner.appendChild(textElem);
    document.body.appendChild(banner);

    setTimeout(removeBanner(banner), 1600);
}
