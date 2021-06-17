/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
window.onload = () => {
    const timer = document.querySelector('#staticTime');
    const startBtn1 = document.querySelector('#start_btn');
    const pauseBtn1 = document.querySelector('#pause_btn');
    const resetBtn1 = document.querySelector('#reset_btn');

    // timer
    const inputTimerHr = document.querySelector('#input-timer-hour');
    const inputTimerMin = document.querySelector('#input-timer-min');
    const inputTimerSec = document.querySelector('#input-timer-sec');
    const timerBtn = document.querySelector('#timer_start_btn');
    const outputTimerHr = document.querySelector('#output-timer-hour');
    const outputTimerMin = document.querySelector('#output-timer-min');
    const outputTimerSec = document.querySelector('#output-timer-sec');

    let time = 0;
    let interval;

    // eslint-disable-next-line no-shadow
    function toHHMMSS(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - hours * 3600) / 60);
        let seconds = time - hours * 3600 - minutes * 60;

        hours = `${hours}`.padStart(2, '0');
        minutes = `${minutes}`.padStart(2, '0');
        seconds = `${seconds}`.padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }
    function showTime() {
        time += 1;
        timer.innerHTML = toHHMMSS(time);
    }
    function showBtn(btnArr) {
        // eslint-disable-next-line no-return-assign
        btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
    }
    function hideBtn(btnArr) {
        btnArr.forEach((btn) => (btn.style.display = 'none'));
    }

    const start = () => {
        interval = setInterval(showTime, 1000);
        // eslint-disable-next-line no-console
        console.log('interval from start ', interval);
        hideBtn([startBtn1]);
        showBtn([pauseBtn1, resetBtn1]);
    };

    const pause = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
            pauseBtn1.innerHTML = 'RESUME';
        } else {
            interval = setInterval(showTime, 1000);
            pauseBtn1.innerHTML = 'PAUSE';
        }
    };

    const reset = () => {
        clearInterval(interval);
        interval = null;
        pauseBtn1.innerHTML = 'PAUSE';
        time = 0;
        timer.innerHTML = toHHMMSS(time);
        hideBtn([pauseBtn1, resetBtn1]);
        showBtn([startBtn1]);
    };

    // Timer Code
    let timerInterval;
    const currentTimeInMilliSec = () => Date.now();
    const currentTimeInSec = () => Math.floor(currentTimeInMilliSec() / 1000);
    const timerFunc = (hrs, mins, secs) => {
        const time = parseInt(hrs, 10) * 3600 + parseInt(mins, 10) * 60 + parseInt(secs, 10);

        const start = currentTimeInSec();

        timerInterval = setInterval(() => {
            const timeleft = time - (currentTimeInSec() - start);

            if (timeleft <= 0) {
                clearInterval(timerInterval);
                outputTimerHr.innerHTML = '00';
                outputTimerMin.innerHTML = '00';
                outputTimerSec.innerHTML = '00';
            } else {
                const hours = Math.floor((timeleft % (60 * 60 * 60)) / 3600);
                const minutes = Math.floor((timeleft % (60 * 60)) / 60);
                const seconds = Math.floor(timeleft % 60);
                outputTimerHr.innerHTML = String(hours).padStart(2, '0');
                outputTimerMin.innerHTML = String(minutes).padStart(2, '0');
                outputTimerSec.innerHTML = String(seconds).padStart(2, '0');
            }
        }, 1000);
    };
    // Ip finder
    const ipAddress = document.querySelector('#ip-finder');
    fetch('https://api.ipify.org/?format=json')
        .then((response) => response.json())
        .then((json) => (ipAddress.innerText = json.ip))
        .catch((ipAddress.innerText = 'Please try after sometime'));

    startBtn1.addEventListener('click', start);
    pauseBtn1.addEventListener('click', pause);
    resetBtn1.addEventListener('click', reset);
    timerBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        if (inputTimerHr.value === '') inputTimerHr.value = 0.0;
        if (inputTimerMin.value === '') inputTimerMin.value = 0.0;
        if (inputTimerSec.value === '') inputTimerSec.value = 0.0;

        timerFunc(inputTimerHr.value, inputTimerMin.value, inputTimerSec.value);
    });
};
