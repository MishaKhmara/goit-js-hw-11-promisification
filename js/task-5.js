// Напиши скрипт который, при наборе текста в инпуте input#name-input 
//(событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.



const refs ={
    input: document.querySelector("#name-input"),
    hellowRef: document.querySelector("#name-output")
}
refs.input.addEventListener('input',inputform)

function inputform (event){
   if (event.currentTarget.value !== refs.input){
   
    refs.hellowRef.textContent = event.currentTarget.value ?event.currentTarget.value : 'незнакомец';
   }
      
    
}
