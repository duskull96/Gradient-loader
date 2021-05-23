

const bodyBG = document.querySelector('body'),
    step = document.querySelector('#step'),
    speed = document.querySelector('#speed'),
    stepLabelValue = document.querySelector('#step-value'),
    speedLabelValue = document.querySelector('#speed-value'),
    linearGradient = document.querySelector('#linear-gradient'),
    copyAnim = document.querySelector('#copy-animation');

const gradientDefault = '#f64f59, #c471ed, #12c2e9'; 
let gradient = gradientDefault
let angle = 0;
stepLabelValue.textContent = step.value;
speedLabelValue.textContent = speed.value / 100 + 's';

function createAnimation() {

    let animation = `
    -webkit-animation: ${((360-step.value)/step.value)*speed.value*10}ms linear 0s infinite  bgAnim;
    -moz-animation: ${((360-step.value)/step.value)*speed.value*10}ms linear 0s infinite  bgAnim;
    -o-animation: ${((360-step.value)/step.value)*speed.value*10}ms linear 0s infinite  bgAnim;
    animation: ${((360-step.value)/step.value)*speed.value*10}ms linear 0s infinite  bgAnim;

    @-webkit-keyframes bgAnim { 
        from { background: linear-gradient(0deg, ${gradient}); } 
        to { background: linear-gradient(${360-step.value}deg, ${gradient}); }  
    }
    @-moz-keyframes bgAnim { 
        from { background: linear-gradient(0deg, ${gradient}); } 
        to { background: linear-gradient(${360-step.value}deg, ${gradient}); }  
    }
    @-o-keyframes bgAnim { 
        from { background: linear-gradient(0deg, ${gradient}); } 
        to { background: linear-gradient(${360-step.value}deg, ${gradient}); }  
    }
    @keyframes bgAnim { 
        from { background: linear-gradient(0deg, ${gradient}); } 
        to { background: linear-gradient(${360-step.value}deg, ${gradient}); }  
    }
    `
    navigator.clipboard.writeText(animation)
}

function updateValue(e) {
    if (e.target.id == 'step') {
        stepLabelValue.textContent = e.target.value
        return
    }
    if (e.target.id == 'speed') {
        speedLabelValue.textContent = e.target.value / 100 + "s"
        return
    }
    if (e.target.id == 'linear-gradient') {
        if (e.target.value == '') {
            gradient = gradientDefault
        } else {
            gradient = e.target.value
        }
    }
    console.log(e.target.value);

}

let timer = setTimeout(function bgChanger() {
    if (angle >= 360) {
        angle = Number(step.value);
    } else {
        angle += Number(step.value);
    }

    bodyBG.style.background = 'linear-gradient(' + angle + 'deg,' + gradient + ')';
    setTimeout(bgChanger, speed.value * 10)
}, 100)


copyAnim.addEventListener('click', createAnimation);
step.addEventListener('input', updateValue);
speed.addEventListener('input', updateValue);
linearGradient.addEventListener('input', updateValue);