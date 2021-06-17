/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
window.onload = () => {
    const inputDropDown = document.querySelector('#input-unit-convertor');
    const ouputDropDown = document.querySelector('#output-unit-convertor');

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener('change', () => {
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;

        textInput.value += '';
        // eslint-disable-next-line no-restricted-globals
        // eslint-disable-next-line no-alert
        if (textInput.value.trim() === '') {
            window.alert('Please enter valid number');
            if (outputDropDownValue !== '') textOutput.value = 'Please enter valid number';
        } else window.alert('Please select any unit again');
    });

    function eventDone(inputDropDownValue, outputDropDownValue) {
        // TODO: Enhancement in DataStructure

        if (textInput.value.trim() !== '') {
            if (inputDropDownValue === 'select' || outputDropDownValue === 'select') textOutput.value = ' ';

            // kelvin to celsius,fahrenheit,rankine conversions
            if (inputDropDownValue === 'input-kelvin' && outputDropDownValue === 'output-kelvin')
                textOutput.value = textInput.value * 1;

            if (inputDropDownValue === 'input-kelvin' && outputDropDownValue === 'output-celsius')
                textOutput.value = textInput.value - 273.15;

            if (inputDropDownValue === 'input-kelvin' && outputDropDownValue === 'output-fahrenheit')
                textOutput.value = (textInput.value - 273.15) * (9 / 5) + 32;

            if (inputDropDownValue === 'input-kelvin' && outputDropDownValue === 'output-rankine')
                textOutput.value = textInput.value * 1.8;

            // celsius to kelvin,fahrenheit,rankine conversions
            if (inputDropDownValue === 'input-celsius' && outputDropDownValue === 'output-kelvin')
                textOutput.value = parseFloat(textInput.value) + 273.15;

            if (inputDropDownValue === 'input-celsius' && outputDropDownValue === 'output-celsius')
                textOutput.value = textInput.value / 1;

            if (inputDropDownValue === 'input-celsius' && outputDropDownValue === 'output-fahrenheit')
                textOutput.value = (textInput.value * 9) / 5 + 32;

            if (inputDropDownValue === 'input-celsius' && outputDropDownValue === 'output-rankine')
                textOutput.value = (textInput.value * 9) / 5 + 491.67;

            // fahrenheit to kelvin,celsius,rankine conversions
            if (inputDropDownValue === 'input-fahrenheit' && outputDropDownValue === 'output-kelvin')
                textOutput.value = (textInput.value - 32) * (5 / 9) + 273.15;

            if (inputDropDownValue === 'input-fahrenheit' && outputDropDownValue === 'output-celsius')
                textOutput.value = (textInput.value - 32) * (5 / 9);

            if (inputDropDownValue === 'input-fahrenheit' && outputDropDownValue === 'output-fahrenheit')
                textOutput.value = textInput.value * 1;

            if (inputDropDownValue === 'input-fahrenheit' && outputDropDownValue === 'output-rankine')
                textOutput.value = parseFloat(textInput.value) + 459.67;

            // rankine to kelvin,celsius,fahrenheit,rankine conversions
            if (inputDropDownValue === 'input-rankine' && outputDropDownValue === 'output-kelvin')
                textOutput.value = textInput.value * (5 / 9);

            if (inputDropDownValue === 'input-rankine' && outputDropDownValue === 'output-celsius')
                textOutput.value = (textInput.value - 491.67) * (5 / 9);

            if (inputDropDownValue === 'input-rankine' && outputDropDownValue === 'output-fahrenheit')
                textOutput.value = textInput.value - 459.67;

            if (inputDropDownValue === 'input-rankine' && outputDropDownValue === 'output-rankine')
                textOutput.value = textInput.value / 1;
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
