window.onload = () => {

    const box = document.querySelector('#box');
    const btn = document.querySelector('#btn-convertor');
    
    btn.addEventListener("click", event => {
        let redOutput = document.querySelector('#output-red');
        let greenOutput = document.querySelector('#output-green');
        let blueOutput = document.querySelector('#output-blue');
        let hexInput = document.querySelector('#input-hex').value;
        let hexToRgb = hexInput.match(/.{1,2}/g);
        let rgbValue = [
            parseInt(hexToRgb[0], 16),
            parseInt(hexToRgb[1], 16),
            parseInt(hexToRgb[2], 16)
        ];
        redOutput.value = rgbValue[0];
        greenOutput.value = rgbValue[1];
        blueOutput.value = rgbValue[2];

        box.style.backgroundColor = '#'+hexInput;
        btn.style.backgroundColor ='#007FFF';
        
})
}