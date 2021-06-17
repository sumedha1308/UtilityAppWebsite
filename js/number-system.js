/* eslint-disable no-alert */
window.onload = () => {
    const inputDropDown = document.querySelector('#input-unit-convertor');
    const ouputDropDown = document.querySelector('#output-unit-convertor');

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener('change', () => {
        textInput.value += '';
        // eslint-disable-next-line no-alert
        if (textInput.value.trim() === '') window.alert('You have entered not a number');
        else window.alert('Please select any unit again');
    });

    const base = {
        binary: 2,
        decimal: 10,
        hex: 16,
        octal: 8,
    };

    function eventDone(inputDropDownValue, outputDropDownValue) {
        if (textInput.value.trim() !== '') {
            let output;
            // eslint-disable-next-line prefer-const
            output = parseInt(textInput.value, base[inputDropDownValue]).toString(base[outputDropDownValue]);
            if (outputDropDownValue === 'hex') textOutput.value = output.toUpperCase();
            else textOutput.value = output;
        }
    }

    inputDropDown.addEventListener('change', () => {
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;
        eventDone(inputDropDownValue, outputDropDownValue);
    });

    ouputDropDown.addEventListener('change', () => {
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;
        eventDone(inputDropDownValue, outputDropDownValue);
    });
};
