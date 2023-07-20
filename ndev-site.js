// ░█▄─░█ ░█▀▀▄ ░█▀▀▀ ░█──░█ 　 ░█▀▀▀█ ▀█▀ ▀▀█▀▀ ░█▀▀▀ 　 ───░█ ░█▀▀▀█ 
// ░█░█░█ ░█─░█ ░█▀▀▀ ─░█░█─ 　 ─▀▀▀▄▄ ░█─ ─░█── ░█▀▀▀ 　 ─▄─░█ ─▀▀▀▄▄ 
// ░█──▀█ ░█▄▄▀ ░█▄▄▄ ──▀▄▀─ 　 ░█▄▄▄█ ▄█▄ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█▄▄▄█

// Site-specific JavaScript for their respective individual needs

// ! Requires ndev-global.js to function correctly ! (https://nouhi.dev/assets/global-scripts/ndev-global.js)

document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

function tbg_btn() {
    location.href = "https://nouhidev.github.io/tiled-based-generator/";
}

function dg_btn() {
    location.href = "https://nouhidev.github.io/dungeon-generator/";
}

function rh_btn() {
    location.href = "https://nouhidev.github.io/roblox-horrorlist/";
}

function mg_btn() {
    location.href = "https://nouhi.dev/marble-graphs/";
}