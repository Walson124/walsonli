const pages = {
    "Home":"index.html",
    "About me":"about.html",
    "Projects":"projects.html",
    "Experience":"experience.html",
    "Education":"education.html",
    "Contact me":"contact.html",
    "Older versions":"previous.html",
}

createTOCSelectorContainer();
createTOCSelectorHelpers();
createTOC();

function createTOCSelectorContainer() {
    const toc_selector_container = document.createElement('div');
    const toc_selector_container_div = document.createElement('div');
    const toc_img = document.createElement('img');
    toc_selector_container.id = 'TOC-selector-container';
    toc_img.classList.add('circular-img');
    toc_img.classList.add('default-shadow');
    toc_img.id = 'TOC-selector';
    toc_img.setAttribute('onmouseover', 'openTOC()');
    toc_img.setAttribute('src', 'assets/images/profile-pic.JPG');
    toc_selector_container.appendChild(toc_selector_container_div);
    toc_selector_container_div.appendChild(toc_img);
    document.body.appendChild(toc_selector_container);
}

function createTOCSelectorHelpers() {
    const toc_selector_arrow = document.createElement('div');
    const toc_selector_label = document.createElement('div');
    const arrow_img = document.createElement('img');
    arrow_img.setAttribute('src', 'assets/images/dotted-arrow-twist.png');
    toc_selector_label.innerText = "here's the menu";
    toc_selector_arrow.setAttribute('onmouseover', 'toggleTOCHelpers()');
    toc_selector_label.setAttribute('onmouseover', 'toggleTOCHelpers()');
    if (document.title != 'Hey! -Walson Li') {
        toc_selector_arrow.style.opacity = 0;
        toc_selector_label.style.opacity = 0;
    }
    toc_selector_arrow.id = 'TOC-selector-arrow';
    toc_selector_label.id = 'TOC-selector-label';
    toc_selector_arrow.appendChild(arrow_img);
    document.body.appendChild(toc_selector_arrow);
    document.body.appendChild(toc_selector_label)
}

function createTOC() {
    const toc = document.createElement('div');
    toc.id = 'TOC';
    toc.classList.add('default-shadow');
    for (let i = 0; i < Object.keys(pages).length; i++) {
        const div = document.createElement('div');
        const hr = document.createElement('hr');
        const a = document.createElement('a');
        a.innerText = Object.keys(pages)[i];
        a.setAttribute('href', pages[Object.keys(pages)[i]]);
        toc.appendChild(div);
        div.appendChild(hr);
        div.appendChild(a);
    }
    document.body.appendChild(toc);
}

function openTOC() {
    const toc = document.getElementById("TOC");
    const toc_arrow = document.getElementById("TOC-selector-arrow");
    const toc_label = document.getElementById("TOC-selector-label");
    toc_arrow.style.opacity = 0;
    toc_label.style.opacity = 0;
    toc.style.visibility = 'visible';
    toc.addEventListener('mouseleave', function() {
        // console.log('mouse left');
        toc.style.visibility = 'hidden';
    })
}

function toggleTOCHelpers() {
    // console.log("adding opacity");
    const toc_arrow = document.getElementById("TOC-selector-arrow");
    const toc_label = document.getElementById("TOC-selector-label");
    if (toc_arrow.style.opacity == '0' && toc_label.style.opacity == '0') {
        toc_arrow.style.opacity = 0.5;
        toc_label.style.opacity = 0.5;
    }
}