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
        // eslint-disable-next-line no-console
        console.log('selected', dropdown.options[dropdown.selectedIndex].value);
        if (textareaInput.value !== '') {
            if (dropdown.options[dropdown.selectedIndex].value === 'md5-hash') {
                textareaResult.value = window.CryptoJS.MD5(textareaInput.value);
            } else if (dropdown.options[dropdown.selectedIndex].value === 'sha-1-hash') {
                textareaResult.value = window.CryptoJS.SHA1(textareaInput.value);
            } else if (dropdown.options[dropdown.selectedIndex].value === 'sha-256-hash') {
                textareaResult.value = window.CryptoJS.SHA256(textareaInput.value);
            } else if (dropdown.options[dropdown.selectedIndex].value === 'sha-512-hash') {
                textareaResult.value = window.CryptoJS.SHA512(textareaInput.value);
            }
        }
    });
};
