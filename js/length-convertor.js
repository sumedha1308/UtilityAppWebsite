window.onload = () => {
   
    const inputDropDown = document.querySelector("#input-unit-convertor")
    const ouputDropDown = document.querySelector("#output-unit-convertor")

    const textInput = document.querySelector('#inputUnit');
    const textOutput = document.querySelector('#outputUnit');

    textInput.addEventListener("change",event=>{

        const inputDropDownValue = inputDropDown.options[inputDropDown.selectedIndex].value;
        const outputDropDownValue = ouputDropDown.options[ouputDropDown.selectedIndex].value;

        textInput.value = textInput.value +"";
        if((textInput.value.trim()==="")||(isNaN(textInput.value))) window.alert("You have entered not a number");

        else if((textInput.value.trim()!=="")&&(inputDropDownValue !=='select')&&(outputDropDownValue !=='select')) window.alert("Please select any unit again");
        
     });

    function eventDone(inputDropDownValue,outputDropDownValue){
        //TODO: Enhancement in DataStructure

        if(textInput.value.trim()!==""){

            if((inputDropDownValue ==='select')||(outputDropDownValue ==='select')) textOutput.value = " ";
            
            //m to dm,cm,m,km conversions
            if((inputDropDownValue ==='input-meter')&&(outputDropDownValue ==='output-decimeter'))  textOutput.value = textInput.value*10;
                   
            if((inputDropDownValue ==='input-meter')&&(outputDropDownValue ==='output-centimeter')) textOutput.value = textInput.value*100;
                
            if((inputDropDownValue ==='input-meter')&&(outputDropDownValue ==='output-meter')) textOutput.value = textInput.value*1;
            
            if((inputDropDownValue ==='input-meter')&&(outputDropDownValue ==='output-kilometer')) textOutput.value = textInput.value/1000;

            //Km to m,cm,dm conversions
            if((inputDropDownValue ==='input-kilometer')&&(outputDropDownValue ==='output-decimeter'))  textOutput.value = textInput.value*10000;

            if((inputDropDownValue ==='input-kilometer')&&(outputDropDownValue ==='output-centimeter')) textOutput.value = textInput.value*100000;

            if((inputDropDownValue ==='input-kilometer')&&(outputDropDownValue ==='output-meter')) textOutput.value = textInput.value*1000;

            if((inputDropDownValue ==='input-kilometer')&&(outputDropDownValue ==='output-kilometer')) textOutput.value = textInput.value/1;

            //dm to m,cm,Km conversions
            if((inputDropDownValue ==='input-decimeter')&&(outputDropDownValue ==='output-decimeter'))  textOutput.value = textInput.value*1;

            if((inputDropDownValue ==='input-decimeter')&&(outputDropDownValue ==='output-centimeter')) textOutput.value = textInput.value*10;

            if((inputDropDownValue ==='input-decimeter')&&(outputDropDownValue ==='output-meter')) textOutput.value = textInput.value/10;

            if((inputDropDownValue ==='input-decimeter')&&(outputDropDownValue ==='output-kilometer')) textOutput.value = textInput.value/10000;

            //cm to m,dm,Km conversions
            if((inputDropDownValue ==='input-centimeter')&&(outputDropDownValue ==='output-decimeter'))  textOutput.value = textInput.value/10;

            if((inputDropDownValue ==='input-centimeter')&&(outputDropDownValue ==='output-centimeter')) textOutput.value = textInput.value*1;

            if((inputDropDownValue ==='input-centimeter')&&(outputDropDownValue ==='output-meter')) textOutput.value = textInput.value/100;

            if((inputDropDownValue ==='input-centimeter')&&(outputDropDownValue ==='output-kilometer')) textOutput.value = textInput.value/100000;   
            
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