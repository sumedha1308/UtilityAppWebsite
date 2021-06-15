window.onload = () => {
   
    const dropdown = document.querySelector("#dropdown-encode-decode")
    const textareaInput = document.querySelector('#input-url');
    const textareaResult = document.querySelector('#output-url');

    dropdown.addEventListener("change", event =>{
        if(dropdown.options[dropdown.selectedIndex].value ==='encoder-drop'){
            textareaResult.value = btoa(textareaInput.value);
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='decoder-drop'){
            textareaResult.value = atob(textareaInput.value)
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='select--'){
            textareaResult.value = ""
        }
     } );

}