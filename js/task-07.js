const refs = {
    inputValue: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
};