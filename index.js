window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    if(!audio) return;
    // stops when there is no keycode assigned to a prticular key
    audio.currentTime = 0;
    audio.play();
})