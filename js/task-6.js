



const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  if (
    event.target.value.length === Number(inputRef.getAttribute('data-length')) ) {
   
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
  
  
  } else  {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid');
    
  }
});