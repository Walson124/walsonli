function fadeToColor(color, elementToFade, callback) {
    let opacity = color === 'black' ? 0 : 1;
    const targetOpacity = color === 'black' ? 1 : 0;
    const interval = 20; // Interval in milliseconds

    const intervalFunction = setInterval(() => {
        if (opacity < targetOpacity) {
            //console.log("fading in");
            opacity += 0.01; // Fade in
            elementToFade.style.opacity = parseFloat(elementToFade.style.opacity) + 0.008; // Fade out
        } else if (opacity > targetOpacity) {
            //console.log("fading out");
            opacity -= 0.01; // Fade out
            elementToFade.style.opacity = parseFloat(elementToFade.style.opacity) - 0.008; // Fade in
        }

        // Ensure opacity stays within bounds
        opacity = Math.min(Math.max(opacity, 0), 1);

        document.body.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;

        if (opacity === targetOpacity) {
            //console.log(elementToFade.style.opacity);
            clearInterval(intervalFunction);
            if (callback) {
                callback(); // Execute callback function when fading is complete
            }
        }
    }, interval);
}

function randomFade() {
    const elementToFade = document.getElementById('owlDiv');
    const currentColor = document.body.style.backgroundColor === 'rgb(0, 0, 0)' ? 'black' : 'white';
    const targetColor = currentColor === 'black' ? 'white' : 'black';
    fadeToColor(targetColor, elementToFade, () => {
        const minInterval = targetColor === 'white' ? 15000 : 5000; // Minimum interval in milliseconds
        const maxInterval = targetColor === 'white' ? 30000 : 5000; // Maximum interval in milliseconds
        const randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
        setTimeout(randomFade, randomInterval); // Call randomFade recursively after random interval
    });
}

// Start the random fading process after a delay
if (window.location.pathname.endsWith("/")) {
    console.log(window.location.pathname);
    const initialDelay = 3000; // Delay in milliseconds
    setTimeout(randomFade, initialDelay);
} else {
    const initialDelay = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;
    setTimeout(randomFade, initialDelay);
}
