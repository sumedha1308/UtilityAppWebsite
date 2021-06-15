window.onload = () => {
   
    const inputDropDown = document.querySelector("#input-unit-convertor")
    const ouputDropDown = document.querySelector("#output-unit-convertor")

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener("change",event=>{
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;

        textInput.value = textInput.value +"";
        if(textInput.value.trim()==="") window.alert("Please enter correct input");

        else if(textInput.value.trim()!=="") window.alert("Please select any language again");
        
     });

    function eventDone(inputDropDownValue,outputDropDownValue){
        fetch(
            `https://api.mymemory.translated.net/get?q=${textInput.value}&langpair=${inputDropDownValue}|${outputDropDownValue}`,
        )
            .then((response) => response.json())
            .then((json) => {
                textOutput.value = json.responseData.translatedText;
            })
            .catch(error => {
                textOutput.value = "No data available";
            });
            
        

    }

    inputDropDown.addEventListener("change", event =>{
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;
        eventDone(inputDropDownValue,outputDropDownValue)
        
    });

    
    ouputDropDown.addEventListener("change", event =>{
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;
        eventDone(inputDropDownValue,outputDropDownValue)
        
    });
}