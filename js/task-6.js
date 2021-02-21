



const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  if (
    event.target.value.length > inputRef.getAttribute('data-length') ||
    event.target.value.length < inputRef.getAttribute('data-length')
  ) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
});