window.onload = () => {
    const box = document.querySelector('#box');
    const btn = document.querySelector('#btn-convertor');

    btn.addEventListener('click', () => {
        const redOutput = document.querySelector('#output-red');
        const greenOutput = document.querySelector('#output-green');
        const blueOutput = document.querySelector('#output-blue');
        const hexInput = document.querySelector('#input-hex').value;
        const hexToRgb = hexInput.match(/.{1,2}/g);
        const rgbValue = [parseInt(hexToRgb[0], 16), parseInt(hexToRgb[1], 16), parseInt(hexToRgb[2], 16)];
        // eslint-disable-next-line prefer-destructuring
        redOutput.value = rgbValue[0];
        // eslint-disable-next-line prefer-destructuring
        greenOutput.value = rgbValue[1];
        // eslint-disable-next-line prefer-destructuring
        blueOutput.value = rgbValue[2];

        box.style.backgroundColor = `#${hexInput}`;
        btn.style.backgroundColor = '#007FFF';
    });
};
