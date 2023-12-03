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