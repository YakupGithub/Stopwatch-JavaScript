window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appMinutes = document.querySelector('#minutes');
    let appSeconds = document.querySelector('#seconds');
    let appTens = document.querySelector('#tens');
    let startBtn = document.querySelector('#start');
    let countdownStartBtn = document.querySelector('#countdownStart');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let inputValue = document.querySelector('#inputValue');
    let countdownValue = document.querySelector('#countdownValue');
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

    const countdownTimer = () => {
        tens--;
        if (tens < 0) {
            tens = 99;
            seconds--;

            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
        }

        if (minutes < 0) {
            clearInterval(Interval);
            tens = 0;
            seconds = 0;
            minutes = 0;
        }

        updateDisplay();
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        updateDisplay();
        Interval = setInterval(startTimer, 10);
    };

    countdownStartBtn.onclick = () => {
        clearInterval(Interval);
        minutes = parseInt(countdownValue.value) || 0;
        seconds = 0;
        tens = 0;
        updateDisplay();
        Interval = setInterval(countdownTimer, 10);
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
