window.onload = () => {
    
    const inputEpocToHuman = document.querySelector('#input-epoc');
    const btnEpocToHuman = document.querySelector('#epoc-btn');
    const outputEpocToHuman = document.querySelector('#output-human-time');

    const inputHumanYear = document.querySelector('#input-human-year');
    const inputHumanMonth = document.querySelector('#input-human-month');
    const inputHumanDay = document.querySelector('#input-human-day');
    const inputHumanHour = document.querySelector('#input-human-hour');
    const inputHumanMinute = document.querySelector('#input-human-minute');
    const inputHumanSec = document.querySelector('#input-human-sec');
    const btnHumanToEpoc = document.querySelector('#human-btn');
    const outputHumanToEpoc = document.querySelector('#output-epoc-time');

    btnEpocToHuman.addEventListener("click" , event => {
        const dateEpocInput = new Date(inputEpocToHuman.value*1000);    
        outputEpocToHuman.value = dateEpocInput.toLocaleString();
        btnEpocToHuman.style.backgroundColor ='#007FFF';       
    });

    btnHumanToEpoc.addEventListener("click" , event => {
        const dateHumanInput = new Date(
            Date.UTC(
              parseInt(inputHumanYear.value),
              parseInt(inputHumanMonth.value) - 1,
              parseInt(inputHumanDay.value),
              parseInt(inputHumanHour.value),
              parseInt(inputHumanMinute.value),
              parseInt(inputHumanSec.value),
            ),
          );
          outputHumanToEpoc.value = dateHumanInput.getTime();
          btnHumanToEpoc.style.backgroundColor ='#007FFF';
    });
}
