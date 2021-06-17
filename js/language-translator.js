window.onload = () => {
    const inputDropDown = document.querySelector('#input-unit-convertor');
    const ouputDropDown = document.querySelector('#output-unit-convertor');

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener('change', () => {
        textInput.value += '';
        // eslint-disable-next-line no-alert
        if (textInput.value.trim() === '') window.alert('Please enter correct input');
        // eslint-disable-next-line no-alert
        else if (textInput.value.trim() !== '') window.alert('Please select any language again');
    });

    function eventDone(inputDropDownValue, outputDropDownValue) {
        fetch(
            `https://api.mymemory.translated.net/get?q=${textInput.value}&langpair=${inputDropDownValue}|${outputDropDownValue}`,
        )
            .then((response) => response.json())
            .then((json) => {
                textOutput.value = json.responseData.translatedText;
            })
            .catch(() => {
                textOutput.value = 'No data available';
            });
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
