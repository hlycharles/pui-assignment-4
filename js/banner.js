function removeBanner(banner) {
    return () => {
        banner.remove();
    };
}

function showBanner(text) {
    const banner = document.createElement("div");
    banner.classList.add("banner");

    // text to shown inside banner
    const textElem = document.createElement("h5");
    textElem.classList.add("weight-normal");
    textElem.innerHTML = text;

    banner.appendChild(textElem);
    document.body.appendChild(banner);

    // remove banner after 1.8s
    setTimeout(removeBanner(banner), 1800);
}
