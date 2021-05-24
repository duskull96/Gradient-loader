const gradientBG = document.querySelector('body');

let angle = 0;

const gradient = '#f64f59, #c471ed, #12c2e9';   // Set your colors
const step = 1, speed = 1;                      // Set values for "step" and "speed"
                                                // Value for speed , 1 = 0.01s (10ms)
                                                // Value for step , 1 = 1deg

let timer = setTimeout(function rotateBG() {
    if (angle >= 360) {
        angle = step;
    } else {
        angle += step;
    }

    gradientBG.style.background = 'linear-gradient(' + angle + 'deg,' + gradient + ')';
    setTimeout(rotateBG, speed * 10)
}, 100)