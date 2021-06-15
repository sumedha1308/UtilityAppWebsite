window.onload = () => {
   
    const dropdown = document.querySelector("#dropdown-encode-decode")
    const textareaInput = document.querySelector('#input-url');
    const textareaResult = document.querySelector('#output-url');

    dropdown.addEventListener("change", event =>{
        //console.log('selected', dropdown.options[dropdown.selectedIndex].value)
        if(dropdown.options[dropdown.selectedIndex].value ==='encoder-drop'){
            textareaResult.value = encodeURIComponent(textareaInput.value);
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='decoder-drop'){
            textareaResult.value = decodeURIComponent(textareaInput.value)
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='select--'){
            textareaResult.value = ""
        }
     } );

}