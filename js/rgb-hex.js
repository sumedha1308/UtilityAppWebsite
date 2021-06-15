window.onload = () => {
    
    const btn = document.querySelector('#btn-convertor');
    const hexValue = document.querySelector('#output-hex');
    const box = document.querySelector('#box');

    btn.addEventListener("click" , event => {
        let redValue = document.querySelector('#input-red').value;
        let greenValue = document.querySelector('#input-green').value;
        let blueValue = document.querySelector('#input-blue').value;
        redValue = Number(redValue).toString(16);
        greenValue = Number(greenValue).toString(16);
        blueValue = Number(blueValue).toString(16); 
        if (redValue.length < 2) {
            redValue = "0" + redValue;
        }
        if (greenValue.length < 2) {
            greenValue = "0" + greenValue;
        }
        if (blueValue.length < 2) {
            blueValue = "0" + blueValue;
        }
        hexValue.value = '#'+redValue+greenValue+blueValue; 
        box.style.backgroundColor = hexValue.value ;
        btn.style.backgroundColor ='#007FFF';
    })
}
