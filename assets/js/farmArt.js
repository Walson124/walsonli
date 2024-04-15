generateOwl();

function generateOwl() {
    const body = document.body;
    // make owl
    const owlDiv = document.createElement('div');
    owlDiv.id = 'owlDiv';
    const owl = document.createElement('img');
    owl.src = 'assets/images/owl2.png';
    const owlEyes = document.createElement('img');
    owlEyes.src = 'assets/images/owl-eyes.png';
    // put owl in bottom right
    owlDiv.style.position = 'absolute';
    owlDiv.style.height = '20%';
    owlDiv.style.bottom = '0';
    owlDiv.style.right = '0';
    owlDiv.style.marginBottom = '-0.3%';
    owlDiv.style.marginRight = '20%';
    // style the owl
    owl.style.height = '100%';
    // put owl eyes on owl
    const owlEyesDiv = document.createElement('div');
    owlDiv.style.opacity = 0;
    owlEyesDiv.style.position = 'absolute';
    owlEyesDiv.style.zIndex = 0;
    owlEyes.style.width = '58%';
    const defaultLeft = 21;
    const defaultTop = 26;
    owlEyes.style.marginLeft = `${defaultLeft}%`;
    owlEyes.style.marginTop = `${defaultTop}%`;
    owlEyesDiv.appendChild(owlEyes);
    owlDiv.appendChild(owlEyesDiv);
    // add movement to owl eyes
    const minLeft = 16;
    const maxLeft = 25;
    const minHeight = 22;
    const maxHeight = 30;
    document.body.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const owlPos = getElementPositionRelativeToDocument(owl);
        const owlX = owlPos[0];
        const owlY = owlPos[1];
        const diffX = (mouseX - owlX) / body.scrollWidth;
        const diffY = (mouseY - owlY) / body.scrollHeight;
        if (diffX < 0) {
            // console.log("mouse to left of owl");
            // console.log(defaultLeft + diffX * (defaultLeft - minLeft));
            owlEyes.style.marginLeft = `${defaultLeft + diffX * (defaultLeft - minLeft)}%`;
        } else {
            // console.log("mouse to right of owl");
            // console.log(defaultLeft + diffX * (maxLeft - defaultLeft));
            owlEyes.style.marginLeft = `${defaultLeft + diffX * (maxLeft - defaultLeft)}%`;
        }
        if (diffY < 0) {
            // console.log("mouse to top of owl");
            // console.log(defaultTop + diffY * (defaultTop - minHeight));
            owlEyes.style.marginTop = `${defaultTop + diffY * (defaultTop - minHeight)}%`;
        } else {
            // console.log("mouse to bottom of owl");
            // console.log(defaultTop + diffY * (maxHeight - defaultTop));
            owlEyes.style.marginTop = `${defaultTop + diffY * (maxHeight - defaultTop)}%`;
        }
    });
    document.body.addEventListener('touchmove', function(event) {
        // Prevent scrolling on touch devices
        event.preventDefault();
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
        const owlPos = getElementPositionRelativeToDocument(owl);
        const owlX = owlPos[0];
        const owlY = owlPos[1];
        const diffX = (mouseX - owlX) / body.scrollWidth;
        const diffY = (mouseY - owlY) / body.scrollHeight;
        if (diffX < 0) {
            // console.log("mouse to left of owl");
            // console.log(defaultLeft + diffX * (defaultLeft - minLeft));
            owlEyes.style.marginLeft = `${defaultLeft + diffX * (defaultLeft - minLeft)}%`;
        } else {
            // console.log("mouse to right of owl");
            // console.log(defaultLeft + diffX * (maxLeft - defaultLeft));
            owlEyes.style.marginLeft = `${defaultLeft + diffX * (maxLeft - defaultLeft)}%`;
        }
        if (diffY < 0) {
            // console.log("mouse to top of owl");
            // console.log(defaultTop + diffY * (defaultTop - minHeight));
            owlEyes.style.marginTop = `${defaultTop + diffY * (defaultTop - minHeight)}%`;
        } else {
            // console.log("mouse to bottom of owl");
            // console.log(defaultTop + diffY * (maxHeight - defaultTop));
            owlEyes.style.marginTop = `${defaultTop + diffY * (maxHeight - defaultTop)}%`;
        }
    });
    // add owl to webpage
    owlDiv.appendChild(owl);
    body.appendChild(owlDiv);
}

function getElementPositionRelativeToDocument(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    return [x, y];
}