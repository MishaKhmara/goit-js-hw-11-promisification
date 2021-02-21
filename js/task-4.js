
const refs = {
    decrementButtonRef: document.querySelector('[data-action="decrement"]'),
    incrementButtonRef: document.querySelector('[data-action="increment"]'),
    counterValueRef: document.querySelector('#value')
}


refs.decrementButtonRef.addEventListener('click', decrement)
refs.incrementButtonRef.addEventListener('click', increment)

let counterValue = 0;

function decrement () {
    counterValue -=1

    refs.counterValueRef.textContent = counterValue
}


function increment (){
    counterValue +=1

    refs.counterValueRef.textContent = counterValue
}