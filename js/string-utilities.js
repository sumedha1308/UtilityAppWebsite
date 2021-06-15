window.onload = () => {
   
    const dropdown = document.querySelector("#dropdown-string-utilities")
    const textareaInput = document.querySelector('#input-url');
    const textareaResult = document.querySelector('#output-result');

    dropdown.addEventListener("change", event =>{
        console.log('selected', dropdown.options[dropdown.selectedIndex].value)
        if(dropdown.options[dropdown.selectedIndex].value ==='lowerCase'){
            textareaResult.value = textareaInput.value.toLowerCase();
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='uperCase'){
            textareaResult.value = textareaInput.value.toUpperCase();
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='splitString'){
            textareaResult.value = textareaInput.value.split(" ");
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='reverseString'){
            textareaResult.value = [...textareaInput.value].reverse().join('');
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='repeatString'){
            textareaResult.value = textareaInput.value.repeat(2);
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='wordCount'){
            textareaResult.value = textareaInput.value.split(" ").length;
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='joinText'){
            textareaResult.value = textareaInput.value.replace(/\s+/g, ' ').trim();
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='stringLength'){
            textareaResult.value = textareaInput.value.length;
        }
        else if(dropdown.options[dropdown.selectedIndex].value ==='select--'){
            textareaResult.value = "";
        }
     } );

}