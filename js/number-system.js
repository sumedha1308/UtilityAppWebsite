window.onload = () => {
   
    const inputDropDown = document.querySelector("#input-unit-convertor")
    const ouputDropDown = document.querySelector("#output-unit-convertor")

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener("change",event=>{
        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;

        textInput.value = textInput.value +"";
        if(textInput.value.trim()==="") window.alert("You have entered not a number");

        else if((textInput.value.trim()!=="")&&(inputDropDownValue !=='select')&&(outputDropDownValue !=='select')) window.alert("Please select any unit again");
        
     });

    function eventDone(inputDropDownValue,outputDropDownValue){
        //TODO: Enhancement in DataStructure

        if(textInput.value.trim()!==""){

            if((inputDropDownValue ==='select')||(outputDropDownValue ==='select')) textOutput.value = " ";
            
            //Binary to dec,hex,oct conversions
            if((inputDropDownValue ==='input-binary')&&(outputDropDownValue ==='output-binary'))  textOutput.value = textInput.value*1;
                   
            if((inputDropDownValue ==='input-binary')&&(outputDropDownValue ==='output-decimal')) textOutput.value = parseInt(textInput.value, 2).toString(10);
                
            if((inputDropDownValue ==='input-binary')&&(outputDropDownValue ==='output-hex')) textOutput.value = parseInt(textInput.value, 2).toString(16).toUpperCase();;
            
            if((inputDropDownValue ==='input-binary')&&(outputDropDownValue ==='output-octal')) textOutput.value = parseInt(textInput.value, 2).toString(8);


            //dec to binary,hex,oct conversions
            if((inputDropDownValue ==='input-decimal')&&(outputDropDownValue ==='output-binary'))  textOutput.value = parseInt(textInput.value, 10).toString(2);
                   
            if((inputDropDownValue ==='input-decimal')&&(outputDropDownValue ==='output-decimal')) textOutput.value = textInput.value/1;
                
            if((inputDropDownValue ==='input-decimal')&&(outputDropDownValue ==='output-hex')) textOutput.value = parseInt(textInput.value, 10).toString(16).toUpperCase();;
            
            if((inputDropDownValue ==='input-decimal')&&(outputDropDownValue ==='output-octal')) textOutput.value = parseInt(textInput.value, 10).toString(8);


            //hex to binary,dec,oct conversions
            if((inputDropDownValue ==='input-hex')&&(outputDropDownValue ==='output-binary'))  textOutput.value = parseInt(textInput.value, 16).toString(2);
                   
            if((inputDropDownValue ==='input-hex')&&(outputDropDownValue ==='output-decimal')) textOutput.value = parseInt(textInput.value, 16).toString(10);
                
            if((inputDropDownValue ==='input-hex')&&(outputDropDownValue ==='output-hex')) textOutput.value = textInput.value;
            
            if((inputDropDownValue ==='input-hex')&&(outputDropDownValue ==='output-octal')) textOutput.value = parseInt(textInput.value, 16).toString(8);

            //oct to binary,hex,dec conversions
            if((inputDropDownValue ==='input-octal')&&(outputDropDownValue ==='output-binary'))  textOutput.value = parseInt(textInput.value, 8).toString(2);
                   
            if((inputDropDownValue ==='input-octal')&&(outputDropDownValue ==='output-decimal')) textOutput.value = parseInt(textInput.value, 8).toString(10);
                
            if((inputDropDownValue ==='input-octal')&&(outputDropDownValue ==='output-hex')) textOutput.value = parseInt(textInput.value, 8).toString(16).toUpperCase();;
            
            if((inputDropDownValue ==='input-octal')&&(outputDropDownValue ==='output-octal')) textOutput.value = textInput.value/1;

        }

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