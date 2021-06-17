window.onload = () => {
    const dropdown = document.querySelector('#dropdown-encode-decode');
    const textareaInput = document.querySelector('#input-url');
    const textareaResult = document.querySelector('#output-url');

    textareaInput.addEventListener('change', () => {
        textareaInput.value += '';
        // eslint-disable-next-line no-alert
        if (textareaInput.value.trim() === '') window.alert('Please enter correct input');
        // eslint-disable-next-line no-alert
        else if (textareaInput.value.trim() !== '') window.alert('Please select any option again');
    });
    dropdown.addEventListener('change', () => {
        if (dropdown.options[dropdown.selectedIndex].value === 'encoder-drop') {
            textareaResult.value = encodeURIComponent(textareaInput.value);
        } else if (dropdown.options[dropdown.selectedIndex].value === 'decoder-drop') {
            textareaResult.value = decodeURIComponent(textareaInput.value);
        }
    });
};
