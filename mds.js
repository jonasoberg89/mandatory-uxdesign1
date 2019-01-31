window.mds = {
    textInputField: (element) =>{
        let myInput = element;
        let labelTag = document.querySelector(".mds-text-field__label");
        let bordetLine = document.querySelector(".mds-text-field-borderline")
        myInput.addEventListener("focus", function(e){
           if (myInput){
               labelTag.classList.add ("mds-text-field__label__active")
               bordetLine.classList.add ("mds-text-field-borderline__active")
           }
        })
        myInput.addEventListener("blur", function(e){
            if(myInput.value === ""){
                labelTag.classList.remove ("mds-text-field__label__active")
                bordetLine.classList.remove ("mds-text-field-borderline__active")
            }
           
        })
    },
    switchfiled: () => {
        let checkbox = document.querySelector (".mds-switch-field__checkbox")
        let field = document.querySelector (".mds-switch-field");
        checkbox.addEventListener ("click",() =>{
            if (checkbox.checked){
                field.classList.add ("mds-switch-field__checkbox--checked");
            }
            else{
                field.classList.remove("mds-switch-field__checkbox--checked");
            } 
        })     
    },
    checkboxField: (element) => {
        console.log (element);
    },
    radioField: (element) => {
        console.log (element);
    },
}