window.onload = () => {
   
    const dropdown = document.querySelector("#dropdown-encode-decode")
    const textareaInput = document.querySelector('#input-url');
    const textareaResult = document.querySelector('#output-url');

    dropdown.addEventListener("change", event =>{
        console.log('selected', dropdown.options[dropdown.selectedIndex].value)
        if(textareaInput.value !==""){
            if(dropdown.options[dropdown.selectedIndex].value ==='md5-hash'){
                textareaResult.value = window.CryptoJS.MD5(textareaInput.value);
            }
            else if(dropdown.options[dropdown.selectedIndex].value ==='sha-1-hash'){
                textareaResult.value = window.CryptoJS.SHA1(textareaInput.value)
            }
            else if(dropdown.options[dropdown.selectedIndex].value ==='sha-256-hash'){
                textareaResult.value = window.CryptoJS.SHA256(textareaInput.value)
            }
            else if(dropdown.options[dropdown.selectedIndex].value ==='sha-512-hash'){
                textareaResult.value = window.CryptoJS.SHA512(textareaInput.value)
            }
            else if(dropdown.options[dropdown.selectedIndex].value ==='select--'){
                textareaResult.value = ""
            }
     } });

}