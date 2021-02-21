const fontSizeControl = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

fontSizeControl.addEventListener('input',onSizeContol)
function onSizeContol (){

    textRef.style.fontSize = fontSizeControl.value + "px";
   
}
