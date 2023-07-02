const pointerHandler = function (e) {
    const body = document.querySelector('body');
    const bubbles = document.createElement('span');

    bubbles.style.left = -75 + e.offsetX + 'px';
    bubbles.style.top = -75 + e.offsetY + 'px';

    body.appendChild(bubbles);

}

// document.addEventListener('pointermove', pointerHandler)
document.addEventListener('mousemove', pointerHandler)
document.addEventListener('touchmove', pointerHandler)
