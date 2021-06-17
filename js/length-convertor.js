/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
window.onload = () => {
    const inputDropDown = document.querySelector('#input-unit-convertor');
    const ouputDropDown = document.querySelector('#output-unit-convertor');

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener('change', () => {
        // const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;

        textInput.value += '';
        // eslint-disable-next-line no-restricted-globals
        // eslint-disable-next-line no-alert
        if (textInput.value.trim() === '') {
            window.alert('Please enter valid number');
            if (outputDropDownValue !== '') textOutput.value = 'Please enter valid number';
        } else window.alert('Please select any unit again');
    });

    const conversionMultiplier = {
        'input-meter': {
            'output-decimeter': 10,
            'output-centimeter': 100,
            'output-meter': 1,
            'output-kilometer': 0.001,
        },
        'input-kilometer': {
            'output-decimeter': 10000,
            'output-centimeter': 100000,
            'output-meter': 1000,
            'output-kilometer': 1,
        },
        'input-decimeter': {
            'output-decimeter': 1,
            'output-centimeter': 10,
            'output-meter': 0.1,
            'output-kilometer': 0.0001,
        },
        'input-centimeter': {
            'output-decimeter': 0.1,
            'output-centimeter': 1,
            'output-meter': 0.01,
            'output-kilometer': 0.00001,
        },
    };

    function eventDone(inputDropDownValue, outputDropDownValue) {
        if (textInput.value.trim() !== '') {
            // if (inputDropDownValue === 'select' || outputDropDownValue === 'select') textOutput.value = ' ';

            textOutput.value = textInput.value * conversionMultiplier[inputDropDownValue][outputDropDownValue];
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
