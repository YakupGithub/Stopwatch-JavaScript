window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appMinutes = document.querySelector('#minutes');
    let appSeconds = document.querySelector('#seconds');
    let appTens = document.querySelector('#tens');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let inputValue = document.querySelector('#inputValue');
    let Interval;

    const updateDisplay = () => {
        appTens.innerHTML = tens < 10 ? '0' + tens : tens;
        appSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        appMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    };

    const startTimer = () => {
        tens++;
        if (tens > 99) {
            seconds += parseInt(inputValue.value) || 1;
            tens = 0;

            if (seconds >= 60) {
                minutes += Math.floor(seconds / 60);
                seconds = seconds % 60;
            }
        }

        updateDisplay();
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        updateDisplay();
    };
};
