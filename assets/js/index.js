function openTOC() {
    console.log("toc button touched");
    const toc = document.getElementById("TOC");
    toc.style.opacity = 1;
    toc.addEventListener('mouseleave', function() {
        // console.log('mouse left');
        toc.style.opacity = 0;
    })
}