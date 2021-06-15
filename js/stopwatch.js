window.onload = () => {
   
    const timer = document.querySelector('#staticTime');
    const start_btn1 = document.querySelector('#start_btn');
    const pause_btn1 = document.querySelector('#pause_btn');
    const reset_btn1 = document.querySelector('#reset_btn');

    //timer
    const input_timer_hr = document.querySelector('#input-timer-hour');
    const input_timer_min = document.querySelector('#input-timer-min');
    const input_timer_sec = document.querySelector('#input-timer-sec');
    const timer_btn = document.querySelector('#timer_start_btn');
    const output_timer_hr = document.querySelector('#output-timer-hour');
    const output_timer_min = document.querySelector('#output-timer-min');
    const output_timer_sec = document.querySelector('#output-timer-sec');

    let time = 0,interval;

    function showTime() {
        time += 1;
        timer.innerHTML = toHHMMSS(time);
    }

    const start = ()=> {
        interval = setInterval(showTime, 1000);
        console.log("interval from start ",interval)
        hideBtn([start_btn]);
        showBtn([pause_btn, reset_btn]);
    }

    const pause = ()=> {
        if (interval) {
            clearInterval(interval);
            interval = null;
            pause_btn1.innerHTML = 'RESUME';
        } else {
            interval = setInterval(showTime, 1000);
            pause_btn1.innerHTML = 'PAUSE';
        }
    }

    const reset = ()=> {
        clearInterval(interval);
        interval = null;
        pause_btn.innerHTML = 'PAUSE';
        time = 0;
        timer.innerHTML = toHHMMSS(time);
        hideBtn([pause_btn, reset_btn]);
        showBtn([start_btn]);
    }

    function toHHMMSS(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - hours * 3600) / 60);
        let seconds = time - hours * 3600 - minutes * 60;

        hours = `${hours}`.padStart(2, '0');
        minutes = `${minutes}`.padStart(2, '0');
        seconds = `${seconds}`.padStart(2, '0');

        return hours + ':' + minutes + ':' + seconds;
    }

    function showBtn(btnArr) {
        btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
        }
    function hideBtn(btnArr) {
        btnArr.forEach((btn) => (btn.style.display = 'none'));
    }
    //Timer Code
    let timerInterval;
    const currentTimeInMilliSec = ()=> Date.now();
    const currentTimeInSec = ()=> Math.floor(currentTimeInMilliSec() / 1000);
    const timerFunc = (hrs,mins,secs)=> {
        const time = parseInt(hrs, 10) * 3600 + parseInt(mins, 10) * 60 + parseInt(secs, 10);
        
        const start = currentTimeInSec();
        
        timerInterval = setInterval(() => {
        const timeleft = time - (currentTimeInSec() - start);
        
        if (timeleft <= 0) {
            clearInterval(timerInterval);
            output_timer_hr.innerHTML= '00';
            output_timer_min.innerHTML = '00';
            output_timer_sec.innerHTML = '00';
        } else {
            const hours = Math.floor((timeleft % (60 * 60 *60)) / 3600);
            const minutes = Math.floor((timeleft % (60 * 60)) / 60);
            const seconds = Math.floor(timeleft % 60);
            output_timer_hr.innerHTML = String(hours).padStart(2, '0');
            output_timer_min.innerHTML = String(minutes).padStart(2, '0');
            output_timer_sec.innerHTML = String(seconds).padStart(2, '0');
        }
        }, 1000); 
    }
    //Ip finder
    const ipAddress = document.querySelector('#ip-finder');
    fetch("https://api.ipify.org/?format=json")
        .then(response => response.json())
        .then(json => ipAddress.innerText = json.ip)
        .catch(ipAddress.innerText = "Please try after sometime");

    start_btn1.addEventListener('click', start);
    pause_btn1.addEventListener('click', pause);
    reset_btn1.addEventListener('click', reset);
    timer_btn.addEventListener('click',()=>{ 
        clearInterval(timerInterval);
        if(input_timer_hr.value==="") input_timer_hr.value=0.0;
        if(input_timer_min.value==="") input_timer_min.value=0.0;
        if(input_timer_sec.value==="") input_timer_sec.value=0.0;

        timerFunc(input_timer_hr.value,input_timer_min.value,input_timer_sec.value)}
    );
}